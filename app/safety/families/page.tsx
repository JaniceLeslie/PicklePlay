import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const parentSupport = [
  {
    icon: "💬",
    title: "Talk Openly With Your Child",
    text: "Encourage your child to speak about their experiences, ask questions, and tell you if something during a session makes them feel uncomfortable.",
  },
  {
    icon: "🤝",
    title: "Keep Communication Open",
    text: "Regular conversations can help children feel comfortable sharing both the positive parts of their experience and anything that may be worrying them.",
  },
  {
    icon: "🌟",
    title: "Include Them in Decisions",
    text: "Where appropriate, involve your child in decisions about their participation and listen to how they feel about their coaching experience.",
  },
  {
    icon: "❤️",
    title: "Encourage Respect",
    text: "Help reinforce respectful behaviour towards coaches, other players, families, and venue staff so everyone can enjoy a positive environment.",
  },
];

const warningSigns = [
  {
    icon: "👀",
    title: "Changes in Behaviour",
    text: "Changes such as becoming unusually withdrawn, anxious, upset, fearful, or reluctant to attend sessions may be worth checking in about.",
  },
  {
    icon: "🩹",
    title: "Physical Concerns",
    text: "Unexplained injuries, repeated complaints of pain, unusual tiredness, or other noticeable physical changes should not be ignored.",
  },
  {
    icon: "🚩",
    title: "Boundary Concerns",
    text: "Take concerns seriously if your child describes behaviour, communication, or physical contact that makes them feel unsafe or uncomfortable.",
  },
  {
    icon: "🗣️",
    title: "Your Child Tells You Something",
    text: "If your child shares a concern, listen carefully and calmly. Let them explain what happened in their own words and reassure them that speaking up was the right thing to do.",
  },
];

const concernSteps = [
  {
    number: "01",
    title: "Listen",
    text: "Give your child time to explain what happened without interrupting or pressuring them for more information.",
  },
  {
    number: "02",
    title: "Reassure",
    text: "Let them know that you are listening, that their concerns matter, and that they did the right thing by speaking to you.",
  },
  {
    number: "03",
    title: "Write It Down",
    text: "Make a clear record of what your child told you while the details are still fresh.",
  },
  {
    number: "04",
    title: "Raise the Concern",
    text: "Contact the appropriate PicklePlay representative so the concern can be handled through the correct process.",
  },
];

const faqs = [
  {
    question: "How can I talk to my child about feeling safe?",
    answer:
      "Keep the conversation simple and regular. Ask how sessions are going, what they enjoy, and whether anything has made them feel uncomfortable or worried.",
  },
  {
    question: "What if my child doesn't want to talk?",
    answer:
      "Avoid forcing the conversation. Let them know they can speak with you whenever they are ready and continue providing a calm and supportive environment.",
  },
  {
    question: "Can parents watch sessions?",
    answer:
      "Viewing arrangements may depend on the program and venue. Check the relevant program information or speak with the PicklePlay team before the session.",
  },
  {
    question: "What should I do if something doesn't feel right?",
    answer:
      "Take your concern seriously. Record the relevant information and contact the appropriate PicklePlay representative rather than trying to investigate the situation yourself.",
  },
  {
    question: "What if my child needs additional support?",
    answer:
      "Let the PicklePlay team know about relevant support needs so appropriate participation arrangements can be discussed where possible.",
  },
];

export default function FamiliesSafetyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 px-8 py-24 text-white">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime-400/10" />
          <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-orange-500/10" />

          <div className="relative mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Safety &amp; Wellbeing · For Families
            </p>

            <h1 className="mt-4 max-w-4xl text-7xl font-black leading-[0.9]">
              HELP THEM FEEL
              <br />
              <span className="text-orange-500">
                SAFE TO PLAY.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Parents and guardians play an important role in helping young
              players feel safe, confident, heard, and supported throughout
              their PicklePlay experience.
            </p>

            <a
              href="#family-safety"
              className="mt-9 inline-block rounded-full bg-lime-400 px-7 py-3 font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-lime-500"
            >
              Safety Information ↓
            </a>
          </div>
        </section>

        {/* SUPPORTING YOUR CHILD */}
        <section
          id="family-safety"
          className="scroll-mt-24 px-8 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                Supporting Young Players
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Helping Your Child Feel Heard
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                Simple conversations before and after sessions can help young
                players understand that their feelings, boundaries, and
                experiences matter.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {parentSupport.map((item) => (
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

        {/* WARNING SIGNS */}
        <section className="bg-orange-50 px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Know What to Look For
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                When Something Doesn&apos;t Feel Right
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Changes do not always mean that something is wrong, but knowing
                what to notice can help you start an important conversation
                with your child.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {warningSigns.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
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

        {/* WHAT TO DO */}
        <section className="px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                If You Have a Concern
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                What Should You Do?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                If your child tells you about something concerning, focus first
                on listening and supporting them.
              </p>
            </div>

            <div className="mt-12 grid gap-5">
              {concernSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:shadow-lg md:grid-cols-[100px_1fr] md:items-center"
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
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-lime-400 p-10 lg:p-14">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">
                  Need to Raise a Concern?
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-950">
                  We Want Families to Speak Up.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-700">
                  If you have a concern about your child&apos;s experience,
                  behaviour you have observed, or something your child has
                  shared, use our reporting pathway to contact the appropriate
                  PicklePlay team member.
                </p>
              </div>

              <a
                href="/safety/policies"
                className="inline-block rounded-full bg-slate-950 px-7 py-3 text-center font-bold text-white transition-all hover:scale-105 hover:bg-black"
              >
                Policies &amp; Reporting →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-500">
                Family FAQs
              </p>

              <h2 className="mt-3 text-5xl font-black text-slate-950">
                Questions Families Often Ask
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500">
                Quick guidance for parents, guardians, and young PicklePlay
                participants.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-100 font-black text-lime-700">
                    ?
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-950">
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