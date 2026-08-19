"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const passwordsMatch =
    password.length > 0 && password === confirmPassword;

  const formComplete =
    fullName &&
    email &&
    phone &&
    password &&
    confirmPassword &&
    passwordsMatch &&
    agreeTerms;

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!formComplete || isLoading) {
      return;
    }

    if (password.length < 8) {
      setErrorMessage(
        "Password must be at least 8 characters.",
      );
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone,
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      return;
    }

    setShowSuccess(true);
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-80px)] bg-white">
        <div className="grid min-h-[calc(100vh-80px)] lg:grid-cols-[0.88fr_1.12fr]">
          {/* Left side */}
          <section className="flex items-center px-8 py-16 lg:px-16">
            <div className="mx-auto w-full max-w-md">
              {/* Heading */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Join PicklePlay
                </p>

                <h1 className="mt-3 text-5xl font-light leading-[0.95] text-slate-950">
                  CREATE YOUR
                  <br />
                  <span className="text-lime-400">
                    PLAYER ACCOUNT
                  </span>
                </h1>

                <p className="mt-4 leading-7 text-slate-500">
                  Create an account to manage bookings, join
                  events, enrol in programs, and track your
                  PicklePlay activity.
                </p>
              </div>

              {/* Social sign-up */}
              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Google registration will be connected later.",
                    )
                  }
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                    G
                  </span>
                  Continue with Google
                </button>

                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Apple registration will be connected later.",
                    )
                  }
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <span className="text-xl">●</span>
                  Continue with Apple
                </button>
              </div>

              {/* Divider */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-sm text-slate-400">
                  or create an account
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="registerName"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Full Name
                  </label>

                  <input
                    id="registerName"
                    type="text"
                    value={fullName}
                    onChange={(event) =>
                      setFullName(event.target.value)
                    }
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="registerEmail"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Email Address
                  </label>

                  <input
                    id="registerEmail"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="registerPhone"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Phone Number
                  </label>

                  <input
                    id="registerPhone"
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                    placeholder="04XX XXX XXX"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="registerPassword"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Password
                  </label>

                  <div className="relative mt-2">
                    <input
                      id="registerPassword"
                      type={
                        showPassword ? "text" : "password"
                      }
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      placeholder="Create a password"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-20 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (current) => !current,
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400 hover:text-slate-700"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>

                  <p className="mt-2 text-xs text-slate-400">
                    Use at least 8 characters.
                  </p>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="confirmPassword"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Confirm Password
                  </label>

                  <div className="relative mt-2">
                    <input
                      id="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(
                          event.target.value,
                        )
                      }
                      placeholder="Re-enter your password"
                      className={`w-full rounded-xl border px-4 py-3 pr-20 outline-none transition focus:ring-2 ${
                        confirmPassword &&
                        !passwordsMatch
                          ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
                          : "border-slate-200 focus:border-lime-400 focus:ring-lime-100"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          (current) => !current,
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400 hover:text-slate-700"
                    >
                      {showConfirmPassword
                        ? "Hide"
                        : "Show"}
                    </button>
                  </div>

                  {confirmPassword &&
                    !passwordsMatch && (
                      <p className="mt-2 text-xs font-medium text-rose-500">
                        Passwords do not match.
                      </p>
                    )}
                </div>

                <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-500">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(event) =>
                      setAgreeTerms(event.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-lime-400"
                  />

                  <span>
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="font-semibold text-lime-500 hover:text-lime-600"
                    >
                      Terms &amp; Conditions
                    </Link>{" "}
                    and acknowledge the privacy
                    information.
                  </span>
                </label>

                {errorMessage && (
                  <div className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={
                    !formComplete || isLoading
                  }
                  className={`mt-6 w-full rounded-xl px-6 py-4 font-bold transition-all ${
                    formComplete && !isLoading
                      ? "bg-lime-400 text-slate-950 hover:bg-lime-500"
                      : "cursor-not-allowed bg-slate-200 text-slate-400"
                  }`}
                >
                  {isLoading
                    ? "CREATING ACCOUNT..."
                    : "CREATE ACCOUNT"}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-lime-500 hover:text-lime-600"
                >
                  Sign in
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
                    🏓
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-lime-400/30 bg-lime-400/10 text-xl">
                    📅
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-lime-400/30 bg-lime-400/10 text-xl">
                    🎉
                  </span>
                </div>

                <h2 className="mt-8 text-5xl font-light leading-[1.05]">
                  PLAY MORE.
                  <br />
                  MANAGE LESS.
                </h2>

                <p className="mt-5 max-w-md text-lg leading-8 text-slate-300">
                  Create your PicklePlay account and keep
                  your bookings, programs, events, and
                  coaching sessions in one place.
                </p>

                <ul className="mt-8 space-y-5 text-slate-200">
                  {[
                    "Manage upcoming court bookings",
                    "Register for programs and events",
                    "Book private coaching sessions",
                    "Access member-only offers",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
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
              ✓
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-950">
              Account Created!
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              Your PicklePlay account has been created
              successfully. Check your email if verification
              is required before signing in.
            </p>

            <Link
              href="/login"
              className="mt-7 block w-full rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-500"
            >
              Continue to Sign In
            </Link>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-3 w-full py-2 text-sm font-semibold text-slate-500 hover:text-slate-950"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}