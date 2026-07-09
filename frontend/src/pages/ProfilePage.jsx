import { CircleUserRound, Mail, ShieldCheck, CalendarDays, Crown } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import LoadingScreen from "../components/common/LoadingScreen";
import { Navigate } from "react-router-dom";
import { format } from 'date-fns';

function ProfilePage() {
  const {user, meloading} = useAuth();
  if(meloading){
    return <LoadingScreen/>
  }
  if(!user){
    return <Navigate to="/login" replace />
  }
  const normalDate = format(new Date(user.createdAt), 'PPP');
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-8 text-3xl font-bold text-white">
          My Profile
        </h1>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

          <div className="h-36 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700" />

          <div className="relative px-8 pb-8">

            <div className="-mt-14 flex flex-col items-center sm:flex-row sm:items-end sm:justify-between">

              <div className="flex flex-col items-center sm:flex-row sm:items-end gap-5">

                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-slate-900 bg-slate-800">
                  <CircleUserRound
                    size={74}
                    className="text-slate-300"
                  />
                </div>

                <div className="pb-2 text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-white">
                    {user.name}
                  </h2>

                  <p className="text-slate-400">
                    {user.email}
                  </p>
                </div>

              </div>

              <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 sm:mt-0">
                Edit Profile
              </button>

            </div>


            <div className="mt-10 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Mail className="text-blue-400" />
                  <h3 className="font-semibold text-white">
                    Email
                  </h3>
                </div>

                <p className="text-slate-400">
                  {user.email}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Crown className="text-yellow-400" />
                  <h3 className="font-semibold text-white">
                    Plan
                  </h3>
                </div>

                <p className="font-medium text-white">
                  {(user.plan === "free") ? "Free" : "Premium"}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-green-400" />
                  <h3 className="font-semibold text-white">
                    Email Verification
                  </h3>
                </div>

                <span className={`rounded-full ${user.emailVerified ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"}  px-3 py-1 text-sm font-medium`}>
                  {user.emailVerified ? "Verified" : "Unverified"}
                </span>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <CalendarDays className="text-violet-400" />
                  <h3 className="font-semibold text-white">
                    Joined
                  </h3>
                </div>

                <p className="text-slate-400">
                  {normalDate}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfilePage;