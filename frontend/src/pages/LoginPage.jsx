import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

function LoginPage() {
  const navigate = useNavigate();
  const { loginUser, user } = useAuth();

  if (user) {
    navigate("/", { replace: true });
    return null;
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      await loginUser(formData);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Sign in to your account to manage reports and website audits."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange}
          icon={Mail}
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          icon={Lock}
          required
          error={error}
        />

        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center gap-2 cursor-pointer text-slate-400">
            <input type="checkbox" className="rounded border-slate-800 bg-slate-900 text-indigo-500 focus:ring-indigo-500" />
            <span>Remember me</span>
          </label>
          <Link
            to="/forgot-password"
            className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={loading}
          className="w-full shadow-lg shadow-indigo-600/25"
          icon={ArrowRight}
          iconPosition="right"
        >
          Sign In to Dashboard
        </Button>
      </form>

      <p className="mt-8 text-center text-xs sm:text-sm text-slate-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Create Free Account
        </Link>
      </p>
    </AuthCard>
  );
}

export default LoginPage;