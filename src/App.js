import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./components/Home/index";
import Layout from "./components/layouts/Layout";
import DarkModeSimulator from "./components/DarkModeSimulator";
import Email from "./components/email";
// import { Preview } from "./components/DarkModeSimulator/Preview/Preview";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dark-mode-simulator" element={<Email />} />
          <Route path=":alias" element={<DarkModeSimulator />} />
        </Route>
      </Route>
    </Routes>
  );
}
