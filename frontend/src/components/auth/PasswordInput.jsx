import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function PasswordInput({
  label,
  placeholder,
  register,
  name,
  error,
}) {
  const [show, setShow] = useState(false);

  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <div className="relative">

        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-12 text-white outline-none transition focus:border-blue-500"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>

      </div>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}

    </div>
  );
}

export default PasswordInput;