// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 👈 added
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 👇 Wrap App with BrowserRouter so routing works */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
