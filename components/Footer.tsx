import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-4 gap-14 pb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo3.png"
                alt="PicklePlay Logo"
                width={120}
                height={120}
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Melbourne&apos;s home for pickleball. Three venues, twelve
              courts, seven days a week.
            </p>

            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-sm font-bold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-400 hover:text-slate-950"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-sm font-bold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-400 hover:text-slate-950"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-sm font-bold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-400 hover:text-slate-950"
              >
                TT
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-lime-300">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-slate-400">
              <Link
                href="/booking"
                className="transition-colors hover:text-white"
              >
                Book a Court
              </Link>

              <Link
                href="/programs"
                className="transition-colors hover:text-white"
              >
                Programs
              </Link>

              <Link
                href="/events"
                className="transition-colors hover:text-white"
              >
                Events
              </Link>

              <Link
                href="/shop"
                className="transition-colors hover:text-white"
              >
                Shop
              </Link>

              <Link
                href="/coaching"
                className="transition-colors hover:text-white"
              >
                Coaching
              </Link>
            </div>
          </div>

          {/* Venues */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-lime-300">
              Our Venues
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <p className="font-bold text-white">
                  Pickleball Powerhouse
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-400">
                  2–4 Overseas Dr
                  <br />
                  Noble Park North VIC 3174
                </p>
              </div>

              <div>
                <p className="font-bold text-white">
                  Melbourne Pickle Club
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-400">
                  4 Nellbern Road
                  <br />
                  Moorabbin VIC 3189
                </p>
              </div>

              <div>
                <p className="font-bold text-white">Pickleholic</p>
                <p className="mt-1 text-sm leading-5 text-slate-400">
                  45 Winterton Road
                  <br />
                  Clayton VIC 3168
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-lime-300">
              Get in Touch
            </h3>

            <div className="mt-6 space-y-5 text-slate-400">
              <p>✉️ hello@pickleplay.com.au</p>
              <p>📞 Contact us online</p>
              <p>⏰ Mon–Sun · 7:00 AM–9:00 PM</p>
            </div>

            <Link
              href="/trial"
              className="mt-8 block rounded-2xl bg-gradient-to-r from-lime-400 to-emerald-500 px-6 py-4 text-center font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Book a Free Trial →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-slate-800 py-8 text-sm text-slate-500">
          <p>© 2026 PicklePlay Melbourne. All rights reserved.</p>

          <div className="flex gap-7">
            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/careers"
              className="transition-colors hover:text-white"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}