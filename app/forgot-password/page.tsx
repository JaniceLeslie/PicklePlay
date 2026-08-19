"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/Navbar";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      return;
    }

    setShowSuccess(true);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-80px)] bg-white">
        <div className="grid min-h-[calc(100vh-80px)] lg:grid-cols-[0.88fr_1.12fr]">
          {/* Left side */}
          <section className="flex items-center px-8 py-16 lg:px-16">
            <div className="mx-auto w-full max-w-md">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Account Recovery
                </p>

                <h1 className="mt-3 text-5xl font-light leading-[0.95] text-slate-950">
                  FORGOT YOUR
                  <br />
                  <span className="text-lime-400">PASSWORD?</span>
                </h1>

                <p className="mt-4 leading-7 text-slate-500">
                  Enter the email address linked to your PicklePlay account and
                  we&apos;ll send you a password reset link.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8">
                <div>
                  <label
                    htmlFor="resetEmail"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Email Address
                  </label>

                  <input
                    id="resetEmail"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!email}
                  className={`mt-6 w-full rounded-xl px-6 py-4 font-bold transition-all ${
                    email
                      ? "bg-lime-400 text-slate-950 hover:bg-lime-500"
                      : "cursor-not-allowed bg-slate-200 text-slate-400"
                  }`}
                >
                  SEND RESET LINK
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-500">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-lime-500 hover:text-lime-600"
                >
                  Back to sign in
                </Link>
              </p>
            </div>
          </section>

          {/* Right side */}
          <section className="relative hidden overflow-hidden bg-slate-950 text-white lg:block">
            {/* Court pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute left-[10%] top-0 h-full w-px bg-lime-400" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-lime-400" />
              <div className="absolute right-[10%] top-0 h-full w-px bg-lime-400" />

              <div className="absolute left-0 top-[15%] h-px w-full bg-lime-400" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-lime-400" />
              <div className="absolute bottom-[15%] left-0 h-px w-full bg-lime-400" />
            </div>

            <div className="relative z-10 flex h-full items-center px-16">
              <div className="max-w-xl">
                <div className="flex gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-lime-400/30 bg-lime-400/10 text-xl">
                    🔐
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-lime-400/30 bg-lime-400/10 text-xl">
                    ✉️
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-lime-400/30 bg-lime-400/10 text-xl">
                    ✓
                  </span>
                </div>

                <h2 className="mt-8 text-5xl font-light leading-[1.05]">
                  RESET SECURELY.
                  <br />
                  GET BACK TO PLAY.
                </h2>

                <p className="mt-5 max-w-md text-lg leading-8 text-slate-300">
                  We&apos;ll send a secure reset link to your registered email
                  address so you can regain access to your account.
                </p>

                <ul className="mt-8 space-y-5 text-slate-200">
                  {[
                    "Secure password reset process",
                    "Reset link sent by email",
                    "No account details are displayed",
                    "Return to your bookings quickly",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-slate-950">
                        ✓
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Success modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-9 text-center shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-100 text-4xl">
              ✉️
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-950">
              Check Your Email
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              A password reset link has been sent to{" "}
              <span className="font-semibold text-slate-950">{email}</span>.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              This is a frontend prototype, so no real email has been sent.
            </p>

            <Link
              href="/login"
              className="mt-7 block w-full rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-500"
            >
              Back to Sign In
            </Link>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-3 w-full py-2 text-sm font-semibold text-slate-500 hover:text-slate-950"
            >
              Try another email
            </button>
          </div>
        </div>
      )}
    </>
  );
}