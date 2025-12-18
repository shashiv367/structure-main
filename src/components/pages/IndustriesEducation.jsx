import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Online E-Learning Applications',
    position: 'left',
  },
  {
    id: 2,
    title: 'SCORM / AICC Compliant Content Man...',
    position: 'right',
  },
  {
    id: 3,
    title: 'Mobile Learning Application',
    position: 'left',
  },
  {
    id: 4,
    title: 'Remote Learning Websites',
    position: 'right',
  },
  {
    id: 5,
    title: 'Virtual Classroom Solutions',
    position: 'left',
  },
  {
    id: 6,
    title: 'Interactive Gaming Applications',
    position: 'left',
  },
  {
    id: 7,
    title: 'Application Development and Mainte...',
    position: 'right',
  },
  {
    id: 8,
    title: 'Web Applications / Portals',
    position: 'right',
  },
];

function IndustriesEducation() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-4 left-56 w-3 h-3 bg-emerald-500 rounded-full" />
        <div className="absolute top-8 left-[45%] w-12 h-12 border-2 border-cyan-200 rounded-full opacity-50" />

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
              <li className="text-slate-900 font-medium">Education</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Education
          </h1>

          {/* Hero Illustration - Education themed with background text */}
          <div className="flex justify-center relative">
            {/* Background text */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10">
              <span className="text-6xl sm:text-8xl font-bold text-cyan-500 absolute left-0">SCHOOL</span>
              <span className="text-7xl sm:text-9xl font-bold text-pink-400 absolute">TEACHING</span>
              <span className="text-6xl sm:text-8xl font-bold text-cyan-400 absolute right-0">KNOWLEDGE</span>
            </div>
            
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 180" className="w-full h-auto">
                {/* Background elements */}
                <defs>
                  <linearGradient id="heroGradEdu" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f7fa" />
                    <stop offset="100%" stopColor="#b2ebf2" />
                  </linearGradient>
                </defs>
                
                {/* Books stacks */}
                <g transform="translate(80, 80)">
                  <rect x="0" y="0" width="40" height="60" fill="#64748b" rx="2" />
                  <rect x="5" y="5" width="30" height="8" fill="#94a3b8" rx="1" />
                </g>
                
                {/* Person at desk 1 */}
                <g transform="translate(150, 60)">
                  <rect x="0" y="60" width="60" height="40" fill="#64748b" rx="3" />
                  <rect x="10" y="40" width="40" height="25" fill="#1e293b" rx="3" />
                  <rect x="15" y="45" width="30" height="15" fill="#60a5fa" rx="2" />
                  <circle cx="70" cy="50" r="15" fill="#1e293b" />
                  <rect x="58" y="68" width="24" height="40" rx="3" fill="#f472b6" />
                </g>
                
                {/* Central desk with computer */}
                <g transform="translate(350, 50)">
                  <rect x="0" y="70" width="100" height="50" fill="#64748b" rx="3" />
                  <rect x="20" y="30" width="60" height="45" fill="#1e293b" rx="3" />
                  <rect x="25" y="35" width="50" height="35" fill="#60a5fa" rx="2" />
                  <rect x="45" y="75" width="10" height="10" fill="#475569" />
                </g>
                
                {/* Books on shelf */}
                <g transform="translate(500, 40)">
                  <rect x="0" y="0" width="80" height="10" fill="#94a3b8" />
                  <rect x="5" y="-30" width="15" height="30" fill="#f472b6" rx="2" />
                  <rect x="22" y="-25" width="12" height="25" fill="#fbbf24" rx="2" />
                  <rect x="36" y="-35" width="15" height="35" fill="#60a5fa" rx="2" />
                  <rect x="53" y="-28" width="12" height="28" fill="#22c55e" rx="2" />
                </g>
                
                {/* Person at desk 2 */}
                <g transform="translate(600, 55)">
                  <rect x="0" y="65" width="60" height="40" fill="#64748b" rx="3" />
                  <rect x="10" y="45" width="40" height="25" fill="#1e293b" rx="3" />
                  <rect x="15" y="50" width="30" height="15" fill="#60a5fa" rx="2" />
                  <circle cx="-10" cy="55" r="15" fill="#fbbf24" />
                  <rect x="-22" y="73" width="24" height="35" rx="3" fill="#0ea5e9" />
                </g>
                
                {/* Person standing */}
                <g transform="translate(750, 50)">
                  <circle cx="20" cy="20" r="18" fill="#1e293b" />
                  <rect x="5" y="42" width="30" height="55" rx="4" fill="#818cf8" />
                </g>
                
                {/* Decorative elements */}
                <text x="100" y="160" fill="#94a3b8" fontSize="10" opacity="0.3">+</text>
                <text x="300" y="30" fill="#94a3b8" fontSize="10" opacity="0.3">+</text>
                <text x="700" y="140" fill="#94a3b8" fontSize="10" opacity="0.3">+</text>
                <text x="800" y="50" fill="#94a3b8" fontSize="10" opacity="0.3">+</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - Students on books */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 350" className="w-80 h-auto">
                  {/* Stack of books */}
                  <g transform="translate(80, 100)">
                    {/* Book 1 - bottom */}
                    <rect x="0" y="180" width="200" height="25" fill="#64748b" rx="3" />
                    {/* Book 2 */}
                    <rect x="10" y="155" width="180" height="25" fill="#475569" rx="3" />
                    {/* Book 3 */}
                    <rect x="5" y="130" width="190" height="25" fill="#f97316" rx="3" />
                    {/* Book 4 */}
                    <rect x="15" y="105" width="170" height="25" fill="#fb923c" rx="3" />
                    {/* Book 5 */}
                    <rect x="20" y="80" width="160" height="25" fill="#64748b" rx="3" />
                    {/* Book 6 */}
                    <rect x="25" y="55" width="150" height="25" fill="#94a3b8" rx="3" />
                    {/* Book 7 - top */}
                    <rect x="30" y="30" width="140" height="25" fill="#cbd5e1" rx="3" />
                  </g>
                  
                  {/* Graduation cap on top */}
                  <g transform="translate(200, 90)">
                    <rect x="-20" y="20" width="40" height="8" fill="#1e293b" />
                    <polygon points="0,0 30,15 0,30 -30,15" fill="#1e293b" />
                    <line x1="25" y1="18" x2="35" y2="35" stroke="#fbbf24" strokeWidth="2" />
                    <circle cx="35" cy="38" r="5" fill="#fbbf24" />
                  </g>
                  
                  {/* Person 1 - sitting on books (left) */}
                  <g transform="translate(60, 140)">
                    <circle cx="30" cy="20" r="20" fill="#1e293b" />
                    <rect x="12" y="45" width="36" height="60" rx="5" fill="#f97316" />
                    {/* Laptop */}
                    <rect x="50" y="70" width="45" height="30" fill="#64748b" rx="3" />
                    <rect x="53" y="73" width="39" height="22" fill="#60a5fa" rx="2" />
                    {/* Legs */}
                    <rect x="15" y="100" width="12" height="40" fill="#1e293b" rx="2" />
                    <rect x="32" y="100" width="12" height="40" fill="#1e293b" rx="2" />
                  </g>
                  
                  {/* Person 2 - sitting on floor (right) */}
                  <g transform="translate(230, 200)">
                    <circle cx="30" cy="20" r="20" fill="#fbbf24" />
                    <rect x="12" y="45" width="36" height="50" rx="5" fill="#f97316" />
                    {/* Tablet/laptop */}
                    <rect x="55" y="50" width="35" height="45" fill="#64748b" rx="3" />
                    <rect x="58" y="53" width="29" height="38" fill="#60a5fa" rx="2" />
                    {/* Legs crossed */}
                    <ellipse cx="30" cy="100" rx="30" ry="10" fill="#1e293b" />
                  </g>
                  
                  {/* Chat bubbles */}
                  <g transform="translate(100, 135)">
                    <ellipse cx="0" cy="0" rx="15" ry="10" fill="#94a3b8" />
                    <circle cx="-2" cy="0" r="2" fill="#64748b" />
                    <circle cx="2" cy="0" r="2" fill="#64748b" />
                    <circle cx="6" cy="0" r="2" fill="#64748b" />
                  </g>
                  
                  <g transform="translate(290, 195)">
                    <ellipse cx="0" cy="0" rx="15" ry="10" fill="#94a3b8" />
                    <circle cx="-2" cy="0" r="2" fill="#64748b" />
                    <circle cx="2" cy="0" r="2" fill="#64748b" />
                    <circle cx="6" cy="0" r="2" fill="#64748b" />
                  </g>
                  
                  {/* Gears */}
                  <g transform="translate(50, 200)">
                    <circle cx="0" cy="0" r="15" fill="none" stroke="#94a3b8" strokeWidth="3" />
                    <circle cx="0" cy="0" r="5" fill="#94a3b8" />
                  </g>
                  <g transform="translate(35, 220)">
                    <circle cx="0" cy="0" r="10" fill="none" stroke="#94a3b8" strokeWidth="2" />
                    <circle cx="0" cy="0" r="3" fill="#94a3b8" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Did you know? According to a survey conducted by the Consumer Technology Association (CTA), 79% of educators believe education technology is a crucial part of classroom education at every level. It's true – the roadmap to student success is paved with circuit boards and Internet access. We live in a technological world – with "digital transformation" becoming a common strategy in nearly every industry. For students, this means looking toward and preparing for a future in which their careers involve technology in some shape or form, regardless of one's chosen path. As educators and decision-makers, it's our job to provide school districts with proper technology that is updated and secure to allow for the maximum productivity of its users whose current proficiency will someday benefit us all.
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
              {KEY_OFFERINGS.map((item) => (
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

      {/* ========== 5. Business Process Illustration ========== */}
      <section className="py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-48 sm:h-64">
            <svg viewBox="0 0 1000 200" className="w-full h-full">
              {/* Background pattern */}
              <defs>
                <pattern id="gridPatternEdu" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternEdu)" />
              
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

export default IndustriesEducation;
