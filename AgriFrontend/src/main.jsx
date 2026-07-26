import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./Dashboard";
import Fail from "./Fail";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<App />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Login Failed */}
        <Route path="/fail" element={<Fail />} />
      </Routes>
    </BrowserRouter>

);