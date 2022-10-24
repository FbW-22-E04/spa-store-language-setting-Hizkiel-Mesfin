import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LanguageContextProvider from "./contexts/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageContextProvider>
    <App />
  </LanguageContextProvider>
);
