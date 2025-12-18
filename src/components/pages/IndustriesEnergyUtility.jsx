import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Management of the workforce and cor...',
    position: 'left',
  },
  {
    id: 2,
    title: 'Risk management and quality assuran...',
    position: 'right',
  },
  {
    id: 3,
    title: 'Management of the supply chain.',
    position: 'left',
  },
  {
    id: 4,
    title: 'Customer relationship management',
    position: 'right',
  },
  {
    id: 5,
    title: 'IT outsourcing and staff augmentation',
    position: 'left',
  },
  {
    id: 6,
    title: 'Procurement.',
    position: 'right',
  },
];

function IndustriesEnergyUtility() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-24 left-1/2 w-12 h-12 border-2 border-cyan-200 rounded-full opacity-50" />

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
              <li className="text-slate-900 font-medium">Energy & Utility</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Energy & Utility
          </h1>

          {/* Hero Illustration - Energy/Utility themed */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 180" className="w-full h-auto">
                {/* Power lines / Transmission towers */}
                <g transform="translate(100, 30)">
                  <line x1="30" y1="0" x2="30" y2="120" stroke="#f472b6" strokeWidth="4" />
                  <line x1="0" y1="20" x2="60" y2="20" stroke="#f472b6" strokeWidth="3" />
                  <line x1="5" y1="50" x2="55" y2="50" stroke="#f472b6" strokeWidth="3" />
                  <line x1="10" y1="80" x2="50" y2="80" stroke="#f472b6" strokeWidth="2" />
                  {/* Cross beams */}
                  <line x1="15" y1="20" x2="30" y2="50" stroke="#f472b6" strokeWidth="2" />
                  <line x1="45" y1="20" x2="30" y2="50" stroke="#f472b6" strokeWidth="2" />
                </g>
                
                {/* Person at power station */}
                <g transform="translate(180, 60)">
                  <circle cx="20" cy="20" r="18" fill="#1e293b" />
                  <rect x="5" y="42" width="30" height="60" rx="4" fill="#f472b6" />
                  {/* Pointing arm */}
                  <line x1="35" y1="55" x2="60" y2="35" stroke="#fcd34d" strokeWidth="6" strokeLinecap="round" />
                </g>
                
                {/* Buildings cluster */}
                <g transform="translate(350, 20)">
                  <rect x="0" y="60" width="40" height="100" fill="#0ea5e9" rx="3" />
                  <rect x="50" y="40" width="50" height="120" fill="#0284c7" rx="3" />
                  <rect x="110" y="70" width="35" height="90" fill="#06b6d4" rx="3" />
                  
                  {/* Windows */}
                  {[0, 1, 2, 3].map((row) => (
                    <g key={row}>
                      <rect x="5" y={70 + row * 20} width="10" height="10" fill="#60a5fa" rx="1" />
                      <rect x="20" y={70 + row * 20} width="10" height="10" fill="#60a5fa" rx="1" />
                      <rect x="55" y={50 + row * 25} width="12" height="12" fill="#60a5fa" rx="1" />
                      <rect x="75" y={50 + row * 25} width="12" height="12" fill="#60a5fa" rx="1" />
                    </g>
                  ))}
                </g>
                
                {/* Taxi */}
                <g transform="translate(520, 130)">
                  <rect x="0" y="0" width="60" height="25" fill="#fbbf24" rx="5" />
                  <rect x="10" y="-10" width="40" height="15" fill="#fbbf24" rx="3" />
                  <text x="30" y="15" textAnchor="middle" fill="#1e293b" fontSize="8" fontWeight="bold">TAXI</text>
                  <circle cx="12" cy="28" r="6" fill="#1e293b" />
                  <circle cx="48" cy="28" r="6" fill="#1e293b" />
                </g>
                
                {/* Power/transmission tower right */}
                <g transform="translate(650, 20)">
                  <line x1="40" y1="0" x2="40" y2="140" stroke="#64748b" strokeWidth="4" />
                  <line x1="20" y1="0" x2="60" y2="0" stroke="#64748b" strokeWidth="3" />
                  <line x1="0" y1="30" x2="80" y2="30" stroke="#64748b" strokeWidth="3" />
                  <line x1="10" y1="60" x2="70" y2="60" stroke="#64748b" strokeWidth="2" />
                  {/* Diagonal supports */}
                  <line x1="20" y1="0" x2="40" y2="30" stroke="#64748b" strokeWidth="2" />
                  <line x1="60" y1="0" x2="40" y2="30" stroke="#64748b" strokeWidth="2" />
                  <line x1="10" y1="30" x2="40" y2="60" stroke="#64748b" strokeWidth="2" />
                  <line x1="70" y1="30" x2="40" y2="60" stroke="#64748b" strokeWidth="2" />
                </g>
                
                {/* Person on right */}
                <g transform="translate(780, 40)">
                  <circle cx="20" cy="20" r="18" fill="#1e293b" />
                  <rect x="5" y="42" width="30" height="70" rx="4" fill="#0ea5e9" />
                </g>
                
                {/* Power lines connecting */}
                <path d="M160 50 Q300 20, 350 60" stroke="#f472b6" strokeWidth="2" fill="none" strokeDasharray="4,2" />
                <path d="M500 80 Q550 50, 650 40" stroke="#64748b" strokeWidth="2" fill="none" strokeDasharray="4,2" />
                
                {/* Green dot */}
                <circle cx="550" cy="170" r="4" fill="#22c55e" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Energy infrastructure */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 350" className="w-80 h-auto">
                  {/* Background blobs */}
                  <ellipse cx="200" cy="175" rx="160" ry="140" fill="#dbeafe" opacity="0.5" />
                  <ellipse cx="320" cy="200" rx="80" ry="100" fill="#dbeafe" opacity="0.3" />
                  
                  {/* Light bulb */}
                  <g transform="translate(100, 30)">
                    <circle cx="40" cy="40" r="35" fill="#fb923c" />
                    <rect x="30" y="70" width="20" height="15" fill="#64748b" />
                    <rect x="33" y="82" width="14" height="5" fill="#475569" />
                    {/* Filament */}
                    <path d="M35 55 Q40 45, 45 55" stroke="#fbbf24" strokeWidth="3" fill="none" />
                  </g>
                  
                  {/* Transmission Tower - center */}
                  <g transform="translate(150, 80)">
                    {/* Main vertical structure */}
                    <line x1="50" y1="0" x2="50" y2="180" stroke="#1e293b" strokeWidth="4" />
                    
                    {/* Horizontal arms */}
                    <line x1="20" y1="20" x2="80" y2="20" stroke="#1e293b" strokeWidth="3" />
                    <line x1="25" y1="60" x2="75" y2="60" stroke="#1e293b" strokeWidth="3" />
                    <line x1="30" y1="100" x2="70" y2="100" stroke="#1e293b" strokeWidth="2" />
                    
                    {/* Diagonal supports */}
                    <line x1="20" y1="20" x2="50" y2="60" stroke="#1e293b" strokeWidth="2" />
                    <line x1="80" y1="20" x2="50" y2="60" stroke="#1e293b" strokeWidth="2" />
                    <line x1="25" y1="60" x2="50" y2="100" stroke="#1e293b" strokeWidth="2" />
                    <line x1="75" y1="60" x2="50" y2="100" stroke="#1e293b" strokeWidth="2" />
                    <line x1="30" y1="100" x2="50" y2="140" stroke="#1e293b" strokeWidth="2" />
                    <line x1="70" y1="100" x2="50" y2="140" stroke="#1e293b" strokeWidth="2" />
                    
                    {/* Base */}
                    <line x1="35" y1="180" x2="20" y2="200" stroke="#1e293b" strokeWidth="3" />
                    <line x1="65" y1="180" x2="80" y2="200" stroke="#1e293b" strokeWidth="3" />
                  </g>
                  
                  {/* Dam */}
                  <g transform="translate(30, 200)">
                    <rect x="0" y="20" width="80" height="60" fill="#6366f1" rx="5" />
                    <rect x="10" y="30" width="15" height="45" fill="#818cf8" rx="2" />
                    <rect x="32" y="30" width="15" height="45" fill="#818cf8" rx="2" />
                    <rect x="55" y="30" width="15" height="45" fill="#818cf8" rx="2" />
                    {/* Water drops */}
                    <ellipse cx="18" cy="85" rx="5" ry="8" fill="#60a5fa" />
                    <ellipse cx="40" cy="90" rx="4" ry="6" fill="#60a5fa" />
                    <ellipse cx="62" cy="85" rx="5" ry="8" fill="#60a5fa" />
                  </g>
                  
                  {/* Gears */}
                  <g transform="translate(50, 170)">
                    <circle cx="0" cy="0" r="18" fill="none" stroke="#94a3b8" strokeWidth="4" />
                    <circle cx="0" cy="0" r="6" fill="#94a3b8" />
                  </g>
                  <g transform="translate(35, 195)">
                    <circle cx="0" cy="0" r="12" fill="none" stroke="#94a3b8" strokeWidth="3" />
                    <circle cx="0" cy="0" r="4" fill="#94a3b8" />
                  </g>
                  
                  {/* Wind Turbines */}
                  <g transform="translate(280, 150)">
                    <rect x="18" y="50" width="4" height="80" fill="#64748b" />
                    <circle cx="20" cy="50" r="8" fill="#94a3b8" />
                    <line x1="20" y1="50" x2="20" y2="20" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                    <line x1="20" y1="50" x2="45" y2="70" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                    <line x1="20" y1="50" x2="-5" y2="70" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                  </g>
                  <g transform="translate(320, 170)">
                    <rect x="13" y="40" width="4" height="60" fill="#64748b" />
                    <circle cx="15" cy="40" r="6" fill="#94a3b8" />
                    <line x1="15" y1="40" x2="15" y2="15" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="15" y1="40" x2="35" y2="55" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="15" y1="40" x2="-5" y2="55" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                  </g>
                  
                  {/* Solar Panels */}
                  <g transform="translate(250, 260)">
                    <rect x="0" y="0" width="70" height="45" fill="#6366f1" rx="3" transform="skewY(-5)" />
                    <line x1="0" y1="15" x2="70" y2="12" stroke="#818cf8" strokeWidth="2" />
                    <line x1="0" y1="30" x2="70" y2="27" stroke="#818cf8" strokeWidth="2" />
                    <line x1="23" y1="0" x2="23" y2="45" stroke="#818cf8" strokeWidth="2" />
                    <line x1="47" y1="0" x2="47" y2="45" stroke="#818cf8" strokeWidth="2" />
                  </g>
                  
                  {/* Person */}
                  <g transform="translate(190, 240)">
                    <circle cx="15" cy="15" r="15" fill="#fbbf24" />
                    <rect x="3" y="33" width="24" height="50" rx="4" fill="#1e293b" />
                    {/* Pointing arm */}
                    <line x1="27" y1="45" x2="50" y2="30" stroke="#fcd34d" strokeWidth="5" strokeLinecap="round" />
                  </g>
                  
                  {/* Arrows indicating flow */}
                  <g transform="translate(330, 180)">
                    <path d="M0 0 L20 -10 L20 -5 L40 -5 L40 -15 L60 0 L40 15 L40 5 L20 5 L20 10 Z" fill="#60a5fa" opacity="0.6" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Leverage the unbridled power of digital transformation within an industry that provides essential services for businesses and individuals alike. Homes, offices and entire organizations rely on predictable consistency and high capabilities. As technology evolves, so do the needs of the customers energy and utility companies supply – fast speeds and smooth processes are expected at the most affordable rates available. The first step in delivering high performance and equally efficient value is to upgrade your own IT solutions to facilitate continuous growth and scalability.
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
                        
                        {/* Decorative element on specific card */}
                        {index === 3 && (
                          <div className="absolute -top-3 right-8 w-8 h-8 border border-cyan-200 rounded-full opacity-50 flex items-center justify-center">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          </div>
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
        <div className="absolute top-16 left-1/3 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-emerald-500 rounded-full" />
        
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

export default IndustriesEnergyUtility;
