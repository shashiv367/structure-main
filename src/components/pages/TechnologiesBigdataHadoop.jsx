import React from 'react';

function TechnologiesBigdataHadoop() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Bigdata • Hadoop
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Hadoop
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
                Hadoop is an open‑source, Java‑based framework used for
                distributed storage and processing of very large data sets. It
                runs on inexpensive commodity servers that can be organised as
                clusters and gives organisations a fault‑tolerant way to handle
                huge volumes of structured and unstructured data.
              </p>
              <p>
                The Hadoop Distributed File System (HDFS) and MapReduce
                programming model together allow applications to process data in
                parallel across the nodes of a cluster, providing both scale and
                resiliency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second section: business value */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
          <p>
            As applications across industries generate ever‑increasing amounts
            of data, Hadoop provides a way to store and process this information
            economically. Using open‑source technology on inexpensive hardware,
            organisations can offload and extend their existing data platforms,
            achieving significant cost savings compared with traditional,
            scale‑up databases.
          </p>
          <p>
            Hadoop also opens the door to advanced analytics. The ability to
            collect and crunch massive data sets helps uncover insights that
            drive better decisions in areas such as customer targeting, process
            optimisation and risk management.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesBigdataHadoop;


