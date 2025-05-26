# Python Selenium Container Example

This example builds a Docker container containing a Selenium-managed Chrome browser. It loads an image describing a task, sends it to an AI model, then executes returned commands in the browser.

## Build Image
```bash
docker build -t browser-ai-python .
```

## Run Container
Assuming you have `TASK_IMAGE` pointing to an image with instructions:
```bash
docker run -e OPENAI_API_KEY=... -e TASK_IMAGE=/path/to/task.png browser-ai-python
```

The container starts `ai_controller.py` which handles the interaction with the AI model and browser.
