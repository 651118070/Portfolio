import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import posthog from 'posthog-js'
import { Toaster } from "@/components/ui/toaster"
const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;


if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com',
  });
  console.log('PostHog API Key:', posthogKey);
} else {
  console.error('PostHog API Key is missing or not correctly defined in the .env file');
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <MouseFollower /> */}
  <ThemeProvider>
  <BrowserRouter>
  <App />
  <Toaster />
  </BrowserRouter>
  </ThemeProvider>
    
 
  </React.StrictMode>
);