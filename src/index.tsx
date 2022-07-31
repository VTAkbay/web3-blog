import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router-dom";
import NewStory from "./pages/NewStory";
import Stories from "./pages/Stories";
import MyStories from "./pages/MyStories";
import NotFound from "./pages/404";

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
          path="stories"
          element={
            <React.StrictMode>
              <App />
              <Stories></Stories>
            </React.StrictMode>
          }
        />
        <Route
          path="my-stories"
          element={
            <React.StrictMode>
              <App />
              <MyStories></MyStories>
            </React.StrictMode>
          }
        />
        <Route
          path="*"
          element={
            <React.StrictMode>
              <App />
              <NotFound></NotFound>
            </React.StrictMode>
          }
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
