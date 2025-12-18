import React from 'react';

function TechnologiesAIBlockchain() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top gradient hero like the reference */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Technologies • Blockchain
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Blockchain
          </h1>
        </div>
      </section>

      {/* First card with image + intro copy (like top of reference) */}
      <section className="relative mx-auto max-w-6xl px-4 -mt-16 pb-20">
        <div className="bg-white rounded-[32px] shadow-[0_18px_45px_rgba(15,23,42,0.12)] overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-center px-6 sm:px-10 py-10 sm:py-14">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="h-64 sm:h-72 rounded-[40px] bg-sky-100" />
                <div className="pointer-events-none absolute -top-6 -left-6 h-10 w-10 rounded-full border-4 border-sky-300 bg-white" />
                <div className="pointer-events-none absolute -bottom-4 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400" />
              </div>
            </div>

            <div className="text-slate-800 leading-relaxed text-sm sm:text-base">
              <p className="mb-4">
                Block chain is a dispersed record innovation for keeping a
                lasting and carefully designed record of value-based
                information. Information put away can be controlled and the
                model is totally impervious to robbery and alter.
              </p>
              <p>
                Trusts can possibly present another degree of straight
                forwardness, computerization and effectiveness in a wide range
                of organizations and associations and is the opportune spot to
                investigate the array of advancement administrations that can
                help you increment your business efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key offerings vertical timeline cards */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-slate-900 mb-14">
          Key offerings
        </h2>

        <div className="relative grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_40px_minmax(0,1.1fr)]">
          {/* Left column cards */}
          <div className="space-y-10">
            <div className="bg-white rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] px-10 py-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                ICO Creation
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                The initial coin offering (ICO) is a new form of crowdfunding
                that has emerged. We have a dedicated team of experts who can
                build custom ICO projects with an emphasis on Ethereum.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] px-10 py-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Blockchain Development
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We provide enterprise‑grade Blockchain growth, both public and
                private, to meet real market needs and create applications for
                businesses with complete transparency and protection.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] px-10 py-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Development of a Crypto Exchange
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We specialize in the creation of stable and user‑friendly custom
                cryptocurrency exchange solutions tailored to business needs.
              </p>
            </div>
          </div>

          {/* Center vertical dashed line with dots */}
          <div className="relative flex justify-center">
            <div className="w-px bg-[length:4px_8px] bg-gradient-to-b from-transparent to-transparent bg-[linear-gradient(to_bottom,#1d4ed8_50%,transparent_50%)] opacity-70" />
            <div className="absolute top-6 h-8 w-8 rounded-full border-2 border-blue-400 bg-white flex items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
            </div>
            <div className="absolute inset-y-0 flex flex-col justify-center gap-32">
              <span className="h-7 w-7 rounded-full border-2 border-blue-400 bg-white flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="h-7 w-7 rounded-full border-2 border-blue-400 bg-white flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
            </div>
          </div>

          {/* Right column cards */}
          <div className="space-y-10">
            <div className="bg-white rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] px-10 py-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Application Development
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Application development without centralization. We deliver
                decentralized software development services that can improve and
                streamline a company&apos;s workflow.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] px-10 py-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Configurations of the Wallet
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Our expert Blockchain developers build protected wallets that
                enable users to create, send, store, and receive cryptocurrency
                securely.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] px-10 py-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Consultation on Blockchain Technology
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Our advisory services assist businesses in identifying complex
                market issues where Blockchain technologies can be applied to
                provide effective solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesAIBlockchain;


