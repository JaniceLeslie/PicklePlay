"use client";

import { useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Coach = {
  id: number;
  name: string;
  emoji: string;
  level: string;
  specialty: string;
  venue: string;
  days: string[];
  times: string[];
  price: number;
};

const coaches: Coach[] = [
  {
    id: 1,
    name: "Coach Sarah L.",
    emoji: "🧑‍🏫",
    level: "PP Level 3 · Pickleball Australia",
    specialty: "Beginner clinics · Adult programs",
    venue: "Pickleball Powerhouse",
    days: ["Monday", "Wednesday", "Friday"],
    times: ["9:00 AM", "11:00 AM", "2:00 PM"],
    price: 85,
  },
  {
    id: 2,
    name: "Coach Devon K.",
    emoji: "🧑‍🏫",
    level: "PP Level 2 · Junior Specialist",
    specialty: "Junior Academy · Kids programs",
    venue: "Pickleholic",
    days: ["Tuesday", "Thursday", "Saturday"],
    times: ["10:00 AM", "1:00 PM", "4:00 PM"],
    price: 85,
  },
  {
    id: 3,
    name: "Coach James R.",
    emoji: "🧑‍🏫",
    level: "PP Level 3 · Tournament Certified",
    specialty: "Intermediate · Advanced drills",
    venue: "Melbourne Pickle Club",
    days: ["Wednesday", "Friday", "Sunday"],
    times: ["8:00 AM", "12:00 PM", "5:00 PM"],
    price: 95,
  },
  {
    id: 4,
    name: "Coach Alex V.",
    emoji: "🥇",
    level: "PP Level 4 · National Ranking",
    specialty: "Competitive · Tournament preparation",
    venue: "Pickleholic",
    days: ["Tuesday", "Thursday", "Saturday"],
    times: ["7:00 AM", "3:00 PM", "6:00 PM"],
    price: 110,
  },
  {
    id: 5,
    name: "Coach Maria T.",
    emoji: "👩‍🏫",
    level: "PP Level 2 · Youth Specialist",
    specialty: "Little Picklers · Kids clinics",
    venue: "Pickleball Powerhouse",
    days: ["Saturday", "Sunday"],
    times: ["9:00 AM", "11:00 AM", "1:00 PM"],
    price: 80,
  },
  {
    id: 6,
    name: "Coach Pat M.",
    emoji: "🏆",
    level: "PP Level 2 · Seniors Specialist",
    specialty: "Senior social play · Low-impact sessions",
    venue: "All Venues",
    days: ["Monday", "Wednesday", "Friday"],
    times: ["8:00 AM", "10:00 AM", "12:00 PM"],
    price: 75,
  },
];

export default function CoachingPage() {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const getSlotId = (
    coachId: number,
    day: string,
    time: string,
  ) => `${coachId}-${day}-${time}`;

  const openCoachModal = (coach: Coach) => {
    setSelectedCoach(coach);
    setSelectedDay("");
    setSelectedTime("");
  };

  const closeCoachModal = () => {
    setSelectedCoach(null);
    setSelectedDay("");
    setSelectedTime("");
  };

  const confirmLesson = () => {
    if (!selectedCoach || !selectedDay || !selectedTime) {
      return;
    }

    const slotId = getSlotId(
      selectedCoach.id,
      selectedDay,
      selectedTime,
    );

    setBookedSlots((currentSlots) =>
      currentSlots.includes(slotId)
        ? currentSlots
        : [...currentSlots, slotId],
    );

    setSelectedCoach(null);
    setSelectedDay("");
    setSelectedTime("");
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
              Expert Instruction · All Levels
            </p>

            <h1 className="mt-2 text-7xl font-light leading-[0.9] text-slate-950">
              FIND A
              <br />
              <span className="text-lime-400">COACH</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              Book private lessons or group sessions with certified
              pickleball coaches across our Melbourne venues.
            </p>
          </div>

          {/* Coach cards */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            {coaches.map((coach) => (
              <article
                key={coach.id}
                className="group flex min-h-[310px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Card top */}
                <div className="border-b border-slate-200 bg-slate-50 p-6">
                  <div className="text-3xl">{coach.emoji}</div>

                  <h2 className="mt-4 text-xl font-bold uppercase text-slate-950">
                    {coach.name}
                  </h2>

                  <p className="mt-2 text-sm font-semibold text-lime-500">
                    {coach.level}
                  </p>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-slate-600">{coach.specialty}</p>

                  <div className="mt-5 space-y-2 text-sm text-slate-500">
                    <p>📍 {coach.venue}</p>
                    <p>📅 {coach.days.join(", ")}</p>
                  </div>

                  <div className="mt-auto flex items-end justify-between pt-7">
                    <div>
                      <p className="text-2xl font-black text-slate-950">
                        A${coach.price}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        per session
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => openCoachModal(coach)}
                      className="rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-lime-500"
                    >
                      BOOK
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Booking modal */}
      {selectedCoach && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* Modal header */}
            <div className="bg-slate-950 px-8 py-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-400">
                Book Private Lesson
              </p>

              <h2 className="mt-2 text-3xl font-bold uppercase">
                {selectedCoach.name}
              </h2>

              <p className="mt-2 text-slate-300">
                {selectedCoach.specialty}
              </p>
            </div>

            {/* Modal content */}
            <div className="p-8">
              <div className="grid grid-cols-2 gap-5 rounded-2xl bg-slate-50 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Venue
                  </p>

                  <p className="mt-2 font-semibold text-slate-950">
                    {selectedCoach.venue}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Duration
                  </p>

                  <p className="mt-2 font-semibold text-slate-950">
                    60 minutes
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Level
                  </p>

                  <p className="mt-2 font-semibold text-slate-950">
                    {selectedCoach.level}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Price
                  </p>

                  <p className="mt-2 font-semibold text-slate-950">
                    A${selectedCoach.price}
                  </p>
                </div>
              </div>

              {/* Select day */}
              <div className="mt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Select Day
                </p>

                <div className="mt-3 flex flex-wrap gap-3">
                  {selectedCoach.days.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => {
                        setSelectedDay(day);
                        setSelectedTime("");
                      }}
                      className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                        selectedDay === day
                          ? "border-lime-400 bg-lime-400 text-slate-950"
                          : "border-slate-200 text-slate-600 hover:border-lime-400"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select time */}
              <div className="mt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Select Time
                </p>

                {!selectedDay ? (
                  <div className="mt-3 rounded-2xl bg-slate-50 px-5 py-6 text-center text-slate-400">
                    Select a day first to view available times.
                  </div>
                ) : (
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {selectedCoach.times.map((time) => {
                      const slotId = getSlotId(
                        selectedCoach.id,
                        selectedDay,
                        time,
                      );

                      const isBooked = bookedSlots.includes(slotId);
                      const isSelected = selectedTime === time;

                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={isBooked}
                          onClick={() => setSelectedTime(time)}
                          className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                            isBooked
                              ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
                              : isSelected
                                ? "border-lime-400 bg-lime-50 text-slate-950"
                                : "border-slate-200 text-slate-600 hover:border-lime-400"
                          }`}
                        >
                          <span>{time}</span>

                          {isBooked && (
                            <span className="mt-1 block text-xs font-medium">
                              Booked
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Summary */}
              <div className="mt-7 rounded-2xl border border-slate-200 p-5">
                <div className="flex justify-between text-slate-500">
                  <span>Coach</span>
                  <span className="font-semibold text-slate-950">
                    {selectedCoach.name}
                  </span>
                </div>

                <div className="mt-3 flex justify-between text-slate-500">
                  <span>Day</span>
                  <span className="font-semibold text-slate-950">
                    {selectedDay || "—"}
                  </span>
                </div>

                <div className="mt-3 flex justify-between text-slate-500">
                  <span>Time</span>
                  <span className="font-semibold text-slate-950">
                    {selectedTime || "—"}
                  </span>
                </div>

                <div className="my-4 border-t border-slate-200" />

                <div className="flex justify-between text-lg font-bold text-slate-950">
                  <span>Total</span>
                  <span>A${selectedCoach.price}.00</span>
                </div>
              </div>

              {/* Modal buttons */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={closeCoachModal}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  disabled={!selectedDay || !selectedTime}
                  onClick={confirmLesson}
                  className={`rounded-xl px-5 py-3 font-semibold transition-colors ${
                    selectedDay && selectedTime
                      ? "bg-lime-400 text-slate-950 hover:bg-lime-500"
                      : "cursor-not-allowed bg-slate-200 text-slate-400"
                  }`}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
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
              Lesson Booked!
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              Your private coaching session has been confirmed. That time slot
              is now marked as booked.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-7 w-full rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-500"
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