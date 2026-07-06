function AuthInput({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      />

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}

    </div>
  );
}

export default AuthInput;