import React from 'react';
import { Link } from 'react-router-dom';

function CorporateResponsibility() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-8 left-16 w-10 h-10 border border-cyan-300 rounded-full opacity-50" />
        <div className="absolute top-24 right-20 w-16 h-16 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute bottom-20 right-1/4 w-12 h-12 border border-slate-200 rounded-full opacity-30" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              </li>
              <li className="text-slate-400">•</li>
              <li className="text-slate-900 font-medium">Corporate Responsibility</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-wide mb-12">
            CORPORATE RESPONSIBILITY
          </h1>

          {/* Hero Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 250" className="w-full h-auto">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f7fa" />
                    <stop offset="100%" stopColor="#b2ebf2" />
                  </linearGradient>
                </defs>
                <ellipse cx="450" cy="230" rx="400" ry="20" fill="url(#heroGrad)" opacity="0.5" />
                
                {/* Business people silhouettes */}
                {/* Person 1 - presenting at board */}
                <g transform="translate(150, 50)">
                  <rect x="0" y="0" width="80" height="120" fill="#e2e8f0" rx="5" />
                  <rect x="10" y="10" width="25" height="30" fill="#94a3b8" rx="3" />
                  <rect x="45" y="10" width="25" height="30" fill="#94a3b8" rx="3" />
                  <rect x="10" y="50" width="60" height="20" fill="#94a3b8" rx="3" />
                  <rect x="10" y="80" width="40" height="15" fill="#94a3b8" rx="3" />
                </g>
                
                <g transform="translate(100, 80)">
                  <circle cx="20" cy="20" r="18" fill="#1e293b" />
                  <rect x="5" y="42" width="30" height="70" rx="5" fill="#1e293b" />
                  <line x1="35" y1="60" x2="55" y2="40" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                </g>
                
                {/* Person 2 */}
                <g transform="translate(300, 90)">
                  <circle cx="20" cy="20" r="18" fill="#1e293b" />
                  <rect x="5" y="42" width="30" height="65" rx="5" fill="#0ea5e9" />
                </g>
                
                {/* Person 3 - with laptop */}
                <g transform="translate(400, 85)">
                  <circle cx="20" cy="20" r="18" fill="#1e293b" />
                  <rect x="5" y="42" width="30" height="70" rx="5" fill="#22c55e" />
                  <rect x="40" y="80" width="35" height="25" fill="#64748b" rx="3" />
                  <rect x="42" y="82" width="31" height="18" fill="#0ea5e9" rx="2" />
                </g>
                
                {/* Person 4 */}
                <g transform="translate(520, 70)">
                  <circle cx="20" cy="20" r="20" fill="#1e293b" />
                  <rect x="2" y="44" width="36" height="80" rx="5" fill="#1e293b" />
                </g>
                
                {/* Charts/Dashboard */}
                <g transform="translate(600, 40)">
                  <rect x="0" y="0" width="120" height="100" fill="#f1f5f9" rx="8" stroke="#e2e8f0" strokeWidth="2" />
                  <circle cx="60" cy="50" r="35" fill="none" stroke="#94a3b8" strokeWidth="10" />
                  <circle cx="60" cy="50" r="35" fill="none" stroke="#0ea5e9" strokeWidth="10" strokeDasharray="70 150" transform="rotate(-90 60 50)" />
                  <text x="60" y="55" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">75%</text>
                </g>
                
                {/* Person 5 - looking at chart */}
                <g transform="translate(720, 80)">
                  <circle cx="20" cy="20" r="18" fill="#1e293b" />
                  <rect x="5" y="42" width="30" height="70" rx="5" fill="#0ea5e9" />
                </g>
                
                {/* Gears decoration */}
                <circle cx="800" cy="120" r="20" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8,4" />
                <circle cx="830" cy="150" r="15" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6,3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Business meeting with charts */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-3xl flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 280 340" className="w-72 h-auto">
                    {/* Presentation board */}
                    <rect x="120" y="20" width="140" height="100" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="5" />
                    <rect x="130" y="30" width="50" height="35" fill="#f1f5f9" rx="3" />
                    
                    {/* Bar chart */}
                    <rect x="140" y="50" width="10" height="12" fill="#f97316" rx="1" />
                    <rect x="155" y="42" width="10" height="20" fill="#0ea5e9" rx="1" />
                    <rect x="170" y="35" width="10" height="27" fill="#22c55e" rx="1" />
                    
                    {/* Pie chart */}
                    <circle cx="220" cy="50" r="20" fill="#f97316" />
                    <path d="M220 50 L220 30 A20 20 0 0 1 238 58 Z" fill="#0ea5e9" />
                    <path d="M220 50 L238 58 A20 20 0 0 1 210 68 Z" fill="#22c55e" />
                    
                    {/* Lines on board */}
                    <rect x="130" y="80" width="80" height="6" fill="#e2e8f0" rx="2" />
                    <rect x="130" y="92" width="60" height="6" fill="#e2e8f0" rx="2" />
                    <rect x="130" y="104" width="70" height="6" fill="#e2e8f0" rx="2" />
                    
                    {/* Easel legs */}
                    <line x1="150" y1="120" x2="130" y2="180" stroke="#1e293b" strokeWidth="3" />
                    <line x1="230" y1="120" x2="250" y2="180" stroke="#1e293b" strokeWidth="3" />
                    
                    {/* Table */}
                    <ellipse cx="140" cy="280" rx="120" ry="35" fill="#0f172a" />
                    
                    {/* Person 1 - presenting */}
                    <g transform="translate(30, 140)">
                      <circle cx="25" cy="25" r="22" fill="#fcd34d" />
                      <rect x="8" y="52" width="34" height="65" rx="6" fill="#1e293b" />
                      <line x1="45" y1="70" x2="70" y2="50" stroke="#fcd34d" strokeWidth="8" strokeLinecap="round" />
                    </g>
                    
                    {/* Person 2 - at table */}
                    <g transform="translate(60, 200)">
                      <circle cx="20" cy="20" r="18" fill="#1e293b" />
                      <rect x="5" y="42" width="30" height="45" rx="5" fill="#0ea5e9" />
                    </g>
                    
                    {/* Person 3 - at table with laptop */}
                    <g transform="translate(150, 190)">
                      <circle cx="20" cy="20" r="18" fill="#1e293b" />
                      <rect x="5" y="42" width="30" height="50" rx="5" fill="#0ea5e9" />
                      <rect x="40" y="60" width="30" height="20" fill="#334155" rx="3" />
                      <rect x="42" y="62" width="26" height="14" fill="#60a5fa" rx="2" />
                    </g>
                    
                    {/* Person 4 - at table */}
                    <g transform="translate(210, 200)">
                      <circle cx="20" cy="20" r="18" fill="#fcd34d" />
                      <rect x="5" y="42" width="30" height="45" rx="5" fill="#22c55e" />
                    </g>
                    
                    {/* Papers/documents on table */}
                    <rect x="100" y="260" width="25" height="20" fill="#fcd34d" rx="2" transform="rotate(-10 100 260)" />
                    <rect x="130" y="258" width="25" height="20" fill="#f472b6" rx="2" transform="rotate(5 130 258)" />
                    <rect x="160" y="262" width="20" height="15" fill="#60a5fa" rx="2" transform="rotate(-5 160 262)" />
                  </svg>
                </div>
                
                {/* Decorative dots */}
                <div className="absolute -top-4 -left-4 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                As a professionalism organization, we believe our responsibility is not just limited to offering reliable services to our clients, taking care of our employees and offering remarkable perks to them; we also believe we have many other responsibilities that include taking care of environment, set a benchmark in IT industry and stand out by offering premium experiences to our clients.
              </p>
              
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                We aim to quicken the execution of our development methodology while proceeding to create our image with customers and our representatives. In each business commitment, we look for the way to creating dependable, vital associations with our customer driven partnerships that structure the reason for how we, as an organization, work and serve our customers. To be the best worldwide IT organization, offering premium services by consolidating our unmatched experience and abilities over all enterprises, and teaming up with customers.
      </p>
    </div>
          </div>
        </div>
      </section>

      {/* ========== 3. CTA Section ========== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag */}
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-slate-700 border border-slate-300 rounded-full mb-6">
            WANT TO GET STARTED?
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-10">
            DECIDE WHAT'S BEST<br />FOR YOUR BUSINESS!
          </h2>

          {/* CTA Button */}
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
      </section>

      {/* ========== 4. Business Process Illustration ========== */}
      <section className="py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-48 sm:h-64">
            <svg viewBox="0 0 1000 200" className="w-full h-full">
              {/* Background pattern */}
              <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPattern)" />
              
              {/* Connection lines */}
              <path d="M50 100 L150 100 L250 60 L350 100 L450 50 L550 100 L650 80 L750 100 L850 70 L950 100" 
                    stroke="white" strokeWidth="2" fill="none" strokeDasharray="6,4" opacity="0.5" />
              
              {/* Connection nodes */}
              {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950].map((x, i) => (
                <circle key={i} cx={x} cy={i % 2 === 0 ? 100 : (i % 3 === 0 ? 60 : 80)} r="6" fill="white" />
              ))}
              
              {/* Business scenes */}
              {/* Scene 1 - Meeting */}
              <g transform="translate(80, 100)">
                <rect x="0" y="10" width="50" height="30" fill="#0f172a" rx="3" />
                <circle cx="70" cy="15" r="12" fill="#1e293b" />
                <rect x="58" y="28" width="24" height="35" rx="3" fill="#1e293b" />
                <circle cx="100" cy="18" r="12" fill="#1e293b" />
                <rect x="88" y="31" width="24" height="32" rx="3" fill="#0284c7" />
              </g>
              
              {/* Scene 2 - Presentation */}
              <g transform="translate(300, 90)">
                <rect x="0" y="0" width="60" height="50" fill="#0f172a" rx="4" />
                <rect x="8" y="8" width="20" height="15" fill="#fbbf24" rx="2" />
                <rect x="32" y="8" width="20" height="15" fill="#22c55e" rx="2" />
                <circle cx="90" cy="25" r="12" fill="#1e293b" />
                <rect x="78" y="38" width="24" height="35" rx="3" fill="#1e293b" />
              </g>
              
              {/* Scene 3 - Team collaboration */}
              <g transform="translate(520, 85)">
                <circle cx="0" cy="25" r="12" fill="#1e293b" />
                <rect x="-12" y="38" width="24" height="35" rx="3" fill="#0284c7" />
                <circle cx="40" cy="20" r="12" fill="#1e293b" />
                <rect x="28" y="33" width="24" height="40" rx="3" fill="#1e293b" />
                <circle cx="80" cy="25" r="12" fill="#1e293b" />
                <rect x="68" y="38" width="24" height="35" rx="3" fill="#0284c7" />
              </g>
              
              {/* Scene 4 - Globe/International */}
              <g transform="translate(750, 60)">
                <circle cx="40" cy="40" r="30" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
                <ellipse cx="40" cy="40" rx="30" ry="12" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
                <line x1="40" y1="10" x2="40" y2="70" stroke="white" strokeWidth="1" opacity="0.4" />
                <circle cx="100" cy="50" r="12" fill="#1e293b" />
                <rect x="88" y="63" width="24" height="30" rx="3" fill="#1e293b" />
              </g>
              
              {/* Labels */}
              <text x="120" y="175" fill="white" fontSize="10" fontWeight="bold" opacity="0.7">TESTING</text>
              <text x="350" y="175" fill="white" fontSize="10" fontWeight="bold" opacity="0.7">ANALYSIS</text>
              <text x="550" y="175" fill="white" fontSize="10" fontWeight="bold" opacity="0.7">TEAMWORK</text>
              <text x="800" y="175" fill="white" fontSize="10" fontWeight="bold" opacity="0.7">GLOBAL</text>
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

export default CorporateResponsibility;
