import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import { SectionProvider } from "./SectionContext.jsx";
import { CounterProvider } from "./CounterContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SectionProvider>
      <CounterProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CounterProvider>
    </SectionProvider>
  </BrowserRouter>
);
