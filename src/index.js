import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss"; // файл должен быть в папке src
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
