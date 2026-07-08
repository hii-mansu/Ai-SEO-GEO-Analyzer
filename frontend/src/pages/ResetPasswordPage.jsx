import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthCard from "../components/auth/AuthCard";
import { useState } from "react";
import { reset } from "../services/auth.service";

function ResetPasswordPage() {

    const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    password:"",
    confPass:"",
  });

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }))
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!formData.password.trim() || !formData.confPass.trim() || !(formData.password === formData.confPass) || !(formData.password.length >=8) || !(formData.confPass.length >=8)){
      setError("Password and Confirm Password must be same, and 8 charecter long.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const response = await reset({password:formData.password});
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthCard
      title="Reset Password"
      subtitle="Create a new password for your account."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >


<div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        Password
      </label>

      <input
        type='password'
        placeholder='Enter new password.'
        value={formData.password}
        name="password"
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      />


    </div>

    <div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        confPass
      </label>

      <input
        type='password'
        placeholder='Enter confirm password.'
        value={formData.confPass}
        name="confPass"
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      />

      {error &&  (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
        

        <button disabled={loading}>
          Reset Password
        </button>

      </form>

      <p className="mt-8 text-center text-slate-400">
        Back to{" "}
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

export default ResetPasswordPage;