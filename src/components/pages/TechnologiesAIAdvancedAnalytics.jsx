import React from 'react';

function TechnologiesAIAdvancedAnalytics() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • Advanced Analytics
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Advanced Analytics
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
                Some time ago, there was information. At that point, data was
                conceived and soon the world turned into bits of knowledge.
                Knowledge is the fuel that touches off and speeds up business
                decisions from a position of certainty and preparation.
              </p>
              <p>
                Advanced analytics transforms suppositions and tests into clear
                outcomes and lucidity. It assists ventures with understanding
                what makes a customer grin and stay, and how to present the
                right insight at the exact second of decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form copy section */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* Left spacer to mimic reference layout */}
          <div className="hidden lg:block" />

          <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              The most effective method to pick signals from commotion is to
              transform raw information into bits of knowledge. New sources of
              data, coming at extraordinary speed and high volumes, represent
              both an opportunity and a test. Advanced analytics helps uncover
              covered up promising circumstances, game‑evolving patterns and new
              income streams.
            </p>
            <p>
              Our data analytics group assists customers with becoming Analytics
              Centered Enterprises (ACE), prepared to oversee the information
              duality of conventional and big data environments.
            </p>
            <p>
              We mix individuals, cycles and innovation parts that lift
              examination exercises and make it simpler to reveal the potential
              living in their information. This brings about better approaches
              to adjust information resources, driving more astute plans of
              action and higher returns from analytics investments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesAIAdvancedAnalytics;




