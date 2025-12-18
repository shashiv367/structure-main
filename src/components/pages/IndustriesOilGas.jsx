import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Simplify time-consuming procedures',
    description: 'To build and drive your company to new heights, transform complicated systems into fast and convenient services.',
    position: 'left',
  },
  {
    id: 2,
    title: 'Monitoring and reporting are easy',
    description: "Maintain and track the highest levels in all aspects of the industry's operations.",
    position: 'right',
  },
  {
    id: 3,
    title: 'Rapid adaptation',
    description: "By delivering the utter and faultless solution, fast adaptation to the new technologies would result in better results for the client's industry",
    position: 'left',
  },
];

function IndustriesOilGas() {
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
              <li className="text-slate-900 font-medium">Oil & Gas</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Oil & Gas
          </h1>

          {/* Hero Illustration - Business scene */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 180" className="w-full h-auto">
                {/* Business woman 1 - standing */}
                <g transform="translate(100, 15)">
                  <circle cx="30" cy="28" r="24" fill="#1e293b" />
                  <rect x="10" y="56" width="40" height="85" rx="5" fill="#1e293b" />
                  {/* Arm raised */}
                  <rect x="50" y="65" width="30" height="8" rx="3" fill="#fcd34d" transform="rotate(-20, 50, 65)" />
                </g>
                
                {/* Business woman 2 */}
                <g transform="translate(180, 20)">
                  <circle cx="28" cy="28" r="26" fill="#1e293b" />
                  <rect x="8" y="58" width="40" height="80" rx="5" fill="#ef4444" />
                </g>
                
                {/* Person in suit */}
                <g transform="translate(270, 25)">
                  <circle cx="25" cy="25" r="22" fill="#1e293b" />
                  <rect x="8" y="50" width="34" height="75" rx="5" fill="#1e293b" />
                  {/* Chat bubble */}
                  <g transform="translate(45, 10)">
                    <rect x="0" y="0" width="35" height="25" rx="5" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="5" y1="8" x2="25" y2="8" stroke="#94a3b8" strokeWidth="2" />
                    <line x1="5" y1="14" x2="20" y2="14" stroke="#94a3b8" strokeWidth="2" />
                  </g>
                </g>
                
                {/* Dashed connection arc */}
                <path d="M380 90 Q480 35, 580 90" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="8,4" />
                
                {/* Control panel icon */}
                <g transform="translate(440, 50)">
                  <rect x="0" y="0" width="35" height="45" fill="#f1f5f9" rx="3" stroke="#e2e8f0" strokeWidth="1" />
                  <rect x="5" y="5" width="10" height="8" fill="#60a5fa" rx="1" />
                  <rect x="18" y="5" width="12" height="8" fill="#fbbf24" rx="1" />
                  <rect x="5" y="18" width="25" height="3" fill="#94a3b8" rx="1" />
                  <rect x="5" y="25" width="25" height="3" fill="#94a3b8" rx="1" />
                  <circle cx="10" cy="37" r="4" fill="#22c55e" />
                  <circle cx="25" cy="37" r="4" fill="#ef4444" />
                </g>
                
                {/* Person at desk */}
                <g transform="translate(540, 40)">
                  {/* Desk */}
                  <rect x="0" y="70" width="90" height="40" fill="#64748b" rx="3" />
                  {/* Boxes on desk */}
                  <rect x="10" y="50" width="30" height="25" fill="#fbbf24" rx="2" />
                  <rect x="45" y="55" width="25" height="20" fill="#fb923c" rx="2" />
                  
                  {/* Person */}
                  <circle cx="100" cy="50" r="20" fill="#1e293b" />
                  <rect x="85" y="72" width="30" height="45" rx="4" fill="#64748b" />
                </g>
                
                {/* Group of people - right */}
                <g transform="translate(700, 30)">
                  <circle cx="25" cy="25" r="22" fill="#1e293b" />
                  <rect x="8" y="50" width="34" height="70" rx="4" fill="#1e293b" />
                  
                  <circle cx="70" cy="28" r="20" fill="#1e293b" />
                  <rect x="55" y="52" width="30" height="65" rx="4" fill="#64748b" />
                  
                  <circle cx="110" cy="25" r="22" fill="#1e293b" />
                  <rect x="93" y="50" width="34" height="70" rx="4" fill="#1e293b" />
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
            {/* Illustration - Oil & Gas infrastructure */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 350" className="w-80 h-auto">
                  {/* Background blob */}
                  <ellipse cx="200" cy="180" rx="180" ry="160" fill="#dbeafe" opacity="0.5" />
                  
                  {/* Pipe system - top left */}
                  <g transform="translate(50, 30)">
                    {/* Horizontal pipe */}
                    <rect x="0" y="40" width="120" height="20" fill="#60a5fa" rx="2" />
                    {/* Vertical connector */}
                    <rect x="110" y="40" width="20" height="80" fill="#60a5fa" rx="2" />
                    {/* Valve/X symbol */}
                    <circle cx="60" cy="25" r="15" fill="white" stroke="#1e293b" strokeWidth="2" />
                    <line x1="52" y1="17" x2="68" y2="33" stroke="#1e293b" strokeWidth="2" />
                    <line x1="68" y1="17" x2="52" y2="33" stroke="#1e293b" strokeWidth="2" />
                  </g>
                  
                  {/* Main pipe system */}
                  <g transform="translate(100, 100)">
                    {/* Left vertical pipe */}
                    <rect x="0" y="0" width="15" height="150" fill="#60a5fa" rx="2" />
                    {/* Top horizontal pipe */}
                    <rect x="0" y="0" width="200" height="15" fill="#60a5fa" rx="2" />
                    {/* Right vertical pipe */}
                    <rect x="185" y="0" width="15" height="150" fill="#60a5fa" rx="2" />
                    
                    {/* Middle horizontal pipe */}
                    <rect x="0" y="70" width="200" height="15" fill="#60a5fa" rx="2" />
                    
                    {/* Pipe connectors (dark) */}
                    <rect x="-5" y="-5" width="25" height="25" fill="#1e293b" rx="3" />
                    <rect x="180" y="-5" width="25" height="25" fill="#1e293b" rx="3" />
                    <rect x="-5" y="65" width="25" height="25" fill="#1e293b" rx="3" />
                    <rect x="180" y="65" width="25" height="25" fill="#1e293b" rx="3" />
                  </g>
                  
                  {/* Large red valve wheel */}
                  <g transform="translate(155, 130)">
                    <circle cx="45" cy="45" r="40" fill="none" stroke="#ef4444" strokeWidth="10" />
                    <circle cx="45" cy="45" r="15" fill="#ef4444" />
                    {/* Valve spokes */}
                    <line x1="45" y1="10" x2="45" y2="80" stroke="#ef4444" strokeWidth="6" />
                    <line x1="10" y1="45" x2="80" y2="45" stroke="#ef4444" strokeWidth="6" />
                  </g>
                  
                  {/* Control panel */}
                  <g transform="translate(130, 210)">
                    <rect x="0" y="0" width="50" height="70" fill="#0ea5e9" rx="3" />
                    <rect x="5" y="5" width="40" height="25" fill="#0c4a6e" rx="2" />
                    <rect x="8" y="8" width="34" height="19" fill="#38bdf8" rx="1" />
                    {/* Buttons */}
                    <circle cx="15" cy="45" r="5" fill="#22c55e" />
                    <circle cx="35" cy="45" r="5" fill="#fbbf24" />
                    <rect x="10" y="55" width="30" height="8" fill="#0c4a6e" rx="2" />
                  </g>
                  
                  {/* Worker 1 - crouching with toolbox */}
                  <g transform="translate(70, 240)">
                    {/* Hard hat */}
                    <ellipse cx="25" cy="15" rx="18" ry="12" fill="#fbbf24" />
                    {/* Body */}
                    <rect x="10" y="25" width="30" height="45" rx="5" fill="#fb923c" />
                    {/* Legs */}
                    <rect x="5" y="65" width="15" height="30" rx="3" fill="#1e293b" />
                    <rect x="25" y="65" width="15" height="30" rx="3" fill="#1e293b" />
                    {/* Toolbox */}
                    <rect x="45" y="70" width="35" height="25" fill="#fbbf24" rx="3" />
                    <rect x="55" y="65" width="15" height="8" fill="#ca8a04" rx="2" />
                  </g>
                  
                  {/* Worker 2 - standing */}
                  <g transform="translate(180, 220)">
                    {/* Hard hat */}
                    <ellipse cx="25" cy="12" rx="16" ry="10" fill="#fbbf24" />
                    {/* Body */}
                    <rect x="10" y="22" width="30" height="50" rx="5" fill="#fb923c" />
                    {/* Legs */}
                    <rect x="10" y="70" width="12" height="40" rx="3" fill="#1e293b" />
                    <rect x="28" y="70" width="12" height="40" rx="3" fill="#1e293b" />
                    {/* Arms */}
                    <rect x="0" y="30" width="12" height="25" rx="3" fill="#fcd34d" />
                    <rect x="38" y="30" width="12" height="25" rx="3" fill="#fcd34d" />
                  </g>
                  
                  {/* Worker 3 - with wrench */}
                  <g transform="translate(260, 225)">
                    {/* Hard hat */}
                    <ellipse cx="25" cy="12" rx="16" ry="10" fill="#fbbf24" />
                    {/* Body */}
                    <rect x="10" y="22" width="30" height="50" rx="5" fill="#1e293b" />
                    {/* Legs */}
                    <rect x="10" y="70" width="12" height="38" rx="3" fill="#1e293b" />
                    <rect x="28" y="70" width="12" height="38" rx="3" fill="#1e293b" />
                    {/* Arm with wrench */}
                    <rect x="38" y="28" width="10" height="30" rx="3" fill="#fcd34d" />
                    {/* Wrench */}
                    <rect x="48" y="50" width="25" height="6" fill="#64748b" rx="1" />
                    <circle cx="73" cy="53" r="8" fill="none" stroke="#64748b" strokeWidth="3" />
                  </g>
                  
                  {/* Small valve on right */}
                  <g transform="translate(310, 180)">
                    <rect x="0" y="0" width="12" height="50" fill="#60a5fa" rx="2" />
                    <rect x="-5" y="15" width="22" height="20" fill="#1e293b" rx="2" />
                    {/* Small valve wheel */}
                    <circle cx="6" cy="10" r="10" fill="none" stroke="#64748b" strokeWidth="3" />
                    <line x1="6" y1="2" x2="6" y2="18" stroke="#64748b" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                In an industry as diverse and as the oil and gas sector, nothing is as dangerous as standing still in a world that is constantly expanding and moving forward with new demands and expectations. Outdated infrastructure and aging system processes not only reduces efficiency of workday momentum, but it also poses as an incompatibility with critical data-reliant business partnerships. Modernized technology and IT solutions help to advance automation, organize storage of information and implement predictive analytics to ensure company growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Key Offerings Timeline ========== */}
      <section className="py-16 sm:py-24 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-40 right-24 w-16 h-16 rounded-full border-2 border-sky-200 opacity-50" />
        <div className="absolute bottom-60 right-20 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16 italic">
            Key offerings
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-sky-400 via-sky-500 to-cyan-400" style={{ backgroundImage: 'linear-gradient(to bottom, #0ea5e9, #0ea5e9 50%, transparent 50%)', backgroundSize: '2px 12px' }} />

            <div className="space-y-16">
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
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {item.description}
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
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full border-2 border-sky-200 opacity-40" />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-emerald-500 rounded-full" />
        
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
                <pattern id="gridPatternOG" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternOG)" />
              
              {/* Connection lines */}
              <path d="M50 100 L150 100 L250 60 L350 100 L450 50 L550 100 L650 80 L750 100 L850 70 L950 100" 
                    stroke="white" strokeWidth="2" fill="none" strokeDasharray="6,4" opacity="0.5" />
              
              {/* Connection nodes */}
              {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950].map((x, i) => (
                <circle key={i} cx={x} cy={i % 2 === 0 ? 100 : (i % 3 === 0 ? 60 : 80)} r="6" fill="white" />
              ))}
              
              {/* Oil barrel icon */}
              <g transform="translate(30, 120)">
                <ellipse cx="25" cy="10" rx="20" ry="8" fill="#1e293b" />
                <rect x="5" y="10" width="40" height="40" fill="#1e293b" />
                <ellipse cx="25" cy="50" rx="20" ry="8" fill="#0f172a" />
                <text x="25" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">OIL</text>
              </g>
              
              {/* Business scenes */}
              <g transform="translate(100, 90)">
                <rect x="0" y="10" width="50" height="35" fill="#f1f5f9" rx="3" />
                <rect x="5" y="15" width="20" height="12" fill="#fbbf24" rx="2" />
                <circle cx="80" cy="30" r="12" fill="#1e293b" />
                <rect x="68" y="43" width="24" height="40" rx="3" fill="#fb923c" />
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

export default IndustriesOilGas;
