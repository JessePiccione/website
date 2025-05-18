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
docker run -p 3000:3000 website
```

### Cloud Build

The `cloudbuild.yaml` file defines steps to build the Docker image, push it to Google Container Registry, and deploy it to Cloud Run. Trigger the build with:
```bash
gcloud builds submit --config cloudbuild.yaml
```
