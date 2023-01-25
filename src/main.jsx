import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PreviousKeyProvider } from "./context/previousKey-context";
import { SnakeProvider } from "./context/snake-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnakeProvider>
      <PreviousKeyProvider>
        <App />
      </PreviousKeyProvider>
    </SnakeProvider>
  </React.StrictMode>
);
