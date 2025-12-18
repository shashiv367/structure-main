import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Testimonials Data ---
const TESTIMONIALS = [
  {
    id: 1,
    name: 'James Smith',
    title: 'Creative Director',
    text: "In my history of working with MetrixIT Solutions, I can honestly say that there is not one company that I've ever worked with that has better service.",
    avatar: 'orange',
  },
  {
    id: 2,
    name: 'Michael Thompson',
    title: 'Sales Manager',
    text: "I know they are going to be honest with me. I know it is going to be good. That is the number one advantage of working with MetrixIT Solutions because I just do not want to be sold. I want to trust that what I am getting is going to be good.",
    avatar: 'teal',
  },
  {
    id: 3,
    name: 'Tim Bogemans',
    title: 'Managing Partner',
    text: "We worked with MetrixIT Solutions in developing our SharePoint Intranet. The development & implementation process was very smooth & delivered the exact results we were expecting. We'll surely work with them in the future.",
    avatar: 'teal',
  },
  {
    id: 4,
    name: 'Ross Shamelashvili',
    title: 'Manager, Development Operations',
    text: "MetrixIT Solutions offers a high caliber of resources skilled in Microsoft Azure .NET, mobile & Quality Assurance. Over the past three years, We was very pleased with the service provided by MetrixIT Solutions development teams & executive management. For accelerated project timelines which require skilled resources, MetrixIT Solutions is a company that your team should consider.",
    avatar: 'teal',
  },
];

// --- Client Logos Data ---
const CLIENT_LOGOS = [
  { id: 1, name: 'Accenture', src: '/logos/accenture.svg' },
  { id: 2, name: 'ADP', src: '/logos/adp.svg' },
  { id: 3, name: 'Apple', src: '/logos/apple.svg' },
  { id: 4, name: 'Atos', src: '/logos/atos.svg' },
  { id: 5, name: 'Capgemini', src: '/logos/capgemini.svg' },
  { id: 6, name: 'Deloitte', src: '/logos/deloitte.svg' },
  { id: 7, name: 'ABS-CBN', src: '/logos/cbn.svg' },
  { id: 8, name: 'Infosys', src: '/logos/infosys.svg' },
  { id: 9, name: 'IBM', src: '/logos/ibm.svg' },
  { id: 10, name: 'TATA', src: '/logos/tata.svg' },
  { id: 11, name: 'Nissan', src: '/logos/nissan.svg' },
  { id: 12, name: 'FedEx', src: '/logos/fedex.svg' },
];

// Avatar Component
const Avatar = ({ type }) => {
  const bgColor = type === 'orange' ? '#f97316' : '#0891b2';
  
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      <circle cx="40" cy="40" r="38" fill={bgColor} />
      <circle cx="40" cy="32" r="14" fill="#fcd34d" />
      <rect x="22" y="48" width="36" height="25" rx="4" fill="#0ea5e9" />
      <rect x="30" y="55" width="20" height="4" fill="white" rx="1" />
      <circle cx="35" cy="30" r="3" fill="#1e293b" />
      <circle cx="45" cy="30" r="3" fill="#1e293b" />
      <rect x="34" y="36" width="12" height="3" fill="#1e293b" rx="1" />
    </svg>
  );
};

function OurClients() {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage);
  
  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    return TESTIMONIALS.slice(start, start + testimonialsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <main className="bg-white">
      {/* ========== 1. Testimonials Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
              >
                {/* Top colored bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-t-2xl" />
                
                {/* Avatar */}
                <div className="flex justify-start mb-6 mt-2">
                  <Avatar type={testimonial.avatar} />
                </div>
                
                {/* Decorative circle */}
                {index === 0 && (
                  <div className="absolute top-32 right-6 w-8 h-8 border border-cyan-300 rounded-full opacity-50" />
                )}
                {index === 1 && (
                  <div className="absolute bottom-40 right-4 w-2 h-2 bg-emerald-500 rounded-full" />
                )}
                
                {/* Quote */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  {testimonial.text}
                </p>
                
                {/* Name and Title */}
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-500 text-sm">
                    {testimonial.title}
                  </p>
                </div>
                
                {/* Decorative green dot for first card */}
                {index === 0 && (
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-emerald-500 rounded-full" />
                )}
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 text-slate-600">
            <button
              onClick={prevPage}
              className="p-2 hover:text-slate-900 transition-colors"
              aria-label="Previous page"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={nextPage}
              className="p-2 hover:text-slate-900 transition-colors"
              aria-label="Next page"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ========== 2. Our Clients Logos Section ========== */}
      <section className="py-16 sm:py-20 bg-white relative">
        {/* Decorative circle */}
        <div className="absolute top-20 right-1/3 w-12 h-12 border border-cyan-200 rounded-full opacity-40" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-sm text-slate-500">Our Clients</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              We are happy to work with global<br />largest brands
            </h2>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="aspect-[3/2] bg-white border border-slate-200 rounded-lg flex items-center justify-center p-4 hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-8 sm:max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-sm font-semibold text-slate-700">${logo.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 3. Work With Us CTA Section ========== */}
      <section className="py-20 sm:py-28 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-16 left-1/4 w-12 h-12 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute top-32 left-1/3 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag */}
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-slate-700 border border-slate-300 rounded-full mb-6">
            WORK WITH US
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-10">
            We would love to hear<br />more about your project
          </h2>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center w-40 h-40 rounded-full border-2 border-slate-200 hover:border-cyan-500 transition-all duration-300 relative overflow-hidden"
          >
            <span className="text-slate-900 font-medium group-hover:text-cyan-600 transition-colors flex items-center gap-2">
              Let's Talk Us
              <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* ========== 4. Business Process Illustration ========== */}
      <section className="py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-48 sm:h-64">
            <svg viewBox="0 0 1000 200" className="w-full h-full">
              {/* Background pattern */}
              <defs>
                <pattern id="gridPatternClients" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternClients)" />
              
              {/* Connection lines */}
              <path d="M50 100 L150 100 L250 60 L350 100 L450 50 L550 100 L650 80 L750 100 L850 70 L950 100" 
                    stroke="white" strokeWidth="2" fill="none" strokeDasharray="6,4" opacity="0.5" />
              
              {/* Connection nodes */}
              {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950].map((x, i) => (
                <circle key={i} cx={x} cy={i % 2 === 0 ? 100 : (i % 3 === 0 ? 60 : 80)} r="6" fill="white" />
              ))}
              
              {/* Dollar icon */}
              <g transform="translate(30, 120)">
                <circle cx="25" cy="25" r="22" fill="#22c55e" />
                <text x="25" y="33" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">$</text>
              </g>
              
              {/* Business scenes */}
              {/* Scene 1 - Office setup */}
              <g transform="translate(100, 90)">
                <rect x="0" y="10" width="50" height="35" fill="#f1f5f9" rx="3" />
                <rect x="5" y="15" width="20" height="12" fill="#fbbf24" rx="2" />
                <rect x="28" y="15" width="18" height="6" fill="#94a3b8" rx="1" />
                <rect x="28" y="24" width="14" height="6" fill="#94a3b8" rx="1" />
                <circle cx="80" cy="30" r="12" fill="#1e293b" />
                <rect x="68" y="43" width="24" height="40" rx="3" fill="#1e293b" />
              </g>
              
              {/* Scene 2 - Meeting */}
              <g transform="translate(280, 85)">
                <rect x="0" y="15" width="50" height="30" fill="#0f172a" rx="3" />
                <circle cx="70" cy="25" r="12" fill="#1e293b" />
                <rect x="58" y="38" width="24" height="40" rx="3" fill="#0284c7" />
                <circle cx="100" cy="28" r="12" fill="#1e293b" />
                <rect x="88" y="41" width="24" height="37" rx="3" fill="#1e293b" />
              </g>
              
              {/* Testing label */}
              <text x="380" y="175" fill="white" fontSize="11" fontWeight="bold" opacity="0.8">TESTING</text>
              
              {/* Scene 3 - Team discussion */}
              <g transform="translate(500, 85)">
                <circle cx="0" cy="25" r="12" fill="#1e293b" />
                <rect x="-12" y="38" width="24" height="40" rx="3" fill="#0284c7" />
                <circle cx="40" cy="20" r="12" fill="#1e293b" />
                <rect x="28" y="33" width="24" height="45" rx="3" fill="#1e293b" />
                <circle cx="80" cy="25" r="12" fill="#1e293b" />
                <rect x="68" y="38" width="24" height="40" rx="3" fill="#0284c7" />
              </g>
              
              {/* Scene 4 - Final discussion */}
              <g transform="translate(700, 80)">
                <circle cx="0" cy="30" r="12" fill="#1e293b" />
                <rect x="-12" y="43" width="24" height="40" rx="3" fill="#1e293b" />
                <circle cx="40" cy="25" r="12" fill="#1e293b" />
                <rect x="28" y="38" width="24" height="45" rx="3" fill="#0284c7" />
                <circle cx="80" cy="30" r="12" fill="#1e293b" />
                <rect x="68" y="43" width="24" height="40" rx="3" fill="#1e293b" />
              </g>
              
              {/* Selection badge */}
              <g transform="translate(880, 100)">
                <circle cx="30" cy="30" r="28" fill="#f97316" />
                <text x="30" y="25" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">INTERREGION</text>
                <text x="30" y="35" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">SELECTION</text>
              </g>
            </svg>
          </div>
    </div>
      </section>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-800 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  );
}

export default OurClients;
