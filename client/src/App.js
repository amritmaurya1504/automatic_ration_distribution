import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterInfo from "./pages/RegisterInfo";
import MemberRegistration from "./pages/MemberRegistration";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/info" element={<RegisterInfo />} />
        <Route path="/register/member-registration" element={<MemberRegistration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
