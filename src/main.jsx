import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SnakeProvider } from "./context/snake-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnakeProvider>
      <App />
    </SnakeProvider>
  </React.StrictMode>
);
