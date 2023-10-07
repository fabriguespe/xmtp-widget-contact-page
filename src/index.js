import "./polyfills";
import React from "react";
import ReactDOM from "react-dom/client";
import ContactPage from "./ContactPage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContactPage />
  </React.StrictMode>
);
