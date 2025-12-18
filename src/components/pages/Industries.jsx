import React from 'react';
import { Link } from 'react-router-dom';

// --- Industries Data ---
const INDUSTRIES = [
  {
    id: 1,
    title: 'Oil & Gas',
    to: '/industries/oil-gas',
    bgColor: 'bg-blue-100',
    illustration: 'oilgas',
  },
  {
    id: 2,
    title: 'Travel & Hospitality',
    to: '/industries/travel-hospitality',
    bgColor: 'bg-slate-200',
    illustration: 'travel',
  },
  {
    id: 3,
    title: 'E-Commerce',
    to: '/industries/e-commerce',
    bgColor: 'bg-sky-100',
    illustration: 'ecommerce',
  },
  {
    id: 4,
    title: 'Banking & Financial',
    to: '/industries/banking-financial',
    bgColor: 'bg-indigo-100',
    illustration: 'banking',
  },
  {
    id: 5,
    title: 'Education',
    to: '/industries/education',
    bgColor: 'bg-blue-100',
    illustration: 'education',
  },
  {
    id: 6,
    title: 'Energy & Utility',
    to: '/industries/energy-utility',
    bgColor: 'bg-indigo-100',
    illustration: 'energy',
  },
  {
    id: 7,
    title: 'Government',
    to: '/industries/government',
    bgColor: 'bg-cyan-100',
    illustration: 'government',
  },
  {
    id: 8,
    title: 'Healthcare & Life Science',
    to: '/industries/healthcare-life-science',
    bgColor: 'bg-indigo-100',
    illustration: 'healthcare',
  },
  {
    id: 9,
    title: 'Insurance',
    to: '/industries/insurance',
    bgColor: 'bg-indigo-100',
    illustration: 'insurance',
  },
  {
    id: 10,
    title: 'Logistics & Warehousing',
    to: '/industries/logistics-warehousing',
    bgColor: 'bg-indigo-100',
    illustration: 'logistics',
  },
  {
    id: 11,
    title: 'Retail & Consumer Goods',
    to: '/industries/retail-consumer-goods',
    bgColor: 'bg-gray-100',
    illustration: 'retail',
  },
  {
    id: 12,
    title: 'Telecom & Media',
    to: '/industries/telecom-media',
    bgColor: 'bg-indigo-100',
    illustration: 'telecom',
  },
];

// Industry Illustrations Component
const IndustryIllustration = ({ type }) => {
  switch (type) {
    case 'oilgas':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* Pipes */}
          <rect x="20" y="40" width="160" height="8" fill="#60a5fa" rx="2" />
          <rect x="20" y="80" width="160" height="8" fill="#60a5fa" rx="2" />
          <rect x="40" y="40" width="8" height="80" fill="#60a5fa" />
          <rect x="100" y="20" width="8" height="100" fill="#60a5fa" />
          <rect x="150" y="40" width="8" height="60" fill="#60a5fa" />
          
          {/* Valve */}
          <circle cx="44" cy="60" r="15" fill="#ef4444" />
          <rect x="38" y="45" width="12" height="6" fill="#dc2626" />
          
          {/* Control panel */}
          <rect x="70" y="100" width="30" height="40" fill="#64748b" rx="3" />
          <rect x="75" y="105" width="20" height="15" fill="#60a5fa" rx="2" />
          
          {/* Workers */}
          <g transform="translate(30, 100)">
            <circle cx="10" cy="10" r="8" fill="#fbbf24" />
            <rect x="4" y="20" width="12" height="30" rx="2" fill="#f97316" />
          </g>
          <g transform="translate(120, 95)">
            <circle cx="10" cy="10" r="8" fill="#1e293b" />
            <rect x="4" y="20" width="12" height="35" rx="2" fill="#f97316" />
          </g>
          <g transform="translate(145, 110)">
            <circle cx="10" cy="8" r="8" fill="#fbbf24" />
            <rect x="4" y="18" width="12" height="25" rx="2" fill="#1e293b" />
          </g>
        </svg>
      );
    case 'travel':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* Hotel building */}
          <rect x="60" y="30" width="80" height="110" fill="#475569" rx="5" />
          
          {/* Windows */}
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2].map((col) => (
              <rect key={`${row}-${col}`} x={70 + col * 25} y={45 + row * 22} width="15" height="15" fill="#60a5fa" rx="2" />
            ))
          )}
          
          {/* Hotel entrance */}
          <rect x="85" y="115" width="30" height="25" fill="#1e293b" rx="3" />
          
          {/* Roof awning */}
          <ellipse cx="100" cy="25" rx="50" ry="12" fill="#818cf8" />
          
          {/* Heart icon */}
          <g transform="translate(85, 5)">
            <path d="M15 5 C10 0, 0 5, 15 15 C30 5, 20 0, 15 5" fill="#f472b6" />
          </g>
          
          {/* Price tag */}
          <g transform="translate(145, 50)">
            <rect x="0" y="0" width="30" height="40" fill="#f472b6" rx="3" />
            <text x="15" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">302</text>
          </g>
          
          {/* Person with luggage */}
          <g transform="translate(15, 80)">
            <circle cx="15" cy="15" r="12" fill="#1e293b" />
            <rect x="6" y="30" width="18" height="40" rx="3" fill="#22c55e" />
            <rect x="0" y="90" width="20" height="30" fill="#f97316" rx="3" />
          </g>
          
          {/* Plants */}
          <ellipse cx="50" cy="135" rx="15" ry="8" fill="#22c55e" />
          <ellipse cx="150" cy="135" rx="15" ry="8" fill="#22c55e" />
        </svg>
      );
    case 'ecommerce':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* Monitor */}
          <rect x="50" y="20" width="100" height="80" fill="#1e293b" rx="5" />
          <rect x="55" y="25" width="90" height="65" fill="#60a5fa" rx="3" />
          <text x="100" y="50" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SHOP</text>
          
          {/* Product grid on screen */}
          <rect x="60" y="55" width="25" height="30" fill="white" rx="2" />
          <rect x="90" y="55" width="25" height="30" fill="white" rx="2" />
          <rect x="120" y="55" width="20" height="30" fill="white" rx="2" />
          
          {/* Monitor stand */}
          <rect x="90" y="100" width="20" height="15" fill="#64748b" />
          <rect x="75" y="112" width="50" height="8" fill="#64748b" rx="2" />
          
          {/* Shopping cart */}
          <g transform="translate(140, 90)">
            <rect x="0" y="10" width="30" height="25" fill="#60a5fa" rx="3" />
            <circle cx="8" cy="40" r="5" fill="#1e293b" />
            <circle cx="22" cy="40" r="5" fill="#1e293b" />
          </g>
          
          {/* Person shopping */}
          <g transform="translate(10, 60)">
            <circle cx="15" cy="15" r="12" fill="#f472b6" />
            <rect x="6" y="30" width="18" height="45" rx="3" fill="#f472b6" />
          </g>
          
          {/* Decorative leaves */}
          <ellipse cx="180" cy="40" rx="15" ry="30" fill="#fbbf24" transform="rotate(30 180 40)" />
          <ellipse cx="20" cy="130" rx="10" ry="20" fill="#22c55e" transform="rotate(-20 20 130)" />
        </svg>
      );
    case 'banking':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* Monitor with bank */}
          <rect x="40" y="40" width="100" height="70" fill="#fb923c" rx="5" />
          <rect x="50" y="50" width="80" height="50" fill="white" rx="3" />
          
          {/* Bank building on screen */}
          <polygon points="90,55 130,70 50,70" fill="#f1f5f9" />
          <rect x="55" y="70" width="70" height="25" fill="#f1f5f9" />
          <rect x="60" y="75" width="8" height="18" fill="#e2e8f0" />
          <rect x="75" y="75" width="8" height="18" fill="#e2e8f0" />
          <rect x="90" y="75" width="8" height="18" fill="#e2e8f0" />
          <rect x="105" y="75" width="8" height="18" fill="#e2e8f0" />
          
          {/* Credit card */}
          <g transform="translate(100, 20)">
            <rect x="0" y="0" width="50" height="30" fill="#6366f1" rx="5" transform="rotate(15)" />
          </g>
          
          {/* Dollar sign */}
          <g transform="translate(140, 50)">
            <circle cx="15" cy="15" r="15" fill="#f472b6" opacity="0.3" />
            <text x="15" y="20" textAnchor="middle" fill="#f472b6" fontSize="16" fontWeight="bold">$</text>
          </g>
          
          {/* Person at desk */}
          <g transform="translate(10, 70)">
            <circle cx="15" cy="15" r="12" fill="#1e293b" />
            <rect x="6" y="30" width="18" height="40" rx="3" fill="#60a5fa" />
          </g>
          
          {/* Person at laptop */}
          <g transform="translate(150, 100)">
            <circle cx="12" cy="10" r="10" fill="#1e293b" />
            <rect x="4" y="22" width="16" height="30" rx="2" fill="#60a5fa" />
            <rect x="0" y="35" width="25" height="15" fill="#64748b" rx="2" />
          </g>
        </svg>
      );
    case 'education':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* School building */}
          <rect x="50" y="30" width="100" height="60" fill="#64748b" rx="3" />
          <polygon points="100,15 150,30 50,30" fill="#475569" />
          
          {/* Windows */}
          <rect x="60" y="40" width="20" height="25" fill="#60a5fa" rx="2" />
          <rect x="90" y="40" width="20" height="25" fill="#60a5fa" rx="2" />
          <rect x="120" y="40" width="20" height="25" fill="#60a5fa" rx="2" />
          
          {/* Door */}
          <rect x="90" y="70" width="20" height="20" fill="#1e293b" rx="2" />
          
          {/* Trees */}
          <circle cx="35" cy="60" r="20" fill="#60a5fa" />
          <rect x="32" y="75" width="6" height="20" fill="#1e293b" />
          <circle cx="165" cy="60" r="20" fill="#60a5fa" />
          <rect x="162" y="75" width="6" height="20" fill="#1e293b" />
          
          {/* Students */}
          <g transform="translate(50, 100)">
            <circle cx="15" cy="12" r="12" fill="#1e293b" />
            <rect x="6" y="26" width="18" height="30" rx="3" fill="#60a5fa" />
          </g>
          <g transform="translate(90, 100)">
            <circle cx="15" cy="12" r="12" fill="#fbbf24" />
            <rect x="6" y="26" width="18" height="30" rx="3" fill="#60a5fa" />
          </g>
          <g transform="translate(130, 100)">
            <circle cx="12" cy="12" r="12" fill="#1e293b" />
            <rect x="4" y="26" width="16" height="30" rx="3" fill="#60a5fa" />
          </g>
          
          {/* Chat bubbles */}
          <ellipse cx="70" cy="108" rx="8" ry="5" fill="#94a3b8" />
          <ellipse cx="115" cy="108" rx="8" ry="5" fill="#94a3b8" />
        </svg>
      );
    case 'energy':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* Light bulb */}
          <g transform="translate(120, 10)">
            <circle cx="25" cy="25" r="25" fill="#fb923c" />
            <path d="M25 25 L15 40 L35 40 Z" fill="#1e293b" />
          </g>
          
          {/* Wind turbines */}
          <g transform="translate(20, 50)">
            <rect x="12" y="40" width="6" height="60" fill="#64748b" />
            <circle cx="15" cy="40" r="8" fill="#94a3b8" />
            <line x1="15" y1="40" x2="15" y2="15" stroke="#94a3b8" strokeWidth="4" />
            <line x1="15" y1="40" x2="35" y2="55" stroke="#94a3b8" strokeWidth="4" />
            <line x1="15" y1="40" x2="-5" y2="55" stroke="#94a3b8" strokeWidth="4" />
          </g>
          
          {/* Solar panels */}
          <g transform="translate(60, 80)">
            <rect x="0" y="0" width="50" height="35" fill="#6366f1" rx="3" />
            <line x1="0" y1="12" x2="50" y2="12" stroke="#818cf8" strokeWidth="2" />
            <line x1="0" y1="24" x2="50" y2="24" stroke="#818cf8" strokeWidth="2" />
            <line x1="17" y1="0" x2="17" y2="35" stroke="#818cf8" strokeWidth="2" />
            <line x1="34" y1="0" x2="34" y2="35" stroke="#818cf8" strokeWidth="2" />
          </g>
          
          {/* Buildings */}
          <rect x="120" y="70" width="25" height="50" fill="#6366f1" rx="2" />
          <rect x="150" y="85" width="20" height="35" fill="#6366f1" rx="2" />
          <rect x="130" y="95" width="15" height="25" fill="#818cf8" rx="2" />
          
          {/* Person */}
          <g transform="translate(165, 90)">
            <circle cx="10" cy="10" r="10" fill="#1e293b" />
            <rect x="3" y="22" width="14" height="30" rx="2" fill="#60a5fa" />
          </g>
        </svg>
      );
    case 'government':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* Capitol building */}
          <rect x="50" y="60" width="100" height="80" fill="#0ea5e9" rx="3" />
          
          {/* Dome */}
          <ellipse cx="100" cy="60" rx="40" ry="25" fill="#0284c7" />
          <rect x="90" y="30" width="20" height="15" fill="#0284c7" />
          <polygon points="100,20 110,35 90,35" fill="#0284c7" />
          
          {/* Flag */}
          <rect x="97" y="10" width="3" height="15" fill="#1e293b" />
          <rect x="100" y="10" width="15" height="10" fill="#1e293b" />
          
          {/* Windows/columns */}
          <rect x="60" y="70" width="15" height="30" fill="#0284c7" />
          <rect x="85" y="70" width="15" height="30" fill="#0284c7" />
          <rect x="110" y="70" width="15" height="30" fill="#0284c7" />
          <rect x="135" y="70" width="15" height="30" fill="#0284c7" />
          
          {/* Steps */}
          <rect x="40" y="140" width="120" height="10" fill="#0891b2" />
          <rect x="45" y="130" width="110" height="10" fill="#06b6d4" />
          
          {/* People */}
          <g transform="translate(20, 100)">
            <circle cx="12" cy="10" r="10" fill="#1e293b" />
            <rect x="5" y="22" width="14" height="30" rx="2" fill="#f472b6" />
          </g>
          <g transform="translate(70, 105)">
            <circle cx="12" cy="8" r="10" fill="#fbbf24" />
            <rect x="5" y="20" width="14" height="25" rx="2" fill="#1e293b" />
          </g>
          <g transform="translate(160, 100)">
            <circle cx="12" cy="10" r="10" fill="#1e293b" />
            <rect x="5" y="22" width="14" height="30" rx="2" fill="#f472b6" />
          </g>
        </svg>
      );
    case 'healthcare':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* DNA helix / Flask */}
          <g transform="translate(60, 20)">
            <ellipse cx="40" cy="60" rx="40" ry="50" fill="#fb923c" opacity="0.8" />
            {/* DNA strand */}
            <path d="M40 20 Q55 40, 40 60 Q25 80, 40 100" stroke="#fcd34d" strokeWidth="4" fill="none" />
            <path d="M40 20 Q25 40, 40 60 Q55 80, 40 100" stroke="#fcd34d" strokeWidth="4" fill="none" />
          </g>
          
          {/* Molecules */}
          <circle cx="130" cy="30" r="8" fill="#818cf8" />
          <circle cx="145" cy="45" r="6" fill="#818cf8" />
          <line x1="130" y1="30" x2="145" y2="45" stroke="#818cf8" strokeWidth="2" />
          
          {/* Books */}
          <rect x="140" y="100" width="30" height="40" fill="#fbbf24" rx="2" />
          <rect x="145" y="105" width="25" height="35" fill="#f97316" rx="2" />
          
          {/* Scientists */}
          <g transform="translate(20, 80)">
            <circle cx="15" cy="15" r="12" fill="#f472b6" />
            <rect x="6" y="30" width="18" height="45" rx="3" fill="#6366f1" />
          </g>
          <g transform="translate(150, 55)">
            <circle cx="15" cy="12" r="12" fill="#1e293b" />
            <rect x="6" y="26" width="18" height="40" rx="3" fill="#6366f1" />
          </g>
          
          {/* Leaves */}
          <ellipse cx="25" cy="50" rx="12" ry="25" fill="#818cf8" transform="rotate(-30 25 50)" />
          <ellipse cx="175" cy="80" rx="10" ry="20" fill="#818cf8" transform="rotate(20 175 80)" />
        </svg>
      );
    case 'insurance':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* Umbrella */}
          <g transform="translate(50, 10)">
            <ellipse cx="50" cy="30" rx="50" ry="25" fill="#fb923c" />
            <rect x="48" y="30" width="4" height="60" fill="#ea580c" />
          </g>
          
          {/* Phone with shield */}
          <rect x="70" y="50" width="50" height="90" fill="#818cf8" rx="8" />
          <rect x="75" y="60" width="40" height="70" fill="#60a5fa" rx="5" />
          
          {/* Shield */}
          <g transform="translate(82, 70)">
            <path d="M13 0 L26 5 L26 20 L13 30 L0 20 L0 5 Z" fill="#06b6d4" />
            <path d="M8 15 L12 19 L20 10" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
          
          {/* Icons around */}
          <circle cx="150" cy="40" r="20" fill="#818cf8" opacity="0.5" />
          <g transform="translate(142, 32)">
            <circle cx="8" cy="5" r="5" fill="#6366f1" />
            <circle cx="8" cy="12" r="3" fill="#6366f1" />
          </g>
          
          <circle cx="165" cy="90" r="18" fill="#818cf8" opacity="0.5" />
          <rect x="155" y="82" width="20" height="16" fill="#6366f1" rx="3" />
          
          <circle cx="35" cy="100" r="18" fill="#fb923c" opacity="0.3" />
          <path d="M28 95 L35 105 L42 95" fill="#f97316" />
          
          {/* Person */}
          <g transform="translate(15, 110)">
            <circle cx="15" cy="12" r="12" fill="#1e293b" />
            <rect x="6" y="26" width="18" height="30" rx="3" fill="#f472b6" />
          </g>
        </svg>
      );
    case 'logistics':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* Globe */}
          <circle cx="100" cy="50" r="45" fill="none" stroke="#6366f1" strokeWidth="3" />
          <ellipse cx="100" cy="50" rx="20" ry="45" fill="none" stroke="#6366f1" strokeWidth="2" />
          <line x1="55" y1="50" x2="145" y2="50" stroke="#6366f1" strokeWidth="2" />
          
          {/* Location pins */}
          <g transform="translate(80, 25)">
            <circle cx="5" cy="5" r="5" fill="#f472b6" />
            <polygon points="5,10 0,5 10,5" fill="#f472b6" />
          </g>
          <g transform="translate(110, 60)">
            <circle cx="5" cy="5" r="5" fill="#f472b6" />
            <polygon points="5,10 0,5 10,5" fill="#f472b6" />
          </g>
          
          {/* Warehouse shelves */}
          <g transform="translate(20, 80)">
            <rect x="0" y="0" width="60" height="60" fill="#64748b" rx="3" />
            <rect x="5" y="5" width="15" height="15" fill="#fb923c" rx="2" />
            <rect x="22" y="5" width="15" height="15" fill="#fb923c" rx="2" />
            <rect x="39" y="5" width="15" height="15" fill="#fb923c" rx="2" />
            <rect x="5" y="22" width="15" height="15" fill="#fb923c" rx="2" />
            <rect x="22" y="22" width="15" height="15" fill="#fb923c" rx="2" />
            <rect x="39" y="22" width="15" height="15" fill="#fb923c" rx="2" />
            <rect x="5" y="40" width="15" height="15" fill="#fb923c" rx="2" />
            <rect x="22" y="40" width="15" height="15" fill="#fb923c" rx="2" />
          </g>
          
          {/* Truck */}
          <g transform="translate(100, 120)">
            <rect x="0" y="0" width="50" height="25" fill="#60a5fa" rx="3" />
            <rect x="50" y="8" width="25" height="17" fill="#3b82f6" rx="2" />
            <circle cx="15" cy="28" r="6" fill="#1e293b" />
            <circle cx="60" cy="28" r="6" fill="#1e293b" />
          </g>
          
          {/* Worker */}
          <g transform="translate(85, 105)">
            <circle cx="10" cy="8" r="8" fill="#fbbf24" />
            <rect x="4" y="18" width="12" height="25" rx="2" fill="#f97316" />
          </g>
        </svg>
      );
    case 'retail':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* Store front */}
          <rect x="50" y="40" width="100" height="100" fill="#f5f5f5" rx="5" />
          
          {/* Awning */}
          <g transform="translate(45, 30)">
            <rect x="0" y="0" width="110" height="20" fill="#ef4444" />
            <rect x="0" y="15" width="22" height="10" fill="#dc2626" />
            <rect x="22" y="15" width="22" height="10" fill="white" />
            <rect x="44" y="15" width="22" height="10" fill="#dc2626" />
            <rect x="66" y="15" width="22" height="10" fill="white" />
            <rect x="88" y="15" width="22" height="10" fill="#dc2626" />
          </g>
          
          {/* 24h sign */}
          <rect x="55" y="50" width="30" height="20" fill="#1e293b" rx="3" />
          <text x="70" y="64" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">24h</text>
          
          {/* Stars */}
          <g transform="translate(95, 50)">
            {[0, 12, 24, 36, 48].map((x, i) => (
              <polygon key={i} points={`${x+5},0 ${x+6},4 ${x+10},4 ${x+7},6 ${x+8},10 ${x+5},8 ${x+2},10 ${x+3},6 ${x},4 ${x+4},4`} fill="#fbbf24" />
            ))}
          </g>
          
          {/* Products display */}
          <rect x="60" y="75" width="80" height="50" fill="white" rx="3" />
          <rect x="65" y="80" width="20" height="20" fill="#fbbf24" rx="2" />
          <rect x="90" y="80" width="20" height="20" fill="#60a5fa" rx="2" />
          <rect x="115" y="80" width="20" height="20" fill="#f472b6" rx="2" />
          
          {/* Discount badge */}
          <circle cx="160" cy="45" r="18" fill="#ef4444" />
          <text x="160" y="50" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">%</text>
          
          {/* Shoppers */}
          <g transform="translate(25, 90)">
            <circle cx="12" cy="10" r="10" fill="#1e293b" />
            <rect x="5" y="22" width="14" height="35" rx="2" fill="#60a5fa" />
          </g>
          <g transform="translate(160, 85)">
            <circle cx="10" cy="10" r="10" fill="#fbbf24" />
            <rect x="3" y="22" width="14" height="40" rx="2" fill="#f472b6" />
          </g>
          
          {/* Shopping cart */}
          <g transform="translate(145, 125)">
            <rect x="0" y="0" width="25" height="20" fill="#fbbf24" rx="3" />
            <circle cx="5" cy="25" r="4" fill="#1e293b" />
            <circle cx="20" cy="25" r="4" fill="#1e293b" />
          </g>
        </svg>
      );
    case 'telecom':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* Satellite dish */}
          <g transform="translate(130, 20)">
            <ellipse cx="30" cy="20" rx="30" ry="20" fill="#fb923c" />
            <circle cx="30" cy="20" r="8" fill="#ea580c" />
            {/* Signal waves */}
            <path d="M65 20 Q75 10, 85 20" stroke="#fb923c" strokeWidth="3" fill="none" />
            <path d="M70 20 Q80 5, 90 20" stroke="#fb923c" strokeWidth="3" fill="none" />
          </g>
          
          {/* Chat bubbles */}
          <rect x="80" y="60" width="40" height="25" fill="#e2e8f0" rx="5" />
          <rect x="60" y="90" width="35" height="20" fill="#94a3b8" rx="5" />
          
          {/* Person icon */}
          <g transform="translate(130, 55)">
            <circle cx="15" cy="12" r="12" fill="#1e293b" />
            <ellipse cx="15" cy="35" rx="12" ry="8" fill="#1e293b" />
          </g>
          
          {/* Person at desk */}
          <g transform="translate(30, 80)">
            {/* Desk */}
            <rect x="0" y="40" width="70" height="30" fill="#64748b" rx="3" />
            
            {/* Laptop */}
            <rect x="15" y="25" width="40" height="25" fill="#1e293b" rx="3" />
            <rect x="18" y="28" width="34" height="18" fill="#60a5fa" rx="2" />
            
            {/* Person */}
            <circle cx="55" cy="15" r="12" fill="#fbbf24" />
            <rect x="46" y="28" width="18" height="30" rx="3" fill="#fb923c" />
          </g>
          
          {/* Decorative dots */}
          <circle cx="70" cy="70" r="3" fill="#60a5fa" />
          <circle cx="85" cy="55" r="2" fill="#60a5fa" />
          <circle cx="60" cy="60" r="2" fill="#94a3b8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          <rect x="50" y="50" width="100" height="60" fill="#60a5fa" rx="10" />
          <text x="100" y="85" textAnchor="middle" fill="white" fontSize="14">Industry</text>
        </svg>
      );
  }
};

function Industries() {
  return (
    <main className="bg-white">
      {/* ========== 1. Hero Section ========== */}
      <section className="py-16 sm:py-20 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-8 left-32 w-12 h-12 border-2 border-cyan-200 rounded-full opacity-50" />
        <div className="absolute top-20 left-56 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 italic">
              Industries
            </h1>
            
            {/* Description */}
            <p className="lg:max-w-md text-slate-700 leading-relaxed text-base sm:text-lg">
              MetrixIT Solutions helps in the acceleration of creativity and the implementation of industry-specific best practises in order to help you operate your core business more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* ========== 2. Industries Grid ========== */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <div key={industry.id} className="group">
                {/* Card with pill shape */}
                <div className={`${industry.bgColor} rounded-t-full rounded-b-3xl overflow-hidden h-80 flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-[1.02]`}>
                  <IndustryIllustration type={industry.illustration} />
                </div>
                
                {/* Title and Link */}
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {industry.title}
                  </h3>
                  <Link
                    to={industry.to}
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors text-sm font-medium"
                  >
                    Read More
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 3. CTA Section ========== */}
      <section className="py-20 sm:py-28 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-20 w-10 h-10 border border-cyan-200 rounded-full opacity-40" />
        <div className="absolute top-1/2 right-16 w-3 h-3 bg-emerald-500 rounded-full" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag */}
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-slate-700 border border-slate-300 rounded-full mb-6">
            WORK WITH US
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-10 italic">
            We would love to hear<br />more about your project
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

      {/* ========== 4. Business Process Illustration ========== */}
      <section className="py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-48 sm:h-64">
            <svg viewBox="0 0 1000 200" className="w-full h-full">
              {/* Background pattern */}
              <defs>
                <pattern id="gridPatternInd" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPatternInd)" />
              
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

export default Industries;
