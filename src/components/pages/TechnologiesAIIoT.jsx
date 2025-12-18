import React from 'react';

function TechnologiesAIIoT() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • IoT
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            IoT
          </h1>
        </div>
      </section>

      {/* First card: illustration + intro copy */}
      <section className="relative mx-auto max-w-6xl px-4 -mt-16 pb-20">
        <div className="bg-white rounded-[32px] shadow-[0_18px_45px_rgba(15,23,42,0.12)] overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-center px-6 sm:px-10 py-10 sm:py-14">
            {/* Illustration placeholder */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="h-64 sm:h-72 rounded-[40px] bg-emerald-100" />
              </div>
            </div>

            {/* Text content */}
            <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                We inspect the top devices you can use to accelerate your
                application improvement measure so you can convey your portable
                application quickly to the market with less expense for building
                an application. These equivalent devices likewise assist with
                accelerating your venture improvement so assignments complete in
                less time and you can invest more energy on fixing bugs and
                carrying out features.
              </p>
              <p>
                Our IoT‑driven methodology associates sensors, passages,
                availability, cloud and investigation to give significant
                business bits of knowledge and new freedoms for streamlining
                activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form content section */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* Left spacer / layout alignment */}
          <div className="hidden lg:block" />

          <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Our start‑to‑finish IoT arrangements portfolio incorporates sensors,
              availability, cloud, client experience and investigation to give
              monstrous benefits to associations. We help you improve business
              esteem, upgrade proficiency and diminish activities and upkeep
              costs by associating your resources and cycles.
            </p>
            <p>
              We work with driving cloud and equipment suppliers to convey
              best‑of‑class answers for your Internet of Things prerequisites and
              assemble more astute business through associated frameworks.
            </p>
            <p>
              Our group of experts works with customers to instruct and release
              the estimation of IoT. Our insight covers the full range from
              sensors and organization to lifecycle the executives, security,
              applications and continuous checking.
            </p>
            <p>
              We plan and convey arrangements that drive esteem while assisting
              you with exploring complex choices around organization
              accessibility, information streams, security cycles and continuous
              enhancement for your business needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesAIIoT;




