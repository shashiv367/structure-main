import React from 'react';
import { Link } from 'react-router-dom';

// --- Solutions Data ---
const SOLUTIONS = [
  {
    id: 1,
    title: 'Strategic Staffing',
    link: '/solutions/strategic-staffing',
    bgColor: 'bg-blue-100',
    iconType: 'staffing',
  },
  {
    id: 2,
    title: 'Business Process Outsourcing',
    link: '/solutions/business-process-outsourcing',
    bgColor: 'bg-blue-100',
    iconType: 'bpo',
  },
  {
    id: 3,
    title: 'Recruitment Process Outsourcing',
    link: '/solutions/recruitment-process-outsourcing',
    bgColor: 'bg-blue-100',
    iconType: 'rpo',
  },
  {
    id: 4,
    title: 'MetrixIT Solutions Training Hub',
    link: '/solutions/training-hub',
    bgColor: 'bg-emerald-100',
    iconType: 'training',
  },
];

// Solution Card Icon Component
const SolutionIcon = ({ type }) => {
  switch (type) {
    case 'staffing':
      return (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {/* Presentation board */}
          <rect x="30" y="20" width="80" height="60" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="4" />
          <rect x="40" y="30" width="25" height="18" fill="#60a5fa" rx="2" />
          <circle cx="85" cy="35" r="8" fill="#fbbf24" />
          <rect x="40" y="55" width="55" height="15" fill="#94a3b8" rx="2" />
          
          {/* Charts floating */}
          <circle cx="130" cy="30" r="15" fill="#f472b6" />
          <rect x="150" y="40" width="30" height="25" fill="#22c55e" rx="3" />
          <rect x="155" y="50" width="8" height="12" fill="white" rx="1" />
          <rect x="165" y="45" width="8" height="17" fill="white" rx="1" />
          
          {/* Gears */}
          <circle cx="160" cy="20" r="10" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="5,3" />
          
          {/* People at meeting table */}
          <ellipse cx="100" cy="150" rx="70" ry="20" fill="#0ea5e9" opacity="0.3" />
          
          {/* Person 1 */}
          <circle cx="45" cy="110" r="12" fill="#1e293b" />
          <rect x="35" y="125" width="20" height="30" rx="4" fill="#0ea5e9" />
          
          {/* Person 2 */}
          <circle cx="80" cy="105" r="12" fill="#1e293b" />
          <rect x="70" y="120" width="20" height="35" rx="4" fill="#1e293b" />
          
          {/* Person 3 - presenting */}
          <circle cx="115" cy="100" r="14" fill="#1e293b" />
          <rect x="103" y="117" width="24" height="38" rx="4" fill="#0ea5e9" />
          
          {/* Person 4 */}
          <circle cx="150" cy="108" r="12" fill="#1e293b" />
          <rect x="140" y="123" width="20" height="32" rx="4" fill="#64748b" />
          
          {/* Plant */}
          <rect x="10" y="140" width="12" height="15" fill="#94a3b8" rx="2" />
          <circle cx="16" cy="135" r="10" fill="#22c55e" />
        </svg>
      );
    case 'bpo':
      return (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {/* Main dashboard/screen */}
          <rect x="40" y="30" width="120" height="90" fill="#60a5fa" rx="8" />
          <rect x="50" y="40" width="40" height="30" fill="#f472b6" rx="4" />
          <rect x="95" y="40" width="55" height="12" fill="white" opacity="0.5" rx="2" />
          <rect x="95" y="58" width="45" height="12" fill="white" opacity="0.5" rx="2" />
          
          {/* Pie chart */}
          <circle cx="130" cy="95" r="18" fill="#22c55e" />
          <path d="M130 95 L130 77 A18 18 0 0 1 145 100 Z" fill="#f472b6" />
          
          {/* Connection lines */}
          <path d="M60 130 Q80 150 100 130 Q120 110 140 130" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="4,2" />
          <circle cx="60" cy="130" r="4" fill="#60a5fa" />
          <circle cx="100" cy="130" r="4" fill="#60a5fa" />
          <circle cx="140" cy="130" r="4" fill="#60a5fa" />
          
          {/* People */}
          <circle cx="60" cy="160" r="10" fill="#1e293b" />
          <rect x="52" y="172" width="16" height="20" rx="3" fill="#0ea5e9" />
          
          <circle cx="140" cy="155" r="12" fill="#1e293b" />
          <rect x="130" y="170" width="20" height="25" rx="3" fill="#fbbf24" />
          
          {/* Magnifying glass */}
          <circle cx="165" cy="90" r="20" fill="white" stroke="#1e293b" strokeWidth="3" />
          <line x1="180" y1="105" x2="195" y2="120" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'rpo':
      return (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {/* CV/Resume document */}
          <rect x="120" y="10" width="50" height="65" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="4" />
          <text x="130" y="25" fill="#1e293b" fontSize="10" fontWeight="bold">CV</text>
          <rect x="125" y="30" width="20" height="20" fill="#60a5fa" rx="2" />
          <rect x="125" y="55" width="40" height="5" fill="#94a3b8" rx="1" />
          <rect x="125" y="63" width="30" height="5" fill="#94a3b8" rx="1" />
          
          {/* Magnifying glass with gears */}
          <circle cx="160" cy="100" r="25" fill="none" stroke="#0ea5e9" strokeWidth="4" />
          <line x1="178" y1="118" x2="195" y2="135" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" />
          <circle cx="155" cy="95" r="10" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4,2" />
          <circle cx="165" cy="105" r="8" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="3,2" />
          
          {/* Envelope */}
          <rect x="30" y="60" width="60" height="40" fill="#fbbf24" rx="4" />
          <path d="M30 65 L60 85 L90 65" stroke="#f59e0b" strokeWidth="2" fill="none" />
          
          {/* People meeting */}
          <circle cx="55" cy="130" r="14" fill="#f472b6" />
          <rect x="43" y="147" width="24" height="35" rx="4" fill="#0ea5e9" />
          
          <circle cx="110" cy="125" r="14" fill="#1e293b" />
          <rect x="98" y="142" width="24" height="40" rx="4" fill="#1e293b" />
          
          {/* Briefcase */}
          <rect x="130" y="155" width="25" height="20" fill="#94a3b8" rx="3" />
          <rect x="138" y="150" width="10" height="8" fill="#94a3b8" rx="2" />
          
          {/* Globe with checkmark */}
          <circle cx="170" cy="155" r="15" fill="#60a5fa" opacity="0.3" />
          <circle cx="180" cy="165" r="10" fill="#22c55e" />
          <path d="M176 165 L179 168 L185 162" stroke="white" strokeWidth="2" fill="none" />
          
          {/* Plant */}
          <rect x="10" y="145" width="15" height="20" fill="#94a3b8" rx="3" />
          <ellipse cx="17" cy="140" rx="12" ry="10" fill="#22c55e" />
        </svg>
      );
    case 'training':
      return (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {/* Speech bubble with chart */}
          <ellipse cx="100" cy="35" rx="50" ry="30" fill="white" stroke="#e2e8f0" strokeWidth="2" />
          <polygon points="85,60 95,60 80,75" fill="white" stroke="#e2e8f0" strokeWidth="2" />
          <rect x="70" y="25" width="12" height="25" fill="#22c55e" rx="2" />
          <rect x="85" y="18" width="12" height="32" fill="#fbbf24" rx="2" />
          <rect x="100" y="22" width="12" height="28" fill="#0ea5e9" rx="2" />
          <rect x="115" y="30" width="12" height="20" fill="#f472b6" rx="2" />
          
          {/* Computer monitor */}
          <rect x="20" y="80" width="70" height="55" fill="#1e293b" rx="5" />
          <rect x="25" y="85" width="60" height="40" fill="#22c55e" opacity="0.3" />
          <rect x="30" y="90" width="50" height="30" fill="white" rx="2" />
          <rect x="35" y="95" width="40" height="5" fill="#22c55e" rx="1" />
          <rect x="35" y="103" width="35" height="5" fill="#22c55e" rx="1" />
          <rect x="35" y="111" width="30" height="5" fill="#22c55e" rx="1" />
          <rect x="45" y="135" width="20" height="8" fill="#64748b" rx="2" />
          
          {/* Books */}
          <rect x="5" y="130" width="25" height="8" fill="#0ea5e9" rx="1" />
          <rect x="5" y="138" width="25" height="8" fill="#22c55e" rx="1" />
          <rect x="5" y="146" width="25" height="8" fill="#f472b6" rx="1" />
          
          {/* Apple */}
          <circle cx="8" cy="125" r="8" fill="#22c55e" />
          <rect x="6" y="117" width="4" height="5" fill="#92400e" />
          
          {/* Instructor */}
          <circle cx="55" cy="60" r="12" fill="#1e293b" />
          <rect x="45" y="75" width="20" height="30" rx="4" fill="#22c55e" />
          <line x1="65" y1="85" x2="80" y2="75" stroke="#fcd34d" strokeWidth="4" strokeLinecap="round" />
          
          {/* Students */}
          <circle cx="120" cy="110" r="10" fill="#fbbf24" />
          <rect x="112" y="123" width="16" height="25" rx="3" fill="#f1f5f9" />
          <rect x="135" y="115" width="25" height="18" fill="#64748b" rx="2" />
          
          <circle cx="155" cy="105" r="10" fill="#f472b6" />
          <rect x="147" y="118" width="16" height="30" rx="3" fill="#f472b6" />
          
          <circle cx="180" cy="115" r="10" fill="#1e293b" />
          <rect x="172" y="128" width="16" height="25" rx="3" fill="#94a3b8" />
        </svg>
      );
    default:
      return null;
  }
};

function Solutions() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="py-16 sm:py-24 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-16 left-1/4 w-10 h-10 border border-cyan-300 rounded-full opacity-50 flex items-center justify-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
        </div>
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Title */}
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 leading-none">
                SOLUTION<br />S
              </h1>
            </div>
            
            {/* Description */}
            <div className="lg:pt-8">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Our skilled IT Consultants provide the high-performance solutions you need to turn your company into a high-performing enterprise that outperforms the competition!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Solutions Cards Section ========== */}
      <section className="py-8 sm:py-12 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-40 w-12 h-12 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* First row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {SOLUTIONS.slice(0, 3).map((solution) => (
              <div key={solution.id} className="group">
                {/* Card with rounded top */}
                <div className={`${solution.bgColor} rounded-t-[100px] rounded-b-3xl p-6 pt-12 h-80 flex items-center justify-center overflow-hidden`}>
                  <div className="w-full h-full">
                    <SolutionIcon type={solution.iconType} />
                  </div>
                </div>
                
                {/* Title and Link */}
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {solution.title}
                  </h3>
                  <div className="border-t border-slate-200 pt-4">
                    <Link
                      to={solution.link}
                      className="inline-flex items-center gap-2 text-slate-700 hover:text-cyan-600 transition-colors font-medium"
                    >
                      Read More
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 1 card (Training Hub) */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              {/* Card with rounded top */}
              <div className={`${SOLUTIONS[3].bgColor} rounded-t-[100px] rounded-b-3xl p-6 pt-12 h-80 flex items-center justify-center overflow-hidden`}>
                <div className="w-full h-full">
                  <SolutionIcon type={SOLUTIONS[3].iconType} />
                </div>
              </div>
              
              {/* Title and Link */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {SOLUTIONS[3].title}
                </h3>
                <div className="border-t border-slate-200 pt-4">
                  <Link
                    to={SOLUTIONS[3].link}
                    className="inline-flex items-center gap-2 text-slate-700 hover:text-cyan-600 transition-colors font-medium"
                  >
                    Read More
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Decorative dot */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Work With Us CTA Section ========== */}
      <section className="py-20 sm:py-28 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-16 left-1/4 w-12 h-12 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute top-24 left-1/3 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag */}
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-slate-700 border border-slate-300 rounded-full mb-6">
            WORK WITH US
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-10">
            We would love to hear<br />more<br />about your project
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

export default Solutions;
