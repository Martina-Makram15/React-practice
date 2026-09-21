import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import Index from "./Index";
import App from "./components/app";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
