import React from 'react';

function TechnologiesCloudSaas() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • Saas
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Saas
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
                Programming as a Service (SaaS) is a product authorizing and
                conveyance model in which programming is authorized on a
                membership premise and facilitated midway in the cloud. Clients
                ordinarily access applications through an internet browser,
                eliminating the requirement for nearby establishment and
                support.
              </p>
              <p>
                SaaS is a key part of distributed computing close by IaaS and
                PaaS, and it empowers associations to embrace new business
                capacities quicker, lessen forthright expenses and work all the
                more deftly.
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
              SaaS applications are routinely gotten to by clients utilizing a
              light‑weight customer, commonly a web program. This conveyance
              model is utilized for a wide scope of business applications
              including office efficiency, CRM, ERP, bookkeeping, HR, project
              the board and industry‑explicit arrangements.
            </p>
            <p>
              Since the product is facilitated and oversaw by the supplier, the
              cloud (or SaaS) model decreases the requirement for complex
              dissemination and on‑premises framework. Estimating is ordinarily
              membership based—with month to month or yearly charges—and can
              scale depending on the quantity of clients or utilization
              boundaries.
            </p>
            <p>
              Our groups assist associations with assessing, coordinating and
              overseeing SaaS arrangements, guaranteeing that security, joining,
              administration and client reception are totally thought of so you
              can completely understand the worth of SaaS in your business.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesCloudSaas;




