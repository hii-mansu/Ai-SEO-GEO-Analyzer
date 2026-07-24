import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import { useState } from "react";
import { forget } from "../services/auth.service";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your registered email address.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const response = await forget({ email });
      setSuccessMsg(response?.message || "Password reset instructions have been sent to your email.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to process request. Please check email address.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Forgot Password?"
      subtitle="Enter your email and we'll send you instructions to reset your password."
    >
      {successMsg ? (
        <div className="space-y-6 text-center">
          <div className="rounded-2xl bg-emerald-950/30 p-5 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm">
            {successMsg}
          </div>
          <Link to="/login" className="block w-full">
            <Button variant="primary" size="lg" className="w-full">
              Return to Login
            </Button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email Address"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            icon={Mail}
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
            Send Reset Link
          </Button>
        </form>
      )}

      <p className="mt-8 text-center text-xs sm:text-sm text-slate-400">
        <Link
          to="/login"
          className="inline-flex items-center gap-1.5 font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Login
        </Link>
      </p>
    </AuthCard>
  );
}

export default ForgotPasswordPage;