import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'New Application Development',
    position: 'left',
  },
  {
    id: 2,
    title: 'Legacy System Modernization /Migrati...',
    position: 'right',
  },
  {
    id: 3,
    title: 'Data Migration',
    position: 'left',
  },
  {
    id: 4,
    title: 'Process and Application Reengineerin...',
    position: 'right',
  },
  {
    id: 5,
    title: 'Mainframe Development',
    position: 'left',
  },
];

function IndustriesGovernment() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-16 left-56 w-3 h-3 bg-emerald-500 rounded-full" />
        <div className="absolute top-20 left-72 w-12 h-12 border-2 border-cyan-200 rounded-full opacity-50" />

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
              <li className="text-slate-900 font-medium">Government</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Government
          </h1>

          {/* Hero Illustration - Meeting/Office scene */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 180" className="w-full h-auto">
                {/* Gears in background */}
                <g transform="translate(100, 50)">
                  <circle cx="0" cy="0" r="30" fill="none" stroke="#94a3b8" strokeWidth="4" opacity="0.3" />
                  <circle cx="0" cy="0" r="10" fill="#94a3b8" opacity="0.3" />
                </g>
                <g transform="translate(130, 80)">
                  <circle cx="0" cy="0" r="20" fill="none" stroke="#94a3b8" strokeWidth="3" opacity="0.3" />
                  <circle cx="0" cy="0" r="7" fill="#94a3b8" opacity="0.3" />
                </g>
                
                {/* Meeting table */}
                <g transform="translate(300, 60)">
                  <ellipse cx="150" cy="80" rx="180" ry="40" fill="#e2e8f0" />
                  
                  {/* Person 1 - left side */}
                  <g transform="translate(-30, 20)">
                    <circle cx="30" cy="30" r="22" fill="#0ea5e9" />
                    <rect x="12" y="55" width="36" height="50" rx="5" fill="#0ea5e9" />
                  </g>
                  
                  {/* Person 2 - left center */}
                  <g transform="translate(80, 0)">
                    <circle cx="30" cy="30" r="22" fill="#1e293b" />
                    <rect x="12" y="55" width="36" height="55" rx="5" fill="#64748b" />
                  </g>
                  
                  {/* Documents on table */}
                  <rect x="130" y="60" width="40" height="30" fill="white" rx="3" />
                  <rect x="135" y="65" width="30" height="4" fill="#94a3b8" rx="1" />
                  <rect x="135" y="73" width="25" height="4" fill="#94a3b8" rx="1" />
                  
                  {/* Person 3 - right center */}
                  <g transform="translate(200, 0)">
                    <circle cx="30" cy="30" r="22" fill="#1e293b" />
                    <rect x="12" y="55" width="36" height="55" rx="5" fill="#0ea5e9" />
                  </g>
                  
                  {/* Person 4 - right side */}
                  <g transform="translate(280, 20)">
                    <circle cx="30" cy="30" r="22" fill="#fbbf24" />
                    <rect x="12" y="55" width="36" height="50" rx="5" fill="#f472b6" />
                  </g>
                </g>
                
                {/* Briefcase */}
                <g transform="translate(250, 140)">
                  <rect x="0" y="0" width="35" height="25" fill="#1e293b" rx="3" />
                  <rect x="10" y="-8" width="15" height="10" fill="none" stroke="#1e293b" strokeWidth="3" rx="2" />
                </g>
                
                {/* Gears on right */}
                <g transform="translate(750, 40)">
                  <circle cx="0" cy="0" r="35" fill="none" stroke="#94a3b8" strokeWidth="4" opacity="0.3" />
                  <circle cx="0" cy="0" r="12" fill="#94a3b8" opacity="0.3" />
                </g>
                <g transform="translate(790, 80)">
                  <circle cx="0" cy="0" r="25" fill="none" stroke="#94a3b8" strokeWidth="3" opacity="0.3" />
                  <circle cx="0" cy="0" r="8" fill="#94a3b8" opacity="0.3" />
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
            {/* Illustration - Capitol building with people */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Pill-shaped background */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-100 to-cyan-50 rounded-t-full rounded-b-3xl" style={{ width: '300px', height: '380px', left: '50%', transform: 'translateX(-50%)' }} />
                
                <svg viewBox="0 0 350 400" className="w-72 h-auto relative z-10">
                  {/* Capitol Building */}
                  <g transform="translate(100, 80)">
                    {/* Dome */}
                    <ellipse cx="75" cy="60" rx="50" ry="40" fill="#0ea5e9" />
                    <rect x="60" y="30" width="30" height="20" fill="#0284c7" />
                    
                    {/* Flag pole and flag */}
                    <rect x="73" y="0" width="4" height="35" fill="#1e293b" />
                    <rect x="77" y="5" width="25" height="15" fill="#1e293b" />
                    
                    {/* Main building */}
                    <rect x="25" y="95" width="100" height="80" fill="#0ea5e9" />
                    
                    {/* Columns */}
                    <rect x="35" y="100" width="12" height="70" fill="#0284c7" />
                    <rect x="55" y="100" width="12" height="70" fill="#0284c7" />
                    <rect x="82" y="100" width="12" height="70" fill="#0284c7" />
                    <rect x="102" y="100" width="12" height="70" fill="#0284c7" />
                    
                    {/* Door */}
                    <rect x="60" y="140" width="30" height="35" fill="#1e293b" rx="3" />
                    
                    {/* Steps */}
                    <rect x="15" y="175" width="120" height="12" fill="#0891b2" />
                    <rect x="5" y="187" width="140" height="12" fill="#06b6d4" />
                    <rect x="-5" y="199" width="160" height="12" fill="#22d3d8" />
                  </g>
                  
                  {/* Decorative elements - stars, clouds */}
                  <circle cx="80" cy="100" r="8" fill="#fbbf24" opacity="0.6" />
                  <circle cx="270" cy="120" r="6" fill="#fbbf24" opacity="0.6" />
                  <ellipse cx="250" cy="90" rx="20" ry="10" fill="white" opacity="0.8" />
                  <ellipse cx="100" cy="70" rx="15" ry="8" fill="white" opacity="0.8" />
                  
                  {/* Leaves/plants */}
                  <ellipse cx="60" cy="340" rx="25" ry="15" fill="#22c55e" />
                  <ellipse cx="290" cy="340" rx="25" ry="15" fill="#22c55e" />
                  
                  {/* People with signs */}
                  {/* Person 1 - far left */}
                  <g transform="translate(30, 260)">
                    <circle cx="20" cy="20" r="15" fill="#1e293b" />
                    <rect x="8" y="38" width="24" height="50" rx="4" fill="#f472b6" />
                  </g>
                  
                  {/* Person 2 - left with sign */}
                  <g transform="translate(70, 250)">
                    <rect x="15" y="-30" width="4" height="50" fill="#64748b" />
                    <rect x="5" y="-50" width="25" height="25" fill="white" rx="2" />
                    <circle cx="20" cy="25" r="15" fill="#fbbf24" />
                    <rect x="8" y="43" width="24" height="55" rx="4" fill="#f472b6" />
                  </g>
                  
                  {/* Person 3 - center (speaker) */}
                  <g transform="translate(140, 230)">
                    <circle cx="25" cy="25" r="18" fill="#1e293b" />
                    <rect x="10" y="46" width="30" height="60" rx="5" fill="#1e293b" />
                    {/* Arms raised */}
                    <line x1="10" y1="55" x2="-10" y2="35" stroke="#fcd34d" strokeWidth="6" strokeLinecap="round" />
                    <line x1="40" y1="55" x2="60" y2="35" stroke="#fcd34d" strokeWidth="6" strokeLinecap="round" />
                  </g>
                  
                  {/* Person 4 - right with sign */}
                  <g transform="translate(210, 250)">
                    <rect x="15" y="-30" width="4" height="50" fill="#64748b" />
                    <rect x="5" y="-50" width="25" height="25" fill="white" rx="2" />
                    <circle cx="20" cy="25" r="15" fill="#1e293b" />
                    <rect x="8" y="43" width="24" height="55" rx="4" fill="#f472b6" />
                  </g>
                  
                  {/* Person 5 - far right */}
                  <g transform="translate(270, 260)">
                    <circle cx="20" cy="20" r="15" fill="#fbbf24" />
                    <rect x="8" y="38" width="24" height="50" rx="4" fill="#f472b6" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Government organizations perform many of the most crucial services in our society – from overseeing societal programs to enacting policies – all while often handling the exchange, storage and analysis of sensitive personal data. To provide individuals with the most productive services, the implementation of updated and modernized technology can be revolutionary for any organization or office. Proper IT measures ensure accountability and transparency the two essential factors for inspiring trust in those who work for and with government offices and officials.
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
                        
                        {/* Decorative element */}
                        {index === 1 && (
                          <div className="absolute top-4 right-8 w-3 h-3 bg-emerald-500 rounded-full" />
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
        <div className="absolute top-20 left-1/3 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />
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

      {/* ========== 5. Business Process Illustration ========== */}
      <section className="py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-48 sm:h-64">
            <svg viewBox="0 0 1000 200" className="w-full h-full">
              {/* Background pattern */}
              <defs>
                <pattern id="gridPatternGov" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternGov)" />
              
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

export default IndustriesGovernment;
