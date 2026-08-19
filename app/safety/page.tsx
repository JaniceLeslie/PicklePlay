import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const safetyAreas = [
  {
    icon: "👨‍👩‍👧",
    title: "For Families",
    description:
      "Guidance for parents, guardians, and young players on feeling safe, speaking up, and knowing what to do if something feels wrong.",
    href: "/safety/families",
    accent: "bg-lime-50 border-lime-200",
    iconBg: "bg-lime-400",
  },
  {
    icon: "🏓",
    title: "For Coaches & Staff",
    description:
      "Clear expectations around professional conduct, safe coaching, boundaries, communication, and responding to concerns.",
    href: "/safety/coaches",
    accent: "bg-sky-50 border-sky-200",
    iconBg: "bg-sky-400",
  },
  {
    icon: "📄",
    title: "Policies & Reporting",
    description:
      "Find safety information, reporting pathways, online-safety guidance, and important policies in one place.",
    href: "/safety/policies",
    accent: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-400",
  },
];

const commitments = [
  {
    number: "01",
    title: "Young Players Come First",
    text: "We want every child to feel welcomed, respected, supported, and comfortable speaking up.",
  },
  {
    number: "02",
    title: "Clear Expectations",
    text: "Coaches, staff, families, and participants should understand the behaviour expected within the PicklePlay environment.",
  },
  {
    number: "03",
    title: "Concerns Are Taken Seriously",
    text: "Questions and concerns about safety and wellbeing should be raised and handled through the appropriate process.",
  },
  {
    number: "04",
    title: "Safe Participation",
    text: "Our approach focuses on creating positive, age-appropriate, and respectful experiences for young players.",
  },
];

export default function SafetyHubPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 px-8 py-24 text-white">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime-400/10" />
          <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-orange-500/10" />

          <div className="relative mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Safety &amp; Wellbeing
            </p>

            <h1 className="mt-4 max-w-5xl text-7xl font-black leading-[0.9]">
              SAFE TO LEARN.
              <br />
              <span className="text-orange-500">
                SAFE TO PLAY.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              PicklePlay is committed to creating a positive environment where
              young players can enjoy pickleball, build confidence, and feel
              comfortable speaking up.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#safety-information"
                className="rounded-full bg-lime-400 px-7 py-3 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-lime-500"
              >
                Explore Safety Information ↓
              </a>

              <Link
                href="/safety/policies"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Policies &amp; Reporting
              </Link>
            </div>
          </div>
        </section>

        {/* HUB CARDS */}
        <section
          id="safety-information"
          className="scroll-mt-24 px-8 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                Find the Right Information
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Safety Information for Everyone
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                Choose the section that best matches what you&apos;re looking
                for.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {safetyAreas.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`group flex min-h-[340px] flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.accent}`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <span className="mt-auto pt-8 text-sm font-bold text-slate-950">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* COMMITMENT */}
        <section className="bg-slate-50 px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Our Approach
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                What Safety &amp; Wellbeing Means at PicklePlay
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                Safety is not one page or one policy. It should be part of how
                young players, families, coaches, and staff experience
                PicklePlay.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {commitments.map((item) => (
                <article
                  key={item.number}
                  className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-5xl font-black text-lime-300">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-2xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SPEAK UP */}
        <section className="px-8 py-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-lime-400">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-10 lg:p-14">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">
                  Speak Up
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-950">
                  If Something Doesn&apos;t Feel Right, Say Something.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-700">
                  Young players, families, coaches, and staff should feel able
                  to raise a concern. Our Policies &amp; Reporting section
                  explains where to go next.
                </p>

                <Link
                  href="/safety/policies"
                  className="mt-7 inline-block rounded-full bg-slate-950 px-7 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-black"
                >
                  View Policies &amp; Reporting →
                </Link>
              </div>

              <div className="flex items-center justify-center bg-slate-950 p-12 text-center text-white">
                <div>
                  <div className="text-7xl">🛡️</div>

                  <p className="mt-6 text-2xl font-black">
                    Safety is Everyone&apos;s Responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}