import React from 'react';

function TechnologiesBigdataSpark() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Bigdata • Spark
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Spark
          </h1>
        </div>
      </section>

      {/* First card: illustration + overview */}
      <section className="relative mx-auto max-w-6xl px-4 -mt-16 pb-20">
        <div className="bg-white rounded-[32px] shadow-[0_18px_45px_rgba(15,23,42,0.12)] overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.4fr)] items-center px-6 sm:px-10 py-10 sm:py-14">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="h-64 sm:h-72 rounded-[40px] bg-sky-100" />
              </div>
            </div>

            <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                Apache Spark is a fast, general‑purpose engine for large‑scale
                data processing. It provides high‑level APIs in Java, Scala,
                Python and R, and supports powerful libraries for SQL,
                machine‑learning, graph processing and streaming analytics—all
                within a single, unified framework.
              </p>
              <p>
                Spark can run on Hadoop YARN, Kubernetes or standalone clusters
                and reads data from a variety of stores including HDFS, cloud
                object storage and NoSQL databases, making it an ideal platform
                for modern big‑data applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second section: usage and benefits */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
          <p>
            With its in‑memory processing model, Spark delivers significant
            performance gains for iterative workloads such as machine learning,
            interactive analytics and real‑time data pipelines. Developers can
            build sophisticated applications using concise, expressive APIs
            while operations teams benefit from Spark&apos;s ability to scale
            horizontally across clusters of commodity hardware.
          </p>
          <p>
            By combining batch, streaming and advanced analytics in one engine,
            Spark helps organisations simplify their data architecture and
            unlock new business insights from data that was previously too large
            or too complex to analyse.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesBigdataSpark;


