import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Management of Inventory',
    position: 'left',
  },
  {
    id: 2,
    title: 'Business Intelligence',
    position: 'right',
  },
  {
    id: 3,
    title: 'Data / DMS Integration, CMS Applications',
    position: 'left',
  },
  {
    id: 4,
    title: 'Management of Distribution',
    position: 'right',
    hasDecorator: true,
  },
  {
    id: 5,
    title: 'Working towards your business',
    position: 'left',
  },
  {
    id: 6,
    title: 'Web Applications',
    position: 'right',
  },
  {
    id: 7,
    title: 'Hotel Booking Applications',
    position: 'left',
  },
  {
    id: 8,
    title: 'Re-engineering and Product Development',
    position: 'right',
  },
  {
    id: 9,
    title: 'Mobile Applications',
    position: 'left',
  },
];

function IndustriesTravelHospitality() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-8">
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
              <li className="text-slate-900 font-medium">Travel & Hospitality</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-8">
            Travel & Hospitality
          </h1>

          {/* Hero Illustration - Cityscape with travel elements */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <svg viewBox="0 0 800 180" className="w-full h-auto">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="skyGradientTH" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ecfeff" />
                    <stop offset="100%" stopColor="#cffafe" />
                  </linearGradient>
                </defs>
                <rect x="50" y="20" width="700" height="140" fill="url(#skyGradientTH)" rx="8" />
                
                {/* Mountains in background */}
                <polygon points="50,160 150,80 250,160" fill="#d1fae5" />
                <polygon points="180,160 280,90 380,160" fill="#a7f3d0" />
                
                {/* Hotel building - center */}
                <g transform="translate(280, 40)">
                  {/* Main building */}
                  <rect x="0" y="20" width="100" height="100" fill="#f1f5f9" rx="3" />
                  {/* Roof with "HOTEL" sign */}
                  <rect x="-10" y="0" width="120" height="25" fill="#94a3b8" rx="3" />
                  <text x="50" y="17" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">HOTEL</text>
                  {/* Windows */}
                  {[0, 1, 2].map((row) =>
                    [0, 1, 2, 3].map((col) => (
                      <rect key={`${row}-${col}`} x={10 + col * 22} y={30 + row * 28} width="16" height="20" fill="#fef3c7" rx="1" />
                    ))
                  )}
                </g>
                
                {/* Building 1 - left */}
                <g transform="translate(130, 50)">
                  <rect x="0" y="0" width="60" height="110" fill="#cbd5e1" rx="3" />
                  <rect x="5" y="10" width="12" height="15" fill="#e0f2fe" rx="1" />
                  <rect x="22" y="10" width="12" height="15" fill="#e0f2fe" rx="1" />
                  <rect x="40" y="10" width="12" height="15" fill="#e0f2fe" rx="1" />
                  <rect x="5" y="35" width="12" height="15" fill="#e0f2fe" rx="1" />
                  <rect x="22" y="35" width="12" height="15" fill="#e0f2fe" rx="1" />
                  <rect x="40" y="35" width="12" height="15" fill="#e0f2fe" rx="1" />
                </g>
                
                {/* Building 2 - left small */}
                <g transform="translate(200, 80)">
                  <rect x="0" y="0" width="50" height="80" fill="#a5b4c4" rx="3" />
                  <rect x="8" y="10" width="15" height="12" fill="#bfdbfe" rx="1" />
                  <rect x="28" y="10" width="15" height="12" fill="#bfdbfe" rx="1" />
                  <rect x="8" y="30" width="15" height="12" fill="#bfdbfe" rx="1" />
                  <rect x="28" y="30" width="15" height="12" fill="#bfdbfe" rx="1" />
                </g>
                
                {/* Building 3 - right */}
                <g transform="translate(400, 60)">
                  <rect x="0" y="0" width="70" height="100" fill="#94a3b8" rx="3" />
                  {[0, 1, 2].map((row) =>
                    [0, 1, 2].map((col) => (
                      <rect key={`r${row}-${col}`} x={8 + col * 20} y={10 + row * 28} width="14" height="18" fill="#dbeafe" rx="1" />
                    ))
                  )}
                </g>
                
                {/* Camera icon */}
                <g transform="translate(250, 55)">
                  <rect x="0" y="5" width="35" height="25" fill="#64748b" rx="4" />
                  <circle cx="17" cy="17" r="8" fill="#1e293b" />
                  <circle cx="17" cy="17" r="5" fill="#60a5fa" />
                  <rect x="5" y="0" width="12" height="8" fill="#64748b" rx="2" />
                </g>
                
                {/* Tree - left */}
                <g transform="translate(100, 120)">
                  <rect x="8" y="20" width="8" height="25" fill="#92400e" />
                  <circle cx="12" cy="12" r="18" fill="#22c55e" />
                </g>
                
                {/* Tree - right */}
                <g transform="translate(500, 110)">
                  <rect x="10" y="25" width="10" height="30" fill="#92400e" />
                  <ellipse cx="15" cy="15" rx="20" ry="22" fill="#16a34a" />
                </g>
                
                {/* Taxi/Car */}
                <g transform="translate(550, 120)">
                  <rect x="0" y="10" width="55" height="25" fill="#fbbf24" rx="5" />
                  <rect x="8" y="0" width="38" height="18" fill="#fbbf24" rx="4" />
                  <rect x="12" y="3" width="14" height="10" fill="#bfdbfe" rx="2" />
                  <rect x="30" y="3" width="14" height="10" fill="#bfdbfe" rx="2" />
                  <circle cx="12" cy="38" r="6" fill="#1e293b" />
                  <circle cx="43" cy="38" r="6" fill="#1e293b" />
                </g>
                
                {/* Location pin 1 */}
                <g transform="translate(350, 25)">
                  <path d="M10 0 C4 0, 0 5, 0 10 C0 18, 10 25, 10 25 C10 25, 20 18, 20 10 C20 5, 16 0, 10 0" fill="#ef4444" />
                  <circle cx="10" cy="10" r="4" fill="white" />
                </g>
                
                {/* Location pin 2 */}
                <g transform="translate(480, 45)">
                  <path d="M8 0 C3 0, 0 4, 0 8 C0 14, 8 20, 8 20 C8 20, 16 14, 16 8 C16 4, 13 0, 8 0" fill="#ef4444" />
                  <circle cx="8" cy="8" r="3" fill="white" />
                </g>
                
                {/* Ground/Road */}
                <rect x="50" y="155" width="700" height="8" fill="#d4a574" rx="2" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Gradient bar */}
        <div className="h-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400" />
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Hotel booking scene */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 450" className="w-80 h-auto">
                  {/* Background blobs */}
                  <ellipse cx="200" cy="200" rx="160" ry="180" fill="#c7d2fe" opacity="0.3" />
                  <ellipse cx="180" cy="380" rx="120" ry="50" fill="#22c55e" opacity="0.3" />
                  
                  {/* Hotel Building */}
                  <g transform="translate(120, 80)">
                    {/* Main building */}
                    <rect x="0" y="0" width="160" height="280" fill="#fef3c7" rx="5" />
                    <rect x="0" y="0" width="160" height="280" fill="none" stroke="#fbbf24" strokeWidth="2" rx="5" />
                    
                    {/* Windows - 5 floors, 4 windows each */}
                    {[0, 1, 2, 3, 4].map((floor) =>
                      [0, 1, 2, 3].map((col) => (
                        <g key={`f${floor}-w${col}`} transform={`translate(${12 + col * 38}, ${20 + floor * 52})`}>
                          <rect x="0" y="0" width="28" height="40" fill="#60a5fa" rx="2" />
                          {/* Window dividers */}
                          <line x1="14" y1="0" x2="14" y2="40" stroke="#3b82f6" strokeWidth="1" />
                          <line x1="0" y1="20" x2="28" y2="20" stroke="#3b82f6" strokeWidth="1" />
                          {/* Balcony railing */}
                          <rect x="-2" y="38" width="32" height="4" fill="#94a3b8" rx="1" />
                        </g>
                      ))
                    )}
                    
                    {/* Entrance */}
                    <rect x="55" y="250" width="50" height="30" fill="#1e293b" rx="3" />
                    <rect x="60" y="255" width="40" height="25" fill="#38bdf8" rx="2" />
                  </g>
                  
                  {/* Heart notification icons */}
                  <g transform="translate(150, 100)">
                    <rect x="0" y="0" width="30" height="25" fill="#ef4444" rx="5" />
                    <path d="M15 8 C12 5, 7 8, 15 16 C23 8, 18 5, 15 8" fill="white" />
                    <polygon points="10,25 15,32 20,25" fill="#ef4444" />
                  </g>
                  
                  <g transform="translate(200, 140)">
                    <rect x="0" y="0" width="28" height="22" fill="#ef4444" rx="5" />
                    <path d="M14 6 C11 3, 6 6, 14 13 C22 6, 17 3, 14 6" fill="white" />
                    <polygon points="9,22 14,28 19,22" fill="#ef4444" />
                  </g>
                  
                  {/* Key card / Room tag */}
                  <g transform="translate(290, 200)">
                    <rect x="0" y="0" width="60" height="80" fill="#ef4444" rx="8" />
                    <circle cx="30" cy="15" r="8" fill="none" stroke="white" strokeWidth="2" />
                    <text x="30" y="55" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">302</text>
                  </g>
                  
                  {/* Thumbs up icon */}
                  <g transform="translate(320, 160)">
                    <circle cx="25" cy="25" r="25" fill="#f1f5f9" />
                    <path d="M20 35 L20 22 L25 15 L30 15 L30 22 L35 22 L35 35 Z" fill="#3b82f6" />
                    <rect x="15" y="23" width="8" height="13" fill="#3b82f6" rx="2" />
                  </g>
                  
                  {/* Key icon */}
                  <g transform="translate(310, 120)">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="#64748b" strokeWidth="3" />
                    <rect x="18" y="8" width="25" height="8" fill="#64748b" rx="2" />
                    <rect x="35" y="12" width="5" height="8" fill="#64748b" />
                    <rect x="28" y="12" width="5" height="8" fill="#64748b" />
                  </g>
                  
                  {/* Woman with phone */}
                  <g transform="translate(40, 220)">
                    {/* Hair */}
                    <ellipse cx="40" cy="25" rx="25" ry="28" fill="#1e293b" />
                    {/* Face */}
                    <ellipse cx="40" cy="30" rx="18" ry="20" fill="#fcd34d" />
                    {/* Body */}
                    <rect x="20" y="55" width="40" height="80" fill="#0ea5e9" rx="5" />
                    {/* Arm holding phone */}
                    <rect x="55" y="60" width="12" height="50" fill="#fcd34d" rx="3" />
                    {/* Phone */}
                    <rect x="62" y="50" width="35" height="55" fill="white" rx="4" stroke="#e2e8f0" strokeWidth="1" />
                    {/* Phone screen content - grid */}
                    <rect x="67" y="58" width="10" height="10" fill="#e2e8f0" rx="1" />
                    <rect x="80" y="58" width="10" height="10" fill="#e2e8f0" rx="1" />
                    <rect x="67" y="72" width="10" height="10" fill="#e2e8f0" rx="1" />
                    <rect x="80" y="72" width="10" height="10" fill="#e2e8f0" rx="1" />
                    <rect x="67" y="86" width="10" height="10" fill="#e2e8f0" rx="1" />
                    <rect x="80" y="86" width="10" height="10" fill="#e2e8f0" rx="1" />
                  </g>
                  
                  {/* Suitcase */}
                  <g transform="translate(100, 370)">
                    <rect x="0" y="10" width="50" height="60" fill="#ef4444" rx="5" />
                    <rect x="15" y="0" width="20" height="15" fill="#ef4444" rx="3" />
                    <rect x="20" y="3" width="10" height="8" fill="#dc2626" rx="2" />
                    <line x1="25" y1="25" x2="25" y2="55" stroke="#dc2626" strokeWidth="3" />
                    <circle cx="8" cy="75" r="5" fill="#1e293b" />
                    <circle cx="42" cy="75" r="5" fill="#1e293b" />
                  </g>
                  
                  {/* Plants/foliage */}
                  <g transform="translate(60, 360)">
                    <ellipse cx="20" cy="30" rx="25" ry="20" fill="#22c55e" />
                    <ellipse cx="35" cy="25" rx="20" ry="18" fill="#16a34a" />
                  </g>
                  <g transform="translate(250, 370)">
                    <ellipse cx="20" cy="25" rx="22" ry="18" fill="#22c55e" />
                    <ellipse cx="40" cy="20" rx="18" ry="15" fill="#16a34a" />
                  </g>
                  <g transform="translate(290, 350)">
                    <ellipse cx="15" cy="35" rx="18" ry="25" fill="#15803d" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Around the world, guest experiences are now driven by technology with trips booked at the click of a mouse or the swipe of a screen. Convenience is often the factor of choice when determining which company to do business with, which is what makes technology such a powerful and revolutionary tool for those who upgrade properly. In what is truly a people-to-people industry, the human touch shouldn't be set aside, but rather enhanced by advancements in digital transformation. Innovations in cloud storage, cybersecurity and communication tools help to better organize information, reduce risk and ultimately provide excellent customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Key Offerings Timeline ========== */}
      <section className="py-16 sm:py-24 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute bottom-1/3 right-24 w-16 h-16 rounded-full border-2 border-sky-200 opacity-50" />
        <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-emerald-500 rounded-full" />
        
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
                        
                        {/* Decorative elements for specific items */}
                        {item.hasDecorator && (
                          <>
                            <div className="absolute -top-6 right-12 w-8 h-8 rounded-full border-2 border-cyan-300 flex items-center justify-center">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                            </div>
                          </>
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
        <div className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full border-2 border-sky-200 opacity-40" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-500 rounded-full" />
        
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

      {/* ========== 5. Business Process Illustration ========== */}
      <section className="py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-48 sm:h-64">
            <svg viewBox="0 0 1000 200" className="w-full h-full">
              {/* Background pattern */}
              <defs>
                <pattern id="gridPatternTH" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternTH)" />
              
              {/* Connection lines */}
              <path d="M50 100 L150 100 L250 60 L350 100 L450 50 L550 100 L650 80 L750 100 L850 70 L950 100" 
                    stroke="white" strokeWidth="2" fill="none" strokeDasharray="6,4" opacity="0.5" />
              
              {/* Connection nodes */}
              {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950].map((x, i) => (
                <circle key={i} cx={x} cy={i % 2 === 0 ? 100 : (i % 3 === 0 ? 60 : 80)} r="6" fill="white" />
              ))}
              
              {/* Suitcase icon */}
              <g transform="translate(30, 115)">
                <rect x="0" y="10" width="40" height="50" fill="#fbbf24" rx="5" />
                <rect x="12" y="0" width="16" height="14" fill="#fbbf24" rx="3" />
                <line x1="20" y1="20" x2="20" y2="50" stroke="#ca8a04" strokeWidth="3" />
              </g>
              
              {/* Business scenes */}
              <g transform="translate(100, 90)">
                <rect x="0" y="10" width="50" height="35" fill="#f1f5f9" rx="3" />
                <circle cx="80" cy="30" r="12" fill="#1e293b" />
                <rect x="68" y="43" width="24" height="40" rx="3" fill="#0284c7" />
              </g>
              
              <g transform="translate(280, 85)">
                <rect x="0" y="15" width="50" height="30" fill="#0f172a" rx="3" />
                <circle cx="70" cy="25" r="12" fill="#1e293b" />
                <rect x="58" y="38" width="24" height="40" rx="3" fill="#0284c7" />
                <circle cx="100" cy="28" r="12" fill="#1e293b" />
                <rect x="88" y="41" width="24" height="37" rx="3" fill="#1e293b" />
              </g>
              
              <text x="380" y="175" fill="white" fontSize="11" fontWeight="bold" opacity="0.8">TESTING</text>
              
              <g transform="translate(500, 85)">
                <circle cx="0" cy="25" r="12" fill="#1e293b" />
                <rect x="-12" y="38" width="24" height="40" rx="3" fill="#0284c7" />
                <circle cx="40" cy="20" r="12" fill="#1e293b" />
                <rect x="28" y="33" width="24" height="45" rx="3" fill="#1e293b" />
                <circle cx="80" cy="25" r="12" fill="#1e293b" />
                <rect x="68" y="38" width="24" height="40" rx="3" fill="#0284c7" />
              </g>
              
              <g transform="translate(700, 80)">
                <circle cx="0" cy="30" r="12" fill="#1e293b" />
                <rect x="-12" y="43" width="24" height="40" rx="3" fill="#1e293b" />
                <circle cx="40" cy="25" r="12" fill="#1e293b" />
                <rect x="28" y="38" width="24" height="45" rx="3" fill="#0284c7" />
                <circle cx="80" cy="30" r="12" fill="#1e293b" />
                <rect x="68" y="43" width="24" height="40" rx="3" fill="#1e293b" />
              </g>
              
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

export default IndustriesTravelHospitality;
