import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const sections = [
  {
    number: "01",
    title: "General",
    content: [
      "By accessing or using PicklePlay, you agree to these Terms and Conditions.",
      "You must provide accurate information when making a booking, registering for an event, purchasing a product, or submitting an enquiry.",
      "PicklePlay may update these terms from time to time. Continued use of the website means you accept the updated terms.",
    ],
  },
  {
    number: "02",
    title: "Court Bookings",
    content: [
      "Court bookings are subject to availability and are not confirmed until the booking process is completed.",
      "Players must arrive on time. Late arrival does not extend the original booking period.",
      "Customers are responsible for checking the selected venue, date, court, and time before confirming a booking.",
      "PicklePlay may cancel or relocate a booking where required for safety, maintenance, events, or operational reasons.",
    ],
  },
  {
    number: "03",
    title: "Cancellations & Refunds",
    content: [
      "Bookings cancelled at least 24 hours before the scheduled start time may be eligible for a refund or account credit.",
      "Late cancellations and no-shows may be non-refundable.",
      "Event and program fees may have different cancellation conditions, which will be displayed during registration.",
      "Approved refunds may take several business days to appear in the original payment method.",
    ],
  },
  {
    number: "04",
    title: "Programs & Coaching",
    content: [
      "Participants must follow all instructions provided by coaches and venue staff.",
      "Children must meet the stated age requirements for junior programs.",
      "PicklePlay may change coaches, session times, venues, or program schedules where reasonably necessary.",
      "Private coaching bookings are subject to individual coach availability.",
    ],
  },
  {
    number: "05",
    title: "Events & Group Bookings",
    content: [
      "Event registration is subject to capacity limits and may close once all available places are filled.",
      "Group booking enquiries are not confirmed reservations until approved by PicklePlay.",
      "Organisers are responsible for providing accurate participant numbers and relevant safety information.",
      "Event schedules may change because of weather, venue availability, or operational requirements.",
    ],
  },
  {
    number: "06",
    title: "Free Trials",
    content: [
      "Free trial offers are limited to new players unless stated otherwise.",
      "Only one free trial may be claimed per person.",
      "Free trials are subject to venue, coach, and court availability.",
      "PicklePlay may refuse or cancel duplicate or ineligible trial requests.",
    ],
  },
  {
    number: "07",
    title: "Shop Purchases",
    content: [
      "Product prices are displayed in Australian dollars unless stated otherwise.",
      "Product availability, colours, sizes, and specifications may change.",
      "Returns may be accepted within 30 days where items are unused, unworn, and returned in their original condition.",
      "Personalised, used, or hygiene-sensitive items may not be eligible for return.",
    ],
  },
  {
    number: "08",
    title: "Safety & Conduct",
    content: [
      "Players participate at their own risk and should only take part when medically fit to do so.",
      "Appropriate footwear and safe conduct are required at all venues.",
      "Abusive, discriminatory, dangerous, or disruptive behaviour may result in removal from the venue.",
      "Any injury, hazard, or damaged equipment should be reported to venue staff immediately.",
    ],
  },
  {
    number: "09",
    title: "Privacy",
    content: [
      "PicklePlay may collect personal information required to process bookings, registrations, purchases, and enquiries.",
      "Personal information will only be used for legitimate business purposes and handled in accordance with applicable privacy requirements.",
      "Payment information should be processed through approved payment providers and should not be stored directly by PicklePlay unless securely authorised.",
    ],
  },
  {
    number: "10",
    title: "Website Use",
    content: [
      "You must not misuse the website, interfere with its operation, or attempt to access restricted systems.",
      "Website content, branding, designs, and original materials may not be copied or commercially reused without permission.",
      "PicklePlay does not guarantee that the website will always operate without interruption or error.",
    ],
  },
  {
    number: "11",
    title: "Liability",
    content: [
      "To the extent permitted by law, PicklePlay is not responsible for indirect loss resulting from use of the website or participation in activities.",
      "Nothing in these terms excludes rights that cannot legally be excluded under Australian consumer law.",
      "Users remain responsible for their personal belongings while attending a venue.",
    ],
  },
  {
    number: "12",
    title: "Contact",
    content: [
      "Questions about these Terms and Conditions can be sent to hello@pickleplay.com.au.",
      "For booking support, customers should include their name, venue, booking date, and relevant booking details.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-7xl px-8 py-16">
          {/* Heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Legal Information
            </p>

            <h1 className="mt-2 text-7xl font-light leading-[0.9] text-slate-950">
              TERMS &amp;
              <br />
              <span className="text-lime-400">CONDITIONS</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
              These terms explain the rules that apply when using PicklePlay,
              making bookings, joining programs, registering for events, or
              purchasing products.
            </p>

            <p className="mt-4 text-sm font-semibold text-slate-400">
              Last updated: 4 August 2026
            </p>
          </div>

          {/* Notice */}
          <section className="mt-12 rounded-3xl border border-lime-200 bg-lime-50 px-8 py-7">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xl">
                i
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Portfolio Demonstration
                </h2>

                <p className="mt-2 leading-7 text-slate-600">
                  PicklePlay is currently presented as a portfolio project.
                  These terms are sample website content and should be reviewed
                  by a qualified legal professional before any real commercial
                  launch.
                </p>
              </div>
            </div>
          </section>

          {/* Terms layout */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
            {/* Table of contents */}
            <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                On This Page
              </p>

              <nav className="mt-5 space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.number}
                    href={`#section-${section.number}`}
                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-white hover:text-slate-950"
                  >
                    <span className="font-semibold text-lime-500">
                      {section.number}
                    </span>

                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Terms content */}
            <div className="space-y-6">
              {sections.map((section) => (
                <article
                  key={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-4xl font-light text-lime-400">
                      {section.number}
                    </span>

                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-slate-950">
                        {section.title}
                      </h2>

                      <ul className="mt-5 space-y-4">
                        {section.content.map((paragraph) => (
                          <li
                            key={paragraph}
                            className="flex gap-3 leading-7 text-slate-600"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-400" />
                            <span>{paragraph}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom contact */}
          <section className="mt-12 flex flex-col justify-between gap-6 rounded-3xl bg-slate-950 px-8 py-9 text-white md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-400">
                Need Help?
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Have a question about these terms?
              </h2>

              <p className="mt-2 text-slate-400">
                Contact the PicklePlay team for general information.
              </p>
            </div>

            <a
              href="mailto:hello@pickleplay.com.au"
              className="rounded-full bg-lime-400 px-6 py-3 text-center font-bold text-slate-950 transition-all hover:scale-105 hover:bg-lime-500"
            >
              Email PicklePlay →
            </a>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}