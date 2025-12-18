import React from 'react';

function TechnologiesAIRpa() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top gradient hero, similar to reference */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • RPA
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            RPA
          </h1>
        </div>
      </section>

      {/* Card that overlaps hero with image + copy, like the screenshot */}
      <section className="relative mx-auto max-w-6xl px-4 -mt-16 pb-16">
        <div className="bg-white rounded-[32px] shadow-[0_18px_45px_rgba(15,23,42,0.12)] overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-center px-6 sm:px-10 py-10 sm:py-14">
            {/* Illustration placeholder with soft blob shape */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="h-64 sm:h-72 rounded-[40px] bg-sky-100" />
                <div className="pointer-events-none absolute -top-6 -left-6 h-10 w-10 rounded-full border-4 border-sky-300 bg-white" />
                <div className="pointer-events-none absolute -bottom-4 -right-4 h-3 w-3 rounded-full bg-emerald-400" />
              </div>
            </div>

            {/* Text content */}
            <div className="text-slate-800 leading-relaxed text-sm sm:text-base">
              <p className="mb-4">
                (RPA) is the utilization of programming bots to mechanize
                profoundly tedious, routine assignments ordinarily performed by
                information laborers. Mechanical cycle mechanization (RPA) is a
                product innovation that makes it simple to fabricate, send, and
                oversee programming robots that copy people activities
                interfacing with computerized frameworks and programming.
              </p>
              <p>
                Actually like individuals, programming robots can do things like
                comprehend what's on a screen, total the correct keystrokes,
                explore frameworks, distinguish and separate information, and
                play out a wide scope of characterized activities. In any case,
                programming robots can do it quicker and more reliably than
                individuals, without the need to get up and stretch or take a
                short breather.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form copy section underneath, full width similar to second screenshot */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] items-start">
          {/* Left decorative circle to echo reference layout */}
          <div className="hidden lg:flex justify-center pt-10">
            <div className="h-16 w-16 rounded-full border-4 border-sky-300" />
          </div>

          <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Mechanical interaction computerization smoothes out work
              processes, which makes associations more productive, adaptable,
              and responsive. It additionally builds worker fulfillment,
              commitment, and efficiency by eliminating everyday assignments from
              their workdays.
            </p>
            <p>
              RPA is noninvasive and can be quickly executed to speed up
              computerized change. It's ideal for mechanizing work processes
              that include inheritance frameworks that need APIs, Virtual
              Desktop Infrastructure (VDIs), or information base access.
            </p>
            <p>
              Programming robots—other than individuals—do dreary and bring down
              esteem work like signing into applications and frameworks, moving
              documents and envelopes, isolating, duplicating, and embedding
              information, filling in structures, and finishing routine
              examinations and reports.
            </p>
            <p>
              At the point when robots do these sorts of redundant, high-volume
              assignments, individuals are liberated to zero in on the things
              they do best and appreciate more: creating, working together,
              making, and collaborating with clients. It's no big surprise that
              RPA is reshaping the eventual fate of work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesAIRpa;


