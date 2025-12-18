import React from 'react';

function TechnologiesDevOpsContinuousDelivery() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • Continuous Delivery
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Continuous Delivery
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
                Continuous Delivery is the capacity to get changes—including new
                highlights, design changes, bug fixes and investigations—into
                creation rapidly and securely in a repeatable manner. It
                guarantees that our code is consistently in a deployable state,
                even as numerous designers submit changes constantly.
              </p>
              <p>
                By eliminating long reconciliation, testing and solidifying
                stages, Continuous Delivery assists groups with conveying value
                to clients all the more habitually while keeping up with high
                quality norms.
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
              Continuous Delivery can help associations of any size become as
              nimble as new businesses. Through dependable, generally safe
              deliveries, groups can ceaselessly change programming in light of
              client input, market changes and business technique.
            </p>
            <p>
              With CD, improvement groups assemble, test and convey in short
              cycles so they can dependably deliver their item whenever. This
              lessens the expense, time and hazard of every change by making the
              sending cycle repeatable and unsurprising.
            </p>
            <p>
              Nonstop conveyance is regularly joined with Continuous Integration
              in a CI/CD pipeline, enabling application groups to deliver
              gradual, all around tried code changes to creation rapidly and
              routinely.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesDevOpsContinuousDelivery;




