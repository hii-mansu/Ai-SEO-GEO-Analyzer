import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="relative min-h-screen w-full bg-[#090D16] text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden bg-grid-pattern">
      {/* Background ambient light glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-blue-600/15 to-cyan-400/15 blur-[140px] pointer-events-none" />

      {/* Centered Form Container */}
      <div className="relative z-10 w-full max-w-md my-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;