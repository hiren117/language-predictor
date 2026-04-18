import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!text) return;
    setLoading(true);
    try {
      const response = await fetch("http://localhost/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text }),
      });
      const data = await response.json();
      setResult(data.predicted_language);
    } catch (error) {
      console.error("Error predicting language:", error);
      setResult("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-blue-500/20 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-2xl z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Linguist AI
          </h1>
          <p className="text-slate-400 text-lg">
            Detect any language instantly using our advanced ML backend.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Enter your text below
          </label>
          <textarea
            className="w-full h-40 bg-slate-900/80 border border-slate-600 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
            placeholder="Type or paste something here... (e.g., Namaste, Hola, Bonjour)"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            onClick={handlePredict}
            disabled={loading}
            className={`w-full mt-6 py-4 rounded-xl font-bold text-lg transition-all transform active:scale-[0.98] ${
              loading 
                ? "bg-slate-700 cursor-not-allowed" 
                : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            }`}
          >
            {loading ? "Analyzing..." : "Predict Language"}
          </button>
        </div>

        {/* Result Section */}
        {result && (
          <div className="mt-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col items-center">
              <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-1">
                Detected Language
              </span>
              <h2 className="text-4xl font-black text-emerald-400">
                {result}
              </h2>
            </div>
          </div>
        )}
      </div>

      {/* Footer Branding */}
      <footer className="mt-20 text-slate-500 text-sm">
        Built by Hiren &bull; Powered by FastAPI & Docker
      </footer>
    </div>
  );
}