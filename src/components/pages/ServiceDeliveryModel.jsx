import React from 'react';
import { Link } from 'react-router-dom';

// --- Process Steps Data ---
const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Analyzing',
    description: "Our team works relentlessly to understand customer's prerequisites, needs, and requests. We center around the problems that you have been facing and conduct a proper research to discover the core needs that enable our customer to exceed expectations in their business. We use our skills to have an immediate understanding and take our time to collect all the requirements. Our team also creates a feasibility study so that we can understand the extent of work that is required. Project documentation and guide is created to make things clear at the start of the project.",
  },
  {
    id: 2,
    title: 'Design',
    description: 'Service Delivery Approach is intended for and nitty gritty documentation is done at the underlying phase of the task improvement which is then approved by the customer. We set a timeline and allocate all the resources. A prototype is created to make the specialized and functional team to comprehend the significance of service delivery and the complexities of work.',
  },
  {
    id: 3,
    title: 'Develop',
    description: 'After the designing phase, we assign a devoted team coupled with premium resources so that all the steps are clear and the project is performed in the best way possible. Innovation and Infrastructure is worked upon to characterize the best results from our team.',
  },
  {
    id: 4,
    title: 'Test and Deploy',
    description: 'The total testing and task arrangement with training and manual is created for better and best use of the work. Complete work is made live and the course of time is characterized to solve any sort of glitches and issues.',
  },
  {
    id: 5,
    title: 'Maintain',
    description: 'Persistent monitoring of project and problems are followed after the project is finished.',
  },
];

function ServiceDeliveryModel() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-16 left-20 w-16 h-16 border border-cyan-300 rounded-full opacity-50" />
        <div className="absolute top-32 right-32 w-12 h-12 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-emerald-500 rounded-full opacity-70" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              </li>
              <li className="text-slate-400">•</li>
              <li className="text-slate-900 font-medium">Service Delivery Model</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-wide mb-12">
            SERVICE DELIVERY MODEL
          </h1>

          {/* Hero Illustration - Team working together */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 280" className="w-full h-auto">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f7fa" />
                    <stop offset="100%" stopColor="#b2ebf2" />
                  </linearGradient>
                </defs>
                <rect x="0" y="180" width="900" height="100" fill="url(#heroGradient)" rx="10" opacity="0.5" />
                
                {/* Office/warehouse elements */}
                <rect x="650" y="80" width="120" height="150" fill="#64748b" rx="5" />
                <rect x="660" y="90" width="30" height="40" fill="#94a3b8" rx="3" />
                <rect x="700" y="90" width="30" height="40" fill="#94a3b8" rx="3" />
                <rect x="740" y="90" width="20" height="130" fill="#475569" rx="2" />
                
                {/* Boxes */}
                <rect x="780" y="180" width="40" height="30" fill="#fde047" rx="3" />
                <rect x="830" y="170" width="45" height="40" fill="#fde047" rx="3" />
                <rect x="810" y="140" width="35" height="30" fill="#fde047" rx="3" />
                
                {/* Person 1 - pointing up */}
                <circle cx="100" cy="120" r="25" fill="#fcd34d" />
                <rect x="75" y="150" width="50" height="80" rx="8" fill="#1e293b" />
                <line x1="125" y1="160" x2="145" y2="100" stroke="#fcd34d" strokeWidth="8" strokeLinecap="round" />
                
                {/* Person 2 - holding clipboard */}
                <circle cx="200" cy="130" r="22" fill="#f97316" />
                <rect x="178" y="156" width="44" height="74" rx="6" fill="#22c55e" />
                <rect x="220" y="145" width="25" height="35" fill="#f1f5f9" rx="3" />
                
                {/* Person 3 - carrying box */}
                <circle cx="310" cy="125" r="24" fill="#1e293b" />
                <rect x="286" y="152" width="48" height="78" rx="7" fill="#f43f5e" />
                <rect x="295" y="130" width="30" height="25" fill="#fde047" rx="3" />
                
                {/* Person 4 - standing */}
                <circle cx="420" cy="128" r="23" fill="#ec4899" />
                <rect x="398" y="154" width="44" height="76" rx="6" fill="#0ea5e9" />
                
                {/* Person 5 - with laptop/tablet */}
                <circle cx="530" cy="135" r="22" fill="#8b5cf6" />
                <rect x="508" y="160" width="44" height="70" rx="6" fill="#1e293b" />
                <rect x="545" y="165" width="20" height="15" fill="#60a5fa" rx="2" />
                
                {/* Person 6 - standing with papers */}
                <circle cx="820" cy="125" r="24" fill="#f97316" />
                <rect x="796" y="152" width="48" height="78" rx="7" fill="#f97316" />
                <rect x="770" y="155" width="20" height="30" fill="#f1f5f9" rx="2" />

                {/* Thought bubbles */}
                <circle cx="520" cy="60" r="20" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <circle cx="540" cy="80" r="8" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <circle cx="545" cy="95" r="5" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                
                {/* Charts/graphs in thought bubble */}
                <rect x="508" y="50" width="8" height="15" fill="#22c55e" rx="1" />
                <rect x="518" y="45" width="8" height="20" fill="#0ea5e9" rx="1" />
                <rect x="528" y="55" width="8" height="10" fill="#f97316" rx="1" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Introduction Section ========== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 250 250" className="w-72 h-72">
                    {/* Gears */}
                    <circle cx="50" cy="80" r="25" fill="none" stroke="#94a3b8" strokeWidth="8" strokeDasharray="15,8" />
                    <circle cx="50" cy="80" r="10" fill="#94a3b8" />
                    
                    <circle cx="85" cy="120" r="20" fill="none" stroke="#cbd5e1" strokeWidth="6" strokeDasharray="12,6" />
                    <circle cx="85" cy="120" r="8" fill="#cbd5e1" />
                    
                    {/* Dashboard/screen */}
                    <rect x="100" y="40" width="120" height="90" rx="8" fill="#1e293b" />
                    <rect x="110" y="50" width="45" height="30" fill="#0ea5e9" rx="3" />
                    <rect x="160" y="50" width="50" height="12" fill="#64748b" rx="2" />
                    <rect x="160" y="68" width="40" height="12" fill="#64748b" rx="2" />
                    <rect x="110" y="90" width="100" height="30" fill="#22c55e" rx="3" />
                    <text x="160" y="110" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">DASHBOARD</text>
                    
                    {/* Team members around table */}
                    <ellipse cx="125" cy="200" rx="80" ry="25" fill="#e2e8f0" />
                    
                    {/* Person 1 */}
                    <circle cx="60" cy="175" r="15" fill="#1e293b" />
                    <rect x="50" y="192" width="20" height="25" rx="4" fill="#f97316" />
                    
                    {/* Person 2 */}
                    <circle cx="100" cy="170" r="15" fill="#1e293b" />
                    <rect x="90" y="187" width="20" height="28" rx="4" fill="#0ea5e9" />
                    
                    {/* Person 3 - raised hand */}
                    <circle cx="140" cy="168" r="15" fill="#1e293b" />
                    <rect x="130" y="185" width="20" height="30" rx="4" fill="#f97316" />
                    <line x1="155" y1="185" x2="165" y2="160" stroke="#fcd34d" strokeWidth="6" strokeLinecap="round" />
                    
                    {/* Person 4 */}
                    <circle cx="185" cy="175" r="15" fill="#1e293b" />
                    <rect x="175" y="192" width="20" height="25" rx="4" fill="#f97316" />
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
            <div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                A demonstrated and effective methodology to utilize the most advanced technologies in the market to bring financially savvy answers to your problems while executing the inventive supply chain structures! Let Us Connect. Beginning your undertaking with us is a straightforward and easy procedure. Our objective through the whole service delivery process is to be totally straightforward, avoid unnecessary mistakes, keep you in the loop, and in particular, perform the services that we discuss with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Process Steps Section ========== */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Decorative circle on some items */}
              {index === 1 && (
                <div className="absolute -right-8 top-20 w-12 h-12 border border-cyan-300 rounded-full opacity-40 hidden lg:block" />
              )}
              {index === 2 && (
                <div className="absolute right-0 top-8 w-3 h-3 bg-emerald-500 rounded-full opacity-70 hidden lg:block" />
              )}
              
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 4. CTA Section - Want to Get Started ========== */}
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

          {/* CTA Button with decorative element */}
          <div className="relative inline-block">
            {/* Green decorative shape */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-400 rounded-full opacity-80 -z-10" />
            
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center w-40 h-40 rounded-full border-2 border-slate-200 bg-white hover:border-cyan-500 transition-all duration-300 relative overflow-hidden shadow-lg"
            >
              {/* Small decorative circle */}
              <div className="absolute -top-1 left-6 w-8 h-8 border border-cyan-400 rounded-full opacity-60" />
              
              <span className="text-slate-900 font-medium group-hover:text-cyan-600 transition-colors flex items-center gap-2">
                Let's Talk Us
                <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </Link>
          </div>
          
          {/* Small decorative dot */}
          <div className="mt-8 flex justify-center">
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* ========== 5. Business Process Illustration ========== */}
      <section className="py-8 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 sm:h-80">
            <svg viewBox="0 0 1000 300" className="w-full h-full">
              {/* Background pattern */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Connection lines */}
              <path d="M100 150 L200 150 L300 100 L400 150 L500 80 L600 150 L700 120 L800 150 L900 100" 
                    stroke="white" strokeWidth="3" fill="none" strokeDasharray="8,4" opacity="0.6" />
              
              {/* Connection nodes */}
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x, i) => (
                <circle key={i} cx={x} cy={i % 2 === 0 ? 150 : (i % 3 === 0 ? 100 : 120)} r="8" fill="white" />
              ))}
              
              {/* Business people silhouettes */}
              {/* Group 1 - Interview */}
              <g transform="translate(80, 160)">
                <rect x="0" y="20" width="60" height="40" fill="#0f172a" rx="3" />
                <circle cx="90" cy="20" r="15" fill="#1e293b" />
                <rect x="75" y="38" width="30" height="50" rx="4" fill="#1e293b" />
                <circle cx="130" cy="25" r="15" fill="#1e293b" />
                <rect x="115" y="43" width="30" height="45" rx="4" fill="#0284c7" />
              </g>
              
              {/* Group 2 - Team meeting */}
              <g transform="translate(280, 150)">
                <circle cx="0" cy="30" r="14" fill="#1e293b" />
                <rect x="-12" y="46" width="24" height="42" rx="4" fill="#1e293b" />
                <circle cx="40" cy="25" r="14" fill="#1e293b" />
                <rect x="28" y="41" width="24" height="47" rx="4" fill="#0284c7" />
                <circle cx="80" cy="30" r="14" fill="#1e293b" />
                <rect x="68" y="46" width="24" height="42" rx="4" fill="#1e293b" />
              </g>
              
              {/* Group 3 - Presentation */}
              <g transform="translate(500, 140)">
                <rect x="0" y="10" width="80" height="60" fill="#0f172a" rx="5" />
                <circle cx="40" cy="40" r="15" fill="#fbbf24" />
                <circle cx="120" cy="35" r="15" fill="#1e293b" />
                <rect x="105" y="52" width="30" height="45" rx="4" fill="#1e293b" />
              </g>
              
              {/* Group 4 - Discussion */}
              <g transform="translate(720, 145)">
                <circle cx="0" cy="35" r="15" fill="#1e293b" />
                <rect x="-12" y="52" width="24" height="45" rx="4" fill="#1e293b" />
                <circle cx="50" cy="30" r="15" fill="#1e293b" />
                <rect x="38" y="47" width="24" height="50" rx="4" fill="#0284c7" />
                <circle cx="100" cy="35" r="15" fill="#1e293b" />
                <rect x="88" y="52" width="24" height="45" rx="4" fill="#1e293b" />
              </g>
              
              {/* Labels */}
              <text x="150" y="250" fill="white" fontSize="12" fontWeight="bold" opacity="0.8">REFERRAL RECRUITER</text>
              <text x="400" y="260" fill="white" fontSize="12" fontWeight="bold" opacity="0.8">TESTING</text>
              <text x="700" y="250" fill="white" fontSize="12" fontWeight="bold" opacity="0.8">INTERVIEW</text>
              <text x="850" y="260" fill="white" fontSize="12" fontWeight="bold" opacity="0.8">SELECTION</text>
              
              {/* Dollar sign icon */}
              <circle cx="60" cy="200" r="20" fill="#22c55e" />
              <text x="60" y="208" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">$</text>
              
              {/* Globe icon */}
              <circle cx="900" cy="80" r="25" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
              <ellipse cx="900" cy="80" rx="25" ry="10" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="900" y1="55" x2="900" y2="105" stroke="white" strokeWidth="1" opacity="0.4" />
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

export default ServiceDeliveryModel;
