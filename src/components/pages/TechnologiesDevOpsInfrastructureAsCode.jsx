import React from 'react';

function TechnologiesDevOpsInfrastructureAsCode() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • Infrastructure As Code
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Infrastructure As Code
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
                <div className="h-64 sm:h-72 rounded-[40px] bg-lime-300" />
              </div>
            </div>

            {/* Text content */}
            <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                Infrastructure as Code (IaC) treats foundation—machines, load
                balancers, organizations and design—as portrayals that can be
                rendition controlled and automated similarly as application
                source code.
              </p>
              <p>
                By portraying your surroundings in code, groups can make
                repeatable, auditable and solid conditions that are quick to
                arrangement and simple to change, diminishing arrangement
                mistakes and manual work.
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
              IaC empowers groups to test applications in creation‑like
              conditions from the beginning of the advancement cycle. Numerous
              test conditions can be made and torn down on request while keeping
              them steady and unsurprising.
            </p>
            <p>
              Rather than physically designing workers or cloud assets, changes
              are made to code definitions and applied through mechanized
              pipelines. This forestalls design float and guarantees that the
              ideal state of each climate is plainly characterized.
            </p>
            <p>
              Our DevOps practice helps associations pick instruments, plan
              modules and characterize norms for IaC so that framework can be
              conveyed rapidly, at scale, and with certainty across improvement,
              testing and creation stages.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesDevOpsInfrastructureAsCode;




