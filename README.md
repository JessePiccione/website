# Piccione.dev Website

This repository contains the source code for [piccione.dev](https://piccione.dev), a Next.js website showcasing projects and information about Jesse Piccione.

## Setup

1. Install Node.js dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```
## Environment Variables

The application communicates with a backend service and requires a token for authentication. Configure the following variables when running or deploying the site:

- `BACKEND_API_TOKEN` – Bearer token used to authorize requests to the backend APIs.
- `BACKEND_BASE_URL` – Base URL for the backend service. Defaults to `https://portal.piccione.dev`.

Example for local development:

```bash
BACKEND_API_TOKEN=<token> BACKEND_BASE_URL=https://portal.piccione.dev npm run dev
```

When deploying, set `BACKEND_API_TOKEN` as a secret or environment variable and provide `BACKEND_BASE_URL` if a custom backend is used.

Set `NEXT_PUBLIC_BACKEND_URL` to override the default backend API base URL (`https://portal.piccione.dev`).

## Running Locally

During development you can start the development server with:
```bash
npm run dev
```

After running `npm run build`, start the production server with:
```bash
npm start
```
The application listens on port `3000` by default.

## Deployment Notes

### Docker

A `Dockerfile` is provided to build a production image. Build and run the container locally with:
```bash
docker build -t website .
docker run -p 3000:3000 \
  -e BACKEND_API_TOKEN=<token> \
  -e BACKEND_BASE_URL=https://portal.piccione.dev \
  website
```

### Cloud Build

The `cloudbuild.yaml` file defines steps to build the Docker image, push it to Google Container Registry, and deploy it to Cloud Run. Trigger the build with:
```bash
gcloud builds submit --config cloudbuild.yaml
```
The build uses Secret Manager to inject `BACKEND_API_TOKEN`. Set `BACKEND_BASE_URL`
as an additional environment variable if you deploy against a custom backend.
