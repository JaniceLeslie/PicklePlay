import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const informationCollected = [
  {
    icon: "👤",
    title: "Account Information",
    text: "When you create an account, we may collect information such as your name, email address, phone number, and other details needed to manage your account.",
  },
  {
    icon: "🏓",
    title: "Program & Booking Information",
    text: "We may collect information relating to program registrations, lesson bookings, selected locations, session times, and participation history.",
  },
  {
    icon: "💳",
    title: "Payment Information",
    text: "When payments are required, transaction information may be processed to complete your registration or purchase. Payment details may also be handled by third-party payment providers.",
  },
  {
    icon: "💬",
    title: "Communications",
    text: "We may keep information you provide when contacting PicklePlay, submitting an enquiry, requesting support, or communicating about a program.",
  },
];

const informationUses = [
  {
    number: "01",
    title: "Provide Our Services",
    text: "To manage accounts, registrations, lessons, programs, enquiries, and other services you request from PicklePlay.",
  },
  {
    number: "02",
    title: "Communicate With You",
    text: "To send information relating to registrations, schedule updates, program changes, account matters, or enquiries.",
  },
  {
    number: "03",
    title: "Improve PicklePlay",
    text: "To understand how our services are used and improve the experience we provide to players and families.",
  },
  {
    number: "04",
    title: "Safety & Administration",
    text: "To support appropriate administration, safety processes, record keeping, and the management of concerns where required.",
  },
];

const privacyPrinciples = [
  {
    icon: "🔐",
    title: "Protecting Information",
    text: "Reasonable steps should be taken to protect personal information from unauthorised access, misuse, loss, or disclosure.",
  },
  {
    icon: "📁",
    title: "Limited Access",
    text: "Personal information should only be accessed by people who reasonably need it to perform their role or provide a PicklePlay service.",
  },
  {
    icon: "🤝",
    title: "Third-Party Services",
    text: "PicklePlay may use external service providers for functions such as payments, website services, communications, or administration.",
  },
  {
    icon: "🗑️",
    title: "Information Retention",
    text: "Personal information should only be retained for as long as reasonably necessary for its intended purpose or where records need to be maintained.",
  },
];

export default function PrivacyPage() {
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
              Legal · Privacy
            </p>

            <h1 className="mt-4 max-w-5xl text-7xl font-black leading-[0.9]">
              YOUR INFORMATION.
              <br />

              <span className="text-orange-500">
                HANDLED WITH CARE.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              This Privacy Policy explains the types of personal information
              PicklePlay may collect, why we may collect it, and how that
              information may be handled when you use our website and services.
            </p>

            <a
              href="#privacy-information"
              className="mt-9 inline-block rounded-full bg-lime-400 px-7 py-3 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-lime-500"
            >
              Read Privacy Policy ↓
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section
          id="privacy-information"
          className="scroll-mt-24 px-8 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                  Our Approach
                </p>

                <h2 className="mt-3 text-5xl font-black text-slate-950">
                  Respecting Your Privacy
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  When you interact with PicklePlay, you may provide personal
                  information so we can deliver programs, manage registrations,
                  communicate with you, and provide our services.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  We aim to collect and use information only where it is
                  reasonably necessary and to handle that information
                  responsibly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INFORMATION WE COLLECT */}
        <section className="bg-slate-50 px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                Personal Information
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Information We May Collect
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                The information collected may depend on how you interact with
                PicklePlay and which services you use.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {informationCollected.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl transition-transform duration-300 group-hover:scale-110">
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

        {/* HOW INFORMATION IS USED */}
        <section className="px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                How Information Is Used
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Why We May Use Your Information
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                Information should be used for purposes connected to operating
                PicklePlay and providing services to our players and families.
              </p>
            </div>

            <div className="mt-12 grid gap-5">
              {informationUses.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:shadow-lg md:grid-cols-[110px_1fr] md:items-center"
                >
                  <span className="text-5xl font-black text-lime-300">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW INFORMATION IS HANDLED */}
        <section className="bg-orange-50 px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Information Protection
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                How Information Should Be Handled
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Personal information should be handled responsibly throughout
                the time it is held by PicklePlay.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {privacyPrinciples.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
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

        {/* CHILDREN */}
        <section className="px-8 py-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-lime-400">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-10 lg:p-14">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">
                  Young Players
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-950">
                  Privacy Matters for Young Players Too.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-700">
                  Because PicklePlay programs may involve children, information
                  relating to young participants should be handled carefully
                  and only used where appropriate for participation,
                  administration, communication, or safety.
                </p>

                <Link
                  href="/safety"
                  className="mt-7 inline-block rounded-full bg-slate-950 px-7 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-black"
                >
                  Visit Safety &amp; Wellbeing →
                </Link>
              </div>

              <div className="flex items-center justify-center bg-slate-950 p-12 text-center text-white">
                <div>
                  <div className="text-7xl">🔒</div>

                  <p className="mt-6 text-2xl font-black">
                    Privacy.
                    <br />
                    Safety.
                    <br />
                    Trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YOUR INFORMATION */}
        <section className="bg-slate-50 px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                  Your Information
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-950">
                  Questions or Updates?
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-slate-600">
                  You may contact PicklePlay if you have questions about your
                  personal information or need to request an update to
                  information you have provided.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-950 p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                  Privacy Enquiries
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Contact PicklePlay
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  For questions about this policy or the way your information is
                  handled, please contact the PicklePlay team.
                </p>

                <Link
                  href="/terms"
                  className="mt-7 inline-block rounded-full bg-lime-400 px-6 py-3 font-bold text-slate-950 transition-all hover:bg-lime-500"
                >
                  Terms &amp; Conditions →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LAST UPDATED */}
        <section className="border-t border-slate-200 px-8 py-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-500 md:flex-row">
            <p>
              PicklePlay Privacy Policy
            </p>

            <p>
              Last updated: August 2026
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}