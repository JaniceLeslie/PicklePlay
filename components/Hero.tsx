"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import FreeTrialModal from "./FreeTrial";

export default function Hero() {
  const [showFreeTrial, setShowFreeTrial] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/image1.jpg"
          alt="People playing pickleball"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl items-center px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-7xl font-black leading-[0.9] text-white">
              START
              <br />
              <span className="text-orange-500">YOUR PICKLEBALL</span>
              <br />
              JOURNEY
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/90">
              Fun, structured pickleball coaching that helps young players build skills, confidence, and a love for the game.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">
              <Link
                href="/booking"
                className="rounded-full bg-lime-400 px-7 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-lime-500"
              >
                Book a Lesson
              </Link>

              <button
                type="button"
                onClick={() => setShowFreeTrial(true)}
                className="rounded-full bg-emerald-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-600"
              >
                Free 1-hour Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      <FreeTrialModal
        isOpen={showFreeTrial}
        onClose={() => setShowFreeTrial(false)}
      />
    </>
  );
}