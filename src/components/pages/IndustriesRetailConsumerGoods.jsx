import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Consumer Goods & Merchantizing',
    position: 'left',
  },
  {
    id: 2,
    title: 'Supply Chain Systems',
    position: 'right',
  },
  {
    id: 3,
    title: 'Data Analysis & Mining',
    position: 'left',
  },
];

function IndustriesRetailConsumerGoods() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
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
              <li className="text-slate-900 font-medium">Retail & Consumer Goods</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Retail & Consumer Goods
          </h1>

          {/* Hero Illustration - Business/retail scene */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 180" className="w-full h-auto">
                {/* Business person 1 - left */}
                <g transform="translate(150, 20)">
                  <circle cx="30" cy="30" r="25" fill="#1e293b" />
                  <rect x="10" y="60" width="40" height="80" rx="5" fill="#64748b" />
                </g>
                
                {/* Business person 2 - woman */}
                <g transform="translate(250, 30)">
                  <circle cx="25" cy="25" r="22" fill="#1e293b" />
                  <rect x="8" y="52" width="34" height="70" rx="5" fill="#1e293b" />
                </g>
                
                {/* Dashed connection arc */}
                <path d="M350 80 Q450 30, 550 80" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="8,4" />
                
                {/* Shopping bag icon */}
                <g transform="translate(420, 40)">
                  <rect x="0" y="15" width="35" height="40" fill="#94a3b8" rx="3" />
                  <path d="M8 15 Q8 0, 17.5 0 Q27 0, 27 15" stroke="#94a3b8" strokeWidth="3" fill="none" />
                </g>
                
                {/* Person carrying box */}
                <g transform="translate(550, 40)">
                  <circle cx="25" cy="25" r="20" fill="#1e293b" />
                  <rect x="10" y="50" width="30" height="60" rx="4" fill="#64748b" />
                  {/* Box */}
                  <rect x="45" y="55" width="35" height="30" fill="#fb923c" rx="3" />
                </g>
                
                {/* Person at desk - right */}
                <g transform="translate(680, 50)">
                  {/* Desk */}
                  <rect x="0" y="60" width="80" height="40" fill="#64748b" rx="3" />
                  <rect x="10" y="30" width="50" height="35" fill="#1e293b" rx="3" />
                  <rect x="15" y="35" width="40" height="25" fill="#60a5fa" rx="2" />
                  
                  {/* Person */}
                  <circle cx="90" cy="40" r="20" fill="#1e293b" />
                  <rect x="75" y="65" width="30" height="40" rx="4" fill="#64748b" />
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
            {/* Illustration - Retail storefront scene */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 400" className="w-80 h-auto">
                  {/* Background blob */}
                  <ellipse cx="200" cy="220" rx="170" ry="160" fill="#fef3c7" opacity="0.4" />
                  
                  {/* Storefront */}
                  <g transform="translate(80, 80)">
                    {/* Main store body */}
                    <rect x="0" y="60" width="200" height="180" fill="#f5f5f5" rx="8" />
                    
                    {/* Awning - red and white stripes */}
                    <g transform="translate(-10, 40)">
                      <rect x="0" y="0" width="220" height="30" fill="#ef4444" rx="3" />
                      <rect x="0" y="20" width="44" height="15" fill="#dc2626" />
                      <rect x="44" y="20" width="44" height="15" fill="white" />
                      <rect x="88" y="20" width="44" height="15" fill="#dc2626" />
                      <rect x="132" y="20" width="44" height="15" fill="white" />
                      <rect x="176" y="20" width="44" height="15" fill="#dc2626" />
                    </g>
                    
                    {/* 24h clock */}
                    <g transform="translate(10, 70)">
                      <circle cx="25" cy="25" r="25" fill="white" stroke="#ef4444" strokeWidth="3" />
                      <text x="25" y="22" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">24h</text>
                      <line x1="25" y1="12" x2="25" y2="25" stroke="#1e293b" strokeWidth="2" />
                      <line x1="25" y1="25" x2="35" y2="30" stroke="#1e293b" strokeWidth="2" />
                    </g>
                    
                    {/* 5 Stars */}
                    <g transform="translate(60, 75)">
                      {[0, 18, 36, 54, 72].map((x, i) => (
                        <polygon key={i} points={`${x+8},0 ${x+10},6 ${x+16},6 ${x+11},10 ${x+13},16 ${x+8},12 ${x+3},16 ${x+5},10 ${x},6 ${x+6},6`} fill="#fbbf24" />
                      ))}
                    </g>
                    
                    {/* Product display area */}
                    <rect x="10" y="100" width="180" height="100" fill="white" rx="5" />
                    
                    {/* Product boxes */}
                    <rect x="20" y="110" width="40" height="35" fill="#fbbf24" rx="3" />
                    <rect x="70" y="110" width="40" height="35" fill="#fbbf24" rx="3" />
                    <rect x="120" y="110" width="40" height="35" fill="#fbbf24" rx="3" />
                    
                    <rect x="20" y="155" width="35" height="35" fill="#fbbf24" rx="3" />
                    <rect x="65" y="155" width="35" height="35" fill="#fbbf24" rx="3" />
                  </g>
                  
                  {/* Discount badge */}
                  <g transform="translate(260, 100)">
                    <ellipse cx="30" cy="35" rx="30" ry="35" fill="#ef4444" />
                    <text x="30" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$</text>
                    <text x="30" y="48" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">%</text>
                  </g>
                  
                  {/* Shopping person 1 - left */}
                  <g transform="translate(30, 260)">
                    <circle cx="20" cy="20" r="18" fill="#1e293b" />
                    <rect x="5" y="42" width="30" height="60" rx="4" fill="#1e293b" />
                    {/* Shopping bags */}
                    <rect x="38" y="70" width="20" height="25" fill="#fbbf24" rx="2" />
                    <rect x="50" y="65" width="18" height="30" fill="#1e293b" rx="2" />
                  </g>
                  
                  {/* Credit card */}
                  <g transform="translate(60, 340)">
                    <rect x="0" y="0" width="60" height="35" fill="#60a5fa" rx="5" />
                    <rect x="5" y="8" width="20" height="12" fill="#fbbf24" rx="2" />
                    <text x="30" y="28" textAnchor="middle" fill="white" fontSize="6">CREDIT CARD</text>
                  </g>
                  
                  {/* Shopping person 2 - right */}
                  <g transform="translate(280, 250)">
                    <circle cx="20" cy="20" r="18" fill="#1e293b" />
                    <rect x="5" y="42" width="30" height="55" rx="4" fill="#f472b6" />
                  </g>
                  
                  {/* Shopping cart */}
                  <g transform="translate(320, 300)">
                    <rect x="0" y="0" width="45" height="35" fill="#60a5fa" rx="3" />
                    <circle cx="10" cy="42" r="6" fill="#1e293b" />
                    <circle cx="35" cy="42" r="6" fill="#1e293b" />
                    {/* Items in cart */}
                    <rect x="5" y="5" width="15" height="20" fill="#fbbf24" rx="2" />
                    <rect x="25" y="8" width="12" height="17" fill="#fbbf24" rx="2" />
                  </g>
                  
                  {/* Coins */}
                  <g transform="translate(140, 330)">
                    <ellipse cx="10" cy="12" rx="10" ry="5" fill="#ca8a04" />
                    <rect x="0" y="5" width="20" height="7" fill="#eab308" />
                    <ellipse cx="10" cy="5" rx="10" ry="5" fill="#fbbf24" />
                  </g>
                  <g transform="translate(160, 340)">
                    <ellipse cx="10" cy="10" rx="10" ry="5" fill="#ca8a04" />
                    <rect x="0" y="3" width="20" height="7" fill="#eab308" />
                    <ellipse cx="10" cy="3" rx="10" ry="5" fill="#fbbf24" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                The retail industry has been transformed by convenience and quick service. Businesses who have the fastest response times and who are able to evolve with the times survive, sustain and thrive. However, the biggest rule in the retail industry is that consumers buy from who they know, like and trust – these three points are facilitated by prompt communication and quick deliveries... and all of this is enabled by technology. For example, improve employee efficiency with updated technology and ultimately increase customer satisfaction by providing easier processes when your team has the ability to nurture services effectively.
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
                          <>
                            <div className="absolute -top-4 left-[-30px] w-10 h-10 border border-cyan-200 rounded-full opacity-50" />
                            <div className="absolute bottom-4 right-8 w-3 h-3 bg-emerald-500 rounded-full" />
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
        <div className="absolute top-1/3 left-1/4 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-emerald-500 rounded-full" />
        
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
                <pattern id="gridPatternRC" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternRC)" />
              
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
              <g transform="translate(100, 90)">
                <rect x="0" y="10" width="50" height="35" fill="#f1f5f9" rx="3" />
                <rect x="5" y="15" width="20" height="12" fill="#fbbf24" rx="2" />
                <circle cx="80" cy="30" r="12" fill="#1e293b" />
                <rect x="68" y="43" width="24" height="40" rx="3" fill="#1e293b" />
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

export default IndustriesRetailConsumerGoods;
