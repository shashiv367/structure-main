import React, { useState, useEffect } from 'react';

// --- Word Animation Configuration ---
const WORDS = ['INCLUSIVE', 'INNOVATIVE', 'INSPIRING']; 
const STATIC_PREFIX = 'IN'; 
const CYCLE_TIME = 3000;      // Time each word is fully visible
const ANIMATION_DURATION = 800; // Duration of the slide animation

// --- Client Logo Configuration ---
const LOGOS = [
  { id: 1, src: '/logos/infosys.svg', alt: 'Infosys Logo' },
  { id: 2, src: '/logos/ibm.svg', alt: 'IBM Logo' },
  { id: 3, src: '/logos/tata.svg', alt: 'Tata Consultancy Services Logo' },
  { id: 4, src: '/logos/accenture.svg', alt: 'Accenture Logo' },
  { id: 5, src: '/logos/adp.svg', alt: 'ADP Logo' },
  { id: 6, src: '/logos/apple.svg', alt: 'Apple Logo' },
  { id: 7, src: '/logos/atos.svg', alt: 'Atos Logo' },
  { id: 8, src: '/logos/capgemini.svg', alt: 'Capgemini Logo' },
  { id: 9, src: '/logos/deloitte.svg', alt: 'Deloitte Logo' },
  { id: 10, src: '/logos/cbn.svg', alt: 'ABS-CBN International Logo' },
];

// --- Testimonial Data (Based on video content) ---
const TESTIMONIALS = [
  {
    name: 'J. Smith',
    title: 'Director',
    text: "My story of working with MetrixIT is excellent, and I can honestly say that there is no other company that I've ever worked with that has better service.",
    avatarColor: 'bg-green-500', // Placeholder for avatar styling
  },
  {
    name: 'Michael Thompson',
    title: 'Sales Manager',
    text: 'I know they are going to be honest with me. I know it is going to be good. That is the number one advantage of working with MetrixIT Solutions because I just do not want to be sold. I want to trust that what I am getting is going to be good.',
    avatarColor: 'bg-orange-500',
  },
  {
    name: 'Tim Bogemans',
    title: 'Managing Partner',
    text: 'We worked with MetrixIT Solutions on developing our SharePoint Intranet development & implementation and the results we were expecting. We\'ll surely work with them in the future.',
    avatarColor: 'bg-sky-500',
  },
];


function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  // Effect to cycle through the words
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
    }, CYCLE_TIME);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const currentWord = WORDS[wordIndex];
  const dynamicPart = currentWord.substring(STATIC_PREFIX.length);
  const duplicatedLogos = [...LOGOS, ...LOGOS]; 

  // Helper component for Client Logos (rendered inline)
  const ClientLogos = () => (
    <section className="py-10 sm:py-14 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-8">
          We worked with global largest brands
        </h2>
      </div>

      <div className="logo-marquee overflow-hidden whitespace-nowrap">
        <div className="logo-marquee-content inline-block">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="inline-block mx-8 sm:mx-12 opacity-50 transition-opacity duration-300 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 w-auto filter grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Helper component for Testimonials (New Section)
  const TestimonialsSection = () => (
    <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-[0.24em] uppercase text-sky-600 border border-sky-300 px-3 py-1 rounded-full inline-block mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900">
            Clients feedback
          </h2>
        </div>

        {/* Testimonial Cards Wrapper (Simulates the horizontal scroll/slider) */}
        <div className="overflow-hidden">
          <div className="flex space-x-6 pb-4 md:pb-0 opacity-0 animate-fade-in-up-delay-1">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                // Use w-full for small screens, and w-1/3 for larger screens to show 3 at once
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="flex items-center mb-4">
                  {/* Placeholder for Avatar */}
                  <div className={`h-12 w-12 rounded-full ${testimonial.avatarColor} mr-4 flex items-center justify-center text-white text-xl font-bold`}>
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel/Pagination Controls (Matches video 20251215-1819-27.0942900.mp4) */}
        <div className="flex justify-center items-center mt-6 text-sm text-slate-500">
          <button className="mr-3 p-2 text-slate-400 hover:text-slate-900">
            &larr;
          </button>
          <span>1 / 2</span>
          <button className="ml-3 p-2 text-slate-400 hover:text-slate-900">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );


  // Helper component for Offices (New Placeholder Section)
  const OfficesSection = () => (
    <section className="bg-slate-900 py-10 sm:py-16 text-white border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold tracking-[0.24em] uppercase text-sky-400">
                Our Locations
            </span>
            <h2 className="mt-2 text-3xl font-extrabold">
                Our Offices
            </h2>
             {/* This space will hold the office cards as seen in the video */}
                    </div>
    </section>
  );

  return (
    <main className="bg-white">
      {/* 1. Hero Section (Dynamic Text Animation) */}
      <section className="relative overflow-hidden border-b border-gray-200 min-h-screen flex items-center">
        {/* ... Hero Content ... */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div 
                key={`bg-${wordIndex}`} 
                className={`text-[25vw] sm:text-[20vw] lg:text-[15vw] font-black text-gray-200 opacity-0 animate-bg-fade transition-opacity duration-1000 select-none`}
            >
                {currentWord}
            </div>

            <div className="absolute -left-40 top-32 h-96 w-96 rounded-full border border-slate-100" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-10 lg:px-16 pt-20 pb-24 lg:pt-24 lg:pb-32">
          
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-900">
            PDSA SOLUTIONS
          </p>

          <div className="mt-6 leading-none font-black text-slate-800 select-none text-[16vw] sm:text-[13vw] lg:text-[11vw] tracking-tight flex">
            
            <div className="opacity-0 animate-fade-in-up">
              {STATIC_PREFIX}
            </div>

            <div className="inline-block overflow-hidden h-[1.05em]">
              <div 
                key={wordIndex}
                className="dynamic-word-slide opacity-0"
                style={{
                    animationDuration: `${ANIMATION_DURATION}ms`,
                    animationDelay: '100ms',
                }}
              >
                {dynamicPart}
              </div>
            </div>
            
          </div>

          <div className="mt-6 max-w-xl text-sm sm:text-base text-slate-700">
            <p className="opacity-0 animate-fade-in-up-delay-2">
              Next generation mobile &amp; software development to enable
              businesses to reinvent the future with cutting edge digital
              transformation &amp; rapid innovation.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up-delay-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
            >
              Talk to our team
            </a>
            <a
              href="#industries"
              className="text-sm font-medium text-slate-900 hover:text-sky-700"
            >
              Explore industries
            </a>
          </div>
        </div>
      </section>

      {/* 2. Trusted Software Development Company */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[30px] shadow-2xl shadow-sky-100 border border-sky-100 bg-sky-50 aspect-[4/3] flex items-center justify-center p-8">
              <div className="text-slate-500 text-center p-8 border border-dashed border-sky-200 rounded-2xl w-full h-full flex items-center justify-center">
                              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sky-600">
              PDSA SOLUTIONS
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Trusted Software
              Development Company
            </h2>
            <p className="mt-5 text-base text-slate-700 leading-relaxed">
              PDSA believes in constant innovation and improvement to remain your
              preferred technology partner. Our core values of integrity, client
              satisfaction, innovation, and technical excellence differentiate us
              from the competition.
            </p>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              When you choose to work with PDSA, you partner with a team that
              genuinely cares about your outcomes. We aim for 100% satisfaction
              on every engagement—delivering reliable, scalable, and future‑ready
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Client Logos Section */}
      <ClientLogos />

      {/* 4. Industries */}
      <section
        id="industries"
        className="border-b border-gray-200 bg-slate-50/60 py-14 sm:py-18"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sky-600">
              Industry experience
            </p>
            <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900">
              Deep expertise across regulated and high‑growth industries.
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We understand the nuances of your domain and bring pre‑built
              accelerators, patterns, and best practices tailored to your
              vertical.
            </p>
          </header>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm opacity-0 animate-fade-in-up-delay-3">
            {[
              'Banking & Financial',
              'Travel & Hospitality',
              'Education',
              'Energy & Utility',
              'Government',
              'Logistics & Warehousing',
              'Insurance',
              'Healthcare & Life Science',
              'Retail & Consumer Goods',
              'Telecom & Media',
              'Oil & Gas',
              'E‑Commerce',
            ].map((label) => (
              <div
                key={label}
                className="group rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 hover:border-sky-500 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-200"
              >
                <p className="font-medium text-slate-900 group-hover:text-sky-700">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sky-600">
              How we work
            </p>
            <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900">
              A simple, transparent delivery framework.
            </h2>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-3 opacity-0 animate-fade-in-up-delay-2">
            {[
              {
                title: 'Define the scope',
                body: 'We start with discovery sessions to understand your goals, constraints, and success metrics.',
              },
              {
                title: 'Develop a plan',
                body: 'Our architects and product specialists outline a pragmatic roadmap with clear milestones.',
                },
              {
                title: 'Execute the plan',
                body: 'Multidisciplinary squads iterate quickly, delivering value in predictable increments.',
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="relative rounded-2xl border border-slate-200 bg-white/80 p-5 hover:-translate-y-1 hover:border-sky-500 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-200"
              >
                <span className="absolute -top-3 left-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
                  {idx + 1}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why choose us */}
      <section className="border-y border-gray-200 bg-slate-50/60 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="opacity-0 animate-fade-in-up">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sky-600">
              Why choose us
            </p>
            <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900">
              One of the pioneers of outcome‑driven IT services.
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We offer clients the advantage of highly skilled, committed teams
              on demand — wherever and whenever they are needed — at a cost that
              aligns with your growth targets.
            </p>

            <dl className="mt-6 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <dt className="text-xs text-slate-500">Minimal timelines</dt>
                <dd className="mt-1 text-xl font-semibold text-slate-900">
                  60%
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">
                  Effective communication
                </dt>
                <dd className="mt-1 text-xl font-semibold text-slate-900">
                  95%
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">
                  High quality standards
                </dt>
                <dd className="mt-1 text-xl font-semibold text-slate-900">
                  70%
                </dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4 opacity-0 animate-fade-in-up-delay-1">
            {[
              'End‑to‑end ownership from strategy to support.',
              'Mature agile delivery with continuous improvement built in.',
              'Transparent governance, reporting, and communication.',
              'Security‑first mindset, aligned with enterprise standards.',
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 hover:-translate-y-1 hover:border-sky-500 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-200"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[11px] text-white">
                  ✓
                </span>
                <p className="text-sm text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials / Client Feedback (NEW SECTION) */}
      <TestimonialsSection />

      {/* 8. Offices Section (NEW PLACEHOLDER SECTION) */}
      <OfficesSection />

      {/* 9. Call to action */}
      <section id="contact" className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 px-6 py-10 sm:px-10 sm:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 opacity-0 animate-fade-in-up">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Have a project in mind?
              </h2>
              <p className="mt-2 text-sm text-slate-300 max-w-md">
                Let&apos;s explore how PDSA‑style engineering can accelerate
                your roadmap and de‑risk your next strategic initiative.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
              >
                Contact us
              </a>
              <div className="text-xs text-slate-300">
                <div>Mon – Fri · 09:00 AM – 05:00 PM</div>
                <div className="mt-1">USA · India · Remote‑first teams</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;