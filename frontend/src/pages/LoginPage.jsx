import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthCard from "../components/auth/AuthCard";
import { useState } from "react";
import { login } from "../services/auth.service";

function LoginPage() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError]= useState("");

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }))
  }
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    if(!formData.email.trim() || !formData.password.trim()){
      setError("Enter valid input.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const response = await login(formData);
      alert(response.message);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "Something went wrong.");
    } finally{
      setLoading(false);
      //setError("");
    }
  };

  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Sign in to continue to SEO GEO Analyzer."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        Email
      </label>

      <input
        type='email'
        placeholder='Enter email.'
        value={formData.email}
        name="email"
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      />

    </div>

    <div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        Password
      </label>

      <input
        type='password'
        placeholder='Enter password.'
        value={formData.password}
        name="password"
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      />

      {error &&  (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
    

      

        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Forgot Password?
          </Link>
        </div>

        <button disabled={loading}>
          Login
        </button>
      </form>

      <p className="mt-8 text-center text-slate-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-blue-400 hover:text-blue-300"
        >
          Register
        </Link>
      </p>
    </AuthCard>
  );
}

export default LoginPage;