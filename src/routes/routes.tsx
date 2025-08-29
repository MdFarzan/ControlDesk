import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/LoginPage";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LoginPage}></Route>
        <Route path="/dashboard" Component={DashboardPage}></Route>

        <Route path="*" element={<h1>Page not found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
