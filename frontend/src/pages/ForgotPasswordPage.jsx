import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthCard from "../components/auth/AuthCard";
import { useState } from "react";
import { forget } from "../services/auth.service";

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!email.trim()){
      setError("Enter valid input.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      console.log(email);
      const response = await forget({email:email});
      alert(response.message);
      navigate('/');
    } catch (err) {
      console.log(err.response?.status);
console.log(err.response?.data);
      setError(err.response?.data?.message || "Something went wrong.");
    } finally{
      setLoading(false);
      //setError("");
    }
  };

  return (
    <AuthCard
      title="Forgot Password?"
      subtitle="Enter your email and we'll send you a password reset link."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        
<div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        Email
      </label>

      <input
        type='email'
        placeholder='Enter email.'
        value={email}
        name="email"
        onChange={(e)=>(setEmail(e.target.value))}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      />

      {error &&  (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

    </div>


        <button disabled={loading}>
          Send Reset Link
        </button>

      </form>

      <p className="mt-8 text-center text-slate-400">
        Remember your password?{" "}
        <Link
          to="/login"
          className="font-medium text-blue-400 hover:text-blue-300"
        >
          Login
        </Link>
      </p>
    </AuthCard>
  );
}

export default ForgotPasswordPage;