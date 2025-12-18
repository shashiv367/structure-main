import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeReferral() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-8 left-32 w-12 h-12 border border-cyan-300 rounded-full opacity-50" />
        <div className="absolute top-28 left-40 w-3 h-3 bg-emerald-500 rounded-full" />
        <div className="absolute top-20 right-32 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              </li>
              <li className="text-slate-400">•</li>
              <li className="text-slate-900 font-medium">Employee Referral</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-wide mb-12">
            EMPLOYEE REFERRAL
          </h1>

          {/* Hero Illustration - People celebrating/jumping */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 220" className="w-full h-auto">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="heroGradReferral" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f7fa" />
                    <stop offset="100%" stopColor="#b2ebf2" />
                  </linearGradient>
                </defs>
                <ellipse cx="450" cy="200" rx="380" ry="20" fill="url(#heroGradReferral)" opacity="0.5" />
                
                {/* Phone/Device in center */}
                <g transform="translate(380, 30)">
                  <rect x="0" y="0" width="80" height="150" fill="#e2e8f0" rx="10" />
                  <rect x="5" y="10" width="70" height="120" fill="#f8fafc" rx="5" />
                  <circle cx="40" cy="140" r="8" fill="#cbd5e1" />
                </g>
                
                {/* Person 1 - jumping left */}
                <g transform="translate(100, 40)">
                  <circle cx="30" cy="30" r="22" fill="#1e293b" />
                  <rect x="12" y="55" width="36" height="60" rx="6" fill="#f97316" />
                  <line x1="48" y1="70" x2="70" y2="50" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
                  <line x1="12" y1="70" x2="-5" y2="55" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
                </g>
                
                {/* Person 2 - with phone */}
                <g transform="translate(200, 60)">
                  <circle cx="30" cy="25" r="20" fill="#fbbf24" />
                  <rect x="15" y="48" width="30" height="55" rx="5" fill="#22c55e" />
                  <rect x="50" y="55" width="20" height="30" fill="#64748b" rx="3" />
                </g>
                
                {/* Person 3 - celebrating */}
                <g transform="translate(280, 30)">
                  <circle cx="30" cy="30" r="22" fill="#1e293b" />
                  <rect x="12" y="55" width="36" height="65" rx="6" fill="#ec4899" />
                  <line x1="48" y1="65" x2="75" y2="40" stroke="#fcd34d" strokeWidth="8" strokeLinecap="round" />
                </g>
                
                {/* Person 4 - right side jumping */}
                <g transform="translate(550, 35)">
                  <circle cx="30" cy="30" r="22" fill="#1e293b" />
                  <rect x="12" y="55" width="36" height="60" rx="6" fill="#0ea5e9" />
                  <line x1="48" y1="70" x2="70" y2="45" stroke="#0ea5e9" strokeWidth="8" strokeLinecap="round" />
                </g>
                
                {/* Person 5 */}
                <g transform="translate(650, 50)">
                  <circle cx="30" cy="25" r="20" fill="#fbbf24" />
                  <rect x="15" y="48" width="30" height="55" rx="5" fill="#f97316" />
                </g>
                
                {/* Person 6 - far right */}
                <g transform="translate(730, 40)">
                  <circle cx="30" cy="30" r="22" fill="#1e293b" />
                  <rect x="12" y="55" width="36" height="60" rx="6" fill="#ec4899" />
                  <line x1="12" y1="65" x2="-10" y2="45" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" />
                </g>
                
                {/* Decorative elements */}
                <circle cx="150" cy="150" r="4" fill="#22c55e" />
                <circle cx="750" cy="140" r="3" fill="#f472b6" />
                <circle cx="500" cy="30" r="3" fill="#0ea5e9" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Person with connected icons */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-[3rem] flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 280 340" className="w-72 h-auto">
                    {/* Central person */}
                    <g transform="translate(100, 100)">
                      <circle cx="40" cy="40" r="45" fill="#f97316" />
                      <circle cx="40" cy="35" r="25" fill="#fef3c7" />
                      <circle cx="32" cy="32" r="4" fill="#1e293b" />
                      <circle cx="48" cy="32" r="4" fill="#1e293b" />
                      <path d="M32 45 Q40 52 48 45" stroke="#1e293b" strokeWidth="2" fill="none" />
                      <rect x="30" y="10" width="20" height="15" fill="#1e293b" rx="2" />
                    </g>
                    
                    {/* Connection lines */}
                    <line x1="140" y1="140" x2="70" y2="80" stroke="#94a3b8" strokeWidth="2" />
                    <line x1="140" y1="140" x2="60" y2="180" stroke="#94a3b8" strokeWidth="2" />
                    <line x1="140" y1="140" x2="100" y2="260" stroke="#94a3b8" strokeWidth="2" />
                    <line x1="140" y1="140" x2="200" y2="200" stroke="#94a3b8" strokeWidth="2" />
                    <line x1="140" y1="140" x2="220" y2="120" stroke="#94a3b8" strokeWidth="2" />
                    
                    {/* Icon 1 - Email (top left) */}
                    <g transform="translate(45, 55)">
                      <circle cx="25" cy="25" r="25" fill="#0ea5e9" />
                      <rect x="12" y="15" width="26" height="18" fill="white" rx="2" />
                      <path d="M12 17 L25 27 L38 17" stroke="#0ea5e9" strokeWidth="2" fill="none" />
                      <text x="25" y="27" textAnchor="middle" fill="#0ea5e9" fontSize="10">@</text>
                    </g>
                    
                    {/* Icon 2 - Megaphone (left) */}
                    <g transform="translate(30, 155)">
                      <circle cx="25" cy="25" r="25" fill="#0ea5e9" />
                      <polygon points="15,20 35,15 35,35 15,30" fill="white" />
                      <rect x="35" y="18" width="8" height="14" fill="white" rx="2" />
                    </g>
                    
                    {/* Icon 3 - Wallet (bottom) */}
                    <g transform="translate(180, 175)">
                      <circle cx="25" cy="25" r="25" fill="#fbbf24" />
                      <rect x="12" y="15" width="26" height="20" fill="#1e293b" rx="3" />
                      <rect x="28" y="20" width="8" height="10" fill="#fbbf24" rx="2" />
                      <circle cx="32" cy="25" r="3" fill="#1e293b" />
                    </g>
                    
                    {/* Icon 4 - Globe (bottom left) */}
                    <g transform="translate(70, 235)">
                      <circle cx="25" cy="25" r="25" fill="#22c55e" />
                      <circle cx="25" cy="25" r="15" fill="none" stroke="white" strokeWidth="2" />
                      <ellipse cx="25" cy="25" rx="15" ry="6" fill="none" stroke="white" strokeWidth="1" />
                      <line x1="25" y1="10" x2="25" y2="40" stroke="white" strokeWidth="1" />
                      <circle cx="35" cy="18" r="5" fill="#ef4444" />
                      <path d="M33 18 L35 20 L38 15" stroke="white" strokeWidth="1.5" fill="none" />
                    </g>
                    
                    {/* Icon 5 - Chat (right) */}
                    <g transform="translate(195, 95)">
                      <circle cx="25" cy="25" r="25" fill="#8b5cf6" />
                      <rect x="12" y="12" width="26" height="20" fill="white" rx="4" />
                      <polygon points="18,32 22,32 15,40" fill="white" />
                      <circle cx="20" cy="22" r="2" fill="#8b5cf6" />
                      <circle cx="25" cy="22" r="2" fill="#8b5cf6" />
                      <circle cx="30" cy="22" r="2" fill="#8b5cf6" />
                    </g>
                  </svg>
                </div>
                
                {/* Decorative dots */}
                <div className="absolute -top-4 -right-4 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Representative references can add generous worth – and they are on the ascent. Even more motivation to begin with that worker reference program in the event that you haven't done as such yet. Today we'll feature a portion of the advantages of worker references and a couple of components each representative reference program ought to incorporate Once more, if your workers figured their reference wouldn't be a solid match, both for the work and for your organization culture, they wouldn't put them forward as an expected applicant. In that capacity, your staff preselects the contender for you. Also, who realizes better what your organization culture resembles and what sort of individual it takes to dominate in your association than your present workers?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Additional Content Section ========== */}
      <section className="py-8 sm:py-12 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-1/4 w-10 h-10 border border-cyan-300 rounded-full opacity-40" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Moreover, a worker that alludes an applicant will need to ensure they just present the most ideal individual for the work since they'll by and by feel liable for the accomplishment of their reference in the organization. In the same way as other things, worker reference programs come in various shapes and structures. There are anyway sure components each program preferably ought to incorporate A representative reference program can be an extraordinary method to build up a serious edge and stay in front of your opposition in the battle for ability. Given its advantages – both for your current and future representatives – and its moderately low expenses, having a reference program definitely should be an easy decision.
          </p>
          
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Indeed, as abnormal as this may appear, as it were, references have been preselected by the basic certainty that if your present workers weren't persuaded they would be a solid match, they wouldn't have made the proposal
          </p>
        </div>
      </section>

      {/* ========== 4. CTA Section ========== */}
      <section className="py-20 sm:py-28 bg-white relative">
        {/* Decorative element */}
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
            {/* Decorative circle */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 border border-cyan-400 rounded-full opacity-60" />
            
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
                <pattern id="gridPatternReferral" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternReferral)" />
              
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
              {/* Scene 1 - Office */}
              <g transform="translate(100, 90)">
                <rect x="0" y="10" width="50" height="35" fill="#f1f5f9" rx="3" />
                <rect x="5" y="15" width="20" height="12" fill="#fbbf24" rx="2" />
                <circle cx="80" cy="30" r="12" fill="#1e293b" />
                <rect x="68" y="43" width="24" height="40" rx="3" fill="#1e293b" />
              </g>
              
              {/* Scene 2 - Meeting */}
              <g transform="translate(280, 85)">
                <rect x="0" y="15" width="50" height="30" fill="#0f172a" rx="3" />
                <circle cx="70" cy="25" r="12" fill="#1e293b" />
                <rect x="58" y="38" width="24" height="40" rx="3" fill="#0284c7" />
                <circle cx="100" cy="28" r="12" fill="#1e293b" />
                <rect x="88" y="41" width="24" height="37" rx="3" fill="#1e293b" />
              </g>
              
              {/* Testing label */}
              <text x="380" y="175" fill="white" fontSize="11" fontWeight="bold" opacity="0.8">TESTING</text>
              
              {/* Scene 3 - Team */}
              <g transform="translate(500, 85)">
                <circle cx="0" cy="25" r="12" fill="#1e293b" />
                <rect x="-12" y="38" width="24" height="40" rx="3" fill="#0284c7" />
                <circle cx="40" cy="20" r="12" fill="#1e293b" />
                <rect x="28" y="33" width="24" height="45" rx="3" fill="#1e293b" />
                <circle cx="80" cy="25" r="12" fill="#1e293b" />
                <rect x="68" y="38" width="24" height="40" rx="3" fill="#0284c7" />
              </g>
              
              {/* Scene 4 */}
              <g transform="translate(700, 80)">
                <circle cx="0" cy="30" r="12" fill="#1e293b" />
                <rect x="-12" y="43" width="24" height="40" rx="3" fill="#1e293b" />
                <circle cx="40" cy="25" r="12" fill="#1e293b" />
                <rect x="28" y="38" width="24" height="45" rx="3" fill="#0284c7" />
                <circle cx="80" cy="30" r="12" fill="#1e293b" />
                <rect x="68" y="43" width="24" height="40" rx="3" fill="#1e293b" />
              </g>
              
              {/* Badge */}
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

export default EmployeeReferral;
