import Link from "next/link";

const sessionInfo = [
  {
    icon: "🏓",
    title: "For Young Players",
    description:
      "Fun, age-appropriate sessions that introduce pickleball skills through movement, games and guided play.",
  },
  {
    icon: "⚡",
    title: "How Sessions Work",
    description:
      "Small-group coaching combines skill activities, mini games and plenty of time on court.",
  },
  {
    icon: "👟",
    title: "Come Ready to Play",
    description:
      "Bring comfortable sportswear, runners and a water bottle. Paddles, balls and equipment are provided.",
  },
  {
    icon: "📍",
    title: "Choose Your Location",
    description:
      "Pick the Melbourne location that works best for your family and explore the lessons available there.",
  },
];

export default function NeedToKnow() {
  return (
    <section className="bg-white px-8 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
            Getting Started
          </p>

          <h2 className="mt-3 text-5xl font-black leading-tight text-slate-950">
            Ready for Their
            <br />
            First Session?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            A few simple things to help your young player arrive comfortable,
            confident and ready to get on court.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sessionInfo.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              {/* Number */}
              <span className="absolute right-6 top-5 text-5xl font-black text-slate-200">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400 text-2xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="relative mt-8 text-xl font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="relative mt-4 leading-7 text-slate-500">
                {item.description}
              </p>

              {item.title === "Choose Your Location" && (
                <Link
                  href="#venues"
                  className="relative mt-6 inline-block text-sm font-bold text-emerald-600 hover:text-emerald-700"
                >
                  Explore locations →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}