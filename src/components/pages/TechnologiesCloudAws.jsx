import React from 'react';

function TechnologiesCloudAws() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • AWS Cloud
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            AWS Cloud
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
                We work with you to address your most mind‑boggling and
                extraordinary cloud difficulties utilizing AWS, assisting you
                with building new income streams, increment effectiveness and
                convey convincing client encounters.
              </p>
              <p>
                Regardless of whether you&apos;re hoping to utilize AWS for
                advancement, readiness, cost investment funds or operational
                productivity, our groups assist you with tracking down the right
                blend of administrations and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form descriptive section */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* Left spacer to echo reference layout */}
          <div className="hidden lg:block" />

          <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              We apply profound ability in cloud frameworks, cloud‑local
              engineering, compartment selections, application modernization,
              AI/ML and responsibility administration to help you accelerate
              change with AWS. We assist associations with dealing with the
              difficulties of moving to and utilizing cloud‑based foundations,
              overseeing existing IT resources and modernizing administrations.
            </p>
            <p>
              With broad AWS accreditations and profound experience, our groups
              unite the most recent AWS capacities—from migration and
              modernization to data and analytics—to work for your business
              advantage.
            </p>
            <p>
              Together we plan cloud procedures, landing zones and operational
              models that let you securely scale on AWS while keeping security,
              consistency and cost control at the center of your cloud program.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesCloudAws;




