# 1. Start with a lightweight Python image
FROM python:3.11-slim

# 2. Set the "working directory" inside the container
WORKDIR /app

# 3. Copy your requirements and main code into the container
# (We will create requirements.txt in the next step)
COPY requirements.txt .
COPY main.py .

# 4. Install the libraries inside the container
RUN pip install --no-cache-dir -r requirements.txt

# 5. Tell Docker to run your FastAPI app when the container starts
CMD ["fastapi", "run", "main.py", "--port", "80"]