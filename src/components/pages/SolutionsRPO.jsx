import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'On-site as well as Offshore Support',
    description: 'Consider it completed whether you worked with your team or remotely.',
    position: 'left',
  },
  {
    id: 2,
    title: 'Training',
    description: 'Allow us to provide your employees with the necessary skills and knowledge to help you grow your company.',
    position: 'right',
  },
  {
    id: 3,
    title: 'Vertical-Specific Offerings',
    description: 'Talent that is specifically tailored to your business or technology group.',
    position: 'left',
  },
  {
    id: 4,
    title: 'Compliance',
    description: "Leave the muddy waters of labour laws to us, and we'll make sure you stay on the right side of the rules.",
    position: 'right',
  },
  {
    id: 5,
    title: 'Talent-Assessment and Consulting',
    description: 'Making the company successful necessitates high-quality talent acquisition and development programmes.',
    position: 'left',
  },
  {
    id: 6,
    title: 'Geographical Strengths',
    description: 'To solve the local recruiting issues, you should pool talent from around the world.',
    position: 'right',
  },
];

function SolutionsRPO() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-8 left-32 w-12 h-12 border-2 border-cyan-200 rounded-full opacity-50" />
        <div className="absolute bottom-32 right-20 w-3 h-3 bg-emerald-500 rounded-full" />

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
              <li className="text-slate-900 font-medium">Recruitment Process Outsourcing</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Recruitment Process Outsourcing
          </h1>

          {/* Hero Illustration - Recruitment scene */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 200" className="w-full h-auto">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="heroGradRPO" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f7fa" />
                    <stop offset="100%" stopColor="#b2ebf2" />
                  </linearGradient>
                </defs>
                
                {/* Resume document - left */}
                <g transform="translate(100, 20)">
                  <rect x="0" y="0" width="100" height="130" fill="#f1f5f9" rx="5" />
                  <text x="50" y="25" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="bold">RESUME</text>
                  <rect x="10" y="40" width="80" height="6" fill="#94a3b8" rx="2" />
                  <rect x="10" y="52" width="60" height="4" fill="#cbd5e1" rx="1" />
                  <rect x="10" y="62" width="70" height="4" fill="#cbd5e1" rx="1" />
                  <rect x="10" y="72" width="50" height="4" fill="#cbd5e1" rx="1" />
                  <rect x="10" y="90" width="80" height="6" fill="#94a3b8" rx="2" />
                  <rect x="10" y="102" width="65" height="4" fill="#cbd5e1" rx="1" />
                  <rect x="10" y="112" width="55" height="4" fill="#cbd5e1" rx="1" />
                </g>
                
                {/* Person looking at resume */}
                <g transform="translate(210, 60)">
                  <circle cx="30" cy="25" r="22" fill="#1e293b" />
                  <rect x="12" y="50" width="36" height="70" rx="6" fill="#f97316" />
                </g>
                
                {/* Central dashboard/screen */}
                <g transform="translate(320, 30)">
                  <rect x="0" y="0" width="180" height="120" fill="#fbbf24" rx="8" />
                  <rect x="10" y="15" width="160" height="90" fill="white" rx="5" />
                  
                  {/* Stars rating */}
                  <g transform="translate(30, 30)">
                    {[0, 20, 40, 60, 80].map((x, i) => (
                      <polygon key={i} points={`${x+8},0 ${x+10},6 ${x+16},6 ${x+11},10 ${x+13},16 ${x+8},12 ${x+3},16 ${x+5},10 ${x},6 ${x+6},6`} fill={i < 4 ? "#fbbf24" : "#e2e8f0"} />
                    ))}
                  </g>
                  
                  {/* Checklist items */}
                  <rect x="20" y="55" width="140" height="8" fill="#e2e8f0" rx="2" />
                  <rect x="20" y="70" width="100" height="8" fill="#e2e8f0" rx="2" />
                  <rect x="20" y="85" width="120" height="8" fill="#e2e8f0" rx="2" />
                  
                  {/* Checkmarks */}
                  <circle cx="145" y="59" r="8" fill="#22c55e" />
                  <circle cx="110" y="74" r="8" fill="#22c55e" />
                </g>
                
                {/* Globe */}
                <g transform="translate(400, 130)">
                  <circle cx="30" cy="30" r="25" fill="#60a5fa" opacity="0.3" />
                  <circle cx="30" cy="30" r="20" fill="none" stroke="#60a5fa" strokeWidth="2" />
                  <ellipse cx="30" cy="30" rx="8" ry="20" fill="none" stroke="#60a5fa" strokeWidth="1.5" />
                  <line x1="10" y1="30" x2="50" y2="30" stroke="#60a5fa" strokeWidth="1.5" />
                </g>
                
                {/* Person at desk - right */}
                <g transform="translate(550, 40)">
                  {/* Desk */}
                  <rect x="0" y="80" width="120" height="60" fill="#64748b" rx="5" />
                  <rect x="10" y="90" width="50" height="35" fill="#1e293b" rx="3" />
                  <rect x="15" y="95" width="40" height="25" fill="#60a5fa" rx="2" />
                  
                  {/* Coffee cup */}
                  <rect x="80" y="95" width="20" height="25" fill="#f97316" rx="3" />
                  
                  {/* Person */}
                  <circle cx="160" cy="50" r="22" fill="#fbbf24" />
                  <rect x="142" y="75" width="36" height="65" rx="6" fill="#e2e8f0" />
                </g>
                
                {/* Document/clipboard - far right */}
                <g transform="translate(750, 50)">
                  <rect x="0" y="0" width="80" height="100" fill="#f1f5f9" rx="5" />
                  <rect x="10" y="15" width="60" height="6" fill="#94a3b8" rx="2" />
                  <rect x="10" y="30" width="50" height="4" fill="#cbd5e1" rx="1" />
                  <rect x="10" y="40" width="55" height="4" fill="#cbd5e1" rx="1" />
                  <rect x="10" y="55" width="40" height="4" fill="#cbd5e1" rx="1" />
                  <rect x="60" y="70" width="15" height="15" fill="#22c55e" rx="2" />
                </g>
                
                {/* Decorative elements */}
                <circle cx="280" cy="180" r="3" fill="#22c55e" />
                <circle cx="700" cy="30" r="4" fill="#f472b6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Person at computer with video call */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 350 300" className="w-72 h-auto">
                  {/* Floor shadow */}
                  <ellipse cx="175" cy="280" rx="120" ry="20" fill="#60a5fa" opacity="0.2" />
                  
                  {/* Desk */}
                  <rect x="50" y="200" width="200" height="60" fill="#94a3b8" rx="8" />
                  
                  {/* Computer monitor */}
                  <rect x="80" y="80" width="140" height="100" fill="#1e293b" rx="8" />
                  <rect x="90" y="90" width="120" height="75" fill="#60a5fa" rx="5" />
                  
                  {/* Video call participant */}
                  <circle cx="150" cy="115" r="20" fill="#fbbf24" />
                  <rect x="130" y="138" width="40" height="25" rx="4" fill="#0ea5e9" />
                  
                  {/* Chat bubble with checkmark */}
                  <g transform="translate(180, 85)">
                    <rect x="0" y="0" width="35" height="25" fill="white" rx="5" />
                    <circle cx="17" cy="12" r="8" fill="#22c55e" />
                    <path d="M13 12 L16 15 L22 9" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  
                  {/* Monitor stand */}
                  <rect x="140" y="180" width="20" height="20" fill="#64748b" />
                  
                  {/* Person sitting at desk */}
                  <g transform="translate(60, 120)">
                    <circle cx="35" cy="25" r="22" fill="#1e293b" />
                    <rect x="18" y="50" width="34" height="80" rx="5" fill="#8b5cf6" />
                    {/* Arm pointing */}
                    <line x1="52" y1="70" x2="80" y2="50" stroke="#fcd34d" strokeWidth="8" strokeLinecap="round" />
                  </g>
                  
                  {/* Chair */}
                  <rect x="45" y="240" width="60" height="15" fill="#64748b" rx="3" />
                  <rect x="70" y="255" width="10" height="20" fill="#475569" />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                One such territory is Recruitment – regularly, laden with ordinary work and repetitiveness. The exercise in futility, energy and assets in a cycle that can undoubtedly and proficiently be dealt with by experts is really attractive. Enlistment Process Outsourcing clears out these wrinkles and speed-breakers and changes HR into a capacity that can certainly hobnob with promoting, money, and others – for a change. Enlistment Process Outsourcing (RPO) is the point at which an organization moves all or part of its lasting enrollment to an outer supplier. A RPO supplier can go about as an expansion of an organization's HR or Resourcing capacity, sitting nearby with the customer giving an all encompassing recruiting arrangement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Additional Content Section ========== */}
      <section className="py-8 sm:py-12 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-20 w-8 h-8 border border-cyan-300 rounded-full opacity-40" />
        <div className="absolute top-20 left-24 w-2 h-2 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            A RPO supplier can convey the fundamental staff, innovation, and approach expected to satisfy a customer's enlistment necessities. Our enlistment rethinking arrangements can be followed through on location through a group of enrollment specialists that go about as an augmentation of the customer's ability securing group, off-site, or through a blend of both, across country-adjusted, multi-provincial or worldwide transmits. Today, the enlisting climate is somewhat mind boggling. To successfully enlist top ability, you need to explore a tight work market; become capable in a bunch of significant innovations; and oversee and support up-and-comers and recruiting chiefs. RPO suppliers are topic specialists; ability securing is their center competency. They realize how to explore the selecting climate, stay current with the most recent enrolling innovation and have the assets to scale enlisting ability to satisfy employing needs.
          </p>
          
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            RPOs bring individuals, innovation, cycle, and measurements into an ability procurement work. Depending on the thing an association is searching for, a RPO arrangement can bring a variety of numerous advantages including overseeing employing changes all through the year; decreasing all out enrolling cost and reliance on staffing offices; improving recruiting director satisfaction; diminishing opportunity to-fill; raising work brand; improving competitor experience; disentangling or smoothing out the recruiting interaction; and saving time for different obligations among different advantages.
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
                        {index === 0 && (
                          <div className="absolute -top-4 left-1/3 flex flex-col items-center">
                            <div className="w-10 h-10 border border-cyan-200 rounded-full opacity-50" />
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1" />
                          </div>
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
            <div className="absolute top-1/2 right-[-60px] w-2 h-2 bg-emerald-500 rounded-full" />
            
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

export default SolutionsRPO;
