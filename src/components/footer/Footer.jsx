import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white mt-20">
      {/* 1. CTA strip (full width, modern hero-style footer CTA) */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center text-center gap-6">
          <div className="space-y-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Have a project in your mind?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Tell us about your idea and we&apos;ll help you turn it into a
              reliable, scalable digital product – from discovery to launch.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Link
              to="/contact"
              className="flex h-40 w-40 items-center justify-center rounded-full border border-sky-500 hover:border-sky-400 transition-colors text-sm font-semibold text-slate-100"
            >
              Contact Us
            </Link>
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-semibold tracking-[0.18em] uppercase">
                09 : 00 AM - 05 : 00 PM
              </p>
              <p>Monday - Friday</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main footer content (logo + navigation + contact) */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14 grid gap-10 sm:grid-cols-3 lg:grid-cols-[2.3fr,1.4fr,1.6fr]">
        {/* Brand + description + socials */}
        <div className="space-y-6 sm:col-span-3 lg:col-span-1">
          <Link to="/" className="inline-flex">
            <img
              src={logo}
              alt="PDSA Solutions"
              className="h-11 w-auto object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed text-slate-300 max-w-sm">
            PDSA Solutions is here to provide you with the business advantage you
            need. We empower companies by helping them utilize and integrate the
            most recent technological advances.
          </p>
          <div className="flex items-center gap-4 text-lg text-slate-400">
            <span className="hover:text-sky-400 cursor-pointer"></span>
            <span className="hover:text-sky-400 cursor-pointer"></span>
            <span className="hover:text-sky-400 cursor-pointer"></span>
            <span className="hover:text-sky-400 cursor-pointer"></span>
          </div>
        </div>

        {/* Information links */}
        <div className="space-y-4 text-sm">
          <h4 className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-300">
            Information
          </h4>
          <ul className="space-y-3 text-slate-300">
            <li>
              <Link
                to="/about-us"
                className="hover:text-sky-400 transition-colors"
              >
                About Company
              </Link>
            </li>
            <li>
              <Link
                to="/industries"
                className="hover:text-sky-400 transition-colors"
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                to="/technologies"
                className="hover:text-sky-400 transition-colors"
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="hover:text-sky-400 transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-sky-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact information */}
        <div className="space-y-4 text-sm">
          <h4 className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-300">
            Contact Us
          </h4>
          <ul className="space-y-3 text-slate-300">
            <li>
              8832 Blakeney Professional Dr Suite 205,
              <br />
              Charlotte, NC 28277, USA
            </li>
            <li>
              <a
                href="tel:+19802223242"
                className="hover:text-sky-400 transition-colors"
              >
                980-222-3242
              </a>
            </li>
            <li>
              <a
                href="mailto:info@metrixit.com"
                className="hover:text-sky-400 transition-colors"
              >
                info@metrixit.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Bottom bar with newsletter */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © 2025 Copyrights | Alrights reserved by{' '}
            <span className="font-semibold text-white">PDSA Solutions</span>
          </p>
          <form
            className="w-full md:w-auto flex items-stretch max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-l-md border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-r-md bg-sky-600 px-4 text-xs font-semibold text-white hover:bg-sky-500 transition-colors"
            >
              ➜
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;