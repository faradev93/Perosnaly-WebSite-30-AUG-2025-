import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./animate.css";
import "./font.css";
import App from "./App.jsx";

const personaly = document.getElementById("root");
createRoot(personaly).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
