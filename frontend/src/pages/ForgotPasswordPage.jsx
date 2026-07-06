import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

function ForgotPasswordPage() {
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
      title="Forgot Password?"
      subtitle="Enter your email and we'll send you a password reset link."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        <AuthInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          register={register}
          name="email"
          error={errors.email}
        />

        <AuthButton>
          Send Reset Link
        </AuthButton>

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