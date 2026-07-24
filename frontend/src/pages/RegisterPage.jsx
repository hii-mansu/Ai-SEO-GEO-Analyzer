import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import { useState } from "react";
import { register } from "../services/auth.service";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const response = await register(formData);
      if (response?.message) {
        alert(response.message);
      }
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please check details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Create Account"
      subtitle="Start analyzing websites with AI-powered SEO & GEO insights."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          name="name"
          placeholder="Himanshu Singh"
          value={formData.name}
          onChange={handleChange}
          icon={User}
          required
        />

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
          placeholder="Create a strong password"
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
          className="w-full mt-2 shadow-lg shadow-indigo-600/25"
          icon={ArrowRight}
          iconPosition="right"
        >
          Create Free Account
        </Button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-800" />
        <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">OR</span>
        <div className="h-px flex-1 bg-slate-800" />
      </div>

      <button
        disabled
        type="button"
        className="w-full cursor-not-allowed rounded-xl border border-slate-800 bg-slate-900/50 py-3 text-xs font-semibold text-slate-500"
      >
        Sign up with Google (Coming Soon)
      </button>

      <p className="mt-6 text-center text-xs sm:text-sm text-slate-400">
        Already have an account?{" "}
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

export default RegisterPage;