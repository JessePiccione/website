FROM selenium/standalone-chrome

# Install Python dependencies
RUN pip install --no-cache-dir openai selenium

# Copy controller script
COPY ai_controller.py /opt/ai_controller.py
CMD ["python", "/opt/ai_controller.py"]
