"use client";

import { useState } from "react";
import FreeTrialModal from "./FreeTrial";

export default function Trial() {
  const [showFreeTrial, setShowFreeTrial] = useState(false);

  return (
    <>
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-500 via-lime-400 to-sky-400 p-10 shadow-xl lg:grid-cols-2 lg:gap-12 lg:p-16">
            {/* Left side */}
            <div>
              <p className="mb-6 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700">
                🏓 FIRST-TIME PLAYERS
              </p>

              <h2 className="text-5xl font-black leading-[0.95] text-white md:text-6xl">
                Your First
                <br />
                Session is
                <br />
                <span className="text-slate-950">
                  FREE
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-900">
                New to pickleball? Let your child try a fun,
                beginner-friendly session with coaching, games, and all
                equipment provided.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700">
                  ✓ Equipment provided
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700">
                  ✓ Beginner friendly
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700">
                  ✓ Kids-focused session
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700">
                  ✓ No commitment
                </span>
              </div>
            </div>

            {/* Right side */}
            <div className="mt-10 flex items-center lg:mt-0">
              <div className="w-full rounded-[2rem] bg-white p-10 text-center shadow-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
                  First Trial
                </p>

                <p className="mt-3 text-7xl font-black text-slate-950">
                  FREE
                </p>

                <p className="mt-3 text-slate-400">
                  Try a PicklePlay kids session before joining a
                  regular program.
                </p>

                <button
                  type="button"
                  onClick={() => setShowFreeTrial(true)}
                  className="mt-8 w-full rounded-full bg-emerald-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-600"
                >
                  Book a Free Trial →
                </button>

                <p className="mt-4 text-sm text-slate-400">
                  First-time players only · No commitment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <FreeTrialModal
        isOpen={showFreeTrial}
        onClose={() => setShowFreeTrial(false)}
      />
    </>
  );
}