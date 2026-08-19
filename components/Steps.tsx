export default function Steps() {
  return (
    <section className="bg-slate-50 px-8 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Simple &amp; Easy
          </p>

          <h2 className="text-5xl font-black leading-tight text-slate-950">
            Book a Lesson in 3 Easy Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Choose the right session, find a convenient location, and get your
            child ready to play.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="group min-h-[280px] rounded-3xl border border-lime-200 bg-lime-50 p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-8 flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400 text-2xl transition-transform duration-300 group-hover:scale-110">
                🏓
              </div>

              <span className="text-6xl font-black text-lime-200">
                01
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              Choose a Program
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore our kids pickleball lessons and choose the session that
              best suits your child&apos;s age and experience.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group min-h-[280px] rounded-3xl border border-sky-200 bg-sky-50 p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-8 flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-400 text-2xl transition-transform duration-300 group-hover:scale-110">
                📍
              </div>

              <span className="text-6xl font-black text-sky-200">
                02
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              Pick a Location
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Choose from our Melbourne locations and find the venue that works
              best for your family.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group min-h-[280px] rounded-3xl border border-orange-200 bg-orange-50 p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-8 flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-2xl transition-transform duration-300 group-hover:scale-110">
                ✅
              </div>

              <span className="text-6xl font-black text-orange-200">
                03
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              Book &amp; Get Ready
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Select an available lesson, confirm your booking, and get ready
              for a fun session on court.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}