import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/LoginPage";
import React from "react";
import SliderAdd from "@/pages/slider/SliderAdd";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SliderList from "@/pages/slider/SlideList";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LoginPage}></Route>
        <Route path="/dashboard" Component={DashboardPage}></Route>

        {/* slider */}
        <Route path="/slider/add" Component={SliderAdd} />
        <Route path="/slider" Component={SliderList} />

        <Route path="*" element={<h1>Page not found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
