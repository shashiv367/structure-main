import React from 'react';

function TechnologiesCloudAzure() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • Microsoft Azure
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Microsoft Azure
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
                As Azure keeps on developing, it very well may be a test to
                execute and oversee. We unite profound aptitude in Microsoft
                cloud advancement, modernization and administration so you can
                benefit from your Azure and cloud venture.
              </p>
              <p>
                From application modernization and information stages to
                joining with Microsoft Dynamics 365 and different SaaS items, we
                help you construct secure, versatile arrangements on top of the
                Azure stage.
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
              We help you decrease intricacy and cost while expanding the
              worth you get from Azure. Our groups work close by your business,
              promoting and IT partners to plan and convey cloud‑local
              applications, information administrations and joining with
              existing frameworks.
            </p>
            <p>
              Utilizing Azure administrations like App Service, Functions,
              Kubernetes, information administrations and security controls, we
              plan conditions that are dependable, adaptable and simpler to
              work. We likewise assist you with setting up administration and
              DevOps rehearses so new capacities can be conveyed securely and
              reliably.
            </p>
            <p>
              From first relocation through progressing advancement, we give
              direction on engineering, cost improvement, checking and
              security—so you can remain associated with clients and work
              all the more viably any place your groups are found.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesCloudAzure;




