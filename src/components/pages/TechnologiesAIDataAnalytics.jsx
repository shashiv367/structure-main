import React from 'react';

function TechnologiesAIDataAnalytics() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • Data Analytics
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Data Analytics
          </h1>
        </div>
      </section>

      {/* First card: chart illustration + intro copy */}
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
                The majority of our data analytics is to store, oversee and
                recover a lot of information. We assist clients with picking the
                best and most suitable stockpiling techniques relying upon the
                volume, speed, and assortment of information they have.
              </p>
              <p>
                Our big data stockpiling arrangements support a wide range of
                organized or unstructured information, applications, and
                different stockpiling frameworks, and help our clients in
                conveying elite, adaptable, cost‑proficient arrangements at a
                lower cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form text section, similar to screenshot */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* Left spacer / decorative area to mimic layout */}
          <div className="hidden lg:block" />

          <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Information perception arrangements we convey permit our customers
              to add an additional measurement to their introductions and show
              significant insights in a firm way. Beginning with information
              examination, we create arrangements that can be utilized for the
              making of intuitive reports, dashboards, intelligent introduction
              pages, and web applications.
            </p>
            <p>
              Information mining arrangements joined with measurable
              investigation and mechanized AI calculations help our customers in
              finding precious information working for their prosperity. We
              convey arrangements that cautiously yet rapidly analyze all the
              information from our clients&apos; predefined sources, so they
              don&apos;t need to squander their energy on discovering a
              difficult‑to‑find little item.
            </p>
            <p>
              Data analytics transforms them into incredible business
              apparatuses. Sponsored by driving big data advances, we construct
              key arrangements that line up with our customers&apos;
              objectives.
            </p>
            <p>
              Our aptitude in big data programming improvement helps
              associations handle their information and use it to recognize new
              opportunities, prompting more brilliant business moves, more
              proficient activities, higher benefits and more joyful clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesAIDataAnalytics;




