import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/main/Home";
import MainLayout from "../layout/MainLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
