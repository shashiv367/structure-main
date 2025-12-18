import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Telecom web and mobile app development',
    position: 'left',
  },
  {
    id: 2,
    title: 'Telematics app development',
    position: 'right',
  },
  {
    id: 3,
    title: 'Video Conference apps development',
    position: 'left',
  },
  {
    id: 4,
    title: 'Portal development',
    position: 'right',
  },
  {
    id: 5,
    title: 'Customer loyalty systems.',
    position: 'left',
  },
  {
    id: 6,
    title: 'IoT development.',
    position: 'left',
  },
  {
    id: 7,
    title: 'Chatbots development.',
    position: 'right',
  },
  {
    id: 8,
    title: 'GPS Tracking apps development.',
    position: 'right',
  },
];

function IndustriesTelecomMedia() {
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
              <li className="text-slate-900 font-medium">Telecom & Media</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Telecom & Media
          </h1>

          {/* Hero Illustration - Business/tech scene */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 180" className="w-full h-auto">
                {/* Business person 1 - standing */}
                <g transform="translate(120, 20)">
                  <circle cx="30" cy="28" r="24" fill="#1e293b" />
                  <rect x="10" y="56" width="40" height="85" rx="5" fill="#be185d" />
                  {/* Arm raised */}
                  <rect x="50" y="60" width="35" height="10" rx="3" fill="#fcd34d" transform="rotate(-30, 50, 60)" />
                </g>
                
                {/* Business woman */}
                <g transform="translate(200, 25)">
                  <circle cx="25" cy="25" r="22" fill="#1e293b" />
                  <rect x="8" y="50" width="34" height="75" rx="5" fill="#ef4444" />
                </g>
                
                {/* Person in blue */}
                <g transform="translate(280, 30)">
                  <circle cx="25" cy="25" r="22" fill="#1e293b" />
                  <rect x="8" y="52" width="34" height="70" rx="5" fill="#0ea5e9" />
                </g>
                
                {/* Dashed connection arc */}
                <path d="M380 80 Q480 25, 580 80" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="8,4" />
                
                {/* Mobile device icon */}
                <g transform="translate(450, 35)">
                  <rect x="0" y="0" width="25" height="45" fill="#60a5fa" rx="4" />
                  <rect x="3" y="5" width="19" height="30" fill="#e0f2fe" rx="2" />
                </g>
                
                {/* Group at desk - right side */}
                <g transform="translate(560, 40)">
                  {/* Desk */}
                  <rect x="0" y="70" width="100" height="45" fill="#1e293b" rx="3" />
                  {/* Monitor */}
                  <rect x="30" y="35" width="50" height="40" fill="#1e293b" rx="3" />
                  <rect x="35" y="40" width="40" height="28" fill="#60a5fa" rx="2" />
                  
                  {/* Person 1 - sitting left */}
                  <circle cx="20" cy="50" r="18" fill="#1e293b" />
                  <rect x="8" y="70" width="24" height="35" rx="3" fill="#0ea5e9" />
                  
                  {/* Person 2 - sitting right */}
                  <circle cx="100" cy="50" r="18" fill="#1e293b" />
                  <rect x="88" y="70" width="24" height="35" rx="3" fill="#64748b" />
                </g>
                
                {/* Person carrying box */}
                <g transform="translate(720, 35)">
                  <circle cx="25" cy="25" r="22" fill="#1e293b" />
                  <rect x="8" y="50" width="34" height="70" rx="5" fill="#1e293b" />
                  {/* Box */}
                  <rect x="45" y="55" width="35" height="30" fill="#fb923c" rx="3" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white relative">
        {/* Decorative circle */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 rounded-full border-2 border-sky-200" />
        </div>
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Telecom & Media scene */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 400" className="w-80 h-auto">
                  {/* Background blob */}
                  <path d="M50 180 Q30 100, 100 80 Q180 40, 280 80 Q350 100, 360 180 Q380 280, 300 340 Q220 380, 120 350 Q40 320, 50 180" 
                        fill="#dbeafe" opacity="0.6" />
                  
                  {/* Curved line decoration */}
                  <path d="M60 120 Q100 60, 180 100" stroke="#1e293b" strokeWidth="2" fill="none" />
                  
                  {/* Satellite dish */}
                  <g transform="translate(50, 80)">
                    <ellipse cx="30" cy="20" rx="28" ry="15" fill="#64748b" />
                    <rect x="27" y="35" width="6" height="25" fill="#64748b" />
                    <line x1="30" y1="12" x2="50" y2="-5" stroke="#1e293b" strokeWidth="2" />
                    <circle cx="50" cy="-5" r="4" fill="#1e293b" />
                  </g>
                  
                  {/* Satellite in orbit 1 */}
                  <g transform="translate(280, 50)">
                    <rect x="0" y="10" width="30" height="15" fill="#0ea5e9" rx="2" />
                    <rect x="-20" y="12" width="20" height="10" fill="#38bdf8" rx="1" />
                    <rect x="30" y="12" width="20" height="10" fill="#38bdf8" rx="1" />
                  </g>
                  
                  {/* Satellite in orbit 2 */}
                  <g transform="translate(320, 120)">
                    <rect x="0" y="5" width="25" height="12" fill="#0ea5e9" rx="2" />
                    <rect x="-15" y="7" width="15" height="8" fill="#38bdf8" rx="1" />
                    <rect x="25" y="7" width="15" height="8" fill="#38bdf8" rx="1" />
                  </g>
                  
                  {/* SIM Card */}
                  <g transform="translate(280, 170)">
                    <rect x="0" y="0" width="40" height="30" fill="#fbbf24" rx="3" />
                    <rect x="5" y="5" width="20" height="15" fill="#fcd34d" rx="2" />
                    <line x1="10" y1="8" x2="10" y2="17" stroke="#ca8a04" strokeWidth="1" />
                    <line x1="15" y1="8" x2="15" y2="17" stroke="#ca8a04" strokeWidth="1" />
                    <line x1="20" y1="8" x2="20" y2="17" stroke="#ca8a04" strokeWidth="1" />
                  </g>
                  
                  {/* Cell Tower */}
                  <g transform="translate(140, 130)">
                    {/* Base platform */}
                    <rect x="30" y="140" width="60" height="10" fill="#0ea5e9" rx="2" />
                    <rect x="20" y="145" width="80" height="15" fill="#0284c7" rx="2" />
                    
                    {/* Tower structure */}
                    <polygon points="60,0 40,140 80,140" fill="#1e293b" />
                    <polygon points="60,0 55,140 65,140" fill="#334155" />
                    
                    {/* Cross bars */}
                    <line x1="45" y1="40" x2="75" y2="40" stroke="#475569" strokeWidth="3" />
                    <line x1="47" y1="70" x2="73" y2="70" stroke="#475569" strokeWidth="3" />
                    <line x1="49" y1="100" x2="71" y2="100" stroke="#475569" strokeWidth="3" />
                    
                    {/* Antenna elements */}
                    <rect x="35" y="35" width="8" height="15" fill="#64748b" rx="1" />
                    <rect x="77" y="35" width="8" height="15" fill="#64748b" rx="1" />
                    <circle cx="60" cy="15" r="6" fill="#ef4444" />
                  </g>
                  
                  {/* WiFi signals */}
                  <g transform="translate(30, 200)">
                    <path d="M20 30 Q20 20, 30 15 Q40 10, 50 15 Q60 20, 60 30" stroke="#0ea5e9" strokeWidth="3" fill="none" />
                    <path d="M25 25 Q25 18, 35 14 Q45 10, 55 14 Q65 18, 65 25" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.7" />
                    <path d="M30 20 Q30 15, 40 12 Q50 9, 60 12 Q70 15, 70 20" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.4" />
                  </g>
                  
                  {/* Chat bubbles */}
                  <g transform="translate(20, 140)">
                    <ellipse cx="25" cy="20" rx="22" ry="16" fill="#60a5fa" />
                    <polygon points="20,32 25,40 35,32" fill="#60a5fa" />
                    <circle cx="18" cy="18" r="3" fill="white" />
                    <circle cx="28" cy="18" r="3" fill="white" />
                    <circle cx="38" cy="18" r="3" fill="white" />
                  </g>
                  
                  {/* Cloud icon */}
                  <g transform="translate(80, 55)">
                    <ellipse cx="25" cy="25" rx="20" ry="15" fill="#fbbf24" />
                    <ellipse cx="40" cy="28" rx="15" ry="12" fill="#fbbf24" />
                    <ellipse cx="15" cy="28" rx="12" ry="10" fill="#fbbf24" />
                  </g>
                  
                  {/* Devices at bottom */}
                  <g transform="translate(30, 320)">
                    {/* Laptop */}
                    <rect x="0" y="10" width="50" height="30" fill="#1e293b" rx="3" />
                    <rect x="3" y="13" width="44" height="22" fill="#60a5fa" rx="2" />
                    <rect x="-5" y="40" width="60" height="5" fill="#475569" rx="2" />
                    
                    {/* Monitor */}
                    <rect x="70" y="5" width="45" height="35" fill="#1e293b" rx="3" />
                    <rect x="73" y="8" width="39" height="27" fill="#60a5fa" rx="2" />
                    <rect x="85" y="40" width="20" height="8" fill="#475569" />
                    <rect x="75" y="48" width="40" height="4" fill="#64748b" rx="1" />
                    
                    {/* Tablet */}
                    <rect x="130" y="15" width="30" height="40" fill="#1e293b" rx="4" />
                    <rect x="133" y="20" width="24" height="30" fill="#60a5fa" rx="2" />
                    
                    {/* Phone */}
                    <rect x="170" y="25" width="18" height="32" fill="#1e293b" rx="3" />
                    <rect x="172" y="29" width="14" height="22" fill="#60a5fa" rx="1" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 relative">
              {/* Decorative green dot */}
              <div className="absolute -top-4 right-0 w-3 h-3 bg-emerald-500 rounded-full" />
              
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                The telecom and media industry has changed greatly in recent years. Long gone are the days of using a bulky antenna to capture television signals and bringing out the phone book to make a call on the rotary dial. Now, everything we could possibly need is resting in the palms of our hands – meaning, we only have to rely on the incredible technology that loads and connects in seconds. However, companies who handle these processes are tasked with the essential job of ensuring this swift communication is readily available at all times. Telecom and media companies support applications, business solutions, website platforms and more – and must be prepared to do so with excellent IT services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Key Offerings Timeline ========== */}
      <section className="py-16 sm:py-24 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-20 right-24 w-16 h-16 rounded-full border-2 border-sky-200 opacity-50" />
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-emerald-500 rounded-full" />
        
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
                        
                        {/* Decorative elements for certain items */}
                        {index === 6 && (
                          <div className="absolute -top-4 left-[-20px] w-10 h-10 border border-cyan-200 rounded-full opacity-50" />
                        )}
                        {index === 7 && (
                          <div className="absolute bottom-4 right-[-40px] w-3 h-3 bg-emerald-500 rounded-full" />
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
        <div className="absolute top-1/4 left-1/3 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-emerald-500 rounded-full" />
        
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

export default IndustriesTelecomMedia;
