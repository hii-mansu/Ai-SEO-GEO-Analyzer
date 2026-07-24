import { CheckCircle2 } from "lucide-react";

const StrengthCard = ({ text }) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl glass-panel p-4 border border-emerald-500/20 bg-emerald-950/15 text-emerald-200">
      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
      <span className="text-xs sm:text-sm font-medium">{text}</span>
    </div>
  );
};

export default StrengthCard;