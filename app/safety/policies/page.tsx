import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const policyCards = [
  {
    icon: "🛡️",
    title: "Child Safety Commitment",
    description:
      "Our commitment to creating a safe, respectful, and supportive environment for young players.",
  },
  {
    icon: "📘",
    title: "Code of Conduct",
    description:
      "Behaviour expectations for coaches, staff, families, and participants across PicklePlay programs.",
  },
  {
    icon: "💻",
    title: "Online Safety",
    description:
      "Guidance around appropriate digital communication, social media, photography, and online interactions.",
  },
  {
    icon: "🏓",
    title: "Coach & Staff Standards",
    description:
      "Expectations around professional boundaries, communication, supervision, and safe coaching practice.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family & Participant Guidance",
    description:
      "Information to help families and young players understand their role in creating a positive environment.",
  },
  {
    icon: "📄",
    title: "Privacy & Information",
    description:
      "How personal information and program-related details should be handled responsibly.",
  },
];

const reportingSteps = [
  {
    number: "01",
    title: "Raise the Concern",
    text: "If something does not feel right, share the concern with the appropriate PicklePlay representative as soon as possible.",
  },
  {
    number: "02",
    title: "Provide the Facts",
    text: "Explain what happened using clear and factual information. Avoid investigating the situation yourself.",
  },
  {
    number: "03",
    title: "Keep Information Appropriate",
    text: "Only share sensitive information with people who need it for the concern to be managed appropriately.",
  },
  {
    number: "04",
    title: "Follow the Required Process",
    text: "Concerns should be handled according to PicklePlay procedures and any applicable safeguarding or legal requirements.",
  },
];

const onlineSafety = [
  {
    title: "Communication",
    text: "Communication involving young players should remain professional, appropriate, and focused on participation or coaching.",
  },
  {
    title: "Photos & Video",
    text: "Images or recordings involving young players should only be used in line with appropriate permissions and PicklePlay practices.",
  },
  {
    title: "Social Media",
    text: "Coaches and staff should maintain professional boundaries when interacting through social platforms or messaging services.",
  },
  {
    title: "Personal Information",
    text: "Personal details should only be collected, accessed, and shared where appropriate for legitimate program purposes.",
  },
];

export default function PoliciesPage() {
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
              Safety &amp; Wellbeing · Policies &amp; Reporting
            </p>

            <h1 className="mt-4 max-w-5xl text-7xl font-black leading-[0.9]">
              CLEAR GUIDANCE.
              <br />
              <span className="text-orange-500">
                SAFE PARTICIPATION.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Our safety information helps families, coaches, staff, and young
              players understand expectations and know what to do when a concern
              needs to be raised.
            </p>

            <a
              href="#policies"
              className="mt-9 inline-block rounded-full bg-lime-400 px-7 py-3 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-lime-500"
            >
              View Safety Information ↓
            </a>
          </div>
        </section>

        {/* POLICIES */}
        <section
          id="policies"
          className="scroll-mt-24 px-8 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                Safety Information
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Policies That Support Safe Play
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                These areas outline the standards and guidance that support a
                positive environment for young players.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {policyCards.map((policy) => (
                <article
                  key={policy.title}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400 text-2xl transition-transform duration-300 group-hover:scale-110">
                    {policy.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950">
                    {policy.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {policy.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REPORTING */}
        <section className="bg-orange-50 px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Reporting Concerns
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Know What to Do if Something Happens
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Concerns should be taken seriously and handled through an
                appropriate process. The focus should be on safety, support, and
                clear communication.
              </p>
            </div>

            <div className="mt-12 grid gap-5">
              {reportingSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 rounded-3xl border border-orange-100 bg-white p-7 shadow-sm md:grid-cols-[100px_1fr] md:items-center"
                >
                  <span className="text-5xl font-black text-orange-200">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ONLINE SAFETY */}
        <section className="px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                Digital Safety
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Safe Communication Online
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                Child safety also applies beyond the court. Digital
                communication should remain appropriate, professional, and
                respectful.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {onlineSafety.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-xl">
                    ✓
                  </div>

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

        {/* REPORT CTA */}
        <section className="px-8 pb-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-lime-400">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-10 lg:p-14">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">
                  Need to Speak Up?
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-950">
                  Safety Concerns Should Never Be Ignored.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-700">
                  If you need to report a concern, contact the appropriate
                  PicklePlay representative and provide the relevant information
                  so the matter can be handled appropriately.
                </p>

                <a
                  href="mailto:safety@pickleplay.com.au"
                  className="mt-7 inline-block rounded-full bg-slate-950 px-7 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-black"
                >
                  Contact Safety Team →
                </a>
              </div>

              <div className="flex items-center justify-center bg-slate-950 p-12 text-center text-white">
                <div>
                  <div className="text-7xl">📣</div>

                  <p className="mt-6 text-2xl font-black">
                    Speak Up.
                    <br />
                    We&apos;re Listening.
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
                  Looking for More Guidance?
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
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}