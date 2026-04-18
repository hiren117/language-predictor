// src/App.tsx
import "./App.css";                     // optional
import { Navbar, Footer } from "@/components/common";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";

// temp pages just to test routing 




export default function App() {
  return (
    <>
      <Routes>
        {/* each route defines a URL path and what to render*/}
        <Route path="/" element={ <Home />} /> 
      </Routes>
      <Footer />  {/* stays on all pages */}

      
    </>
  );
}
