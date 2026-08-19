"use client";

import { FormEvent, useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type SchoolOption = {
  icon: string;
  title: string;
  description: string;
  details: string[];
  accent: string;
  iconBg: string;
};

const schoolOptions: SchoolOption[] = [
  {
    icon: "🏫",
    title: "School Incursions",
    description:
      "Bring PicklePlay directly to your school for an active and engaging pickleball experience.",
    details: [
      "Suitable for beginner players",
      "Flexible session lengths",
      "Structured coaching activities",
    ],
    accent: "border-lime-200 bg-lime-50",
    iconBg: "bg-lime-400",
  },
  {
    icon: "🏓",
    title: "After-School Programs",
    description:
      "Give students something active to look forward to after the school day.",
    details: [
      "Weekly program options",
      "Skill-building through games",
      "Designed for young players",
    ],
    accent: "border-sky-200 bg-sky-50",
    iconBg: "bg-sky-400",
  },
  {
    icon: "☀️",
    title: "Holiday Sessions",
    description:
      "Fun pickleball sessions that keep kids moving, learning, and playing during school breaks.",
    details: [
      "Holiday-friendly scheduling",
      "Equipment supplied",
      "Beginner-friendly activities",
    ],
    accent: "border-orange-200 bg-orange-50",
    iconBg: "bg-orange-400",
  },
  {
    icon: "🎉",
    title: "Pop-Up Events",
    description:
      "Add something different to your school fair, community day, or special event.",
    details: [
      "Short-format activities",
      "Great for community events",
      "Flexible setup options",
    ],
    accent: "border-pink-200 bg-pink-50",
    iconBg: "bg-pink-400",
  },
  {
    icon: "🎒",
    title: "Equipment Included",
    description:
      "We make getting started simple by providing the essential pickleball equipment for sessions.",
    details: [
      "Paddles supplied",
      "Balls supplied",
      "Session equipment provided",
    ],
    accent: "border-violet-200 bg-violet-50",
    iconBg: "bg-violet-400",
  },
  {
    icon: "🤝",
    title: "School Support",
    description:
      "We work with schools to shape sessions around student numbers, age groups, and available space.",
    details: [
      "Flexible program planning",
      "Age-appropriate activities",
      "Support from our coaching team",
    ],
    accent: "border-emerald-200 bg-emerald-50",
    iconBg: "bg-emerald-400",
  },
];

export default function EventsPage() {
  const [schoolName, setSchoolName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredProgram, setPreferredProgram] = useState("");
  const [studentCount, setStudentCount] = useState("");
  const [message, setMessage] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const formComplete =
    schoolName &&
    contactPerson &&
    email &&
    preferredProgram &&
    studentCount;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formComplete) {
      return;
    }

    setShowSuccess(true);

    setSchoolName("");
    setContactPerson("");
    setEmail("");
    setPhone("");
    setPreferredProgram("");
    setStudentCount("");
    setMessage("");
  };

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 px-8 py-24 text-white">
          {/* Decorative shapes */}
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime-400/10" />
          <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-orange-500/10" />

          <div className="relative mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Schools &amp; Community
            </p>

            <h1 className="mt-4 max-w-4xl text-7xl font-black leading-[0.9]">
              BRING
              <br />
              <span className="text-orange-500">
                PICKLEBALL
              </span>
              <br />
              TO YOUR SCHOOL
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Fun, active pickleball experiences designed for young players,
              schools, and community groups across Melbourne.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("school-enquiry")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-lime-400 px-7 py-3 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-lime-500"
              >
                Enquire for Your School →
              </button>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("school-options")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Explore Options
              </button>
            </div>
          </div>
        </section>

        {/* School options */}
        <section
          id="school-options"
          className="scroll-mt-24 bg-slate-50 px-8 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                Ways to Play
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Pickleball Built Around Your School
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                From regular after-school sessions to one-off school events,
                PicklePlay can create an experience that suits your students.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {schoolOptions.map((option) => (
                <article
                  key={option.title}
                  className={`group rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${option.accent}`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 ${option.iconBg}`}
                  >
                    {option.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-950">
                    {option.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {option.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {option.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-3 text-sm text-slate-600"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-950">
                          ✓
                        </span>

                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why PicklePlay */}
        <section className="px-8 py-20">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 lg:grid-cols-2">
            <div className="p-10 text-white lg:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Why PicklePlay
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight">
                Easy for Schools.
                <br />
                Fun for Kids.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                We keep sessions simple to organise and exciting to take part
                in, with activities designed around young players.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Beginner friendly",
                  "Equipment provided",
                  "Flexible session formats",
                  "Age-appropriate activities",
                  "Active & engaging",
                  "School-focused planning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-slate-950">
                      ✓
                    </span>

                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center bg-lime-400 p-10 lg:p-14">
              <div className="max-w-md">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">
                  Got an Idea?
                </p>

                <h3 className="mt-3 text-4xl font-black text-slate-950">
                  We Can Build a Session Around It.
                </h3>

                <p className="mt-5 leading-7 text-slate-700">
                  Tell us your school size, age group, location, and what
                  you&apos;re hoping to organise. We&apos;ll help shape the
                  right format.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("school-enquiry")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-7 rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-black"
                >
                  Start an Enquiry →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry */}
        <section
          id="school-enquiry"
          className="scroll-mt-24 bg-slate-50 px-8 py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                School Enquiries
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Let&apos;s Plan Something Fun
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-slate-500">
                Tell us a little about your school or group and what you&apos;re
                looking for. We&apos;ll get back to you with suitable options.
              </p>

              <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm">
                <p className="font-bold text-slate-950">
                  Not sure what to choose?
                </p>

                <p className="mt-3 leading-7 text-slate-500">
                  That&apos;s okay. Select “Not sure yet” in the form and our
                  team can help recommend an option.
                </p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] bg-white p-8 shadow-lg"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="schoolName"
                    className="text-xs font-bold uppercase tracking-wide text-slate-500"
                  >
                    School / Organisation
                  </label>

                  <input
                    id="schoolName"
                    type="text"
                    value={schoolName}
                    onChange={(event) =>
                      setSchoolName(event.target.value)
                    }
                    placeholder="School name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactPerson"
                    className="text-xs font-bold uppercase tracking-wide text-slate-500"
                  >
                    Contact Person
                  </label>

                  <input
                    id="contactPerson"
                    type="text"
                    value={contactPerson}
                    onChange={(event) =>
                      setContactPerson(event.target.value)
                    }
                    placeholder="Full name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wide text-slate-500"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold uppercase tracking-wide text-slate-500"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="04XX XXX XXX"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="program"
                    className="text-xs font-bold uppercase tracking-wide text-slate-500"
                  >
                    Interested In
                  </label>

                  <select
                    id="program"
                    value={preferredProgram}
                    onChange={(event) =>
                      setPreferredProgram(event.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  >
                    <option value="">Select an option</option>
                    <option value="incursion">School Incursion</option>
                    <option value="after-school">
                      After-School Program
                    </option>
                    <option value="holiday">Holiday Session</option>
                    <option value="popup">Pop-Up Event</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="studentCount"
                    className="text-xs font-bold uppercase tracking-wide text-slate-500"
                  >
                    Approx. Students
                  </label>

                  <select
                    id="studentCount"
                    value={studentCount}
                    onChange={(event) =>
                      setStudentCount(event.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  >
                    <option value="">Select group size</option>
                    <option value="under-20">Under 20</option>
                    <option value="20-40">20–40</option>
                    <option value="41-80">41–80</option>
                    <option value="80+">80+</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-wide text-slate-500"
                >
                  Tell Us More
                </label>

                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us what you're hoping to organise..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                />
              </div>

              <button
                type="submit"
                disabled={!formComplete}
                className={`mt-6 w-full rounded-full px-6 py-4 font-bold transition-all ${
                  formComplete
                    ? "bg-lime-400 text-slate-950 hover:bg-lime-500"
                    : "cursor-not-allowed bg-slate-200 text-slate-400"
                }`}
              >
                SEND SCHOOL ENQUIRY →
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Success modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-9 text-center shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-100 text-4xl">
              ✓
            </div>

            <h2 className="mt-6 text-3xl font-black text-slate-950">
              Enquiry Sent!
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              Thanks for getting in touch. The PicklePlay team will review your
              school enquiry and get back to you.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-7 w-full rounded-xl bg-lime-400 px-6 py-3 font-bold text-slate-950 hover:bg-lime-500"
            >
              Done
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}