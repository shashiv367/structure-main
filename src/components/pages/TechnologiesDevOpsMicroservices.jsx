import React from 'react';

function TechnologiesDevOpsMicroservices() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • Microservices
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Microservices
          </h1>
        </div>
      </section>

      {/* First card: illustration + main copy */}
      <section className="relative mx-auto max-w-6xl px-4 -mt-16 pb-20">
        <div className="bg-white rounded-[32px] shadow-[0_18px_45px_rgba(15,23,42,0.12)] overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-center px-6 sm:px-10 py-10 sm:py-14">
            {/* Illustration placeholder */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="h-64 sm:h-72 rounded-[40px] bg-purple-900" />
              </div>
            </div>

            {/* Text content */}
            <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                Microservices design goes past just parting a strong application
                into more modest administrations. It is tied in with building a
                group of little, freely deployable administrations that
                cooperate through very much characterized APIs to convey business
                capacity.
              </p>
              <p>
                To completely benefit from this methodology you should consider
                how information is claimed and got to, how administrations
                impart, and how you adjust information across topographies while
                keeping accessibility and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form descriptive section */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* Left spacer for layout match */}
          <div className="hidden lg:block" />

          <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Our microservices approach assists ventures with dispatching new
              highlights quicker, supporting more unmistakable scale and being
              more receptive to client demands. With present‑day information
              models and cloud‑local stages we empower adaptation to
              non‑critical failure and versatility across numerous conditions.
            </p>
            <p>
              We assist planners and engineers with picking information models
              and correspondence designs that are streamlined for every help,
              without forfeiting execution. From API gateways and service meshes
              to event‑driven engineering, we plan structures that keep
              applications hearty yet light‑footed.
            </p>
            <p>
              Our groups plan and convey microservice arrangements that can scale
              quickly and straightforwardly to any throughput required, while
              keeping up with perceivability, checking and operational
              straightforwardness across the whole framework.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesDevOpsMicroservices;




