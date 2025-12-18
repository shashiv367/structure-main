import React from 'react';

function TechnologiesDevOpsContinuousIntegration() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • Continuous Integration
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Continuous Integration
          </h1>
        </div>
      </section>

      {/* First card: illustration + intro content */}
      <section className="relative mx-auto max-w-6xl px-4 -mt-16 pb-20">
        <div className="bg-white rounded-[32px] shadow-[0_18px_45px_rgba(15,23,42,0.12)] overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-center px-6 sm:px-10 py-10 sm:py-14">
            {/* Illustration placeholder */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="h-64 sm:h-72 rounded-[40px] bg-sky-100" />
              </div>
            </div>

            {/* Text block */}
            <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                Continuous Integration (CI) is an improvement practice where
                engineers routinely incorporate code into a common storehouse,
                ordinarily a few times each day. Every incorporation can then be
                affirmed by mechanized structures and tests.
              </p>
              <p>
                One of the critical advantages of continuous incorporation is the
                capacity to distinguish mistakes quickly and find them without
                any problem. As each change is little, pinpointing the specific
                change that presented an issue is simpler and fixes can be
                conveyed rapidly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form descriptive section */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* Left spacer for layout */}
          <div className="hidden lg:block" />

          <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              In current programming improvement, CI is regularly joined with
              update control, construct computerization and robotized testing.
              Constant sending and nonstop conveyance rehearses keep your
              application deployable whenever and push your primary codebase into
              creation at whatever point new changes are prepared.
            </p>
            <p>
              By coordinating as often as possible, there is significantly less
              back‑tracking to find where things turned out badly and more energy
              can be spent on building highlights. Continuous Integration is
              generally modest contrasted with the expense of deferring
              reconciliation and managing enormous, dangerous changes.
            </p>
            <p>
              Our DevOps specialists assist groups with characterizing CI
              pipelines, choosing fitting instruments, and mechanizing assemble,
              test and bundle steps. This empowers groups to move rapidly while
              keeping up with excellent guidelines and dependable deliveries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesDevOpsContinuousIntegration;




