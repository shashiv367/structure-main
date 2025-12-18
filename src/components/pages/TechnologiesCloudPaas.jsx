import React from 'react';

function TechnologiesCloudPaas() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • Paas
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Paas
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
                <div className="h-64 sm:h-72 rounded-[40px] bg-sky-100" />
              </div>
            </div>

            {/* Text content */}
            <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                Platform‑as‑a‑Service (PaaS) is a distributed computing offering
                in which a supplier conveys a total stage—runtime, structures
                and tooling—so groups can make, run and oversee applications
                without building and keeping up the fundamental framework.
              </p>
              <p>
                By giving a completely overseen stage, PaaS eliminates a large
                part of the intricacy of provisioning workers, organizations and
                capacity, empowering engineers to zero in on composing code and
                conveying new business capacities quicker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form descriptive section */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* Left spacer */}
          <div className="hidden lg:block" />

          <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              PaaS arrangements commonly incorporate application runtimes,
              information administrations, informing, character and coordination
              abilities, alongside CI/CD pipelines and checking. Clients send
              their applications to the stage while the supplier deals with the
              fundamental IT segments.
            </p>
            <p>
              PaaS can be conveyed over open, private or crossover mists.
              Contingent upon the model, the cloud supplier might run all
              framework segments in their own datacenters, or a piece of the
              stack may run inside the client&apos;s current circumstance as a
              half and half sending.
            </p>
            <p>
              Our groups help assess and receive PaaS contributions, plan
              application designs that exploit oversaw administrations, and set
              up DevOps practices so applications can be dispatched and scaled
              rapidly while keeping dependability and security at the front.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesCloudPaas;




