import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AllContextProvider from "./global/AllContextProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AllContextProvider>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <App />
                <ToastContainer />
              </>
            }
          />
        </Routes>
      </AllContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
