import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/main/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/main/Register";
import Login from "../pages/main/Login";
import Contact from "../pages/main/Contact";
import About from "../pages/main/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
