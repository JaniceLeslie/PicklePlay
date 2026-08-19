"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

const navLinkClass =
  "rounded-full px-4 py-2 transition-colors duration-200 hover:bg-gray-100";

const activeNavLinkClass =
  "rounded-full bg-black px-4 py-2 text-white";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [showSafety, setShowSafety] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  /* Get logged-in user */
  useEffect(() => {
    const supabase = createClient();

    const getCurrentUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const fullName =
          user.user_metadata?.full_name ||
          user.email?.split("@")[0] ||
          "Player";

        setUserName(fullName);
        setUserEmail(user.email ?? null);
      } else {
        setUserName(null);
        setUserEmail(null);
      }

      setIsLoadingUser(false);
    };

    getCurrentUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user;

      if (user) {
        const fullName =
          user.user_metadata?.full_name ||
          user.email?.split("@")[0] ||
          "Player";

        setUserName(fullName);
        setUserEmail(user.email ?? null);
      } else {
        setUserName(null);
        setUserEmail(null);
      }

      setIsLoadingUser(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  /* Active states */
  const isSafetyActive = pathname.startsWith("/safety");

  const isMoreActive =
    pathname === "/coaching" ||
    pathname === "/careers" ||
    pathname === "/terms" ||
    pathname === "/policy";

  /* Dropdown toggles */
  const toggleSafety = () => {
    setShowSafety((current) => !current);
    setShowMore(false);
    setShowSignIn(false);
  };

  const toggleMore = () => {
    setShowMore((current) => !current);
    setShowSafety(false);
    setShowSignIn(false);
  };

  const toggleSignIn = () => {
    setShowSignIn((current) => !current);
    setShowSafety(false);
    setShowMore(false);
  };

  /* Logout */
  const handleSignOut = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    setUserName(null);
    setUserEmail(null);
    setShowSignIn(false);

    router.push("/");
    router.refresh();
  };

  /* Avatar initial */
  const userInitial =
    userName?.trim().charAt(0).toUpperCase() || "P";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-lime-300 bg-lime-300/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        {/* LOGO */}
        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image
            src="/logo3.png"
            alt="PicklePlay Logo"
            width={100}
            height={100}
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* NAVIGATION */}
        <ul className="flex items-center space-x-6">
          {/* HOME */}
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? activeNavLinkClass
                  : navLinkClass
              }
            >
              Home
            </Link>
          </li>

          {/* PROGRAMS */}
          <li>
            <Link
              href="/program"
              className={
                pathname === "/program"
                  ? activeNavLinkClass
                  : navLinkClass
              }
            >
              Programs
            </Link>
          </li>

          {/* SCHOOLS & EVENTS */}
          <li>
            <Link
              href="/events"
              className={
                pathname === "/events"
                  ? activeNavLinkClass
                  : navLinkClass
              }
            >
              Schools &amp; Events
            </Link>
          </li>

          {/* SHOP */}
          <li>
            <Link
              href="/shop"
              className={
                pathname === "/shop"
                  ? activeNavLinkClass
                  : navLinkClass
              }
            >
              Shop
            </Link>
          </li>

          {/* SAFETY & WELLBEING */}
          <li className="relative">
            <button
              type="button"
              onClick={toggleSafety}
              className={`flex items-center gap-2 ${
                isSafetyActive
                  ? activeNavLinkClass
                  : navLinkClass
              }`}
            >
              Safety &amp; Wellbeing

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 transition-transform duration-200 ${
                  showSafety ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {showSafety && (
              <div className="absolute left-1/2 top-full z-[100] mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <Link
                  href="/safety"
                  onClick={() => setShowSafety(false)}
                  className="flex gap-3 border-b border-slate-100 px-5 py-4 transition-colors hover:bg-slate-50"
                >
                  <span className="text-xl">🛡️</span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Safety Hub
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Our approach to young player safety
                    </p>
                  </div>
                </Link>

                <Link
                  href="/safety/families"
                  onClick={() => setShowSafety(false)}
                  className="flex gap-3 border-b border-slate-100 px-5 py-4 transition-colors hover:bg-slate-50"
                >
                  <span className="text-xl">👨‍👩‍👧</span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      For Families
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Parents &amp; young players
                    </p>
                  </div>
                </Link>

                <Link
                  href="/safety/coaches"
                  onClick={() => setShowSafety(false)}
                  className="flex gap-3 border-b border-slate-100 px-5 py-4 transition-colors hover:bg-slate-50"
                >
                  <span className="text-xl">🏓</span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      For Coaches &amp; Staff
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Responsibilities, conduct &amp; screening
                    </p>
                  </div>
                </Link>

                <Link
                  href="/safety/working-with-children"
                  onClick={() => setShowSafety(false)}
                  className="flex gap-3 border-b border-slate-100 px-5 py-4 transition-colors hover:bg-slate-50"
                >
                  <span className="text-xl">✅</span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Working With Children
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Screening &amp; child-safe requirements
                    </p>
                  </div>
                </Link>

                <Link
                  href="/safety/policies"
                  onClick={() => setShowSafety(false)}
                  className="flex gap-3 px-5 py-4 transition-colors hover:bg-slate-50"
                >
                  <span className="text-xl">📄</span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Policies &amp; Reporting
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Safety policies, online safety &amp;
                      concerns
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </li>

          {/* MORE */}
          <li className="relative">
            <button
              type="button"
              onClick={toggleMore}
              className={`flex items-center gap-2 ${
                isMoreActive
                  ? activeNavLinkClass
                  : navLinkClass
              }`}
            >
              More

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 transition-transform duration-200 ${
                  showMore ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {showMore && (
              <div className="absolute left-1/2 top-full z-[100] mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <Link
                  href="/coaching"
                  onClick={() => setShowMore(false)}
                  className="flex gap-3 border-b border-slate-100 px-5 py-4 transition-colors hover:bg-slate-50"
                >
                  <span className="text-xl">🎓</span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Coaching
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Find a coach
                    </p>
                  </div>
                </Link>

                <Link
                  href="/careers"
                  onClick={() => setShowMore(false)}
                  className="flex gap-3 border-b border-slate-100 px-5 py-4 transition-colors hover:bg-slate-50"
                >
                  <span className="text-xl">💼</span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Careers
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Join our team
                    </p>
                  </div>
                </Link>

                <Link
                  href="/terms"
                  onClick={() => setShowMore(false)}
                  className="flex gap-3 border-b border-slate-100 px-5 py-4 transition-colors hover:bg-slate-50"
                >
                  <span className="text-xl">📄</span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Terms &amp; Conditions
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Legal information
                    </p>
                  </div>
                </Link>

                <Link
                  href="/policy"
                  onClick={() => setShowMore(false)}
                  className="flex gap-3 px-5 py-4 transition-colors hover:bg-slate-50"
                >
                  <span className="text-xl">🔒</span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Privacy Policy
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      How we handle your information
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-6">
          {/* BOOK LESSON */}
          <Link
            href="/program"
            className="rounded-full bg-gray-800 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-black"
          >
            Book a Lesson
          </Link>

          {/* AUTH */}
          <div className="relative">
            {!isLoadingUser && userName ? (
              <>
                {/* LOGGED IN BUTTON */}
                <button
                  type="button"
                  onClick={toggleSignIn}
                  className="flex items-center gap-3 rounded-full bg-gray-800 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-black"
                >
                  {/* AVATAR */}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 font-bold text-slate-950">
                    {userInitial}
                  </span>

                  <span className="max-w-[120px] truncate">
                    {userName}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 transition-transform duration-200 ${
                      showSignIn ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* USER DROPDOWN */}
                {showSignIn && (
                  <div className="absolute right-0 top-full z-[100] mt-3 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                    {/* USER INFO */}
                    <div className="border-b border-slate-100 px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-400 text-lg font-bold text-slate-950">
                          {userInitial}
                        </span>

                        <div className="min-w-0">
                          <p className="truncate font-semibold text-slate-950">
                            {userName}
                          </p>

                          <p className="mt-0.5 truncate text-xs text-slate-500">
                            {userEmail}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* PROFILE */}
                    <Link
                      href="/profile"
                      onClick={() => setShowSignIn(false)}
                      className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 transition-colors hover:bg-slate-50"
                    >
                      <span className="text-xl">👤</span>

                      <div>
                        <p className="font-semibold text-slate-950">
                          My Profile
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          View and manage your account
                        </p>
                      </div>
                    </Link>

                    {/* SIGN OUT */}
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-rose-50"
                    >
                      <span className="text-xl">↪️</span>

                      <div>
                        <p className="font-semibold text-rose-600">
                          Sign Out
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Sign out of PicklePlay
                        </p>
                      </div>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* NOT LOGGED IN */}
                <button
                  type="button"
                  onClick={toggleSignIn}
                  className="flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-black"
                >
                  Sign In

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 transition-transform duration-200 ${
                      showSignIn ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {showSignIn && (
                  <div className="absolute right-0 top-full z-[100] mt-3 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                    <Link
                      href="/login"
                      onClick={() => setShowSignIn(false)}
                      className="flex gap-3 border-b border-slate-100 px-5 py-4 transition-colors hover:bg-slate-50"
                    >
                      <span className="text-xl">👤</span>

                      <div>
                        <p className="font-semibold text-slate-950">
                          Sign In
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Player or Staff / Coach
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/register"
                      onClick={() => setShowSignIn(false)}
                      className="flex gap-3 px-5 py-4 transition-colors hover:bg-slate-50"
                    >
                      <span className="text-xl">✨</span>

                      <div>
                        <p className="font-semibold text-slate-950">
                          Create Account
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          New player registration
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}