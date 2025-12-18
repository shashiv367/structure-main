import React from 'react';
import { Link } from 'react-router-dom';

function PartnershipSupplierDiversity() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-12 left-1/4 w-14 h-14 border border-cyan-300 rounded-full opacity-50" />
        <div className="absolute top-28 right-32 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute bottom-24 left-20 w-4 h-4 bg-emerald-500 rounded-full opacity-60" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              </li>
              <li className="text-slate-400">•</li>
              <li className="text-slate-900 font-medium">Partnership & Supplier Diversity</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-wide mb-12">
            PARTNERSHIP & SUPPLIER DIVERSITY
          </h1>

          {/* Hero Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 220" className="w-full h-auto">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="heroGradientPartner" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f7fa" />
                    <stop offset="100%" stopColor="#b2ebf2" />
                  </linearGradient>
                </defs>
                <rect x="100" y="180" width="700" height="40" fill="url(#heroGradientPartner)" rx="5" opacity="0.6" />
                
                {/* Office/Factory elements */}
                <g transform="translate(150, 60)">
                  {/* Conveyor belt */}
                  <rect x="0" y="100" width="200" height="15" fill="#94a3b8" rx="3" />
                  <circle cx="20" cy="115" r="8" fill="#64748b" />
                  <circle cx="180" cy="115" r="8" fill="#64748b" />
                  
                  {/* Boxes on conveyor */}
                  <rect x="40" y="85" width="25" height="20" fill="#fbbf24" rx="2" />
                  <rect x="80" y="85" width="25" height="20" fill="#22c55e" rx="2" />
                  <rect x="120" y="85" width="25" height="20" fill="#0ea5e9" rx="2" />
                  
                  {/* Machine */}
                  <rect x="220" y="50" width="80" height="70" fill="#475569" rx="5" />
                  <rect x="230" y="60" width="25" height="20" fill="#22c55e" rx="3" />
                  <rect x="260" y="60" width="30" height="20" fill="#0ea5e9" rx="3" />
                  <rect x="230" y="90" width="60" height="20" fill="#64748b" rx="3" />
                </g>
                
                {/* Business people */}
                {/* Person 1 - working at desk */}
                <g transform="translate(100, 50)">
                  <rect x="0" y="80" width="50" height="40" fill="#1e293b" rx="3" />
                  <circle cx="70" cy="70" r="18" fill="#1e293b" />
                  <rect x="55" y="92" width="30" height="55" rx="5" fill="#0ea5e9" />
                </g>
                
                {/* Person 2 */}
                <g transform="translate(500, 60)">
                  <circle cx="20" cy="20" r="18" fill="#1e293b" />
                  <rect x="5" y="42" width="30" height="60" rx="5" fill="#1e293b" />
                </g>
                
                {/* Person 3 - presenting */}
                <g transform="translate(580, 50)">
                  <rect x="0" y="0" width="80" height="60" fill="#f1f5f9" rx="5" stroke="#e2e8f0" strokeWidth="2" />
                  <rect x="10" y="10" width="20" height="15" fill="#f97316" rx="2" />
                  <rect x="35" y="10" width="35" height="8" fill="#94a3b8" rx="1" />
                  <rect x="35" y="22" width="25" height="8" fill="#94a3b8" rx="1" />
                  <rect x="10" y="35" width="60" height="15" fill="#22c55e" rx="2" />
                  <circle cx="120" cy="40" r="18" fill="#1e293b" />
                  <rect x="105" y="62" width="30" height="55" rx="5" fill="#22c55e" />
                </g>
                
                {/* Person 4 - with projector */}
                <g transform="translate(720, 70)">
                  <rect x="0" y="30" width="60" height="40" fill="#64748b" rx="5" />
                  <rect x="60" y="45" width="40" height="10" fill="#94a3b8" rx="2" />
                  <circle cx="100" cy="50" r="8" fill="#0ea5e9" />
                  <circle cx="30" cy="10" r="18" fill="#1e293b" />
                  <rect x="15" y="32" width="30" height="55" rx="5" fill="#0ea5e9" />
                </g>
                
                {/* Gears */}
                <circle cx="480" cy="100" r="15" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="6,3" />
                <circle cx="510" cy="120" r="12" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="5,3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Business handshake with globe */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 280 340" className="w-72 h-auto">
                    {/* Globe in background */}
                    <circle cx="140" cy="120" r="80" fill="#dcfce7" opacity="0.7" />
                    <ellipse cx="140" cy="120" rx="80" ry="30" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                    <ellipse cx="140" cy="120" rx="30" ry="80" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                    <path d="M60 120 Q100 100 140 120 Q180 140 220 120" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.5" />
                    
                    {/* Gears decoration */}
                    <circle cx="50" cy="200" r="25" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="10,5" opacity="0.6" />
                    <circle cx="50" cy="200" r="10" fill="#94a3b8" opacity="0.4" />
                    <circle cx="85" cy="235" r="18" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8,4" opacity="0.5" />
                    
                    {/* Person 1 - Woman on left */}
                    <g transform="translate(40, 180)">
                      <circle cx="25" cy="25" r="22" fill="#1e293b" />
                      <rect x="8" y="52" width="34" height="70" rx="6" fill="#f1f5f9" />
                      <rect x="8" y="52" width="34" height="35" rx="6" fill="#64748b" />
                    </g>
                    
                    {/* Person 2 - Man shaking hands */}
                    <g transform="translate(95, 175)">
                      <circle cx="25" cy="25" r="22" fill="#fcd34d" />
                      <rect x="8" y="52" width="34" height="75" rx="6" fill="#d4a574" />
                      {/* Extended arm for handshake */}
                      <rect x="42" y="70" width="35" height="12" rx="3" fill="#fcd34d" />
                    </g>
                    
                    {/* Person 3 - Man receiving handshake */}
                    <g transform="translate(155, 175)">
                      <circle cx="25" cy="25" r="22" fill="#1e293b" />
                      <rect x="8" y="52" width="34" height="75" rx="6" fill="#1e293b" />
                      {/* Extended arm for handshake */}
                      <rect x="-25" y="70" width="35" height="12" rx="3" fill="#fcd34d" />
                    </g>
                    
                    {/* Handshake point */}
                    <circle cx="140" cy="252" r="8" fill="#22c55e" />
                    
                    {/* Person 4 - Man on right */}
                    <g transform="translate(200, 180)">
                      <circle cx="25" cy="25" r="22" fill="#1e293b" />
                      <rect x="8" y="52" width="34" height="70" rx="6" fill="#1e293b" />
                    </g>
                    
                    {/* Decorative elements */}
                    <circle cx="230" cy="100" r="4" fill="#22c55e" />
                    <circle cx="50" cy="80" r="3" fill="#0ea5e9" />
                  </svg>
                </div>
                
                {/* Decorative dots */}
                <div className="absolute -bottom-4 -left-4 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                MetrixIT Solutions associates with corporations that resonate with our core abilities and share the similar values. We completely understand the value of having a network of corporations that resonate with our values. We create partnerships with quality of breed technology companies and suppliers that lengthen, support and work with us to offer the best in new technologies. In this competitive international market, having a community of suppliers and partners is a key for the success of a company.
              </p>
              
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                These partnerships add an immense value to our unique model and allow us to supply great services to the complicated issues of our clients. These partnerships help us in accomplishing complete Customer Satisfaction, which is of major significance to us. These partnerships allow us to take benefit of rising technologies in a helpful and cost-effective way, while offering the most benefits to our valued clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. CTA Section ========== */}
      <section className="py-20 sm:py-28 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-20 w-12 h-12 border border-cyan-200 rounded-full opacity-30" />
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-emerald-500 rounded-full" />
        
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
                <pattern id="gridPatternPartner" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternPartner)" />
              
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
              {/* Scene 1 - Meeting table */}
              <g transform="translate(100, 90)">
                <rect x="0" y="20" width="60" height="35" fill="#0f172a" rx="3" />
                <circle cx="80" cy="25" r="12" fill="#1e293b" />
                <rect x="68" y="38" width="24" height="40" rx="3" fill="#1e293b" />
                <circle cx="110" cy="28" r="12" fill="#1e293b" />
                <rect x="98" y="41" width="24" height="37" rx="3" fill="#0284c7" />
              </g>
              
              {/* Scene 2 - Computer station */}
              <g transform="translate(280, 80)">
                <rect x="0" y="10" width="45" height="35" fill="#f1f5f9" rx="3" />
                <rect x="5" y="15" width="35" height="20" fill="#0ea5e9" rx="2" />
                <rect x="15" y="45" width="15" height="20" fill="#64748b" rx="2" />
                <circle cx="80" cy="35" r="12" fill="#1e293b" />
                <rect x="68" y="48" width="24" height="35" rx="3" fill="#fbbf24" />
              </g>
              
              {/* Scene 3 - Testing label */}
              <text x="380" y="175" fill="white" fontSize="11" fontWeight="bold" opacity="0.8">TESTING</text>
              
              {/* Scene 4 - Team discussion */}
              <g transform="translate(500, 85)">
                <circle cx="0" cy="25" r="12" fill="#1e293b" />
                <rect x="-12" y="38" width="24" height="40" rx="3" fill="#0284c7" />
                <circle cx="40" cy="20" r="12" fill="#1e293b" />
                <rect x="28" y="33" width="24" height="45" rx="3" fill="#1e293b" />
                <circle cx="80" cy="25" r="12" fill="#1e293b" />
                <rect x="68" y="38" width="24" height="40" rx="3" fill="#0284c7" />
              </g>
              
              {/* Scene 5 - Presentation */}
              <g transform="translate(680, 80)">
                <circle cx="0" cy="30" r="12" fill="#1e293b" />
                <rect x="-12" y="43" width="24" height="40" rx="3" fill="#1e293b" />
                <circle cx="40" cy="25" r="12" fill="#1e293b" />
                <rect x="28" y="38" width="24" height="45" rx="3" fill="#0284c7" />
                <circle cx="80" cy="30" r="12" fill="#1e293b" />
                <rect x="68" y="43" width="24" height="40" rx="3" fill="#1e293b" />
              </g>
              
              {/* Interview/Selection badge */}
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

export default PartnershipSupplierDiversity;
