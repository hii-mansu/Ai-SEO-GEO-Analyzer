import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthCard from "../components/auth/AuthCard";
import { useState } from "react";
import { register } from "../services/auth.service";

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


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
    if(!formData.name.trim() || !formData.email.trim() || !formData.password.trim()){
      setError("Enter valid input.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      console.log("Run")
      const response = await register(formData);
      alert(response.message);
      navigate('/login');
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
      title="Create Account"
      subtitle="Start analyzing websites with AI-powered SEO insights."
    >
      <form onSubmit={handleSubmit} className="space-y-5">


<div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        Name
      </label>

      <input
        type='text'
        placeholder='Enter full name.'
        value={formData.name}
        name="name"
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      />

      {error &&  (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

    </div>

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

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

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

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

    </div>

        <button onClick={handleSubmit}>
          Create Account
        </button>

      </form>

      <div className="my-8 flex items-center gap-4">

        <div className="h-px flex-1 bg-slate-700" />

        <span className="text-sm text-slate-500">
          OR
        </span>

        <div className="h-px flex-1 bg-slate-700" />

      </div>

      <button
        disabled
        className="w-full cursor-not-allowed rounded-xl border border-slate-700 py-3 font-medium text-slate-400"
      >
        Continue with Google (Coming Soon)
      </button>

      <p className="mt-8 text-center text-slate-400">
        Already have an account?{" "}
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

export default RegisterPage;