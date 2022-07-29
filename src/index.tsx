import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import NewStory from "./pages/NewStory";
import Blog from "./pages/Blog";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.StrictMode>
              <App />
            </React.StrictMode>
          }
        />
        <Route
          path="create-story"
          element={
            <React.StrictMode>
              <App />
              <NewStory></NewStory>
            </React.StrictMode>
          }
        />
        <Route
          path="blog"
          element={
            <React.StrictMode>
              <App />
              <Blog></Blog>
            </React.StrictMode>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
