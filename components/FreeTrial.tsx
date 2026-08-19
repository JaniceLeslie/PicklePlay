"use client";

import{useState} from "react";

type FreeTrialProps = {
    isOpen: boolean;
    onClose: () => void;
};

 export default function FreeTrial({ isOpen, onClose , }: FreeTrialProps) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const[venue, setVenue] = useState("");
    const[confirmed, setConfirmed] = useState(false);

    if (!isOpen) return null;
 

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!fullName || !email || !venue || !confirmed) {
        return;
        }

        alert("Free trial request submitted successfully!");

        onClose();

        setFullName("");
        setEmail("");
        setVenue("");
        setConfirmed(false);
    };

   return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-b from-green-950 to-slate-950 px-8 py-8 text-center text-white">
          <div className="text-4xl">🏓</div>

          <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-lime-400">
            New Player Offer
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight">
            FREE 1-HOUR
            <br />
            TRIAL SESSION
          </h2>

          <p className="mt-2 text-sm text-white/70">
            No payment. No commitment.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-7">
          {/* Benefits */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-slate-50 p-4 text-center">
              <div className="text-2xl">🏓</div>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Paddles & balls provided
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 text-center">
              <div className="text-2xl">🧑‍🏫</div>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Coaching tips included
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 text-center">
              <div className="text-2xl">📍</div>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Any of 3 venues
              </p>
            </div>
          </div>

          {/* Full name */}
          <div className="mt-6">
            <label
              htmlFor="fullName"
              className="text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
            />
          </div>

          {/* Venue */}
          <div className="mt-4">
            <label
              htmlFor="venue"
              className="text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Preferred Venue
            </label>

            <select
              id="venue"
              value={venue}
              onChange={(event) => setVenue(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
            >
              <option value="">Select a venue...</option>
              <option value="powerhouse">Pickleball Powerhouse</option>
              <option value="melbournepickleclub">
                Melbourne Pickle Club
              </option>
              <option value="pickleholic">Pickleholic</option>
            </select>
          </div>

          {/* Confirmation */}
          <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-slate-500">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(event) => setConfirmed(event.target.checked)}
              className="mt-1"
            />

            <span>
              I confirm this is my first time at PicklePlay and I have not
              previously claimed a free trial.
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={!fullName || !email || !venue || !confirmed}
            className={`mt-5 w-full rounded-xl px-6 py-4 font-bold transition ${
              fullName && email && venue && confirmed
                ? "bg-lime-400 text-slate-950 hover:bg-lime-500"
                : "cursor-not-allowed bg-slate-200 text-slate-400"
            }`}
          >
            GET MY FREE TRIAL →
          </button>

          <button
            type="button"
            onClick={onClose}
            className="mt-4 w-full text-sm text-slate-400 transition hover:text-slate-700"
          >
            Maybe later
          </button>
        </form>
      </div>
    </div>
  );
}