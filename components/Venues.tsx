import Image from "next/image";
import Link from "next/link";

export default function Venues() {
  return (
    <section className="bg-slate-50 px-8 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-4 inline-block rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Our Locations
            </p>

            <h2 className="text-5xl font-black leading-tight text-slate-950">
              Learn &amp; Play Across
              <br />
              Melbourne
            </h2>
          </div>
        </div>

        {/* Venue Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Pickleball Powerhouse */}
          <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/pickleballpowerhouse.jpg"
                alt="Pickleball Powerhouse"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                Noble Park North
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Pickleball Powerhouse
              </h3>

              <p className="mt-3 text-slate-500">
                2–4 Overseas Dr, Noble Park North VIC 3174
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <p className="text-sm font-medium text-slate-500">
                  Kids lessons available
                </p>

                <Link
                  href="/program?venue=powerhouse"
                  className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-lime-500"
                >
                  Book a Lesson →
                </Link>
              </div>
            </div>
          </div>

          {/* Melbourne Pickle Club */}
          <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/melbournepickleclub.jpg"
                alt="Melbourne Pickle Club"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                Moorabbin
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Melbourne Pickle Club
              </h3>

              <p className="mt-3 text-slate-500">
                4 Nellbern Road, Moorabbin VIC 3189
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <p className="text-sm font-medium text-slate-500">
                  Kids lessons available
                </p>

                <Link
                  href="/program?venue=melbournepickleclub"
                  className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-lime-500"
                >
                  Book a Lesson →
                </Link>
              </div>
            </div>
          </div>

          {/* Pickleholic */}
          <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/pickleholic.webp"
                alt="Pickleholic"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                Clayton
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Pickleholic
              </h3>

              <p className="mt-3 text-slate-500">
                45 Winterton Road, Clayton VIC 3168
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <p className="text-sm font-medium text-slate-500">
                  Kids lessons available
                </p>

                <Link
                  href="/program?venue=pickleholic"
                  className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-lime-500"
                >
                  Book a Lesson →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}