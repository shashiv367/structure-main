import React from 'react';
import { Link } from 'react-router-dom';

// --- Core Values Data ---
const CORE_VALUES = [
  {
    id: 1,
    title: 'Innovation',
    icon: 'innovation',
    bgColor: 'from-emerald-50 to-cyan-50',
  },
  {
    id: 2,
    title: 'Efficiency',
    icon: 'efficiency',
    bgColor: 'from-cyan-50 to-emerald-50',
  },
  {
    id: 3,
    title: 'Teamwork',
    icon: 'teamwork',
    bgColor: 'from-pink-50 to-emerald-50',
  },
  {
    id: 4,
    title: 'Customer is King',
    icon: 'customer',
    bgColor: 'from-emerald-50 to-cyan-50',
  },
  {
    id: 5,
    title: 'Creativity',
    icon: 'creativity',
    bgColor: 'from-blue-50 to-purple-50',
  },
  {
    id: 6,
    title: 'Client Satisfaction',
    icon: 'satisfaction',
    bgColor: 'from-cyan-50 to-blue-50',
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

// Icon components for core values
const ValueIcon = ({ type }) => {
  switch (type) {
    case 'innovation':
      return (
        <svg viewBox="0 0 80 80" className="w-20 h-20">
          {/* Innovation - lightbulb with connections */}
          <circle cx="40" cy="45" r="25" fill="#e0f7fa" />
          <path d="M40 20 L40 10 M25 25 L18 18 M55 25 L62 18 M20 45 L10 45 M60 45 L70 45" 
                stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
          <circle cx="40" cy="20" r="4" fill="#3b82f6" />
          <circle cx="18" cy="18" r="4" fill="#3b82f6" />
          <circle cx="62" cy="18" r="4" fill="#3b82f6" />
          <circle cx="10" cy="45" r="4" fill="#3b82f6" />
          <circle cx="70" cy="45" r="4" fill="#3b82f6" />
          <rect x="30" y="50" width="20" height="20" rx="3" fill="#8b5cf6" />
          <rect x="35" y="70" width="10" height="5" fill="#8b5cf6" />
          <path d="M35 55 L35 65 M40 55 L40 65 M45 55 L45 65" stroke="white" strokeWidth="2" />
        </svg>
      );
    case 'efficiency':
      return (
        <svg viewBox="0 0 80 80" className="w-20 h-20">
          {/* Efficiency - dashboard/checklist */}
          <circle cx="40" cy="40" r="30" fill="#e0f7fa" />
          <rect x="20" y="20" width="40" height="45" rx="4" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
          <rect x="25" y="28" width="15" height="12" fill="#22c55e" rx="2" />
          <rect x="42" y="28" width="15" height="12" fill="#f472b6" rx="2" />
          <rect x="25" y="45" width="30" height="8" fill="#22c55e" rx="2" />
          <rect x="25" y="55" width="20" height="6" fill="#f472b6" rx="2" />
          <circle cx="60" cy="15" r="6" fill="#22c55e" />
          <path d="M57 15 L59 17 L63 13" stroke="white" strokeWidth="2" fill="none" />
          <text x="15" y="20" fontSize="8" fill="#3b82f6">+</text>
          <text x="65" y="55" fontSize="8" fill="#f472b6">+</text>
        </svg>
      );
    case 'teamwork':
      return (
        <svg viewBox="0 0 80 80" className="w-20 h-20">
          {/* Teamwork - video/presentation */}
          <circle cx="40" cy="40" r="30" fill="#fce7f3" />
          <rect x="15" y="20" width="50" height="35" rx="4" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
          <polygon points="35,30 35,45 48,37.5" fill="#22c55e" />
          <rect x="15" y="50" width="50" height="8" fill="#22c55e" rx="2" />
          <rect x="18" y="52" width="20" height="4" fill="white" rx="1" />
          <circle cx="55" cy="15" r="4" fill="#f472b6" />
          <text x="65" y="30" fontSize="8" fill="#f472b6">+</text>
          <text x="8" y="45" fontSize="8" fill="#f472b6">+</text>
        </svg>
      );
    case 'customer':
      return (
        <svg viewBox="0 0 80 80" className="w-20 h-20">
          {/* Customer - profile card */}
          <circle cx="40" cy="40" r="30" fill="#e0f7fa" />
          <rect x="18" y="18" width="44" height="50" rx="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
          <rect x="22" y="22" width="36" height="25" fill="#f472b6" rx="2" />
          <circle cx="40" cy="32" r="8" fill="white" />
          <circle cx="40" cy="30" r="5" fill="#1e293b" />
          <rect x="25" y="50" width="30" height="4" fill="#94a3b8" rx="1" />
          <rect x="25" y="56" width="20" height="3" fill="#94a3b8" rx="1" />
          <rect x="25" y="61" width="25" height="3" fill="#94a3b8" rx="1" />
          <circle cx="55" cy="22" r="6" fill="#22c55e" />
          <path d="M52 22 L54 24 L58 20" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      );
    case 'creativity':
      return (
        <svg viewBox="0 0 80 80" className="w-20 h-20">
          {/* Creativity - abstract design */}
          <circle cx="40" cy="40" r="30" fill="#ede9fe" />
          <rect x="20" y="18" width="40" height="50" rx="8" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
          <circle cx="30" cy="28" r="4" fill="#22c55e" />
          <rect x="25" y="38" width="30" height="20" fill="#f472b6" opacity="0.7" rx="3" />
          <path d="M30 45 Q40 35 50 50" stroke="#22c55e" strokeWidth="3" fill="none" />
          <circle cx="35" cy="55" r="3" fill="white" />
          <circle cx="45" cy="50" r="4" fill="white" />
          <text x="55" y="25" fontSize="10" fill="#f472b6">+</text>
          <text x="12" y="50" fontSize="10" fill="#f472b6">+</text>
        </svg>
      );
    case 'satisfaction':
      return (
        <svg viewBox="0 0 80 80" className="w-20 h-20">
          {/* Client Satisfaction - dashboard */}
          <circle cx="40" cy="40" r="30" fill="#e0f7fa" />
          <rect x="15" y="18" width="50" height="40" rx="4" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
          <rect x="20" y="23" width="15" height="12" fill="#f472b6" rx="2" />
          <rect x="38" y="23" width="22" height="5" fill="#94a3b8" rx="1" />
          <rect x="38" y="30" width="18" height="5" fill="#94a3b8" rx="1" />
          <rect x="20" y="40" width="40" height="12" fill="#22c55e" rx="2" />
          <circle cx="55" cy="12" r="4" fill="#f472b6" />
          <text x="8" y="35" fontSize="10" fill="#f472b6">+</text>
          <text x="62" y="50" fontSize="10" fill="#f472b6">+</text>
        </svg>
      );
    default:
      return null;
  }
};

function MissionValues() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-8 left-20 w-12 h-12 border border-cyan-300 rounded-full opacity-50 flex items-center justify-center">
          <div className="w-3 h-3 bg-emerald-500 rounded-full" />
        </div>
        <div className="absolute top-20 right-40 w-16 h-16 border border-cyan-200 rounded-full opacity-40" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              </li>
              <li className="text-slate-400">•</li>
              <li className="text-slate-900 font-medium">Mission & Values</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic">
            Mission & Values
          </h1>
        </div>
      </section>

      {/* ========== 2. Our Mission & Vision Section ========== */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Background decorative shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent -skew-x-12 transform origin-top-right" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Target with people */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 300 350" className="w-72 h-auto">
                    {/* Target/Bullseye */}
                    <circle cx="180" cy="120" r="70" fill="#fb923c" />
                    <circle cx="180" cy="120" r="55" fill="#fdba74" />
                    <circle cx="180" cy="120" r="40" fill="#fb923c" />
                    <circle cx="180" cy="120" r="25" fill="#fdba74" />
                    <circle cx="180" cy="120" r="10" fill="#fb923c" />
                    
                    {/* Arrow hitting target */}
                    <line x1="50" y1="150" x2="170" y2="120" stroke="#1e293b" strokeWidth="4" />
                    <polygon points="175,118 165,110 165,126" fill="#1e293b" />
                    <rect x="40" y="145" width="20" height="10" fill="#64748b" rx="2" />
                    
                    {/* Person with magnifying glass */}
                    <g transform="translate(140, 100)">
                      <circle cx="30" cy="0" r="15" fill="#1e293b" />
                      <rect x="18" y="18" width="24" height="35" rx="4" fill="#0ea5e9" />
                      <circle cx="55" cy="10" r="12" fill="none" stroke="#1e293b" strokeWidth="3" />
                      <line x1="63" y1="18" x2="72" y2="27" stroke="#1e293b" strokeWidth="3" />
                    </g>
                    
                    {/* Ladder */}
                    <rect x="100" y="140" width="8" height="150" fill="#fbbf24" />
                    <rect x="135" y="140" width="8" height="150" fill="#fbbf24" />
                    <rect x="100" y="160" width="43" height="6" fill="#fbbf24" />
                    <rect x="100" y="190" width="43" height="6" fill="#fbbf24" />
                    <rect x="100" y="220" width="43" height="6" fill="#fbbf24" />
                    <rect x="100" y="250" width="43" height="6" fill="#fbbf24" />
                    
                    {/* Person climbing ladder */}
                    <g transform="translate(110, 170)">
                      <circle cx="12" cy="0" r="12" fill="#1e293b" />
                      <rect x="2" y="14" width="20" height="30" rx="4" fill="#f97316" />
                    </g>
                    
                    {/* People at bottom */}
                    <g transform="translate(30, 280)">
                      <circle cx="15" cy="0" r="12" fill="#1e293b" />
                      <rect x="5" y="14" width="20" height="35" rx="4" fill="#22c55e" />
                    </g>
                    <g transform="translate(70, 285)">
                      <circle cx="15" cy="0" r="12" fill="#1e293b" />
                      <rect x="5" y="14" width="20" height="30" rx="4" fill="#fbbf24" />
                    </g>
                    <g transform="translate(200, 280)">
                      <circle cx="15" cy="0" r="12" fill="#1e293b" />
                      <rect x="5" y="14" width="20" height="35" rx="4" fill="#0ea5e9" />
                    </g>
                    <g transform="translate(240, 285)">
                      <circle cx="15" cy="0" r="12" fill="#1e293b" />
                      <rect x="5" y="14" width="20" height="30" rx="4" fill="#22c55e" />
                    </g>
                    
                    {/* Decorative elements */}
                    <circle cx="60" cy="100" r="5" fill="#f472b6" />
                    <circle cx="250" cy="200" r="4" fill="#22c55e" />
                    <circle cx="80" cy="250" r="3" fill="#fbbf24" />
                  </svg>
                </div>
                
                {/* Decorative dots */}
                <div className="absolute -bottom-4 -right-4 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-10">
              {/* Our Mission */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                  Our mission is to utilize our extensive experience and offer creative and innovative services and solutions that meet our clients' needs. Our goal is to build a trustworthy and powerful relationship with our clients by offering them professional services, unbeatable quality, strong commitment and stellar customer services.
                </p>
              </div>

              {/* Our Vision */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                  MetrixIT Solutions has a vision to become a reputable IT services company dedicated to offering reliable services to clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Core Values Section ========== */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white relative">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-16 h-16 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute top-20 right-32 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.24em] uppercase text-pink-600">
              VALUES
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              MetrixIT Solutions Core<br />Values
            </h2>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto leading-relaxed">
              By embedding the premium standards across our company, we aim to operate our business ethically and deal with our stakeholders and partners with respect.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((value) => (
              <div
                key={value.id}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${value.bgColor} rounded-2xl flex items-center justify-center`}>
                  <ValueIcon type={value.icon} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 text-center">
                  {value.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. Our Clients Section ========== */}
      <section className="py-16 sm:py-20 bg-white">
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

      {/* ========== 5. Work With Us CTA Section ========== */}
      <section className="py-20 sm:py-28 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-10 right-1/4 w-16 h-16 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute top-16 right-1/4 translate-x-20 w-3 h-3 bg-emerald-500 rounded-full" />
        
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

export default MissionValues;
