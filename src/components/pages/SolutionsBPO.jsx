import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Development',
    description: 'Instead of doing it in-house at a higher cost, take advantage of technical advancements in production.',
    position: 'left',
  },
  {
    id: 2,
    title: 'Indian and US Timings',
    description: 'Allow yourself and your customers to be free of time zone constraints.',
    position: 'right',
  },
  {
    id: 3,
    title: '24*7 services',
    description: 'And if you are sleeping, the company will continue to work.',
    position: 'left',
  },
  {
    id: 4,
    title: 'Call Centre',
    description: 'Dedicatedly serve your customers at all time.',
    position: 'right',
  },
  {
    id: 5,
    title: 'Backend Support',
    description: 'Behind the scenes, but still ready to assist you in making your day special.',
    position: 'left',
  },
  {
    id: 6,
    title: 'Recruitment',
    description: "In a flash, you'll be able to overcome the recruitment obstacles.",
    position: 'right',
  },
];

function SolutionsBPO() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-32 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-emerald-500 rounded-full" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              </li>
              <li className="text-slate-400">•</li>
              <li>
                <Link to="/solutions" className="hover:text-sky-600 transition-colors">Solutions</Link>
              </li>
              <li className="text-slate-400">•</li>
              <li className="text-slate-900 font-medium">Business-Process-Outsourcing</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Business-Process-Outsourcing
      </h1>

          {/* Hero Illustration - Business team */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 200" className="w-full h-auto">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="heroGradBPO" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f7fa" />
                    <stop offset="100%" stopColor="#b2ebf2" />
                  </linearGradient>
                </defs>
                <ellipse cx="450" cy="180" rx="380" ry="20" fill="url(#heroGradBPO)" opacity="0.5" />
                
                {/* Business people silhouettes */}
                {/* Person 1 - presenting */}
                <g transform="translate(150, 40)">
                  <circle cx="30" cy="30" r="22" fill="#1e293b" />
                  <rect x="12" y="55" width="36" height="70" rx="6" fill="#1e293b" />
                  <line x1="48" y1="70" x2="70" y2="50" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
                </g>
                
                {/* Person 2 - woman in pink */}
                <g transform="translate(250, 50)">
                  <circle cx="30" cy="25" r="20" fill="#f472b6" />
                  <rect x="15" y="48" width="30" height="60" rx="5" fill="#f472b6" />
                </g>
                
                {/* Person 3 - center with documents */}
                <g transform="translate(380, 35)">
                  <circle cx="30" cy="30" r="22" fill="#1e293b" />
                  <rect x="12" y="55" width="36" height="75" rx="6" fill="#64748b" />
                  <rect x="50" y="60" width="25" height="35" fill="#f1f5f9" rx="3" />
                </g>
                
                {/* Person 4 */}
                <g transform="translate(500, 45)">
                  <circle cx="30" cy="28" r="22" fill="#1e293b" />
                  <rect x="12" y="53" width="36" height="65" rx="6" fill="#0ea5e9" />
                </g>
                
                {/* Person 5 - at desk */}
                <g transform="translate(620, 50)">
                  <rect x="0" y="60" width="80" height="50" fill="#64748b" rx="5" />
                  <rect x="10" y="70" width="30" height="25" fill="#f1f5f9" rx="3" />
                  <circle cx="100" cy="40" r="22" fill="#1e293b" />
                  <rect x="82" y="65" width="36" height="55" rx="6" fill="#1e293b" />
                </g>
                
                {/* Connection dashed line */}
                <path d="M350 80 Q450 40 550 80" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="8,4" />
                
                {/* Decorative elements */}
                <circle cx="300" cy="30" r="4" fill="#22c55e" />
                <circle cx="600" cy="25" r="3" fill="#f472b6" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Decorative circle with dot below hero */}
        <div className="flex justify-center pb-8">
          <div className="w-12 h-12 border border-cyan-300 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-emerald-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - People analyzing dashboards */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 350" className="w-80 h-auto">
                  {/* Floor shadow */}
                  <ellipse cx="200" cy="320" rx="150" ry="25" fill="#0ea5e9" opacity="0.2" />
                  
                  {/* Dashboard 1 - Left */}
                  <g transform="translate(30, 80)">
                    <rect x="0" y="0" width="150" height="180" fill="#60a5fa" rx="10" />
                    <rect x="10" y="15" width="60" height="40" fill="white" rx="5" />
                    {/* Pie chart */}
                    <circle cx="40" cy="35" r="15" fill="#0ea5e9" />
                    <path d="M40 35 L40 20 A15 15 0 0 1 53 42 Z" fill="#1e293b" />
                    
                    {/* Bar chart */}
                    <rect x="80" y="20" width="60" height="30" fill="#1e293b" rx="3" />
                    <rect x="85" y="30" width="8" height="15" fill="#22c55e" rx="1" />
                    <rect x="95" y="25" width="8" height="20" fill="#60a5fa" rx="1" />
                    <rect x="105" y="35" width="8" height="10" fill="#fbbf24" rx="1" />
                    <rect x="115" y="28" width="8" height="17" fill="#f472b6" rx="1" />
                    
                    {/* Lines */}
                    <rect x="10" y="65" width="130" height="8" fill="white" opacity="0.5" rx="2" />
                    <rect x="10" y="80" width="100" height="8" fill="white" opacity="0.5" rx="2" />
                    
                    {/* Bottom section */}
                    <rect x="10" y="100" width="130" height="70" fill="#1e293b" rx="5" />
                    <path d="M20 150 L50 120 L80 140 L110 110 L130 130" stroke="#22c55e" strokeWidth="3" fill="none" />
                  </g>
                  
                  {/* Dashboard 2 - Right */}
                  <g transform="translate(200, 60)">
                    <rect x="0" y="0" width="140" height="200" fill="#60a5fa" rx="10" />
                    
                    {/* Profile section */}
                    <rect x="10" y="15" width="120" height="50" fill="white" rx="5" />
                    <circle cx="40" cy="40" r="15" fill="#0ea5e9" />
                    <rect x="65" y="30" width="55" height="6" fill="#94a3b8" rx="2" />
                    <rect x="65" y="42" width="40" height="6" fill="#94a3b8" rx="2" />
                    
                    {/* Charts */}
                    <rect x="10" y="75" width="55" height="50" fill="#f472b6" rx="5" />
                    <rect x="75" y="75" width="55" height="50" fill="#22c55e" rx="5" />
                    
                    {/* Progress bars */}
                    <rect x="10" y="135" width="120" height="8" fill="white" opacity="0.3" rx="2" />
                    <rect x="10" y="135" width="80" height="8" fill="white" rx="2" />
                    <rect x="10" y="150" width="120" height="8" fill="white" opacity="0.3" rx="2" />
                    <rect x="10" y="150" width="60" height="8" fill="white" rx="2" />
                    
                    {/* Pie chart at bottom */}
                    <circle cx="70" cy="185" r="15" fill="#fbbf24" />
                    <path d="M70 185 L70 170 A15 15 0 0 1 83 192 Z" fill="#f472b6" />
                  </g>
                  
                  {/* Chat bubbles */}
                  <rect x="130" y="40" width="50" height="30" fill="#fbbf24" rx="5" />
                  <polygon points="145,70 155,70 140,80" fill="#fbbf24" />
                  
                  <rect x="300" y="30" width="50" height="30" fill="#fbbf24" rx="5" />
                  <polygon points="335,60 345,60 350,70" fill="#fbbf24" />
                  
                  {/* Person 1 - Man on left */}
                  <g transform="translate(80, 200)">
                    <circle cx="30" cy="30" r="25" fill="#1e293b" />
                    <rect x="10" y="60" width="40" height="80" rx="6" fill="#1e293b" />
                    <line x1="50" y1="80" x2="80" y2="60" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
                  </g>
                  
                  {/* Person 2 - Woman on right */}
                  <g transform="translate(250, 190)">
                    <circle cx="30" cy="30" r="25" fill="#fbbf24" />
                    <rect x="10" y="60" width="40" height="90" rx="6" fill="#8b5cf6" />
                    <line x1="50" y1="80" x2="75" y2="55" stroke="#fcd34d" strokeWidth="8" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                BPO offers businesses and companies an impactful alternative solution on a scalable platform, operating as beneficial partners to advance operations toward company goals. The largest constraint placed upon growing companies is time: time expressed in man hours for lower level employees and time invested into consuming tasks that require attention. BPO addresses these constraints by deploying a multipronged approach geared toward increased efficiency by harnessing an existing workforce with the potential to fill future roles within the company with cutting edge hiring solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Additional Content Section ========== */}
      <section className="py-8 sm:py-12 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-20 right-1/4 w-10 h-10 border border-cyan-300 rounded-full opacity-40 flex items-center justify-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
        </div>
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            BPO elevates an operation immediately offering services that are no longer considered premiums but necessities, utilizing technological advancements developed by external experts eliminating overhead cost primarily associated with in-house development - coupled with expert technicians to provide unparalleled backend support, keeping operation running flawlessly while deploying preventive measure to ensure the elimination of potential hazards.
          </p>
          
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Operating an industry leading call center 24/7 to appease customers that live outside of the company's native time zone, our staff is highly trained and excel at providing the care and support necessary to foster customer allegiance and trust. These convenient call centers allow smaller operations to complete with significantly larger competitor in the customer services arena.
          </p>
        </div>
      </section>

      {/* ========== 4. Key Offerings Timeline ========== */}
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
                        
                        {/* Decorative elements on some cards */}
                        {index === 1 && (
                          <div className="absolute bottom-4 right-4 flex items-center gap-2">
                            <div className="w-8 h-8 border border-cyan-200 rounded-full opacity-40" />
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          </div>
                        )}
                        {index === 4 && (
                          <div className="absolute top-4 right-4 w-8 h-8 border border-cyan-200 rounded-full opacity-40" />
                        )}
                        {index === 5 && (
                          <div className="absolute bottom-4 right-4 flex items-center gap-2">
                            <div className="w-8 h-8 border border-cyan-200 rounded-full opacity-40" />
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          </div>
                        )}
                        
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
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

      {/* ========== 5. CTA Section ========== */}
      <section className="py-20 sm:py-28 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-1/3 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />
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
            <div className="absolute -top-2 -right-8 w-10 h-10 border border-cyan-300 rounded-full opacity-50" />
            
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

      {/* ========== 6. Business Process Illustration ========== */}
      <section className="py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-48 sm:h-64">
            <svg viewBox="0 0 1000 200" className="w-full h-full">
              {/* Background pattern */}
              <defs>
                <pattern id="gridPatternBPO" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternBPO)" />
              
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

export default SolutionsBPO;
