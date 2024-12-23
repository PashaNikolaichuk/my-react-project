import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./lesson 1/menu/App";
import App2 from "./lesson 1/book/App2";
import App3 from "./lesson 1/ALERT/App3";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <App2 />
    <App3 />
  </StrictMode>
);

// npm install --save-dev prop-types
// npm install clsx
// npm install modern-normalize
