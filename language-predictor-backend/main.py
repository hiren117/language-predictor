from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# This is a "Schema". It defines what the input should look like.
# We expect a JSON object with a key called "text"
class Data(BaseModel):
    text: str

@app.get("/")
def index():
    return {"message": "Language Predictor is Ready!"}

# This is a POST request. We use POST when sending data to the server.
@app.post("/predict")
def predict_language(data: Data):
    # This is a very simple "dummy" logic for now.
    # In a real app, you would put your ML model here.
    text = data.text.lower()
    
    if "hello" in text or "hi" in text:
        language = "English"
    elif "hola" in text:
        language = "Spanish"
    elif "namaste" in text:
        language = "Hindi"
    else:
        language = "Unknown"
        
    return {"input_text": data.text, "predicted_language": language}