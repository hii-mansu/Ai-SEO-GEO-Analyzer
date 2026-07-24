import { CircleUserRound, Mail, ShieldCheck, CalendarDays, Crown, X, UserCheck, Sparkles, Edit3 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import LoadingScreen from "../components/common/LoadingScreen";
import { Navigate } from "react-router-dom";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useUpdateProfile } from "../hooks/useUpdateProfile";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

function ProfilePage() {
  const { user, meloading } = useAuth();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const updateProfileMutation = useUpdateProfile();

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  if (meloading) {
    return <LoadingScreen message="Loading profile settings..." />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  let normalDate = "Joined recently";
  try {
    if (user.createdAt) {
      normalDate = format(new Date(user.createdAt), "PPP");
    }
  } catch (e) {
    console.error("Invalid date:", e);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    await updateProfileMutation.mutateAsync({ name });
    setOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#090D16] px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-black text-white tracking-tight">
          Account Profile
        </h1>

        <div className="overflow-hidden rounded-3xl glass-panel border border-white/10 shadow-2xl">
          {/* Header Ambient Banner */}
          <div className="h-40 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          </div>

          <div className="relative px-6 sm:px-10 pb-10">
            {/* Avatar Header Row */}
            <div className="-mt-16 flex flex-col items-center sm:flex-row sm:items-end sm:justify-between gap-6">
              <div className="flex flex-col items-center sm:flex-row sm:items-end gap-5">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#090D16] bg-slate-900 shadow-2xl text-indigo-400 font-extrabold text-4xl">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  <div className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-slate-950 border-2 border-[#090D16]">
                    <UserCheck className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="pb-1 text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-white tracking-tight">{user.name}</h2>
                  <p className="text-sm font-medium text-slate-400">{user.email}</p>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                icon={Edit3}
                onClick={() => setOpen(true)}
              >
                Edit Profile Name
              </Button>
            </div>

            {/* User Meta Card Grid */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <ProfileMetaCard
                icon={<Mail className="text-cyan-400 h-5 w-5" />}
                title="Email Address"
                value={user.email}
              />

              <ProfileMetaCard
                icon={<Crown className="text-amber-400 h-5 w-5" />}
                title="Current Plan"
                value={user.plan === "free" ? "Free Tier" : "Pro Tier"}
                badge={user.plan === "free" ? "Starter" : "Pro Member"}
              />

              <ProfileMetaCard
                icon={<ShieldCheck className="text-emerald-400 h-5 w-5" />}
                title="Account Status"
                value={user.emailVerified ? "Verified Account" : "Unverified"}
                badgeColor={user.emailVerified ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}
              />

              <ProfileMetaCard
                icon={<CalendarDays className="text-indigo-400 h-5 w-5" />}
                title="Member Since"
                value={normalDate}
              />
            </div>

          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl glass-panel border border-slate-700 p-7 shadow-2xl bg-[#0F172A]">
            
            <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white">Update Profile Name</h2>
                <p className="mt-0.5 text-xs text-slate-400">Update your public display name</p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />

              <Input
                label="Email Address"
                value={user.email}
                disabled
                helperText="Email address cannot be changed."
              />

              <div className="flex justify-end gap-3 pt-3">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setName(user.name);
                    setOpen(false);
                  }}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={updateProfileMutation.isPending}
                >
                  Save Changes
                </Button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}

function ProfileMetaCard({ icon, title, value, badge, badgeColor }) {
  return (
    <div className="rounded-2xl bg-slate-900/80 p-5 border border-slate-800/80 flex items-start justify-between">
      <div className="flex items-center gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 border border-slate-800">
          {icon}
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-400">{title}</p>
          <p className="mt-0.5 text-sm font-bold text-white">{value}</p>
        </div>
      </div>
      {badge && (
        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border border-white/5 ${badgeColor || "bg-indigo-500/10 text-indigo-400"}`}>
          {badge}
        </span>
      )}
    </div>
  );
}

export default ProfilePage;