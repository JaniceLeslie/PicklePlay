"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";

type AccountType = "player" | "staff";

export default function LoginPage() {
  const router = useRouter();

  const [accountType, setAccountType] =
    useState<AccountType>("player");

  const [staffId, setStaffId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const switchAccountType = (type: AccountType) => {
    setAccountType(type);
    setStaffId("");
    setEmail("");
    setPassword("");
    setRememberMe(false);
    setShowPassword(false);
    setErrorMessage("");
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    // Staff backend is not connected yet
    if (accountType === "staff") {
      if (!staffId || !email || !password) {
        return;
      }

      setErrorMessage(
        "Staff login will be connected later.",
      );
      return;
    }

    if (!email || !password || isLoading) {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const supabase = createClient();

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    setShowSuccess(true);
  };

  const handleContinue = () => {
    setShowSuccess(false);

    // Refresh so components such as Navbar can read
    // the newly created Supabase session.
    router.push("/");
    router.refresh();
  };

  const playerFormComplete = Boolean(email && password);

  const staffFormComplete = Boolean(
    staffId && email && password,
  );

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-80px)] bg-white">
        <div className="grid min-h-[calc(100vh-80px)] lg:grid-cols-[0.88fr_1.12fr]">
          {/* Left side */}
          <section className="flex items-center px-8 py-16 lg:px-16">
            <div className="mx-auto w-full max-w-md">
              {/* Account tabs */}
              <div className="grid grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50 p-1">
                <button
                  type="button"
                  onClick={() =>
                    switchAccountType("player")
                  }
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    accountType === "player"
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  🏓 Player
                </button>

                <button
                  type="button"
                  onClick={() =>
                    switchAccountType("staff")
                  }
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    accountType === "staff"
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  🧑‍🏫 Staff / Coach
                </button>
              </div>

              {/* Heading */}
              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {accountType === "player"
                    ? "Welcome Back"
                    : "Staff Portal"}
                </p>

                <h1 className="mt-3 text-5xl font-light leading-[0.95] text-slate-950">
                  {accountType === "player" ? (
                    <>
                      SIGN IN TO
                      <br />
                      <span className="text-lime-400">
                        PICKLEPLAY
                      </span>
                    </>
                  ) : (
                    <>
                      COACH &amp;
                      <br />
                      <span className="text-lime-400">
                        STAFF LOGIN
                      </span>
                    </>
                  )}
                </h1>

                <p className="mt-4 leading-7 text-slate-500">
                  {accountType === "player"
                    ? "Manage your bookings, programs, events, and account details."
                    : "Access your schedule, manage courts, and view student bookings."}
                </p>
              </div>

              {/* Player social buttons */}
              {accountType === "player" && (
                <>
                  <div className="mt-8 space-y-3">
                    <button
                      type="button"
                      onClick={() =>
                        alert(
                          "Google authentication will be connected later.",
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
                          "Apple authentication will be connected later.",
                        )
                      }
                      className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      <span className="text-xl">●</span>
                      Continue with Apple
                    </button>
                  </div>

                  <div className="my-7 flex items-center gap-4">
                    <div className="h-px flex-1 bg-slate-200" />

                    <span className="text-sm text-slate-400">
                      or with email
                    </span>

                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                </>
              )}

              {/* Login form */}
              <form onSubmit={handleSubmit}>
                {accountType === "staff" && (
                  <div>
                    <label
                      htmlFor="staffId"
                      className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                    >
                      Staff ID
                    </label>

                    <input
                      id="staffId"
                      type="text"
                      value={staffId}
                      onChange={(event) =>
                        setStaffId(event.target.value)
                      }
                      placeholder="e.g. PP-STAFF-001"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                    />
                  </div>
                )}

                <div
                  className={
                    accountType === "staff"
                      ? "mt-5"
                      : ""
                  }
                >
                  <label
                    htmlFor="loginEmail"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    {accountType === "staff"
                      ? "Work Email"
                      : "Email Address"}
                  </label>

                  <input
                    id="loginEmail"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder={
                      accountType === "staff"
                        ? "coach@pickleplay.com.au"
                        : "you@example.com"
                    }
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  />
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="loginPassword"
                      className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                    >
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-sm font-semibold text-lime-500 transition-colors hover:text-lime-600"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative mt-2">
                    <input
                      id="loginPassword"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      placeholder="Enter your password"
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
                      {showPassword
                        ? "Hide"
                        : "Show"}
                    </button>
                  </div>
                </div>

                <label className="mt-5 flex items-center gap-3 text-sm text-slate-500">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) =>
                      setRememberMe(
                        event.target.checked,
                      )
                    }
                    className="h-4 w-4 accent-lime-400"
                  />

                  Keep me signed in
                </label>

                {/* ERROR */}
                {errorMessage && (
                  <div className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={
                    isLoading ||
                    (accountType === "player"
                      ? !playerFormComplete
                      : !staffFormComplete)
                  }
                  className={`mt-6 w-full rounded-xl px-6 py-4 font-bold transition-all ${
                    accountType === "player"
                      ? playerFormComplete &&
                        !isLoading
                        ? "bg-lime-400 text-slate-950 hover:bg-lime-500"
                        : "cursor-not-allowed bg-slate-200 text-slate-400"
                      : staffFormComplete &&
                          !isLoading
                        ? "bg-slate-950 text-white hover:bg-black"
                        : "cursor-not-allowed bg-slate-200 text-slate-400"
                  }`}
                >
                  {isLoading
                    ? "SIGNING IN..."
                    : accountType === "player"
                      ? "SIGN IN"
                      : "ACCESS STAFF PORTAL"}
                </button>
              </form>

              {accountType === "player" ? (
                <p className="mt-6 text-center text-sm text-slate-500">
                  No account?{" "}
                  <Link
                    href="/register"
                    className="font-semibold text-lime-500 hover:text-lime-600"
                  >
                    Create one free
                  </Link>
                </p>
              ) : (
                <p className="mt-6 text-center text-sm leading-6 text-slate-500">
                  Staff accounts are issued by
                  management.
                  <br />
                  Contact{" "}
                  <a
                    href="mailto:hr@pickleplay.com.au"
                    className="font-semibold text-lime-500 hover:text-lime-600"
                  >
                    hr@pickleplay.com.au
                  </a>
                </p>
              )}
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
                    🏆
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-lime-400/30 bg-lime-400/10 text-xl">
                    📅
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-lime-400/30 bg-lime-400/10 text-xl">
                    ⚡
                  </span>
                </div>

                <h2 className="mt-8 text-5xl font-light leading-[1.05]">
                  {accountType === "player" ? (
                    <>
                      YOUR COURTS,
                      <br />
                      YOUR SCHEDULE.
                    </>
                  ) : (
                    <>
                      YOUR PLAYERS,
                      <br />
                      YOUR SESSIONS.
                    </>
                  )}
                </h2>

                <p className="mt-5 max-w-md text-lg leading-8 text-slate-300">
                  {accountType === "player"
                    ? "Sign in to manage bookings, track your progress, and unlock member-only rates across Melbourne."
                    : "Sign in to review lessons, manage availability, and stay organised across PicklePlay venues."}
                </p>

                <ul className="mt-8 space-y-5 text-slate-200">
                  {(accountType === "player"
                    ? [
                        "Instant court reservations",
                        "Member discounts and offers",
                        "Priority access to new slots",
                        "Program enrolment history",
                      ]
                    : [
                        "Manage court schedules",
                        "View coaching sessions",
                        "Track player attendance",
                        "Access venue dashboard",
                      ]
                  ).map((item) => (
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

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-9 text-center shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-100 text-4xl">
              ✓
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-950">
              Welcome Back!
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              You have successfully signed in to your
              PicklePlay account.
            </p>

            <button
              type="button"
              onClick={handleContinue}
              className="mt-7 block w-full rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-500"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
}