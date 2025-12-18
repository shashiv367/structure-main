import React from 'react';
import { Link } from 'react-router-dom';

function OurSkills() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-cyan-50/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-1/3 w-12 h-12 border border-cyan-300 rounded-full opacity-50 flex items-center justify-center">
          <div className="w-3 h-3 bg-emerald-500 rounded-full" />
        </div>
        <div className="absolute top-32 right-1/4 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              </li>
              <li className="text-slate-400">•</li>
              <li className="text-slate-900 font-medium">Our Skills</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-wide mb-12">
            OUR SKILLS
          </h1>

          {/* Hero Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <svg viewBox="0 0 800 250" className="w-full h-auto">
                {/* Background circle/globe */}
                <circle cx="400" cy="125" r="110" fill="#dbeafe" opacity="0.5" />
                <circle cx="400" cy="125" r="90" fill="none" stroke="#93c5fd" strokeWidth="1" strokeDasharray="8,4" />
                
                {/* Network lines */}
                <path d="M300 80 Q350 60 400 80 Q450 100 500 80" stroke="#93c5fd" strokeWidth="1" fill="none" strokeDasharray="4,2" />
                <path d="M320 150 Q380 180 440 150 Q500 120 560 150" stroke="#93c5fd" strokeWidth="1" fill="none" strokeDasharray="4,2" />
                
                {/* Connection nodes */}
                <circle cx="320" cy="60" r="8" fill="#60a5fa" opacity="0.6" />
                <circle cx="480" cy="70" r="6" fill="#60a5fa" opacity="0.6" />
                <circle cx="350" cy="180" r="7" fill="#60a5fa" opacity="0.6" />
                <circle cx="450" cy="175" r="5" fill="#60a5fa" opacity="0.6" />
                
                {/* Person 1 - left side with tablet */}
                <g transform="translate(180, 80)">
                  <circle cx="30" cy="30" r="25" fill="#fbbf24" />
                  <rect x="10" y="60" width="40" height="80" rx="6" fill="#f97316" />
                  <rect x="55" y="75" width="30" height="40" fill="#f1f5f9" rx="4" stroke="#e2e8f0" strokeWidth="2" />
                  <circle cx="70" cy="85" r="8" fill="#60a5fa" />
                  <rect x="62" y="100" width="16" height="8" fill="#94a3b8" rx="2" />
                </g>
                
                {/* Person 2 - center with icons */}
                <g transform="translate(350, 60)">
                  <circle cx="50" cy="35" r="28" fill="#1e293b" />
                  <rect x="28" y="68" width="44" height="90" rx="6" fill="#1e293b" />
                  
                  {/* Chat/connection icons around */}
                  <circle cx="0" cy="20" r="15" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                  <circle cx="5" cy="18" r="4" fill="#f472b6" />
                  <circle cx="100" cy="30" r="15" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                  <circle cx="95" cy="28" r="4" fill="#22c55e" />
                  <circle cx="10" cy="80" r="12" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                  <rect x="5" y="77" width="10" height="6" fill="#60a5fa" rx="1" />
                  <circle cx="90" cy="90" r="12" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                  <circle cx="88" cy="88" r="4" fill="#f97316" />
                </g>
                
                {/* Person 3 - right side with whiteboard */}
                <g transform="translate(550, 70)">
                  <rect x="0" y="0" width="80" height="60" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="4" />
                  <rect x="10" y="10" width="25" height="15" fill="#22c55e" rx="2" />
                  <rect x="40" y="10" width="30" height="8" fill="#94a3b8" rx="1" />
                  <rect x="40" y="22" width="25" height="8" fill="#94a3b8" rx="1" />
                  <rect x="10" y="35" width="60" height="15" fill="#f97316" rx="2" />
                  
                  <circle cx="120" cy="50" r="25" fill="#1e293b" />
                  <rect x="100" y="80" width="40" height="75" rx="6" fill="#22c55e" />
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
            {/* Illustration - Developer at computer */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full max-w-md bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-[2.5rem] p-8 overflow-hidden">
                  <svg viewBox="0 0 300 320" className="w-full h-auto">
                    {/* Code tags floating */}
                    <g transform="translate(30, 20)">
                      <rect x="0" y="0" width="45" height="25" fill="#1e293b" rx="4" />
                      <text x="22" y="17" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">CSS</text>
                    </g>
                    
                    <g transform="translate(100, 40)">
                      <rect x="0" y="0" width="45" height="28" fill="#22c55e" rx="4" />
                      <text x="22" y="18" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">&lt;/&gt;</text>
                    </g>
                    
                    <g transform="translate(20, 80)">
                      <rect x="0" y="0" width="55" height="28" fill="#1e293b" rx="4" />
                      <text x="27" y="18" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">HTML</text>
                    </g>
                    
                    <g transform="translate(40, 140)">
                      <rect x="0" y="0" width="45" height="25" fill="#1e293b" rx="4" />
                      <text x="22" y="17" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">C++</text>
                    </g>
                    
                    {/* Desk */}
                    <rect x="80" y="260" width="180" height="12" fill="#1e293b" rx="2" />
                    <rect x="100" y="272" width="8" height="35" fill="#1e293b" />
                    <rect x="230" y="272" width="8" height="35" fill="#1e293b" />
                    
                    {/* Monitor */}
                    <rect x="110" y="180" width="130" height="80" fill="#1e293b" rx="6" />
                    <rect x="118" y="188" width="114" height="60" fill="#0f172a" rx="3" />
                    
                    {/* Code on screen */}
                    <rect x="125" y="195" width="40" height="4" fill="#22c55e" rx="1" />
                    <rect x="125" y="203" width="60" height="4" fill="#60a5fa" rx="1" />
                    <rect x="130" y="211" width="50" height="4" fill="#f472b6" rx="1" />
                    <rect x="130" y="219" width="35" height="4" fill="#fbbf24" rx="1" />
                    <rect x="125" y="227" width="55" height="4" fill="#22c55e" rx="1" />
                    <rect x="125" y="235" width="45" height="4" fill="#60a5fa" rx="1" />
                    
                    {/* Monitor stand */}
                    <rect x="165" y="260" width="20" height="8" fill="#64748b" />
                    
                    {/* Chair */}
                    <ellipse cx="200" cy="300" rx="35" ry="12" fill="#0ea5e9" />
                    <rect x="225" y="250" width="12" height="55" fill="#0ea5e9" rx="3" />
                    <rect x="220" y="240" width="22" height="15" fill="#0ea5e9" rx="3" />
                    
                    {/* Person sitting */}
                    <circle cx="195" cy="195" r="25" fill="#1e293b" />
                    <rect x="175" y="225" width="40" height="50" rx="6" fill="#0ea5e9" />
                    
                    {/* Arms on keyboard */}
                    <rect x="140" y="245" width="50" height="10" fill="#fcd34d" rx="3" />
                    
                    {/* Keyboard */}
                    <rect x="135" y="255" width="60" height="8" fill="#64748b" rx="2" />
                    
                    {/* Plant */}
                    <g transform="translate(250, 220)">
                      <rect x="10" y="30" width="20" height="25" fill="#94a3b8" rx="3" />
                      <ellipse cx="20" cy="25" rx="18" ry="15" fill="#22c55e" />
                      <ellipse cx="12" cy="18" rx="10" ry="12" fill="#16a34a" />
                      <ellipse cx="28" cy="20" rx="8" ry="10" fill="#16a34a" />
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
                Skills are something you learn through experience, and that you can apply to things you do. You might pick them up at, during activities, they're important in all areas of life, can be super varied and are used in lots of different situations. You could be working on your problem solving skills in math, developing your organization skills while packing for a trip or sharpening your communication skills trying to explain what a meme is. When you're applying to university, college, an apprenticeship or for a job, the person looking at your application will want to know what your skills are – and how you use them. It's not hard to figure out what your skills are – and it'll give you a real confidence boost to do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Additional Content Section ========== */}
      <section className="py-8 sm:py-12 bg-white relative">
        {/* Decorative element */}
        <div className="absolute bottom-20 right-1/4 w-10 h-10 border border-cyan-300 rounded-full opacity-40 flex items-center justify-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
        </div>
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            First, think about all the places you could have been picking up skills – school, leisure, after school activities, clubs, jobs, volunteering, work experience and more. Next, think about the tasks you completed there, and what they helped you learn. Our list of skills above are probably ones you've already heard of. But there are some you might not know about yet, like meta-skills. A meta-skill is sort of like a master skill – it's something that helps you in lots of different environments, and can be much broader than the other skills we've mentioned. A meta-skill could be knowing how to priorities, improvising when things aren't going to plan, or being able to hook others in by telling a fascinating story. MetrixIT Solutions -skills are something you can always develop. And doing so will impress the person reading your application.
          </p>
        </div>
      </section>

      {/* ========== 4. CTA Section ========== */}
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

export default OurSkills;
