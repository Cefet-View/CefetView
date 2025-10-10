import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { HashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#1e40af",
          color: "white",
          fontWeight: "600",
        },
        success: {
          iconTheme: {
            primary: "white",
            secondary: "#1e40af",
          },
        },
        error: {
          iconTheme: {
            primary: "white",
            secondary: "#1e40af",
          },
        },
      }}
    />
  </HashRouter>
);
