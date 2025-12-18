import React from 'react';
import { Link } from 'react-router-dom';

// --- Key Offerings Data ---
const KEY_OFFERINGS = [
  {
    id: 1,
    title: 'Management of Inventory',
    position: 'left',
  },
  {
    id: 2,
    title: 'Business Intelligence',
    position: 'right',
  },
  {
    id: 3,
    title: 'Data / DMS Integration, CMS Applications',
    position: 'left',
  },
  {
    id: 4,
    title: 'Management of Distribution',
    position: 'right',
    hasDecorator: true,
  },
  {
    id: 5,
    title: 'Working towards your business',
    position: 'left',
  },
  {
    id: 6,
    title: 'Web Applications',
    position: 'right',
  },
  {
    id: 7,
    title: 'Hotel Booking Applications',
    position: 'left',
  },
  {
    id: 8,
    title: 'Re-engineering and Product Development',
    position: 'right',
  },
  {
    id: 9,
    title: 'Mobile Applications',
    position: 'left',
  },
];

// --- Bullet Points ---
const BULLET_POINTS = [
  'A global team of eCommerce consultants with years of industry experience',
  'Infallible industry knowledge regarding business, technical and product skills',
  'Support for every category of eCommerce business model (B2B, B2C etc.)',
  'Efficient solutions created for scalability and reliability',
  'Delivery model insights for informed evaluations',
  'Vital network of Partners and Supplier Engagement Solutions',
];

function IndustriesECommerce() {
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
              <li className="text-slate-900 font-medium">E-Commerce</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 italic mb-12">
            E-Commerce
          </h1>

          {/* Hero Illustration - Business scene */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <svg viewBox="0 0 900 180" className="w-full h-auto">
                {/* Business person 1 - standing */}
                <g transform="translate(120, 15)">
                  <circle cx="30" cy="28" r="24" fill="#1e293b" />
                  <rect x="10" y="56" width="40" height="85" rx="5" fill="#1e293b" />
                  {/* Arm raised */}
                  <rect x="50" y="65" width="30" height="8" rx="3" fill="#fcd34d" transform="rotate(-20, 50, 65)" />
                </g>
                
                {/* Business woman */}
                <g transform="translate(200, 20)">
                  <circle cx="28" cy="28" r="26" fill="#1e293b" />
                  <rect x="8" y="58" width="40" height="80" rx="5" fill="#ef4444" />
                </g>
                
                {/* Person in blue */}
                <g transform="translate(290, 25)">
                  <circle cx="25" cy="25" r="22" fill="#1e293b" />
                  <rect x="8" y="50" width="34" height="75" rx="5" fill="#0ea5e9" />
                </g>
                
                {/* Dashed connection arc */}
                <path d="M400 90 Q500 35, 600 90" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="8,4" />
                
                {/* Shopping cart icon */}
                <g transform="translate(460, 50)">
                  <rect x="0" y="10" width="35" height="25" fill="#60a5fa" rx="3" />
                  <circle cx="8" cy="42" r="5" fill="#1e293b" />
                  <circle cx="27" cy="42" r="5" fill="#1e293b" />
                  <path d="M-5 5 L5 5 L10 30" stroke="#64748b" strokeWidth="3" fill="none" />
                </g>
                
                {/* Person at desk */}
                <g transform="translate(560, 40)">
                  {/* Desk */}
                  <rect x="0" y="70" width="90" height="40" fill="#64748b" rx="3" />
                  {/* Monitor */}
                  <rect x="20" y="35" width="50" height="40" fill="#1e293b" rx="3" />
                  <rect x="25" y="40" width="40" height="28" fill="#60a5fa" rx="2" />
                  
                  {/* Person */}
                  <circle cx="100" cy="50" r="20" fill="#1e293b" />
                  <rect x="85" y="72" width="30" height="45" rx="4" fill="#64748b" />
                </g>
                
                {/* Group of people - right */}
                <g transform="translate(720, 30)">
                  <circle cx="25" cy="25" r="22" fill="#1e293b" />
                  <rect x="8" y="50" width="34" height="70" rx="4" fill="#1e293b" />
                  
                  <circle cx="70" cy="28" r="20" fill="#1e293b" />
                  <rect x="55" y="52" width="30" height="65" rx="4" fill="#64748b" />
                  
                  <circle cx="110" cy="25" r="22" fill="#1e293b" />
                  <rect x="93" y="50" width="34" height="70" rx="4" fill="#1e293b" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Content Section ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration - E-Commerce scene */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 400 380" className="w-80 h-auto">
                  {/* Background blob */}
                  <ellipse cx="200" cy="190" rx="170" ry="160" fill="#dbeafe" opacity="0.5" />
                  
                  {/* Ground/Platform */}
                  <rect x="50" y="300" width="300" height="20" fill="#fbbf24" rx="3" />
                  
                  {/* Desktop Monitor */}
                  <g transform="translate(100, 80)">
                    {/* Monitor body */}
                    <rect x="0" y="0" width="180" height="130" fill="#1e293b" rx="8" />
                    <rect x="8" y="8" width="164" height="100" fill="white" rx="4" />
                    {/* Stand */}
                    <rect x="70" y="130" width="40" height="20" fill="#475569" />
                    <rect x="50" y="145" width="80" height="10" fill="#64748b" rx="3" />
                    
                    {/* Screen content */}
                    {/* Rating stars */}
                    <g transform="translate(15, 15)">
                      {[0, 12, 24, 36, 48].map((x, i) => (
                        <circle key={i} cx={x + 4} cy="4" r="4" fill={i < 5 ? "#fbbf24" : "#e2e8f0"} />
                      ))}
                    </g>
                    
                    {/* SHOP text */}
                    <text x="90" y="55" textAnchor="middle" fill="#1e293b" fontSize="24" fontWeight="bold">SHOP</text>
                    
                    {/* Menu lines */}
                    <g transform="translate(140, 45)">
                      <line x1="0" y1="0" x2="20" y2="0" stroke="#64748b" strokeWidth="2" />
                      <line x1="0" y1="6" x2="20" y2="6" stroke="#64748b" strokeWidth="2" />
                      <line x1="0" y1="12" x2="20" y2="12" stroke="#64748b" strokeWidth="2" />
                    </g>
                    
                    {/* Product grid */}
                    <rect x="15" y="65" width="40" height="35" fill="#fef3c7" rx="3" />
                    <rect x="60" y="65" width="40" height="35" fill="#dbeafe" rx="3" />
                    <rect x="105" y="65" width="40" height="35" fill="#fce7f3" rx="3" />
                  </g>
                  
                  {/* Mobile phone */}
                  <g transform="translate(50, 140)">
                    <rect x="0" y="0" width="55" height="100" fill="#1e293b" rx="8" />
                    <rect x="4" y="8" width="47" height="80" fill="white" rx="4" />
                    
                    {/* Phone screen content */}
                    <rect x="8" y="15" width="39" height="8" fill="#0ea5e9" rx="2" />
                    <text x="27" y="22" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">SHOP</text>
                    
                    {/* Product thumbnails */}
                    <rect x="8" y="28" width="18" height="18" fill="#fef3c7" rx="2" />
                    <rect x="29" y="28" width="18" height="18" fill="#dbeafe" rx="2" />
                    <rect x="8" y="50" width="18" height="18" fill="#fce7f3" rx="2" />
                    <rect x="29" y="50" width="18" height="18" fill="#d1fae5" rx="2" />
                    
                    {/* Nav bar */}
                    <rect x="8" y="72" width="39" height="12" fill="#f1f5f9" rx="2" />
                  </g>
                  
                  {/* Shopping cart */}
                  <g transform="translate(30, 230)">
                    <rect x="10" y="0" width="50" height="35" fill="#60a5fa" rx="4" />
                    <rect x="5" y="35" width="60" height="8" fill="#3b82f6" rx="2" />
                    <circle cx="18" cy="50" r="7" fill="#1e293b" />
                    <circle cx="52" cy="50" r="7" fill="#1e293b" />
                    {/* Handle */}
                    <path d="M0 -5 L10 -5 L15 20" stroke="#475569" strokeWidth="4" fill="none" />
                    
                    {/* Items in cart */}
                    <rect x="15" y="5" width="15" height="20" fill="#fbbf24" rx="2" />
                    <rect x="33" y="8" width="12" height="17" fill="#f472b6" rx="2" />
                    <rect x="48" y="10" width="8" height="15" fill="#22c55e" rx="2" />
                  </g>
                  
                  {/* Person shopping */}
                  <g transform="translate(290, 180)">
                    {/* Head */}
                    <circle cx="30" cy="25" r="22" fill="#1e293b" />
                    {/* Body */}
                    <rect x="15" y="50" width="30" height="60" fill="#f97316" rx="5" />
                    {/* Legs */}
                    <rect x="15" y="108" width="12" height="45" fill="#1e293b" rx="3" />
                    <rect x="33" y="108" width="12" height="45" fill="#1e293b" rx="3" />
                    {/* Arm holding phone */}
                    <rect x="0" y="55" width="18" height="10" fill="#fcd34d" rx="3" />
                  </g>
                  
                  {/* Plants - left */}
                  <g transform="translate(20, 260)">
                    <ellipse cx="20" cy="30" rx="22" ry="25" fill="#22c55e" />
                    <ellipse cx="35" cy="25" rx="18" ry="20" fill="#16a34a" />
                  </g>
                  
                  {/* Plants - right */}
                  <g transform="translate(320, 250)">
                    <ellipse cx="20" cy="35" rx="25" ry="30" fill="#16a34a" />
                    <ellipse cx="40" cy="30" rx="20" ry="25" fill="#22c55e" />
                  </g>
                  
                  {/* Decorative elements */}
                  <g transform="translate(280, 80)">
                    <rect x="0" y="0" width="25" height="30" fill="#fbbf24" rx="3" />
                    <rect x="30" y="10" width="20" height="25" fill="#f472b6" rx="3" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Companies seeking profitable revenue models have enjoyed the monetary boon provided by clear and concise eCommerce strategies, presenting immense growth potential for brands and products. eCommerce is born of the age of convenience. Customers expect hassle free shopping paired with reliable and affordable services, utilizing proper design to appeal to the consumer. Our personalized solutions incorporate market trends and identify avenues to unlocking optimal growth potential. Years of industry knowledge is harnessed to provide unique an impactful creative solution with tangible results. Modern consumers operate based on perceived understanding, requiring more information and placing value in known product origins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Extended Content Section ========== */}
      <section className="py-12 sm:py-16 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-20 w-12 h-12 rounded-full border-2 border-cyan-200 opacity-40" />
        <div className="absolute top-1/3 right-16 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              The modern consumer is informed, which is why we utilize meaningful consumer engagement to build a reputation of reliability for sustainable growth. Aesthetic informs potential customers of the products value. A clean and concise presentation can aid in fostering customer interest and engagement! Scalable solutions allow smaller operations to bolster their presence, offering similar services on par with much larger providers. eCommerce provides an ideal platform to further cement a company grasp on the desired category. Maximize customer mindshare with our extensive offering of services.
            </p>
            
            {/* Bullet Points */}
            <ul className="space-y-3">
              {BULLET_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-slate-900 flex-shrink-0" />
                  <span className="text-slate-700 text-base sm:text-lg">{point}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              eCommerce plays a pivotal role in the success of a company. Operate an efficient model primed for growth with our personalized solutions, designed specifically to achieve your goals while meeting the necessary constraints and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ========== 4. Key Offerings Timeline ========== */}
      <section className="py-16 sm:py-24 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute bottom-1/3 right-24 w-16 h-16 rounded-full border-2 border-sky-200 opacity-50" />
        <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-emerald-500 rounded-full" />
        
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
                        
                        {/* Decorative elements for specific items */}
                        {item.hasDecorator && (
                          <>
                            <div className="absolute -top-6 right-12 w-8 h-8 rounded-full border-2 border-cyan-300 flex items-center justify-center">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                            </div>
                          </>
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

      {/* ========== 5. CTA Section ========== */}
      <section className="py-20 sm:py-28 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-emerald-500 rounded-full" />
        
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
                <pattern id="gridPatternEC" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternEC)" />
              
              {/* Connection lines */}
              <path d="M50 100 L150 100 L250 60 L350 100 L450 50 L550 100 L650 80 L750 100 L850 70 L950 100" 
                    stroke="white" strokeWidth="2" fill="none" strokeDasharray="6,4" opacity="0.5" />
              
              {/* Connection nodes */}
              {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950].map((x, i) => (
                <circle key={i} cx={x} cy={i % 2 === 0 ? 100 : (i % 3 === 0 ? 60 : 80)} r="6" fill="white" />
              ))}
              
              {/* Shopping cart icon */}
              <g transform="translate(30, 115)">
                <rect x="10" y="10" width="35" height="25" fill="#fbbf24" rx="3" />
                <circle cx="18" cy="42" r="5" fill="white" />
                <circle cx="37" cy="42" r="5" fill="white" />
                <path d="M0 5 L10 5 L15 30" stroke="white" strokeWidth="3" fill="none" />
              </g>
              
              {/* Business scenes */}
              <g transform="translate(100, 90)">
                <rect x="0" y="10" width="50" height="35" fill="#f1f5f9" rx="3" />
                <circle cx="80" cy="30" r="12" fill="#1e293b" />
                <rect x="68" y="43" width="24" height="40" rx="3" fill="#f97316" />
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

export default IndustriesECommerce;
