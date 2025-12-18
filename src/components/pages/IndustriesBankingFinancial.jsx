import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Retail Banking & Lending',
    position: 'left',
  },
  {
    id: 2,
    title: 'Trading System',
    position: 'right',
  },
  {
    id: 3,
    title: 'Data Analysis & Migration Projects',
    position: 'left',
  },
  {
    id: 4,
    title: 'Capital Market',
    position: 'right',
  },
  {
    id: 5,
    title: 'Credit Card Systems',
    position: 'left',
  },
  {
    id: 6,
    title: 'Payments',
    position: 'right',
  },
  {
    id: 7,
    title: 'Asset Management',
    position: 'left',
  },
];

function IndustriesBankingFinancial() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-16 left-56 w-12 h-12 border-2 border-cyan-200 rounded-full opacity-50" />
        <div className="absolute top-32 left-96 w-3 h-3 bg-emerald-500 rounded-full" />

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
              <li className="text-slate-900 font-medium">Banking & Financial</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Banking & Financial
          </h1>

          {/* Hero Illustration - Financial/Banking themed */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 180" className="w-full h-auto">
                {/* Background elements - financial icons */}
                <defs>
                  <linearGradient id="heroGradBF" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f7fa" />
                    <stop offset="100%" stopColor="#b2ebf2" />
                  </linearGradient>
                </defs>
                
                {/* House icon */}
                <g transform="translate(100, 20)">
                  <polygon points="30,0 60,25 60,55 0,55 0,25" fill="#64748b" opacity="0.5" />
                  <rect x="20" y="35" width="20" height="20" fill="#94a3b8" />
                </g>
                
                {/* Document/chart */}
                <g transform="translate(200, 15)">
                  <rect x="0" y="0" width="40" height="50" fill="#fbbf24" rx="3" />
                  <rect x="5" y="10" width="30" height="4" fill="white" rx="1" />
                  <rect x="5" y="18" width="20" height="4" fill="white" rx="1" />
                </g>
                
                {/* Central financial hub with connections */}
                <g transform="translate(380, 40)">
                  <rect x="0" y="0" width="140" height="100" fill="#64748b" opacity="0.3" rx="10" />
                  
                  {/* Icons inside */}
                  <circle cx="35" cy="30" r="15" fill="#22c55e" opacity="0.6" />
                  <rect x="65" y="15" width="25" height="30" fill="#60a5fa" opacity="0.6" rx="3" />
                  <rect x="100" y="20" width="20" height="25" fill="#f472b6" opacity="0.6" rx="3" />
                  
                  {/* Bottom row */}
                  <rect x="20" y="55" width="100" height="30" fill="#94a3b8" opacity="0.4" rx="5" />
                </g>
                
                {/* Coin/money icon */}
                <g transform="translate(600, 30)">
                  <circle cx="25" cy="25" r="22" fill="#fbbf24" />
                  <text x="25" y="32" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">$</text>
                </g>
                
                {/* Calculator */}
                <g transform="translate(700, 20)">
                  <rect x="0" y="0" width="35" height="50" fill="#1e293b" rx="3" />
                  <rect x="5" y="5" width="25" height="15" fill="#60a5fa" rx="2" />
                  <circle cx="10" cy="28" r="3" fill="#94a3b8" />
                  <circle cx="18" cy="28" r="3" fill="#94a3b8" />
                  <circle cx="26" cy="28" r="3" fill="#94a3b8" />
                  <circle cx="10" cy="38" r="3" fill="#94a3b8" />
                  <circle cx="18" cy="38" r="3" fill="#94a3b8" />
                  <circle cx="26" cy="38" r="3" fill="#22c55e" />
                </g>
                
                {/* Briefcase */}
                <g transform="translate(780, 50)">
                  <rect x="0" y="10" width="40" height="30" fill="#64748b" rx="3" />
                  <rect x="12" y="0" width="16" height="15" fill="none" stroke="#64748b" strokeWidth="3" rx="2" />
                </g>
                
                {/* Connection lines */}
                <path d="M160 50 L200 40" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,2" />
                <path d="M240 50 L380 70" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,2" />
                <path d="M520 70 L600 55" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,2" />
                <path d="M650 55 L700 45" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Banking scene */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 350" className="w-80 h-auto">
                  {/* Piggy bank */}
                  <g transform="translate(20, 200)">
                    <ellipse cx="50" cy="50" rx="45" ry="35" fill="#f472b6" />
                    <ellipse cx="30" cy="40" rx="15" ry="12" fill="#f472b6" />
                    <circle cx="25" cy="35" r="3" fill="#1e293b" />
                    <rect x="40" y="15" width="20" height="8" fill="#fbbf24" rx="2" />
                    {/* Legs */}
                    <rect x="20" y="75" width="10" height="15" fill="#ec4899" rx="2" />
                    <rect x="70" y="75" width="10" height="15" fill="#ec4899" rx="2" />
                  </g>
                  
                  {/* Mobile phone with chart */}
                  <g transform="translate(30, 60)">
                    <rect x="0" y="0" width="70" height="120" fill="#1e293b" rx="8" />
                    <rect x="5" y="10" width="60" height="95" fill="#60a5fa" rx="5" />
                    
                    {/* Chart on phone */}
                    <rect x="10" y="20" width="50" height="40" fill="#1e293b" rx="3" />
                    <rect x="15" y="35" width="8" height="20" fill="#22c55e" rx="1" />
                    <rect x="26" y="40" width="8" height="15" fill="#22c55e" rx="1" />
                    <rect x="37" y="30" width="8" height="25" fill="#22c55e" rx="1" />
                    
                    {/* Dollar sign */}
                    <circle cx="35" cy="80" r="12" fill="#22c55e" />
                    <text x="35" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">$</text>
                  </g>
                  
                  {/* Bank Building */}
                  <g transform="translate(130, 80)">
                    {/* Roof/Pediment */}
                    <polygon points="70,0 140,40 0,40" fill="#f5f5f5" stroke="#e5e5e5" strokeWidth="2" />
                    
                    {/* Building body */}
                    <rect x="10" y="40" width="120" height="100" fill="#f5f5f5" stroke="#e5e5e5" strokeWidth="2" />
                    
                    {/* Columns */}
                    <rect x="25" y="50" width="12" height="80" fill="#e5e5e5" />
                    <rect x="50" y="50" width="12" height="80" fill="#e5e5e5" />
                    <rect x="75" y="50" width="12" height="80" fill="#e5e5e5" />
                    <rect x="100" y="50" width="12" height="80" fill="#e5e5e5" />
                    
                    {/* Door */}
                    <rect x="55" y="100" width="30" height="40" fill="#64748b" rx="2" />
                    
                    {/* Steps */}
                    <rect x="0" y="140" width="140" height="10" fill="#e5e5e5" />
                    <rect x="-5" y="150" width="150" height="10" fill="#d4d4d4" />
                  </g>
                  
                  {/* Arrow going up */}
                  <g transform="translate(280, 100)">
                    <path d="M0 80 L40 30" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
                    <polygon points="40,10 55,40 25,40" fill="#f97316" />
                  </g>
                  
                  {/* Money/Dollar bills */}
                  <g transform="translate(290, 40)">
                    <rect x="0" y="0" width="60" height="30" fill="#22c55e" rx="3" transform="rotate(-15)" />
                    <rect x="10" y="15" width="60" height="30" fill="#16a34a" rx="3" transform="rotate(-10)" />
                    <text x="40" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">$</text>
                  </g>
                  
                  {/* Gold coins stack */}
                  <g transform="translate(320, 180)">
                    <ellipse cx="25" cy="60" rx="25" ry="8" fill="#ca8a04" />
                    <rect x="0" y="50" width="50" height="10" fill="#eab308" />
                    <ellipse cx="25" cy="50" rx="25" ry="8" fill="#fbbf24" />
                    <rect x="0" y="40" width="50" height="10" fill="#eab308" />
                    <ellipse cx="25" cy="40" rx="25" ry="8" fill="#fbbf24" />
                    <rect x="0" y="30" width="50" height="10" fill="#eab308" />
                    <ellipse cx="25" cy="30" rx="25" ry="8" fill="#fbbf24" />
                  </g>
                  
                  {/* Business people */}
                  <g transform="translate(140, 220)">
                    {/* Person 1 - left */}
                    <circle cx="30" cy="20" r="15" fill="#1e293b" />
                    <rect x="18" y="38" width="24" height="50" rx="4" fill="#dc2626" />
                    
                    {/* Person 2 - center */}
                    <circle cx="80" cy="15" r="15" fill="#fbbf24" />
                    <rect x="68" y="33" width="24" height="55" rx="4" fill="#1e293b" />
                    {/* Briefcase */}
                    <rect x="95" y="55" width="20" height="15" fill="#64748b" rx="2" />
                    
                    {/* Person 3 - right (handshake) */}
                    <circle cx="130" cy="20" r="15" fill="#1e293b" />
                    <rect x="118" y="38" width="24" height="50" rx="4" fill="#dc2626" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                There are few industries quite as frequently evolving and ever-changing as the financial sector. Due to the critical nature of handling currency and personal information, businesses and banks must remain consistently innovative and at the forefront of every new technological trend. In addition to nurturing sustainable data storage and analysis while ensuring employee productivity, the installation and maintenance of modern technology is essential in remaining vigilant against vulnerabilities. As technology changes, as does the industry as a whole —and therefore, your business must be ready to adapt for proper risk management, competitive advantage and forward momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Key Offerings Timeline ========== */}
      <section className="py-16 sm:py-24 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-24 w-12 h-12 border-2 border-cyan-200 rounded-full opacity-50" />
        <div className="absolute top-20 left-64 w-3 h-3 bg-emerald-500 rounded-full" />
        
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
              {KEY_OFFERINGS.map((item) => (
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
        <div className="absolute top-16 right-1/3 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-emerald-500 rounded-full" />
        
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

export default IndustriesBankingFinancial;
