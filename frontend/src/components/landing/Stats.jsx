import {
  Globe,
  Bot,
  Zap,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: Globe,
    number: "1000+",
    title: "Websites Analyzed",
  },
  {
    icon: Bot,
    number: "AI",
    title: "Powered Analysis",
  },
  {
    icon: Zap,
    number: "<10s",
    title: "Average Analysis",
  },
  {
    icon: BadgeCheck,
    number: "24H",
    title: "Smart Cache",
  },
];

function Stats() {
  return (
    <section className="bg-slate-950 px-6 pb-24">

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-slate-900 p-8 text-center transition hover:-translate-y-2 hover:border-blue-500/40"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400">

                <Icon size={30} />

              </div>

              <h2 className="mt-6 text-4xl font-bold text-white">
                {item.number}
              </h2>

              <p className="mt-2 text-slate-400">
                {item.title}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Stats;