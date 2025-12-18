import React from 'react';

function TechnologiesBigdataKafka() {
  return (
    <div className="bg-white min-h-screen">
      {/* Gradient hero */}
      <section className="w-full bg-gradient-to-r from-sky-200 via-sky-100 to-teal-100">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-700 mb-3">
            Home • Bigdata • Kafka
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Kafka
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
                Apache Kafka is a distributed streaming platform used for
                building real‑time data pipelines and event‑driven
                applications. It provides a high‑throughput, fault‑tolerant
                publish‑subscribe messaging system where records are organised
                into topics and persisted durably on disk.
              </p>
              <p>
                Kafka decouples producers and consumers, allowing multiple
                systems to subscribe to the same streams of data for analytics,
                monitoring or operational use without impacting each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second section: common use cases */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
          <p>
            Organisations use Kafka to centralise logs and event data from many
            applications and services, creating a single, ordered stream of
            records that can be processed in near real‑time. This enables use
            cases such as user‑activity tracking, metrics collection, fraud
            detection, and operational monitoring.
          </p>
          <p>
            Kafka integrates closely with stream‑processing frameworks and data
            platforms, making it a backbone for modern data architectures where
            high‑volume, low‑latency messaging is required.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TechnologiesBigdataKafka;


