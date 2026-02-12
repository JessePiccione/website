import argparse
import logging
import os
import re
from collections import Counter
from typing import List

from google.cloud import firestore

# Basic list of stop words to avoid counting common words as keywords.
STOPWORDS = {
    "the",
    "and",
    "a",
    "to",
    "of",
    "in",
    "for",
    "on",
    "with",
    "at",
    "by",
    "an",
    "be",
    "this",
    "that",
    "it",
    "from",
}


def extract_keywords(text: str, limit: int = 10) -> List[str]:
    """Compute a list of keywords from the provided text.

    The implementation is intentionally simple: tokenize the text, remove
    stopwords, and return the most common terms.  This is a lightweight
    placeholder for the more advanced logic implemented in Card 2.2.
    """
    words = re.findall(r"[a-zA-Z']+", text.lower())
    filtered = [w for w in words if w not in STOPWORDS]
    counts = Counter(filtered)
    return [word for word, _ in counts.most_common(limit)]


def extract_sections(text: str) -> List[str]:
    """Identify sections that appear within the resume text.

    This function looks for common resume headings and returns the ones
    that are present.  Sections are used for local title generation.
    """
    headings = {
        "experience": ["experience", "work experience"],
        "education": ["education"],
        "skills": ["skills", "technical skills"],
        "projects": ["projects"],
        "summary": ["summary", "objective"],
    }
    found = []
    lower_text = text.lower()
    for section, keywords in headings.items():
        if any(keyword in lower_text for keyword in keywords):
            found.append(section)
    return found


def backfill(db: firestore.Client, limit: int | None = None, dry_run: bool = False) -> None:
    """Backfill resume documents missing keywords/sections.

    Args:
        db: Firestore client.
        limit: If provided, only the first ``limit`` documents are processed.
        dry_run: When ``True`` no database writes are performed and only
            counts are printed.
    """
    resumes_ref = db.collection("resumes")

    docs_to_update: list[tuple[str, str]] = []
    for doc in resumes_ref.stream():
        data = doc.to_dict()
        if not data.get("keywords"):
            docs_to_update.append((doc.id, data.get("content", "")))
            if limit and len(docs_to_update) >= limit:
                break

    total = len(docs_to_update)
    logging.info("Found %s resumes without keywords", total)

    for index, (doc_id, text) in enumerate(docs_to_update, start=1):
        keywords = extract_keywords(text)
        sections = extract_sections(text)

        if not dry_run:
            resumes_ref.document(doc_id).update({
                "keywords": keywords,
                "sections": sections,
            })
        if index % 10 == 0 or index == total:
            logging.info("Processed %s/%s resumes", index, total)

    if dry_run:
        logging.info("Dry run complete; no documents were modified.")
    else:
        logging.info("Backfill complete; updated %s resumes", total)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Backfill resume keywords and sections in Firestore",
    )
    parser.add_argument("--dry-run", action="store_true", help="Print counts only")
    parser.add_argument(
        "--limit",
        type=int,
        default=None,
        help="Process only the first N resumes (useful for sample runs)",
    )
    args = parser.parse_args()

    logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

    project = os.environ.get("GOOGLE_CLOUD_PROJECT")
    if not project:
        raise SystemExit("GOOGLE_CLOUD_PROJECT environment variable is required")
    client = firestore.Client(project=project)

    backfill(client, limit=args.limit, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
