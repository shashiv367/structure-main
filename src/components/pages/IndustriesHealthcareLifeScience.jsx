import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Custom medical solutions development',
    position: 'left',
  },
  {
    id: 2,
    title: 'Business Intelligence Software for Hea...',
    position: 'right',
  },
  {
    id: 3,
    title: 'Enterprise Software Systems in Health...',
    position: 'left',
  },
  {
    id: 4,
    title: 'IoT healthcare application development',
    position: 'right',
  },
  {
    id: 5,
    title: 'Mobile Healthcare Applications',
    position: 'left',
  },
  {
    id: 6,
    title: 'Web and mobile medical software dev...',
    position: 'right',
  },
];

function IndustriesHealthcareLifeScience() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-40 w-3 h-3 bg-emerald-500 rounded-full" />
        <div className="absolute top-12 left-48 w-10 h-10 border-2 border-cyan-200 rounded-full opacity-50" />

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
              <li className="text-slate-900 font-medium">Healthcare & Life Science</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Healthcare & Life Science
          </h1>

          {/* Hero Illustration - Healthcare themed */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 180" className="w-full h-auto">
                {/* Thermometer */}
                <g transform="translate(150, 20)">
                  <rect x="0" y="0" width="12" height="100" fill="#f472b6" rx="6" />
                  <circle cx="6" cy="110" r="15" fill="#f472b6" />
                  <rect x="3" y="10" width="6" height="60" fill="#ef4444" rx="2" />
                </g>
                
                {/* Medical cross */}
                <g transform="translate(400, 30)">
                  <rect x="30" y="0" width="40" height="100" fill="#22c55e" rx="5" />
                  <rect x="0" y="30" width="100" height="40" fill="#22c55e" rx="5" />
                </g>
                
                {/* Doctor figure 1 */}
                <g transform="translate(250, 50)">
                  <circle cx="25" cy="25" r="20" fill="#64748b" />
                  <rect x="10" y="50" width="30" height="60" rx="5" fill="white" />
                  <rect x="15" y="55" width="20" height="10" fill="#60a5fa" rx="2" />
                </g>
                
                {/* Doctor figure 2 */}
                <g transform="translate(550, 40)">
                  <circle cx="25" cy="25" r="20" fill="#1e293b" />
                  <rect x="10" y="50" width="30" height="70" rx="5" fill="white" />
                </g>
                
                {/* Lemon/citrus */}
                <g transform="translate(700, 60)">
                  <ellipse cx="30" cy="25" rx="30" ry="25" fill="#fbbf24" />
                  <ellipse cx="30" cy="25" rx="20" ry="15" fill="#fcd34d" />
                  <ellipse cx="55" cy="35" rx="20" ry="18" fill="#fbbf24" />
                </g>
                
                {/* Plant/leaf */}
                <g transform="translate(800, 80)">
                  <ellipse cx="15" cy="30" rx="12" ry="25" fill="#22c55e" transform="rotate(-30)" />
                  <ellipse cx="35" cy="25" rx="10" ry="20" fill="#16a34a" transform="rotate(20)" />
                </g>
                
                {/* Medicine bottle */}
                <g transform="translate(100, 100)">
                  <rect x="0" y="10" width="25" height="40" fill="#60a5fa" rx="3" />
                  <rect x="3" y="0" width="19" height="12" fill="#3b82f6" rx="2" />
                </g>
                
                {/* Heart rate line */}
                <path d="M200 150 L250 150 L260 130 L270 170 L280 140 L290 160 L300 150 L400 150" 
                      stroke="#ef4444" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Laboratory scene */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 400" className="w-80 h-auto">
                  {/* Blob background */}
                  <path d="M50 100 Q100 50, 200 80 Q300 110, 350 180 Q380 250, 300 320 Q220 380, 120 340 Q20 300, 50 200 Q60 150, 50 100" 
                        fill="#dbeafe" opacity="0.6" />
                  
                  {/* Shelf with equipment */}
                  <g transform="translate(80, 80)">
                    {/* Shelf */}
                    <rect x="0" y="60" width="200" height="8" fill="#1e293b" />
                    
                    {/* Beaker 1 */}
                    <g transform="translate(10, 20)">
                      <path d="M5 0 L5 30 L0 40 L30 40 L25 30 L25 0 Z" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
                      <rect x="8" y="25" width="14" height="12" fill="#60a5fa" />
                    </g>
                    
                    {/* Test tube rack */}
                    <g transform="translate(60, 10)">
                      <rect x="0" y="40" width="50" height="10" fill="#64748b" />
                      <rect x="5" y="15" width="8" height="30" fill="#fbbf24" rx="2" />
                      <rect x="18" y="10" width="8" height="35" fill="#f472b6" rx="2" />
                      <rect x="31" y="20" width="8" height="25" fill="#22c55e" rx="2" />
                    </g>
                    
                    {/* Flask */}
                    <g transform="translate(130, 5)">
                      <path d="M20 0 L20 20 L5 55 L45 55 L30 20 L30 0 Z" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
                      <ellipse cx="25" cy="45" rx="15" ry="8" fill="#60a5fa" />
                    </g>
                  </g>
                  
                  {/* Plant */}
                  <g transform="translate(60, 200)">
                    <rect x="15" y="50" width="30" height="40" fill="#a3a3a3" rx="3" />
                    <ellipse cx="30" cy="30" rx="25" ry="30" fill="#22c55e" />
                    <ellipse cx="20" cy="20" rx="15" ry="20" fill="#16a34a" />
                  </g>
                  
                  {/* Scientist 1 - at computer */}
                  <g transform="translate(100, 180)">
                    {/* Computer */}
                    <rect x="0" y="60" width="60" height="50" fill="#1e293b" rx="3" />
                    <rect x="5" y="65" width="50" height="35" fill="#60a5fa" rx="2" />
                    <rect x="25" y="110" width="10" height="15" fill="#64748b" />
                    
                    {/* Person */}
                    <circle cx="90" cy="50" r="18" fill="#1e293b" />
                    <rect x="75" y="70" width="30" height="55" rx="4" fill="white" />
                  </g>
                  
                  {/* Scientist 2 - standing */}
                  <g transform="translate(220, 160)">
                    <circle cx="25" cy="30" r="18" fill="#fbbf24" />
                    <rect x="10" y="52" width="30" height="70" rx="4" fill="white" />
                    {/* Clipboard */}
                    <rect x="45" y="70" width="25" height="35" fill="#fbbf24" rx="2" />
                    <rect x="48" y="75" width="19" height="4" fill="white" rx="1" />
                    <rect x="48" y="82" width="15" height="4" fill="white" rx="1" />
                  </g>
                  
                  {/* DNA Helix */}
                  <g transform="translate(300, 220)">
                    <path d="M0 0 Q20 20, 0 40 Q-20 60, 0 80 Q20 100, 0 120" 
                          stroke="#0ea5e9" strokeWidth="4" fill="none" />
                    <path d="M30 0 Q10 20, 30 40 Q50 60, 30 80 Q10 100, 30 120" 
                          stroke="#06b6d4" strokeWidth="4" fill="none" />
                    {/* Cross connections */}
                    <line x1="5" y1="20" x2="25" y2="20" stroke="#94a3b8" strokeWidth="2" />
                    <line x1="5" y1="60" x2="25" y2="60" stroke="#94a3b8" strokeWidth="2" />
                    <line x1="5" y1="100" x2="25" y2="100" stroke="#94a3b8" strokeWidth="2" />
                  </g>
                  
                  {/* Molecular structure */}
                  <g transform="translate(280, 100)">
                    <circle cx="0" cy="0" r="8" fill="#818cf8" />
                    <circle cx="30" cy="-15" r="6" fill="#818cf8" />
                    <circle cx="30" cy="20" r="6" fill="#818cf8" />
                    <circle cx="55" cy="5" r="8" fill="#818cf8" />
                    <line x1="8" y1="-5" x2="24" y2="-12" stroke="#818cf8" strokeWidth="2" />
                    <line x1="8" y1="5" x2="24" y2="15" stroke="#818cf8" strokeWidth="2" />
                    <line x1="36" y1="-10" x2="48" y2="0" stroke="#818cf8" strokeWidth="2" />
                    <line x1="36" y1="18" x2="48" y2="8" stroke="#818cf8" strokeWidth="2" />
                  </g>
                  
                  {/* Microscope */}
                  <g transform="translate(170, 280)">
                    <rect x="0" y="40" width="50" height="10" fill="#64748b" rx="2" />
                    <rect x="20" y="0" width="10" height="45" fill="#1e293b" />
                    <circle cx="25" cy="5" r="12" fill="#475569" />
                    <rect x="10" y="50" width="30" height="20" fill="#1e293b" rx="3" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Within the healthcare industry, technology is making waves and offering incredible opportunities for both doctors and patients with faster communication, deeper understandings and more connections. Research and telemedicine are both evolving in strides for the betterment of medical organization and our society as a whole. In an era of accelerating cybersecurity threats and an industry of frequent exchanges of personal information, the answer is NOT to forego technology – but to work with a partner who can provide the services your organization needs while addressing security measures across all IT operations.
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
                        {index === 0 && (
                          <div className="absolute -top-3 left-1/2 w-8 h-8 border border-cyan-200 rounded-full opacity-50" />
                        )}
                        {index === 0 && (
                          <div className="absolute top-10 right-[-60px] w-3 h-3 bg-emerald-500 rounded-full" />
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
        <div className="absolute top-16 left-1/4 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />
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

export default IndustriesHealthcareLifeScience;
