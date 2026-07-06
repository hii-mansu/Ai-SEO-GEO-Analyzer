import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";

function LoginPage() {
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
      title="Welcome Back"
      subtitle="Sign in to continue to SEO GEO Analyzer."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
          placeholder="Enter your password"
          register={register}
          name="password"
          error={errors.password}
        />

        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Forgot Password?
          </Link>
        </div>

        <AuthButton>
          Login
        </AuthButton>
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