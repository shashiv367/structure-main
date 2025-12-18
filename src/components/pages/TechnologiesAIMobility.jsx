import React from 'react';

function TechnologiesAIMobility() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • Mobility
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Mobility
          </h1>
        </div>
      </section>

      {/* First card: illustration + intro text */}
      <section className="relative mx-auto max-w-6xl px-4 -mt-16 pb-20">
        <div className="bg-white rounded-[32px] shadow-[0_18px_45px_rgba(15,23,42,0.12)] overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-center px-6 sm:px-10 py-10 sm:py-14">
            {/* Illustration placeholder */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="h-64 sm:h-72 rounded-[40px] bg-sky-100" />
              </div>
            </div>

            {/* Text content */}
            <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                We work intimately with our customers to initially recognize
                business destinations, characterize an answer system and build
                up a mobility guide for execution. In light of the guide and
                design created during the assessment and particular stage we
                convey specially fabricated arrangements with far reaching
                business rationale, productive execution and particular
                versatility.
              </p>
              <p>
                Mobility‑driven application advancement administrations of any
                intricacy with staggering ability. We offer a wide scope of
                administrations to clients addressing mobility‑centric
                arrangements to associations all throughout the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form content section */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* Left spacer / layout match */}
          <div className="hidden lg:block" />

          <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Recruit versatile application designers from mobility to create
              execution‑situated and business‑driven portable applications. This
              is a period of portability and billions of individuals are
              utilizing cell phones and versatile applications consistently
              across the world; each business presently needs to have a strong
              mobile presence.
            </p>
            <p>
              Building an application can be an expensive and escalated
              measure, both regarding time taken and monetary assets required.
              We help you pick the correct methodology and engineering so you
              can deliver excellent portable experiences without pointless
              overhead.
            </p>
            <p>
              We inspect the devices and cycles that can speed up your
              application improvement measure so you can deliver your portable
              application quickly to the market with less expense for building
              and keeping up the application.
            </p>
            <p>
              By accelerating your venture improvement, you can invest more
              energy on fixing bugs, carrying out new highlights, and driving
              better outcomes for your clients through mobility‑first
              arrangements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesAIMobility;




