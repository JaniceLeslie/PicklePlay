import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const requirements = [
  {
    icon: "✅",
    title: "Appropriate Screening",
    text: "Coaches and staff working with young players should meet the screening and child-safety requirements that apply to their role.",
  },
  {
    icon: "🪪",
    title: "Identity & Role Verification",
    text: "Relevant identity details and role information should be checked before a staff member or coach begins working with children.",
  },
  {
    icon: "📅",
    title: "Keep Checks Current",
    text: "Where screening requirements apply, records should be kept current and reviewed when required.",
  },
  {
    icon: "🛡️",
    title: "Safe Practice Comes First",
    text: "Screening is only one part of child safety. Professional behaviour, appropriate boundaries, and clear reporting processes are also essential.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Check the Role Requirements",
    text: "Confirm what screening, checks, or documentation are required before working with young players.",
  },
  {
    number: "02",
    title: "Complete the Required Application",
    text: "If a Working With Children Check or other screening is required, complete the relevant application process through the appropriate authority.",
  },
  {
    number: "03",
    title: "Provide Verification",
    text: "Required screening or clearance information should be provided to the appropriate PicklePlay representative before commencing relevant duties.",
  },
  {
    number: "04",
    title: "Maintain Current Records",
    text: "Keep required information up to date and notify the appropriate person if there are changes that may affect your eligibility to work with children.",
  },
];

export default function WorkingWithChildrenPage() {
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
              WORKING WITH
              <br />
              <span className="text-orange-500">
                YOUNG PLAYERS
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Clear screening, professional conduct, and strong child-safety
              practices help create a safer environment for every young
              PicklePlay participant.
            </p>

            <a
              href="#requirements"
              className="mt-9 inline-block rounded-full bg-lime-400 px-7 py-3 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-lime-500"
            >
              View Requirements ↓
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section
          id="requirements"
          className="scroll-mt-24 px-8 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                  Screening &amp; Safety
                </p>

                <h2 className="mt-3 text-5xl font-black text-slate-950">
                  Working With Children Requirements
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  Roles involving children may require appropriate screening,
                  verification, and ongoing compliance with relevant
                  child-safety requirements.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  PicklePlay expects coaches and staff working with young
                  participants to understand the responsibilities connected to
                  their role and maintain professional standards at all times.
                </p>
              </div>
            </div>

            {/* Requirement cards */}
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {requirements.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400 text-2xl transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-950">
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

        {/* PROCESS */}
        <section className="bg-slate-50 px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Before You Begin
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                A Simple Screening Process
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                The exact requirements may depend on the role, but the process
                should always begin with checking what is required before
                working with young participants.
              </p>
            </div>

            <div className="mt-12 grid gap-5">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:grid-cols-[110px_1fr] md:items-center"
                >
                  <span className="text-5xl font-black text-lime-300">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-black text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IMPORTANT NOTE */}
        <section className="px-8 py-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-lime-400">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-10 lg:p-14">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">
                  More Than a Check
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-950">
                  Screening Is Only One Part of Keeping Kids Safe.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-700">
                  A safe environment also depends on appropriate behaviour,
                  professional boundaries, clear communication, and knowing how
                  to respond when a concern is raised.
                </p>

                <Link
                  href="/safety/coaches"
                  className="mt-7 inline-block rounded-full bg-slate-950 px-7 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-black"
                >
                  Coach &amp; Staff Guidance →
                </Link>
              </div>

              <div className="flex items-center justify-center bg-slate-950 p-12 text-center text-white">
                <div>
                  <div className="text-7xl">🛡️</div>

                  <p className="mt-6 text-2xl font-black">
                    Check.
                    <br />
                    Support.
                    <br />
                    Protect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className="bg-slate-50 px-8 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                  Safety &amp; Wellbeing
                </p>

                <h2 className="mt-2 text-3xl font-black text-slate-950">
                  More Safety Information
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/safety"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 font-bold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  Safety Hub
                </Link>

                <Link
                  href="/safety/families"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 font-bold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  For Families
                </Link>

                <Link
                  href="/safety/coaches"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 font-bold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  Coaches &amp; Staff
                </Link>

                <Link
                  href="/safety/policies"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 font-bold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  Policies &amp; Reporting
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}