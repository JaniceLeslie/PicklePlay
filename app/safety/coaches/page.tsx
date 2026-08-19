import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coachResponsibilities = [
  {
    icon: "🤝",
    title: "Model Respectful Behaviour",
    text: "Coaches should create a positive environment through respectful communication, appropriate boundaries, and behaviour that makes young players feel safe and supported.",
  },
  {
    icon: "📋",
    title: "Know Your Responsibilities",
    text: "Coaches should understand PicklePlay child-safety expectations, follow relevant procedures, and know who to contact if a concern arises.",
  },
  {
    icon: "💬",
    title: "Keep Communication Appropriate",
    text: "Communication with young players should remain professional, transparent, age-appropriate, and focused on coaching and participation.",
  },
  {
    icon: "🧠",
    title: "Support Player Voice",
    text: "Young players should feel comfortable speaking up, asking questions, expressing concerns, and participating in decisions that affect their experience.",
  },
];

const warningSigns = [
  {
    icon: "👀",
    title: "Changes in Behaviour",
    text: "Sudden withdrawal, fearfulness, distress, unusual aggression, or other significant changes in behaviour may indicate that a child needs additional support.",
  },
  {
    icon: "🩹",
    title: "Physical Indicators",
    text: "Unexplained injuries, repeated complaints of pain, poor hygiene, exhaustion, or other physical changes should be taken seriously and handled appropriately.",
  },
  {
    icon: "🚩",
    title: "Boundary Concerns",
    text: "Pay attention to behaviour that ignores personal boundaries, creates discomfort, involves inappropriate contact, or places a young player in an unsafe situation.",
  },
  {
    icon: "🗣️",
    title: "A Child Shares a Concern",
    text: "If a young player tells you something that raises a safety concern, stay calm, listen carefully, and follow the appropriate reporting process.",
  },
];

const disclosureSteps = [
  {
    number: "01",
    title: "Listen",
    text: "Give the child your attention and allow them to speak in their own words without interrupting or leading the conversation.",
  },
  {
    number: "02",
    title: "Stay Calm",
    text: "Respond in a calm and supportive way. Avoid showing shock, disbelief, anger, or blame.",
  },
  {
    number: "03",
    title: "Do Not Promise Secrecy",
    text: "Explain that you may need to share the information with the appropriate person so that the child can be supported.",
  },
  {
    number: "04",
    title: "Record the Facts",
    text: "Document what was shared as accurately as possible, including the child’s own words where appropriate.",
  },
  {
    number: "05",
    title: "Report the Concern",
    text: "Follow PicklePlay’s reporting process and escalate the concern to the appropriate child-safety contact.",
  },
];

const faqs = [
  {
    question: "How should I maintain professional boundaries?",
    answer:
      "Keep interactions focused on coaching, use appropriate communication channels, avoid private or unnecessary one-on-one contact, and follow PicklePlay child-safety expectations.",
  },
  {
    question: "What should I do if I feel concerned about a player?",
    answer:
      "Take the concern seriously, note the relevant facts, avoid investigating the situation yourself, and follow the appropriate reporting process.",
  },
  {
    question: "Can I contact a young player directly?",
    answer:
      "Communication should follow approved PicklePlay practices and, where appropriate, involve a parent, guardian, or authorised contact.",
  },
  {
    question: "What if a child tells me something serious?",
    answer:
      "Listen calmly, reassure them that speaking up was the right thing to do, avoid making promises you cannot keep, and report the concern promptly.",
  },
];

export default function CoachesChildSafePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* HERO */}
        <section className="bg-slate-950 px-8 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Child Safe · Coaches
            </p>

            <h1 className="mt-4 max-w-4xl text-7xl font-black leading-[0.9]">
              COACH WITH
              <br />
              <span className="text-orange-500">CARE &amp; CONFIDENCE</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              A safe coaching environment helps young players learn, grow, and
              enjoy the game. Every coach plays an important role in creating
              that environment.
            </p>
          </div>
        </section>

        {/* RESPONSIBILITIES */}
        <section className="px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                Coach Expectations
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Creating a Safe Coaching Environment
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                Coaches help set the standard for how young players are treated,
                supported, and encouraged at PicklePlay.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {coachResponsibilities.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400 text-2xl transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SIGNS */}
        <section className="bg-lime-50 px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Stay Alert
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Recognising Signs That a Child May Need Support
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A single sign does not always mean something is wrong, but
                coaches should remain attentive and respond appropriately when
                concerns arise.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {warningSigns.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl bg-white p-8 shadow-sm"
                >
                  <div className="text-3xl">{item.icon}</div>

                  <h3 className="mt-5 text-2xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLOSURE */}
        <section className="px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                If a Child Speaks Up
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Responding to a Disclosure
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                Your response matters. Keep the focus on listening, supporting,
                and following the correct reporting pathway.
              </p>
            </div>

            <div className="mt-12 grid gap-5">
              {disclosureSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-7 md:grid-cols-[100px_1fr] md:items-center"
                >
                  <span className="text-5xl font-black text-lime-300">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-black text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REPORT CTA */}
        <section className="px-8 pb-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-orange-500 p-10 text-white lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Concerned About a Child?
            </p>

            <div className="mt-3 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-black">
                  Don&apos;t Ignore a Concern
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-orange-50">
                  If something does not feel right, follow the appropriate
                  PicklePlay reporting process and make sure the concern reaches
                  the right person.
                </p>
              </div>

              <a
                href="/child-safe/report"
                className="inline-block rounded-full bg-slate-950 px-7 py-3 text-center font-bold text-white transition-all hover:scale-105 hover:bg-black"
              >
                Report a Concern →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                Coach FAQs
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Common Questions
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-3xl bg-white p-7 shadow-sm"
                >
                  <h3 className="text-lg font-black text-slate-950">
                    {faq.question}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}