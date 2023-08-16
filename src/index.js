import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FaceDataProvider from "./context/FaceDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FaceDataProvider>
      <App />
    </FaceDataProvider>
  </React.StrictMode>
);
