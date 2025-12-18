import React from 'react';

function TechnologiesBigdataApacheHive() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Bigdata • Apache Hive
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Apache Hive
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
                Apache Hive is a data‑warehouse framework built on top of Hadoop
                that provides SQL‑like access to data stored in HDFS and other
                compatible systems. It lets analysts query large data sets using
                familiar query constructs while the Hive engine translates those
                queries into MapReduce or other execution frameworks.
              </p>
              <p>
                Hive manages the schema, partitions and metadata for big‑data
                tables, making it easier to organise and analyse data at scale
                without writing low‑level distributed processing code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second section: use cases */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
          <p>
            Organisations use Hive to run batch analytics, periodic reports and
            ad‑hoc exploration over massive data sets. Because it supports
            standard SQL semantics through HiveQL, existing BI tools and skills
            can often be reused when moving workloads to Hadoop‑based
            platforms.
          </p>
          <p>
            Hive&apos;s extensibility—through custom functions, storage
            handlers and integrations with engines such as Tez and Spark—allows
            it to evolve alongside the rest of the big‑data ecosystem while
            continuing to serve as a central query layer for large‑scale data.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesBigdataApacheHive;




