import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Outsourcing with Talent',
    description: 'From call centers to distribution functions to The support desks, and everywhere in between, we offer talent-driven outsourcing of operations, activities, and services to achieve the productivity you need.',
    position: 'left',
  },
  {
    id: 2,
    title: 'Consulting that is both innovative and effective',
    description: 'Provide high-quality applicants to our customers across North America, ranging from start-ups to Fortune 500 companies. Mobility, Cloud, Big Data, Front End, ERP, and CRM experts.',
    position: 'right',
  },
  {
    id: 3,
    title: 'Talent and expertise in a variety of innovative technologies',
    description: 'Our IoT, ERP, Big Data, Cloud Solutions, Cyber Security, Design Solutions, Mobility Solutions, BI, and Middleware Technologies capabilities and skills include a diverse capability range of technologies.',
    position: 'left',
  },
  {
    id: 4,
    title: 'Outsourcing Recruitment and Staffing',
    description: 'Recruiting top talent with modular, versatile, and cost-effective recruiting solutions. For our companies, this includes a wide variety of administrative and professional positions.',
    position: 'right',
  },
  {
    id: 5,
    title: 'Global talent Solutions',
    description: 'Global talent Solutions mobilizes in-demand talent and experts from skill-rich areas and distributes them to countries where there is a lack of talent. Our unrivaled corporate network and local recruitment experience provide you with a global talent pool.',
    position: 'left',
  },
  {
    id: 6,
    title: 'A three-stage campaign strategy',
    description: 'To build the appropriate talent pool, we use a strategic marketing strategy of segmenting, targeting, and positioning, while working closely with you.',
    position: 'right',
  },
];

function SolutionsStrategicStaffing() {
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
              <li className="text-slate-900 font-medium">Strategic-Staffing</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            Strategic-Staffing
          </h1>

          {/* Hero Illustration - Office workspace */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 200" className="w-full h-auto">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="heroGradStaffing" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f7fa" />
                    <stop offset="100%" stopColor="#b2ebf2" />
                  </linearGradient>
                </defs>
                
                {/* Floor/desk area */}
                <rect x="100" y="160" width="700" height="10" fill="#22c55e" rx="2" />
                
                {/* Office elements */}
                {/* Laptop */}
                <g transform="translate(150, 80)">
                  <rect x="0" y="60" width="80" height="50" fill="#1e293b" rx="5" />
                  <rect x="5" y="65" width="70" height="35" fill="#60a5fa" rx="3" />
                  <rect x="10" y="110" width="60" height="8" fill="#64748b" rx="2" />
                </g>
                
                {/* Chair 1 */}
                <g transform="translate(280, 90)">
                  <rect x="10" y="50" width="30" height="40" fill="#0ea5e9" rx="3" />
                  <rect x="15" y="35" width="20" height="20" fill="#0ea5e9" rx="2" />
                </g>
                
                {/* Star decoration */}
                <polygon points="400,40 405,55 420,55 408,65 413,80 400,70 387,80 392,65 380,55 395,55" fill="#fbbf24" />
                
                {/* Chart/presentation */}
                <g transform="translate(450, 30)">
                  <rect x="0" y="0" width="100" height="100" fill="#f1f5f9" rx="5" stroke="#e2e8f0" strokeWidth="2" />
                  <rect x="15" y="50" width="15" height="35" fill="#22c55e" rx="2" />
                  <rect x="35" y="35" width="15" height="50" fill="#fbbf24" rx="2" />
                  <rect x="55" y="20" width="15" height="65" fill="#f97316" rx="2" />
                  <rect x="75" y="45" width="15" height="40" fill="#0ea5e9" rx="2" />
                </g>
                
                {/* Lamp */}
                <g transform="translate(600, 20)">
                  <rect x="25" y="80" width="10" height="60" fill="#64748b" />
                  <polygon points="10,80 50,80 40,50 20,50" fill="#fbbf24" />
                  <circle cx="30" cy="65" r="8" fill="#fef3c7" />
                </g>
                
                {/* Gears */}
                <circle cx="720" cy="80" r="25" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="10,5" />
                <circle cx="720" cy="80" r="10" fill="#cbd5e1" />
                <circle cx="755" cy="110" r="18" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8,4" />
                <circle cx="755" cy="110" r="7" fill="#cbd5e1" />
                
                {/* Coins */}
                <circle cx="800" cy="140" r="15" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
                <text x="800" y="145" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">$</text>
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
            {/* Illustration - Team meeting */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 350" className="w-80 h-auto">
                  {/* Background shape */}
                  <ellipse cx="200" cy="300" rx="150" ry="30" fill="#e0f7fa" />
                  
                  {/* Meeting table */}
                  <ellipse cx="200" cy="220" rx="120" ry="40" fill="#0ea5e9" />
                  <rect x="80" y="220" width="240" height="60" fill="#0ea5e9" />
                  <ellipse cx="200" cy="280" rx="120" ry="40" fill="#0284c7" />
                  
                  {/* Person 1 - Woman left */}
                  <g transform="translate(50, 120)">
                    <circle cx="40" cy="30" r="25" fill="#1e293b" />
                    <rect x="20" y="60" width="40" height="70" rx="6" fill="#f472b6" />
                    <rect x="60" y="80" width="30" height="10" fill="#fcd34d" rx="2" />
                  </g>
                  
                  {/* Person 2 - Man center-left */}
                  <g transform="translate(130, 100)">
                    <circle cx="35" cy="30" r="25" fill="#1e293b" />
                    <rect x="15" y="60" width="40" height="75" rx="6" fill="#22c55e" />
                  </g>
                  
                  {/* Person 3 - Woman center */}
                  <g transform="translate(200, 90)">
                    <circle cx="35" cy="30" r="25" fill="#1e293b" />
                    <rect x="15" y="60" width="40" height="80" rx="6" fill="#0ea5e9" />
                    <rect x="55" y="75" width="35" height="25" fill="#64748b" rx="3" />
                    <rect x="58" y="78" width="29" height="16" fill="#60a5fa" rx="2" />
                  </g>
                  
                  {/* Person 4 - Man right */}
                  <g transform="translate(280, 110)">
                    <circle cx="35" cy="30" r="25" fill="#fbbf24" />
                    <rect x="15" y="60" width="40" height="70" rx="6" fill="#1e293b" />
                  </g>
                  
                  {/* Clock on wall */}
                  <circle cx="320" cy="50" r="25" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                  <circle cx="320" cy="50" r="3" fill="#1e293b" />
                  <line x1="320" y1="50" x2="320" y2="35" stroke="#1e293b" strokeWidth="2" />
                  <line x1="320" y1="50" x2="330" y2="55" stroke="#1e293b" strokeWidth="2" />
                  
                  {/* Decorative elements */}
                  <circle cx="70" cy="60" r="4" fill="#22c55e" />
                  <circle cx="350" cy="150" r="3" fill="#f472b6" />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Staffing was, yet never will again be, a terrace work that raises its head on more than one occasion per year. It is dynamic, requesting and frequently perturbing in this savage race for ability – the new and non-sustainable serious fuel source in the business today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Additional Content Section ========== */}
      <section className="py-8 sm:py-12 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-20 w-10 h-10 border border-cyan-300 rounded-full opacity-40" />
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            MetrixIT Solutions Midas touch to the frontiers of staffing and talent is exemplified by its dedicated approach and established Centres of Excellence (CoEs). By connecting the right arrows to the bow of industry, we turn hiring into a strong strategic lever. The Strategic Staffing model is outwardly depicted with each progression portrayed in the story. Momentarily, the future staffing prerequisites (the interest) are dictated by Virtual and operational arranging endeavors (issue ID). At the same time, the model takes current staff information and gauges what the future staffing needs (the inventory) will be.
          </p>
          
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            These two snippets of data (the stockpile and the interest) are differentiated to figure out what the hole or excess will be. From this examination, staffing plans are made and carried out. At long last, the outcomes are estimated for proficiency and adequacy. 2 Strategic Staffing Guidebook The legitimate arrangement of member jobs and duties is important to the model's achievement. A common obligation between line directors, administrators, and HR experts is significant in distinguishing the basic human asset issues in key and operational plans. Moreover, line administrators should lead the turn of events and execution of staffing plans while human asset staff gives counseling and specialized help to information assortment, examination, estimation, and staffing exercises. The adequacy and productivity of the Strategic Staffing model can't remain solitary; it should be incorporated with other human asset measures. Additionally introduced is a model that joins Strategic Staffing with the choice and arrangement measures.
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
                        {index === 2 && (
                          <div className="absolute top-4 left-4 w-8 h-8 border border-cyan-200 rounded-full opacity-40" />
                        )}
                        {index === 3 && (
                          <div className="absolute bottom-4 right-4 w-8 h-8 border border-cyan-200 rounded-full opacity-40 flex items-center justify-center">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          </div>
                        )}
                        {index === 5 && (
                          <div className="absolute bottom-4 right-4 w-8 h-8 border border-cyan-200 rounded-full opacity-40 flex items-center justify-center">
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
      <section className="py-20 sm:py-28 bg-white">
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

export default SolutionsStrategicStaffing;
