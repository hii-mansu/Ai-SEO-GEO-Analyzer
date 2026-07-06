import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthCard
      title="Create Account"
      subtitle="Start analyzing websites with AI-powered SEO insights."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        <AuthInput
          label="Full Name"
          placeholder="Enter your full name"
          register={register}
          name="name"
          error={errors.name}
        />

        <AuthInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          register={register}
          name="email"
          error={errors.email}
        />

        <PasswordInput
          label="Password"
          placeholder="Create a password"
          register={register}
          name="password"
          error={errors.password}
        />

        <AuthButton>
          Create Account
        </AuthButton>

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