import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      id: 'life',
      label: 'LIFE @ PDSA SOLUTIONS',
      type: 'panel',
      links: [
        { label: 'About Us', to: '/about-us' },
        { label: 'Service Delivery Model', to: '/service-delivery-model' },
        { label: 'Mission & Values', to: '/mission-values' },
        { label: 'Corporate Responsibility', to: '/corporate-responsibility' },
        {
          label: 'Partnership & Supplier Diversity',
          to: '/partnership-supplier-diversity',
        },
        { label: 'Our Skills', to: '/our-skills' },
        { label: 'Our Clients', to: '/our-clients' },
        { label: 'Employee Referral', to: '/employee-referral' },
        { label: 'Corporate', to: '/corporate' },
      ],
    },
    {
      id: 'solutions',
      label: 'SOLUTIONS',
      type: 'panel',
      links: [
        { label: 'Strategic Staffing', to: '/solutions/strategic-staffing' },
        {
          label: 'Business Process Outsourcing',
          to: '/solutions/business-process-outsourcing',
        },
        {
          label: 'Recruitment Process Outsourcing',
          to: '/solutions/recruitment-process-outsourcing',
        },
        {
          label: 'PDSA Solutions Training Hub',
          to: '/solutions/training-hub',
        },
      ],
    },
    {
      id: 'industries',
      label: 'INDUSTRIES',
      type: 'panel',
      links: [
        { label: 'Banking & Financial', to: '/industries/banking-financial' },
        { label: 'Education', to: '/industries/education' },
        { label: 'Energy & Utility', to: '/industries/energy-utility' },
        { label: 'Government', to: '/industries/government' },
        {
          label: 'Healthcare & Life Science',
          to: '/industries/healthcare-life-science',
        },
        { label: 'Insurance', to: '/industries/insurance' },
        {
          label: 'Logistics & Warehousing',
          to: '/industries/logistics-warehousing',
        },
        {
          label: 'Retail & Consumer Goods',
          to: '/industries/retail-consumer-goods',
        },
        { label: 'Telecom & Media', to: '/industries/telecom-media' },
        { label: 'Oil & Gas', to: '/industries/oil-gas' },
        {
          label: 'Travel & Hospitality',
          to: '/industries/travel-hospitality',
        },
        { label: 'E-Commerce', to: '/industries/e-commerce' },
      ],
    },
    {
      id: 'technologies',
      label: 'TECHNOLOGIES',
      type: 'panel',
      links: [
        { label: 'Artificial Intelligence - AI', to: '/technologies/ai' },
        { label: 'DevOps Boxed', to: '/technologies/devops-boxed' },
        { label: 'Cloud Computing', to: '/technologies/cloud-computing' },
        { label: 'Bigdata', to: '/technologies/bigdata' },
        { label: 'Web Development', to: '/technologies/web-development' },
        { label: 'Latest Thinking', to: '/technologies/latest-thinking' },
      ],
    },
    {
      id: 'careers',
      label: 'CAREERS',
      type: 'panel',
      links: [
        { label: 'Careers Overview', to: '/careers/overview' },
        {
          label: 'Culture At PDSA Solutions',
          to: '/careers/culture-metrixit',
        },
        { label: 'Current Openings', to: '/careers/current-openings' },
        { label: 'Join Us', to: '/careers/join-us' },
        { label: 'Employee Benefits', to: '/careers/employee-benefits' },
        { label: 'Immigration', to: '/careers/immigration' },
      ],
    },
    { id: 'contact', label: 'CONTACT', type: 'link', to: '/contact' },
  ];

  const toggleMenu = (id) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between gap-6">
          {/* Logo area */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="PDSA Solutions"
              className="h-20 sm:h-28 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => {
                if (item.type === 'link') {
                  return (
                    <li key={item.id}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          [
                            'text-xs font-semibold tracking-[0.16em] uppercase',
                            'text-slate-900 hover:text-sky-600',
                            isActive ? 'text-sky-600' : '',
                          ].join(' ')
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                }

                if (item.type === 'panel') {
                  const isOpen = openMenu === item.id;
                  return (
                    <li key={item.id} className="relative">
                      <button
                        onClick={() => toggleMenu(item.id)}
                        onMouseEnter={() => setOpenMenu(item.id)}
                        className="flex items-center gap-1 text-xs font-semibold tracking-[0.16em] uppercase text-slate-900 hover:text-sky-600"
                      >
                        {item.label}
                        <span
                          className={`text-[10px] transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        >
                          ▾
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          className="absolute left-0 top-full z-30 mt-2 w-[360px] rounded-none border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
                          onMouseLeave={() => setOpenMenu(null)}
                        >
                          <ul className="py-4">
                            {item.links.map((link) => (
                              <li key={link.to}>
                                <NavLink
                                  to={link.to}
                                  className="block px-6 py-2.5 text-sm text-slate-900 hover:bg-[#0052CC] hover:text-white transition-colors"
                                >
                                  {link.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                }

                return null;
              })}
            </ul>
          </nav>

          {/* Right side: desktop "hamburger" icon (like reference) */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-900 hover:bg-gray-100"
              aria-label="Open menu"
            >
              <span className="sr-only">Open menu</span>
              <div className="flex flex-col gap-1">
                <span className="h-[2px] w-4 bg-slate-900" />
                <span className="h-[2px] w-4 bg-slate-900" />
              </div>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex lg:hidden items-center justify-center rounded-md border border-slate-300 p-2 text-slate-900"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-1">
              <span
                className={`h-[2px] w-5 bg-slate-900 transition-transform ${
                  mobileOpen ? 'translate-y-[3px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-slate-900 transition-opacity ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-slate-900 transition-transform ${
                  mobileOpen ? '-translate-y-[3px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`lg:hidden overflow-hidden border-t border-gray-200 transition-[max-height] duration-300 ${
            mobileOpen ? 'max-h-[480px]' : 'max-h-0'
          }`}
        >
          <ul className="space-y-1 py-3">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <li key={item.id}>
                    <NavLink
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        [
                          'block px-3 py-2 text-sm text-slate-900',
                          'hover:bg-gray-50',
                          isActive ? 'bg-gray-50 text-sky-600' : '',
                        ].join(' ')
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              }

              if (item.type === 'panel') {
                return (
                  <li key={item.id}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 text-sm text-slate-900 hover:bg-gray-50">
                        <span>{item.label}</span>
                        <span className="text-xs transition-transform group-open:rotate-180">
                          ▾
                        </span>
                      </summary>
                      <ul className="border-t border-gray-200 bg-white">
                        {item.links.map((link) => (
                          <li key={link.to}>
                            <NavLink
                              to={link.to}
                              onClick={() => setMobileOpen(false)}
                              className={({ isActive }) =>
                                [
                                  'block px-4 py-2 text-sm text-slate-900',
                                  'hover:bg-gray-50',
                                  isActive ? 'bg-gray-50 text-sky-600' : '',
                                ].join(' ')
                              }
                            >
                              {link.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                );
              }

              return null;
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
