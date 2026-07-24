import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import { useState } from "react";
import { reset } from "../services/auth.service";
import { Lock, ArrowRight } from "lucide-react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.password.trim() || formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const response = await reset({ password: formData.password });
      if (response?.message) {
        alert(response.message);
      }
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password. Link may be expired.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Set New Password"
      subtitle="Enter a new secure password for your account."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="New Password"
          type="password"
          name="password"
          placeholder="At least 8 characters"
          value={formData.password}
          onChange={handleChange}
          icon={Lock}
          required
          error={error}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={loading}
          className="w-full shadow-lg shadow-indigo-600/25"
          icon={ArrowRight}
          iconPosition="right"
        >
          Update Password
        </Button>
      </form>

      <p className="mt-8 text-center text-xs sm:text-sm text-slate-400">
        Remembered your credentials?{" "}
        <Link
          to="/login"
          className="font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Sign In
        </Link>
      </p>
    </AuthCard>
  );
}

export default ResetPasswordPage;