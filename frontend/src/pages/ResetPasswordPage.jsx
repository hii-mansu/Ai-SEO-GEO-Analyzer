import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthCard from "../components/auth/AuthCard";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";

function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthCard
      title="Reset Password"
      subtitle="Create a new password for your account."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        <PasswordInput
          label="New Password"
          placeholder="Enter new password"
          register={register}
          name="password"
          error={errors.password}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm new password"
          register={register}
          name="confirmPassword"
          error={errors.confirmPassword}
        />

        {password &&
          watch("confirmPassword") &&
          password !== watch("confirmPassword") && (
            <p className="text-sm text-red-400">
              Passwords do not match.
            </p>
          )}

        <AuthButton>
          Reset Password
        </AuthButton>

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