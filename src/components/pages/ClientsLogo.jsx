import React from 'react';

// You would replace these with your actual logo paths (e.g., /logos/infosys.svg)
const LOGOS = [
  { id: 1, src: '/logos/infosys.svg', alt: 'Infosys Logo' },
  { id: 2, src: '/logos/ibm.svg', alt: 'IBM Logo' },
  { id: 3, src: '/logos/tata.svg', alt: 'Tata Consultancy Services Logo' },
  { id: 4, src: '/logos/accenture.svg', alt: 'Accenture Logo' },
  { id: 5, src: '/logos/adp.svg', alt: 'ADP Logo' },
  { id: 6, src: '/logos/apple.svg', alt: 'Apple Logo' },
  { id: 7, src: '/logos/atos.svg', alt: 'Atos Logo' },
  { id: 8, src: '/logos/capgemini.svg', alt: 'Capgemini Logo' },
  { id: 9, src: '/logos/deloitte.svg', alt: 'Deloitte Logo' },
  { id: 10, src: '/logos/cbn.svg', alt: 'ABS-CBN International Logo' },
];

function ClientLogos() {
  // Duplicate the list to ensure seamless looping animation
  const duplicatedLogos = [...LOGOS, ...LOGOS];

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-8">
          We worked with global largest brands
        </h2>
      </div>

      <div className="logo-marquee overflow-hidden whitespace-nowrap">
        <div className="logo-marquee-content inline-block">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="inline-block mx-8 sm:mx-12 opacity-50 transition-opacity duration-300 hover:opacity-100"
            >
              {/* NOTE: You must replace the placeholder image tag with a real <img> tag using your actual logo paths */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 w-auto filter grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;