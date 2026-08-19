import Link from "next/link";

const programs = [
  {
    icon: "🎁",
    title: "Free Trial",
    subtitle: "First-time players",
    price: "FREE",
    href: "/program",
    accent: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    priceText: "text-emerald-600",
  },
  {
    icon: "🏓",
    title: "Tuesday Training",
    subtitle: "4:30 PM – 6:00 PM",
    price: "A$150/month",
    href: "/program",
    accent: "bg-lime-50",
    iconBg: "bg-lime-100",
    priceText: "text-lime-600",
  },
  {
    icon: "🏓",
    title: "Thursday Training",
    subtitle: "4:30 PM – 6:00 PM",
    price: "A$150/month",
    href: "/program",
    accent: "bg-sky-50",
    iconBg: "bg-sky-100",
    priceText: "text-sky-600",
  },
  {
    icon: "⚡",
    title: "Tuesday + Thursday",
    subtitle: "8 sessions per month",
    price: "A$300/month",
    href: "/program",
    accent: "bg-orange-50",
    iconBg: "bg-orange-100",
    priceText: "text-orange-500",
  },
];

export default function Programs() {
  return (
    <section className="bg-slate-50 px-8 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 inline-block rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Kids Pickleball Programs
            </p>

            <h2 className="text-5xl font-black leading-tight text-slate-950">
              Find the Right
              <br />
              Session for Them
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
              Start with a free trial or choose a regular weekly program
              designed to help young players build confidence, skills,
              and a love for the game.
            </p>
          </div>

          <Link
            href="/program"
            className="w-fit rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition-all duration-200 hover:bg-slate-100"
          >
            View all programs →
          </Link>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className={`group flex min-h-[310px] flex-col rounded-3xl border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${program.accent}`}
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:scale-110 ${program.iconBg}`}
              >
                {program.icon}
              </div>

              <h3 className="mt-7 text-2xl font-black text-slate-950">
                {program.title}
              </h3>

              <p className="mt-2 text-slate-500">
                {program.subtitle}
              </p>

              <p className={`mt-auto pt-8 text-lg font-bold ${program.priceText}`}>
                {program.price}
              </p>

              <span className="mt-3 text-sm font-bold text-slate-950">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}