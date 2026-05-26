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
# CMD ["fastapi", "run", "main.py", "--port", "80"]

# for deployment, we will use uvicorn to run the app
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "10000"] 
#make the port dynamic for deployment platforms like Heroku that provide the port via an environment variable
# CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT}"]


# For local development, you can use a fixed port like 8000 or 10000, but for deployment,
# it's better to use the environment variable provided by the platform.
# works for both local development and deployment, as it will default to 8000 if PORT is not set
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]