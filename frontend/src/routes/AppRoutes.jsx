import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import AnalyzePage from "../pages/AnalyzePage";
import ReportPage from "../pages/ReportPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import AuthLayout from "../layouts/AuthLayout";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import PricingPage from "../pages/PricingPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/analyze" element={<AnalyzePage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Route>
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default AppRoutes;
