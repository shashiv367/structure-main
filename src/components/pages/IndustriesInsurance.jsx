import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Management of the Policy Life Cycle',
    position: 'left',
  },
  {
    id: 2,
    title: 'Management of Claims',
    position: 'right',
  },
  {
    id: 3,
    title: 'Integration of the state and systems',
    position: 'left',
  },
  {
    id: 4,
    title: 'Systems for obtaining quotes',
    position: 'right',
  },
  {
    id: 5,
    title: 'Systems for Enforcement and Licensin...',
    position: 'left',
  },
  {
    id: 6,
    title: 'Integration of Carrier and Broker',
    position: 'right',
  },
  {
    id: 7,
    title: 'Systems for Underwriting',
    position: 'left',
  },
];

function IndustriesInsurance() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-16 left-40 w-12 h-12 border-2 border-cyan-200 rounded-full opacity-50" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              </li>
              <li className="text-slate-400">•</li>
              <li>
                <Link to="/industries" className="hover:text-sky-600 transition-colors">Industries</Link>
              </li>
              <li className="text-slate-400">•</li>
              <li className="text-slate-900 font-medium">Insurance</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Insurance
          </h1>

          {/* Hero Illustration - Insurance themed with business people and checklist */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 180" className="w-full h-auto">
                {/* Business person 1 - left */}
                <g transform="translate(200, 20)">
                  <circle cx="30" cy="30" r="25" fill="#64748b" />
                  <rect x="10" y="60" width="40" height="80" rx="5" fill="#0ea5e9" />
                  {/* Briefcase */}
                  <rect x="55" y="90" width="30" height="22" fill="#1e293b" rx="3" />
                </g>
                
                {/* Business person 2 */}
                <g transform="translate(280, 30)">
                  <circle cx="30" cy="25" r="22" fill="#fbbf24" />
                  <rect x="12" y="52" width="36" height="70" rx="5" fill="#f1f5f9" />
                </g>
                
                {/* Central Document/Checklist */}
                <g transform="translate(380, 30)">
                  <rect x="0" y="0" width="140" height="130" fill="#ecfdf5" rx="8" />
                  <rect x="15" y="20" width="80" height="8" fill="#94a3b8" rx="2" />
                  <rect x="100" y="18" width="25" height="12" fill="none" stroke="#0ea5e9" strokeWidth="2" rx="2" />
                  <path d="M105 24 L110 29 L120 19" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeLinecap="round" />
                  
                  <rect x="15" y="45" width="80" height="8" fill="#94a3b8" rx="2" />
                  <rect x="100" y="43" width="25" height="12" fill="none" stroke="#0ea5e9" strokeWidth="2" rx="2" />
                  
                  <rect x="15" y="70" width="80" height="8" fill="#94a3b8" rx="2" />
                  <rect x="100" y="68" width="25" height="12" fill="none" stroke="#0ea5e9" strokeWidth="2" rx="2" />
                  <path d="M105 74 L110 79 L120 69" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeLinecap="round" />
                  
                  <rect x="15" y="95" width="80" height="8" fill="#94a3b8" rx="2" />
                  <rect x="100" y="93" width="25" height="12" fill="none" stroke="#0ea5e9" strokeWidth="2" rx="2" />
                </g>
                
                {/* Business person 3 */}
                <g transform="translate(550, 20)">
                  <circle cx="30" cy="30" r="25" fill="#1e293b" />
                  <rect x="10" y="60" width="40" height="85" rx="5" fill="#64748b" />
                </g>
                
                {/* Business person 4 - right */}
                <g transform="translate(640, 30)">
                  <circle cx="30" cy="25" r="22" fill="#64748b" />
                  <rect x="12" y="52" width="36" height="75" rx="5" fill="#0ea5e9" />
                </g>
                
                {/* Plant pot */}
                <g transform="translate(750, 120)">
                  <rect x="0" y="20" width="30" height="25" fill="#1e293b" rx="3" />
                  <ellipse cx="15" cy="10" rx="20" ry="15" fill="#22c55e" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Insurance themed with umbrella, phone, icons */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 400" className="w-80 h-auto">
                  {/* Background blob */}
                  <ellipse cx="200" cy="200" rx="150" ry="160" fill="#dbeafe" opacity="0.5" />
                  
                  {/* Umbrella */}
                  <g transform="translate(80, 60)">
                    {/* Umbrella canopy */}
                    <ellipse cx="100" cy="50" rx="100" ry="45" fill="#fb923c" />
                    <ellipse cx="100" cy="55" rx="85" ry="35" fill="#f97316" />
                    {/* Umbrella handle */}
                    <rect x="96" y="50" width="8" height="120" fill="#ea580c" />
                    <path d="M100 170 Q80 180, 80 200 Q80 215, 95 215" stroke="#ea580c" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </g>
                  
                  {/* Phone with shield */}
                  <g transform="translate(150, 180)">
                    <rect x="0" y="0" width="100" height="160" fill="#3b82f6" rx="12" />
                    <rect x="8" y="15" width="84" height="125" fill="#60a5fa" rx="8" />
                    
                    {/* Shield icon on phone */}
                    <g transform="translate(25, 40)">
                      <path d="M25 0 L50 10 L50 35 L25 55 L0 35 L0 10 Z" fill="#fb923c" />
                      <path d="M25 8 L42 16 L42 32 L25 48 L8 32 L8 16 Z" fill="#fdba74" />
                      <path d="M18 28 L23 33 L35 21" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </g>
                  
                  {/* Person */}
                  <g transform="translate(100, 280)">
                    <circle cx="20" cy="15" r="15" fill="#1e293b" />
                    <rect x="5" y="33" width="30" height="60" rx="4" fill="#3b82f6" />
                    {/* Pointing arm */}
                    <line x1="35" y1="50" x2="60" y2="35" stroke="#fcd34d" strokeWidth="6" strokeLinecap="round" />
                  </g>
                  
                  {/* Icon bubbles */}
                  {/* Family icon */}
                  <g transform="translate(280, 120)">
                    <circle cx="30" cy="30" r="30" fill="white" stroke="#3b82f6" strokeWidth="2" />
                    <circle cx="20" cy="22" r="8" fill="#f97316" />
                    <circle cx="40" cy="22" r="8" fill="#f97316" />
                    <rect x="12" y="32" width="16" height="20" rx="3" fill="#f97316" />
                    <rect x="32" y="32" width="16" height="20" rx="3" fill="#f97316" />
                  </g>
                  
                  {/* Home icon */}
                  <g transform="translate(300, 200)">
                    <circle cx="30" cy="30" r="30" fill="white" stroke="#3b82f6" strokeWidth="2" />
                    <polygon points="30,12 50,30 50,48 10,48 10,30" fill="#f97316" />
                    <rect x="24" y="35" width="12" height="13" fill="#fdba74" rx="1" />
                  </g>
                  
                  {/* Medical cross icon */}
                  <g transform="translate(260, 290)">
                    <circle cx="30" cy="30" r="30" fill="white" stroke="#3b82f6" strokeWidth="2" />
                    <rect x="25" y="15" width="10" height="30" fill="#ef4444" rx="2" />
                    <rect x="15" y="25" width="30" height="10" fill="#ef4444" rx="2" />
                  </g>
                  
                  {/* Connection lines */}
                  <path d="M250 180 Q270 160, 280 150" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4,2" />
                  <path d="M255 240 Q280 230, 300 230" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4,2" />
                  <path d="M250 300 Q260 300, 260 310" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4,2" />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Gain a competitive edge and skyrocket growth with technologically-savvy services and knowledgeable employees. Within the insurance industry, people are more likely to invest in a company that is easy to reach, provides quick processes and ensures smooth transactions.
              </p>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                With the best of the best services enabled by modern technology solutions, insurance companies can capture more qualified leads, increase brand trust, boost communication efforts and nurture customer retention – while striding forward and beyond competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Key Offerings Timeline ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16 italic">
            Key offerings
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-sky-400 via-sky-500 to-cyan-400" style={{ backgroundImage: 'linear-gradient(to bottom, #0ea5e9, #0ea5e9 50%, transparent 50%)', backgroundSize: '2px 12px' }} />

            <div className="space-y-12">
              {KEY_OFFERINGS.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-sky-500 bg-white z-10" />
                  
                  {/* Content card */}
                  <div className={`flex items-center ${item.position === 'left' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full md:w-5/12 ${item.position === 'right' ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 relative">
                        {/* Arrow pointer */}
                        <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-r border-slate-100 transform rotate-45 ${
                          item.position === 'left' ? '-right-2' : '-left-2 rotate-[225deg]'
                        }`} />
                        
                        {/* Decorative elements */}
                        {index === 1 && (
                          <div className="absolute -top-4 left-[-40px] w-10 h-10 border border-cyan-200 rounded-full opacity-50" />
                        )}
                        {index === 3 && (
                          <div className="absolute top-4 right-[-50px] w-3 h-3 bg-emerald-500 rounded-full" />
                        )}
                        {index === 6 && (
                          <div className="absolute top-3 right-8 w-8 h-8 border border-cyan-200 rounded-full opacity-50" />
                        )}
                        
                        <p className="text-lg font-bold text-slate-900">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. CTA Section ========== */}
      <section className="py-20 sm:py-28 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-1/2 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag */}
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-slate-700 border border-slate-300 rounded-full mb-6">
            WANT TO GET STARTED?
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-10 italic">
            DECIDE WHAT'S BEST<br />FOR YOUR BUSINESS!
          </h2>

          {/* CTA Button */}
          <div className="relative inline-block">
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

export default IndustriesInsurance;
