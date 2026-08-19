"use client";

import { FormEvent, useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Job = {
  id: number;
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Casual";
  description: string;
  requirements: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Head Coach – Noble Park",
    location: "Pickleball Powerhouse",
    type: "Full-time",
    description:
      "Lead group sessions and private lessons while supporting coach development and program quality.",
    requirements:
      "Minimum PP Level 3 certification required. Approximately 38 hours per week.",
  },
  {
    id: 2,
    title: "Assistant Coach – Moorabbin",
    location: "Melbourne Pickle Club",
    type: "Part-time",
    description:
      "Support senior coaches in clinics, junior programs, and weekly training sessions.",
    requirements:
      "PP Level 1 minimum. Weekend availability is essential.",
  },
  {
    id: 3,
    title: "Venue Manager – Clayton",
    location: "Pickleholic",
    type: "Full-time",
    description:
      "Oversee daily operations, court bookings, venue presentation, and staff scheduling.",
    requirements:
      "Hospitality, recreation, or sports management experience preferred.",
  },
  {
    id: 4,
    title: "Junior Programs Coordinator",
    location: "All Venues",
    type: "Full-time",
    description:
      "Develop and deliver youth pickleball programs across PicklePlay venues.",
    requirements:
      "Experience working with children required. Working With Children Check essential.",
  },
  {
    id: 5,
    title: "Front Desk & Memberships",
    location: "Pickleball Powerhouse",
    type: "Casual",
    description:
      "Welcome players, manage bookings, and assist with memberships and general enquiries.",
    requirements:
      "Customer service experience preferred. Evening and weekend availability valued.",
  },
  {
    id: 6,
    title: "Marketing & Social Media",
    location: "Remote + Melbourne",
    type: "Part-time",
    description:
      "Create content, manage social channels, and support community campaigns.",
    requirements:
      "Strong writing, content creation, and social media skills required.",
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showExpressionForm, setShowExpressionForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setCoverLetter("");
  };

  const closeApplication = () => {
    setSelectedJob(null);
    setShowExpressionForm(false);
    resetForm();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName || !email || !coverLetter) {
      return;
    }

    setSelectedJob(null);
    setShowExpressionForm(false);
    resetForm();
    setShowSuccess(true);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-7xl px-8 py-16">
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Join the Team
            </p>

            <h1 className="mt-2 text-7xl font-light leading-[0.9] text-slate-950">
              CAREERS AT
              <br />
              <span className="text-lime-400">PICKLEPLAY</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              We&apos;re growing across Melbourne. Join a team that&apos;s
              passionate about pickleball, community, and healthy living.
            </p>
          </div>

          {/* Jobs */}
          <div className="mt-14 grid grid-cols-2 gap-6">
            {jobs.map((job) => {
              const typeClass =
                job.type === "Full-time"
                  ? "bg-lime-100 text-lime-700"
                  : job.type === "Part-time"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-sky-100 text-sky-700";

              return (
                <article
                  key={job.id}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-lime-400 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold uppercase text-slate-950">
                        {job.title}
                      </h2>

                      <p className="mt-3 text-sm text-slate-500">
                        📍 {job.location}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${typeClass}`}
                    >
                      {job.type}
                    </span>
                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    {job.description}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {job.requirements}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    className="mt-6 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-slate-800"
                  >
                    Apply Now →
                  </button>
                </article>
              );
            })}
          </div>

          {/* Expression of interest */}
          <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 px-8 py-10 text-center">
            <h2 className="text-2xl font-bold text-slate-950">
              Don&apos;t See Your Role?
            </h2>

            <p className="mt-3 text-slate-500">
              Send us a speculative application and we&apos;ll keep your details
              on file for future opportunities.
            </p>

            <button
              type="button"
              onClick={() => setShowExpressionForm(true)}
              className="mt-6 rounded-full bg-lime-400 px-6 py-3 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-lime-500"
            >
              Send Expression of Interest →
            </button>
          </section>
        </section>
      </main>

      {/* Application modal */}
      {(selectedJob || showExpressionForm) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="bg-slate-950 px-8 py-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-400">
                {selectedJob ? "Job Application" : "Expression of Interest"}
              </p>

              <h2 className="mt-2 text-2xl font-bold uppercase">
                {selectedJob ? selectedJob.title : "Join PicklePlay"}
              </h2>

              <p className="mt-2 text-slate-300">
                {selectedJob
                  ? selectedJob.location
                  : "Tell us how you&apos;d like to contribute."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              <div>
                <label
                  htmlFor="careerName"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Full Name
                </label>

                <input
                  id="careerName"
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="careerEmail"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Email Address
                </label>

                <input
                  id="careerEmail"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="careerPhone"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Phone Number
                </label>

                <input
                  id="careerPhone"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="04XX XXX XXX"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="coverLetter"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Cover Letter
                </label>

                <textarea
                  id="coverLetter"
                  rows={5}
                  value={coverLetter}
                  onChange={(event) => setCoverLetter(event.target.value)}
                  placeholder="Tell us why you&apos;d like to join PicklePlay..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                />
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Resume
                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-2 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-500"
                />
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={closeApplication}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={!fullName || !email || !coverLetter}
                  className={`rounded-xl px-5 py-3 font-semibold transition-colors ${
                    fullName && email && coverLetter
                      ? "bg-lime-400 text-slate-950 hover:bg-lime-500"
                      : "cursor-not-allowed bg-slate-200 text-slate-400"
                  }`}
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-9 text-center shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-100 text-4xl">
              ✓
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-950">
              Application Submitted!
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              Thanks for your interest in PicklePlay. We&apos;ll be in touch if
              your application is shortlisted.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-7 w-full rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 hover:bg-lime-500"
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