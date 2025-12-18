import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Workflow collaboration for increased p...',
    position: 'left',
  },
  {
    id: 2,
    title: 'Extraction of data from a variety of sou...',
    position: 'right',
  },
  {
    id: 3,
    title: 'Designing a multidimensional database',
    position: 'left',
  },
  {
    id: 4,
    title: 'Plan, deployment, and organizational ...',
    position: 'right',
  },
  {
    id: 5,
    title: 'Construction of an operational data st...',
    position: 'left',
  },
  {
    id: 6,
    title: 'Customizing queries and reports',
    position: 'right',
  },
  {
    id: 7,
    title: 'The design of a system architecture, a...',
    position: 'left',
  },
  {
    id: 8,
    title: 'Cleaning and migrating data',
    position: 'right',
  },
  {
    id: 9,
    title: 'Define the technical specifications.',
    position: 'left',
  },
];

function IndustriesLogisticsWarehousing() {
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
              <li className="text-slate-900 font-medium">Logistics & Warehousing</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Logistics & Warehousing
          </h1>

          {/* Hero Illustration - Business/logistics scene */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 180" className="w-full h-auto">
                {/* Business person 1 - left with tie */}
                <g transform="translate(150, 20)">
                  <circle cx="30" cy="30" r="25" fill="#1e293b" />
                  <rect x="10" y="60" width="40" height="80" rx="5" fill="#1e293b" />
                  <rect x="25" y="65" width="10" height="40" fill="#ef4444" /> {/* Tie */}
                </g>
                
                {/* Business person 2 - woman */}
                <g transform="translate(250, 30)">
                  <circle cx="25" cy="25" r="22" fill="#fbbf24" />
                  <rect x="8" y="52" width="34" height="70" rx="5" fill="#22c55e" />
                </g>
                
                {/* Dashed connection arc */}
                <path d="M350 80 Q450 30, 550 80" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="8,4" />
                
                {/* Central area - people at desk */}
                <g transform="translate(400, 50)">
                  {/* Person */}
                  <circle cx="30" cy="25" r="20" fill="#1e293b" />
                  <rect x="15" y="50" width="30" height="50" rx="4" fill="#64748b" />
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Illustration - Warehouse and logistics */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 380" className="w-80 h-auto">
                  {/* Background blob */}
                  <ellipse cx="200" cy="200" rx="160" ry="150" fill="#dbeafe" opacity="0.6" />
                  
                  {/* Globe */}
                  <g transform="translate(180, 50)">
                    <circle cx="80" cy="80" r="75" fill="none" stroke="#6366f1" strokeWidth="3" />
                    <ellipse cx="80" cy="80" rx="30" ry="75" fill="none" stroke="#6366f1" strokeWidth="2" />
                    <line x1="5" y1="80" x2="155" y2="80" stroke="#6366f1" strokeWidth="2" />
                    <line x1="80" y1="5" x2="80" y2="155" stroke="#6366f1" strokeWidth="2" />
                    
                    {/* Location pins */}
                    <g transform="translate(40, 30)">
                      <ellipse cx="5" cy="12" rx="5" ry="3" fill="#f472b6" opacity="0.5" />
                      <path d="M5 0 C8 0, 10 3, 10 6 C10 10, 5 15, 5 15 C5 15, 0 10, 0 6 C0 3, 2 0, 5 0" fill="#f472b6" />
                      <circle cx="5" cy="5" r="2" fill="white" />
                    </g>
                    <g transform="translate(100, 60)">
                      <ellipse cx="5" cy="12" rx="5" ry="3" fill="#f472b6" opacity="0.5" />
                      <path d="M5 0 C8 0, 10 3, 10 6 C10 10, 5 15, 5 15 C5 15, 0 10, 0 6 C0 3, 2 0, 5 0" fill="#f472b6" />
                      <circle cx="5" cy="5" r="2" fill="white" />
                    </g>
                  </g>
                  
                  {/* Dashed route lines */}
                  <path d="M220 100 Q280 80, 320 120" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="6,3" />
                  <path d="M260 130 Q300 150, 280 180" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="6,3" />
                  
                  {/* Warehouse shelves */}
                  <g transform="translate(30, 140)">
                    {/* Shelf frame */}
                    <rect x="0" y="0" width="150" height="150" fill="#1e293b" rx="5" />
                    
                    {/* Shelf rows */}
                    <rect x="5" y="5" width="140" height="8" fill="#475569" />
                    <rect x="5" y="45" width="140" height="8" fill="#475569" />
                    <rect x="5" y="85" width="140" height="8" fill="#475569" />
                    <rect x="5" y="125" width="140" height="8" fill="#475569" />
                    
                    {/* Boxes row 1 */}
                    <rect x="10" y="15" width="25" height="25" fill="#fb923c" rx="2" />
                    <rect x="40" y="15" width="25" height="25" fill="#fb923c" rx="2" />
                    <rect x="70" y="15" width="25" height="25" fill="#fb923c" rx="2" />
                    <rect x="100" y="15" width="25" height="25" fill="#fb923c" rx="2" />
                    
                    {/* Boxes row 2 */}
                    <rect x="10" y="55" width="25" height="25" fill="#fb923c" rx="2" />
                    <rect x="40" y="55" width="25" height="25" fill="#fb923c" rx="2" />
                    <rect x="70" y="55" width="25" height="25" fill="#fb923c" rx="2" />
                    <rect x="100" y="55" width="25" height="25" fill="#fb923c" rx="2" />
                    
                    {/* Boxes row 3 */}
                    <rect x="10" y="95" width="25" height="25" fill="#fb923c" rx="2" />
                    <rect x="40" y="95" width="25" height="25" fill="#fb923c" rx="2" />
                    <rect x="70" y="95" width="25" height="25" fill="#64748b" rx="2" />
                  </g>
                  
                  {/* Truck */}
                  <g transform="translate(20, 300)">
                    {/* Truck body */}
                    <rect x="0" y="0" width="80" height="35" fill="#60a5fa" rx="3" />
                    {/* Cabin */}
                    <rect x="80" y="10" width="35" height="25" fill="#3b82f6" rx="3" />
                    <rect x="90" y="15" width="20" height="15" fill="#dbeafe" rx="2" />
                    {/* Wheels */}
                    <circle cx="25" cy="40" r="10" fill="#1e293b" />
                    <circle cx="65" cy="40" r="10" fill="#1e293b" />
                    <circle cx="100" cy="40" r="10" fill="#1e293b" />
                  </g>
                  
                  {/* Large boxes */}
                  <g transform="translate(200, 230)">
                    <rect x="0" y="0" width="70" height="90" fill="#fb923c" rx="5" />
                    <rect x="80" y="30" width="50" height="60" fill="#fdba74" rx="4" />
                  </g>
                  
                  {/* Person */}
                  <g transform="translate(280, 240)">
                    <circle cx="20" cy="20" r="18" fill="#1e293b" />
                    <rect x="5" y="42" width="30" height="55" rx="4" fill="#60a5fa" />
                    {/* Pointing arm */}
                    <line x1="35" y1="55" x2="55" y2="40" stroke="#fcd34d" strokeWidth="5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              {/* Decorative circle with dot */}
              <div className="flex justify-start mb-4">
                <div className="w-10 h-10 border border-cyan-300 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                It's time to bring the Industrial Revolution into harmony with the Technological Evolution. Aging infrastructure is no match for an organization equipped with a modernized digital strategy. There are now two sides to the logistics and warehousing industry – the physical and the digital – and without the symbiosis of both, neither will succeed to its greatest potential. Tracking shipments, logging data and performing quality assurance services are now faster and more convenient for employees and industry leaders with the introduction of updated technology, supported by data storage solutions, cloud integration and cybersecurity.
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
                          <div className="absolute top-4 right-[-50px] w-3 h-3 bg-emerald-500 rounded-full" />
                        )}
                        {index === 3 && (
                          <div className="absolute left-1/2 bottom-[-30px] w-10 h-10 border border-cyan-200 rounded-full opacity-50" />
                        )}
                        {index === 3 && (
                          <div className="absolute top-4 right-[-50px] w-3 h-3 bg-emerald-500 rounded-full" />
                        )}
                        {index === 7 && (
                          <div className="absolute bottom-4 left-4 w-8 h-8 border border-cyan-200 rounded-full opacity-50" />
                        )}
                        {index === 8 && (
                          <div className="absolute top-4 right-[-80px] w-3 h-3 bg-emerald-500 rounded-full" />
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
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag */}
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-slate-700 border border-slate-300 rounded-full mb-6">
            WANT TO GET STARTED?
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-10 italic">
            DECIDE WHAT'S BEST<br />FOR YOUR BUSINESS!
          </h2>

          {/* CTA Button - Green circle style */}
          <div className="relative inline-block">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center w-44 h-44 rounded-full bg-emerald-400 hover:bg-emerald-500 transition-all duration-300 relative overflow-hidden shadow-lg"
            >
              {/* Outline circle */}
              <div className="absolute inset-0 rounded-full border-2 border-emerald-300 scale-110" />
              
              <span className="text-slate-900 font-medium flex items-center gap-2">
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
                <pattern id="gridPatternLW" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternLW)" />
              
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

export default IndustriesLogisticsWarehousing;
