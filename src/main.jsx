import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css";
import "./index.css";
import App from "./components/App";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="dark:bg-primaryBlack">
      <App />
    </div>
  </StrictMode>
);
