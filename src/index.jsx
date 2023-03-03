import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import "./assets/styles/responsive.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
