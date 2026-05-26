
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware # <--- Add this
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()

# --- ADD THIS BLOCK ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace "*" with your actual frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)
# ----------------------

# 2. Load the LLM (This runs once when the server starts)
print("Loading AI Model... please wait.")

# Initialize the Model (This downloads the model weights on first start)
# 'papluca' is the creator, 'xlm-roberta' is the LLM architecture
model_id = "papluca/xlm-roberta-base-language-detection"
classifier = pipeline("text-classification", model = model_id)

# This is a "Schema". It defines what the input should look like.
# We expect a JSON object with a key called "text"
class Data(BaseModel):
    text: str

@app.get("/")
def index():
    return {"message": "Linguist AI Brain is Active!"}

# This is a POST request. We use POST when sending data to the server.
@app.post("/predict")
def predict_language(data: Data):
    # This is a very simple "dummy" logic for now.
    # In a real app, you would put your ML model here.
    # text = data.text.lower()
    
    # if "hello" in text or "hi" in text:
    #     language = "English"
    # elif "hola" in text:
    #     language = "Spanish"
    # elif "namaste" in text:
    #     language = "Hindi"
    # else:
    #     language = "Unknown"
        
    # return {"input_text": data.text, "predicted_language": language}

    results = classifier(data.text)

    # The model returns a list of dictionaries, we take the first one
    # like [{"label": "en", "score": 0.95}]

    predicted_language = results[0]['label']  # Get the predicted language code
    confidence_score = results[0]['score']     # Get the confidence score

    return {
        "predicted_language": predicted_language.upper(),
        "confidence_score": f"{round(confidence_score*100, 2)}%",
        "input_text": data.text
    }