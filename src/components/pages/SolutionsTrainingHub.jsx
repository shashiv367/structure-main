import React from 'react';
import { Link } from 'react-router-dom';

// --- Offerings Data ---
const OFFERINGS = [
  {
    id: 1,
    title: 'On-demand, Cloud-empowered learning...',
    position: 'left',
  },
  {
    id: 2,
    title: 'Courses and Certifications to keep you...',
    position: 'right',
  },
  {
    id: 3,
    title: 'Leadership development programs.',
    position: 'left',
  },
  {
    id: 4,
    title: 'Technical architect paths for better, s...',
    position: 'right',
  },
  {
    id: 5,
    title: 'In-house talent and support, first-han...',
    position: 'left',
  },
  {
    id: 6,
    title: 'Virtual learning experiences.',
    position: 'right',
  },
];

function SolutionsTrainingHub() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-8 left-32 w-12 h-12 border-2 border-cyan-200 rounded-full opacity-50" />
        <div className="absolute top-20 left-72 w-3 h-3 bg-emerald-500 rounded-full" />

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
              <li className="text-slate-900 font-medium">MetrixIT Solutions Training Hub</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            MetrixIT Solutions Training Hub
          </h1>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Training/Meeting scene */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 320" className="w-80 h-auto">
                  {/* Presentation Board */}
                  <g transform="translate(100, 20)">
                    {/* Board frame */}
                    <rect x="0" y="0" width="180" height="130" fill="#f8fafc" rx="5" stroke="#e2e8f0" strokeWidth="2" />
                    
                    {/* Chart elements */}
                    <rect x="15" y="20" width="70" height="50" fill="#1e293b" rx="3" />
                    <rect x="20" y="30" width="12" height="35" fill="#f472b6" rx="2" />
                    <rect x="36" y="40" width="12" height="25" fill="#f472b6" rx="2" />
                    <rect x="52" y="25" width="12" height="40" fill="#f472b6" rx="2" />
                    <rect x="68" y="35" width="12" height="30" fill="#f472b6" rx="2" />
                    
                    {/* Pie chart */}
                    <circle cx="135" cy="45" r="25" fill="#f472b6" />
                    <path d="M135 45 L135 20 A25 25 0 0 1 158 55 Z" fill="#1e293b" />
                    
                    {/* Data lines */}
                    <rect x="15" y="85" width="150" height="6" fill="#e2e8f0" rx="2" />
                    <rect x="15" y="100" width="120" height="6" fill="#e2e8f0" rx="2" />
                    <rect x="15" y="115" width="90" height="6" fill="#e2e8f0" rx="2" />
                  </g>
                  
                  {/* Chat bubbles */}
                  <g transform="translate(220, 160)">
                    <rect x="0" y="0" width="50" height="30" fill="#94a3b8" rx="5" />
                    <rect x="60" y="15" width="50" height="30" fill="#94a3b8" rx="5" />
                  </g>
                  
                  {/* Person 1 - Left (sitting) */}
                  <g transform="translate(80, 160)">
                    {/* Chair */}
                    <rect x="0" y="80" width="50" height="60" fill="#fbbf24" rx="5" />
                    <rect x="5" y="70" width="40" height="15" fill="#fbbf24" rx="3" />
                    
                    {/* Person */}
                    <circle cx="25" cy="40" r="20" fill="#1e293b" />
                    <rect x="8" y="62" width="34" height="50" rx="5" fill="#f472b6" />
                    {/* Laptop */}
                    <rect x="45" y="90" width="35" height="25" fill="#64748b" rx="3" />
                    <rect x="48" y="93" width="29" height="18" fill="#60a5fa" rx="2" />
                  </g>
                  
                  {/* Person 2 - Center (sitting) */}
                  <g transform="translate(170, 170)">
                    {/* Chair */}
                    <rect x="0" y="70" width="50" height="60" fill="#fbbf24" rx="5" />
                    <rect x="5" y="60" width="40" height="15" fill="#fbbf24" rx="3" />
                    
                    {/* Person */}
                    <circle cx="25" cy="30" r="20" fill="#1e293b" />
                    <rect x="8" y="52" width="34" height="45" rx="5" fill="#f472b6" />
                  </g>
                  
                  {/* Person 3 - Right (sitting) */}
                  <g transform="translate(260, 160)">
                    {/* Chair */}
                    <rect x="0" y="80" width="50" height="60" fill="#fbbf24" rx="5" />
                    <rect x="5" y="70" width="40" height="15" fill="#fbbf24" rx="3" />
                    
                    {/* Person */}
                    <circle cx="25" cy="40" r="20" fill="#0ea5e9" />
                    <rect x="8" y="62" width="34" height="50" rx="5" fill="#0ea5e9" />
                  </g>
                  
                  {/* Table */}
                  <rect x="60" y="250" width="260" height="15" fill="#fbbf24" rx="3" />
                  
                  {/* Floor indicator */}
                  <rect x="50" y="290" width="280" height="8" fill="#fbbf24" opacity="0.3" rx="2" />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Arrangement versions of MetrixIT Solutions Training Hub are perhaps the quickest course to arrangement explicit achievement, speeding up onboarding, programming selection, and This far reaching advanced stage offers undertaking wide, admittance to customized computerized learning assets inside eight MetrixIT Solutions arrangement portfolios – MetrixIT Solutions Cloud, advanced stages, obtainment and organizations, investigation, client experience, and computerized production network, individuals commitment, and account. To discover more, kindly contact your MetrixIT Solutions delegate or visit us on the web.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Additional Content Section ========== */}
      <section className="py-8 sm:py-12 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-10 right-1/4 w-2 h-2 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Arrangement releases for MetrixIT Solutions Training Hub are custom-made, extensive, advanced projects that help tenderfoots and experts the same create – and keep up – capability in a particular MetrixIT Solutions arrangement portfolio. Construct arrangement competency in any of eight MetrixIT Solutions arrangement portfolios – MetrixIT Solutions Cloud, computerized stages, obtainment and organizations, investigation, client experience, and advanced inventory network, individuals commitment, and finance. Follow intelligent, visual Learning Journey manages that delineate ways to competency.Join social and community MetrixIT Solutions Training Hub Rooms, driven by MetrixIT Solutions specialists, to trade thoughts and study for certifications. Gain limitless, 24x7 admittance to a wealth of learning assets – video instructional exercises, information appraisals, e-learning courses, delicate abilities digital books, and that's just the beginning.
          </p>
          
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Get active preparing on preconfigured programming with 60 hours of admittance to the MetrixIT Solutions Live Access entrance and exhibit your ability through up to two online accreditation exams all of this is incorporated with your membership to MetrixIT Solutions Training Hub, arrangement editions. Overview Enable progressing capability across different jobs and expertise levels, and take perhaps the quickest course to progress with MetrixIT Solutionsems.
          </p>
        </div>
      </section>

      {/* ========== 4. Offerings Timeline Section ========== */}
      <section className="py-16 sm:py-24 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-40 w-12 h-12 border-2 border-cyan-200 rounded-full opacity-50" />
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16 italic leading-tight">
            We provide for a huge<br />canvas of needs and<br />ambitions such as
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-sky-400 via-sky-500 to-cyan-400" style={{ backgroundImage: 'linear-gradient(to bottom, #0ea5e9, #0ea5e9 50%, transparent 50%)', backgroundSize: '2px 12px' }} />

            <div className="space-y-12">
              {OFFERINGS.map((item, index) => (
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
                        {index === 4 && (
                          <div className="absolute bottom-6 right-8">
                            <div className="w-10 h-10 border border-cyan-200 rounded-full opacity-50" />
                          </div>
                        )}
                        {index === 5 && (
                          <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-500 rounded-full" />
                        )}
                        
                        <p className="text-lg font-semibold text-slate-900">
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

      {/* ========== 5. CTA Section ========== */}
      <section className="py-20 sm:py-28 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute bottom-1/3 right-20 w-10 h-10 border border-cyan-200 rounded-full opacity-40 flex items-center justify-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
        </div>
        
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

      {/* ========== 6. Business Process Illustration ========== */}
      <section className="py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-48 sm:h-64">
            <svg viewBox="0 0 1000 200" className="w-full h-full">
              {/* Background pattern */}
              <defs>
                <pattern id="gridPatternTH" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternTH)" />
              
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

export default SolutionsTrainingHub;
