// DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom/client";
// UTILS
import reportWebVitals from "./utils/reportWebVitals";
// COMPONENTS
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

reportWebVitals();
