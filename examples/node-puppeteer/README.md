# Node Puppeteer Container Example

This example uses Node.js with Puppeteer to run a headless browser. It sends a task image to an AI model and executes returned commands in the browser.

## Build Image
```bash
docker build -t browser-ai-node .
```

## Run Container
```bash
docker run -e OPENAI_API_KEY=... -e TASK_IMAGE=/path/to/task.png browser-ai-node
```
