"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreeTrialModal from "@/components/FreeTrial";

type PackageType =
  | "tuesday"
  | "thursday"
  | "twice-weekly"
  | null;

export default function ProgramPage() {
  const [selectedPackage, setSelectedPackage] =
    useState<PackageType>(null);

  const [showBooking, setShowBooking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFreeTrial, setShowFreeTrial] = useState(false);

  const packageDetails =
    selectedPackage === "tuesday"
      ? {
          name: "Tuesday Training",
          sessions: "4 sessions / month",
          schedule: "Every Tuesday",
          price: 150,
        }
      : selectedPackage === "thursday"
        ? {
            name: "Thursday Training",
            sessions: "4 sessions / month",
            schedule: "Every Thursday",
            price: 150,
          }
        : selectedPackage === "twice-weekly"
          ? {
              name: "Tuesday + Thursday Training",
              sessions: "8 sessions / month",
              schedule: "Every Tuesday & Thursday",
              price: 300,
            }
          : null;

  const openBooking = (packageType: PackageType) => {
    setSelectedPackage(packageType);
    setShowBooking(true);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-slate-950 px-8 py-24">
          {/* Decorative Circles */}
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-lime-400/10" />

          <div className="absolute bottom-[-180px] left-[45%] h-[420px] w-[420px] rounded-full bg-orange-500/10" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-400">
              Kids Pickleball Programs
            </p>

            <h1 className="mt-6 text-6xl font-black leading-[0.9] text-white md:text-7xl">
              PICK A
              <br />

              <span className="text-orange-500">
                PROGRAM
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Start with a free trial or choose a regular weekly
              program designed to help young players build confidence,
              improve their skills, and have fun on the court.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#moorabbin-programs"
                className="rounded-full bg-lime-400 px-7 py-3 font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-lime-300"
              >
                Explore Programs →
              </a>

              <a
                href="#locations"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                View Locations
              </a>
            </div>
          </div>
        </section>

        {/* ================= LOCATIONS ================= */}
        <section
          id="locations"
          className="scroll-mt-24 bg-slate-50 px-8 py-20"
        >
          <div className="mx-auto max-w-7xl">
            {/* Heading */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                Our Locations
              </p>

              <h2 className="mt-3 text-5xl font-black leading-[0.95] text-slate-950">
                CHOOSE WHERE
                <br />

                <span className="text-lime-500">
                  TO PLAY
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
                Find the location that works best for you. Moorabbin
                offers our regular weekly programs, while Noble Park
                North and Clayton sessions can be arranged directly
                with the venue.
              </p>
            </div>

            {/* Location Cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Moorabbin */}
              <div className="rounded-3xl border-2 border-lime-300 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-500">
                      Main Program Venue
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-950">
                      Moorabbin
                    </h3>

                    <p className="mt-1 text-slate-500">
                      Melbourne Pickle Club
                    </p>
                  </div>

                  <span className="text-3xl">📍</span>
                </div>

                <div className="mt-6 space-y-2 text-sm text-slate-600">
                  <p>Tuesday &amp; Thursday</p>
                  <p>4:30 PM – 6:00 PM</p>
                  <p>Monthly programs available</p>
                </div>

                <a
                  href="#moorabbin-programs"
                  className="mt-6 inline-block rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:bg-lime-500"
                >
                  View Programs →
                </a>
              </div>

              {/* Noble Park North */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-500">
                      Contact Venue
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-950">
                      Noble Park North
                    </h3>

                    <p className="mt-1 text-slate-500">
                      Pickleball Powerhouse
                    </p>
                  </div>

                  <span className="text-3xl">☎️</span>
                </div>

                <p className="mt-6 leading-7 text-slate-600">
                  Contact the venue directly for current kids lesson
                  times and program availability.
                </p>

                <a
                  href="tel:+61XXXXXXXXX"
                  className="mt-6 inline-block rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-black"
                >
                  Call to Book →
                </a>
              </div>

              {/* Clayton */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-500">
                      Contact Venue
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-950">
                      Clayton
                    </h3>

                    <p className="mt-1 text-slate-500">
                      Pickleholic
                    </p>
                  </div>

                  <span className="text-3xl">☎️</span>
                </div>

                <p className="mt-6 leading-7 text-slate-600">
                  Contact the venue directly for current kids lesson
                  times and program availability.
                </p>

                <a
                  href="tel:+61XXXXXXXXX"
                  className="mt-6 inline-block rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-black"
                >
                  Call to Book →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROGRAMS ================= */}
        <section
          id="moorabbin-programs"
          className="scroll-mt-24 bg-white px-8 py-20"
        >
          <div className="mx-auto max-w-7xl">
            {/* Heading */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Moorabbin Programs
              </p>

              <h2 className="mt-3 text-5xl font-black leading-[0.95] text-slate-950">
                CHOOSE YOUR
                <br />

                <span className="text-orange-500">
                  PROGRAM
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
                Start with a free trial or join one of our regular
                weekly kids pickleball programs.
              </p>
            </div>

            {/* Program Cards */}
            <div className="mt-12 grid gap-7 md:grid-cols-2">
              {/* FREE TRIAL */}
              <article className="group overflow-hidden rounded-[2rem] border border-emerald-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-emerald-50 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400 text-2xl">
                        🎁
                      </span>

                      <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-emerald-600">
                        New Players
                      </p>

                      <h3 className="mt-2 text-3xl font-black text-slate-950">
                        Free Trial
                      </h3>
                    </div>

                    <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-emerald-600">
                      FREE
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-4 text-slate-600">
                    <p>✓ Try PicklePlay before joining</p>
                    <p>✓ Beginner friendly</p>
                    <p>✓ Equipment provided</p>
                    <p>✓ First-time players only</p>
                  </div>

                  <div className="mt-8 flex items-end justify-between border-t border-slate-100 pt-7">
                    <div>
                      <p className="text-sm text-slate-400">
                        First session
                      </p>

                      <p className="mt-1 text-4xl font-black text-slate-950">
                        FREE
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowFreeTrial(true)}
                      className="rounded-full bg-emerald-400 px-6 py-3 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-emerald-500"
                    >
                      Book Free Trial →
                    </button>
                  </div>
                </div>
              </article>

              {/* TUESDAY */}
              <article className="group overflow-hidden rounded-[2rem] border border-lime-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-lime-50 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400 text-2xl">
                        🏓
                      </span>

                      <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-lime-600">
                        Weekly Program
                      </p>

                      <h3 className="mt-2 text-3xl font-black text-slate-950">
                        Tuesday Training
                      </h3>
                    </div>

                    <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-600">
                      4 WEEKS
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-4 text-slate-600">
                    <p>✓ Every Tuesday</p>
                    <p>✓ 4:30 PM – 6:00 PM</p>
                    <p>✓ 4 sessions per month</p>
                    <p>✓ Equipment provided</p>
                  </div>

                  <div className="mt-8 flex items-end justify-between border-t border-slate-100 pt-7">
                    <div>
                      <p className="text-sm text-slate-400">
                        Monthly package
                      </p>

                      <p className="mt-1 text-4xl font-black text-slate-950">
                        A$150
                        <span className="text-base font-medium text-slate-400">
                          /month
                        </span>
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => openBooking("tuesday")}
                      className="rounded-full bg-lime-400 px-6 py-3 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-lime-500"
                    >
                      Enrol Now →
                    </button>
                  </div>
                </div>
              </article>

              {/* THURSDAY */}
              <article className="group overflow-hidden rounded-[2rem] border border-sky-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-sky-50 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400 text-2xl">
                        🏓
                      </span>

                      <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-sky-600">
                        Weekly Program
                      </p>

                      <h3 className="mt-2 text-3xl font-black text-slate-950">
                        Thursday Training
                      </h3>
                    </div>

                    <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-600">
                      4 WEEKS
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-4 text-slate-600">
                    <p>✓ Every Thursday</p>
                    <p>✓ 4:30 PM – 6:00 PM</p>
                    <p>✓ 4 sessions per month</p>
                    <p>✓ Equipment provided</p>
                  </div>

                  <div className="mt-8 flex items-end justify-between border-t border-slate-100 pt-7">
                    <div>
                      <p className="text-sm text-slate-400">
                        Monthly package
                      </p>

                      <p className="mt-1 text-4xl font-black text-slate-950">
                        A$150
                        <span className="text-base font-medium text-slate-400">
                          /month
                        </span>
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => openBooking("thursday")}
                      className="rounded-full bg-sky-400 px-6 py-3 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-sky-500"
                    >
                      Enrol Now →
                    </button>
                  </div>
                </div>
              </article>

              {/* TUESDAY + THURSDAY */}
              <article className="group relative overflow-hidden rounded-[2rem] border border-orange-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute right-6 top-6 z-10 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
                  8 SESSIONS
                </div>

                <div className="bg-orange-50 p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl">
                    ⚡
                  </span>

                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-orange-500">
                    Twice a Week
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-slate-950">
                    Tuesday + Thursday
                  </h3>
                </div>

                <div className="p-8">
                  <div className="space-y-4 text-slate-600">
                    <p>✓ Every Tuesday &amp; Thursday</p>
                    <p>✓ 4:30 PM – 6:00 PM</p>
                    <p>✓ 8 sessions per month</p>
                    <p>✓ Equipment provided</p>
                  </div>

                  <div className="mt-8 flex items-end justify-between border-t border-slate-100 pt-7">
                    <div>
                      <p className="text-sm text-slate-400">
                        Monthly package
                      </p>

                      <p className="mt-1 text-4xl font-black text-slate-950">
                        A$300
                        <span className="text-base font-medium text-slate-400">
                          /month
                        </span>
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => openBooking("twice-weekly")}
                      className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-orange-600"
                    >
                      Enrol Now →
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* ================= BOOKING MODAL ================= */}
      {showBooking && packageDetails && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="bg-slate-950 px-8 py-7 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
                Moorabbin Program
              </p>

              <h2 className="mt-2 text-2xl font-black">
                {packageDetails.name}
              </h2>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Location
                  </span>

                  <span className="font-semibold text-slate-950">
                    Moorabbin
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Sessions
                  </span>

                  <span className="font-semibold text-slate-950">
                    {packageDetails.sessions}
                  </span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-500">
                    Schedule
                  </span>

                  <span className="text-right font-semibold text-slate-950">
                    {packageDetails.schedule}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Time
                  </span>

                  <span className="font-semibold text-slate-950">
                    4:30 PM – 6:00 PM
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-end justify-between">
                    <span className="font-bold text-slate-950">
                      Monthly Total
                    </span>

                    <span className="text-3xl font-black text-slate-950">
                      A${packageDetails.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowBooking(false);
                    setSelectedPackage(null);
                  }}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowBooking(false);
                    setShowSuccess(true);
                  }}
                  className="rounded-xl bg-lime-400 px-5 py-3 font-bold text-slate-950 hover:bg-lime-500"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= SUCCESS MODAL ================= */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-9 text-center shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-100 text-4xl">
              ✓
            </div>

            <h2 className="mt-6 text-3xl font-black text-slate-950">
              Program Selected!
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              Your program selection has been received. Full enrolment
              and payment can be connected later.
            </p>

            <button
              type="button"
              onClick={() => {
                setShowSuccess(false);
                setSelectedPackage(null);
              }}
              className="mt-7 w-full rounded-xl bg-lime-400 px-6 py-3 font-bold text-slate-950 hover:bg-lime-500"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* ================= FREE TRIAL ================= */}
      <FreeTrialModal
        isOpen={showFreeTrial}
        onClose={() => setShowFreeTrial(false)}
      />

      <Footer />
    </>
  );
}