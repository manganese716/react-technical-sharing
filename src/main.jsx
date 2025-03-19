import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import { SectionProvider } from "./SectionContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SectionProvider>
      <App />
    </SectionProvider>
  </BrowserRouter>
);
