import React, { useState } from 'react';
import { Globe, ChevronUp, Facebook, Twitter, Instagram } from 'lucide-react';

export default function AirbnbFooter() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = [
    {
      title: "Support",
      links: [
        "Help Center",
        "AirCover",
        "Anti-discrimination",
        "Disability support",
        "Cancellation options",
        "Report neighborhood concern"
      ]
    },
    {
      title: "Hosting",
      links: [
        "Airbnb your home",
        "AirCover for Hosts",
        "Hosting resources",
        "Community forum",
        "Hosting responsibly",
        "Join a free Hosting class"
      ]
    },
    {
      title: "Airbnb",
      links: [
        "Newsroom",
        "New features",
        "Careers",
        "Investors",
        "Gift cards",
        "Airbnb.org emergency stays"
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-4">
            {footerSections.map((section, idx) => (
              <div key={idx} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full flex items-center justify-between py-4 text-left font-semibold"
                >
                  <span>{section.title}</span>
                  <ChevronUp 
                    className={`w-5 h-5 transition-transform ${
                      openSection === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSection === idx ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          href="#"
                          className="text-sm text-gray-700 hover:underline block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href="#"
                        className="text-sm text-gray-700 hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Left Side - Copyright & Links */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
              <span className="text-gray-700">© 2025 Airbnb, Inc.</span>
              <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                <span className="hidden sm:inline text-gray-400">·</span>
                <a href="#" className="text-gray-700 hover:underline">Terms</a>
                <span className="text-gray-400">·</span>
                <a href="#" className="text-gray-700 hover:underline">Sitemap</a>
                <span className="text-gray-400">·</span>
                <a href="#" className="text-gray-700 hover:underline">Privacy</a>
                <span className="text-gray-400">·</span>
                <a href="#" className="text-gray-700 hover:underline inline-flex items-center gap-1">
                  Your Privacy Choices
                  <svg className="w-6 h-6" viewBox="0 0 30 30" fill="none">
                    <rect width="30" height="30" rx="15" fill="#00A699"/>
                    <path d="M15 7C10.582 7 7 10.582 7 15C7 19.418 10.582 23 15 23C19.418 23 23 19.418 23 15C23 10.582 19.418 7 15 7ZM15 21C11.691 21 9 18.309 9 15C9 11.691 11.691 9 15 9C18.309 9 21 11.691 21 15C21 18.309 18.309 21 15 21Z" fill="white"/>
                    <path d="M15 11C12.791 11 11 12.791 11 15C11 17.209 12.791 19 15 19V11Z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Language, Currency & Social */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Language Selector */}
              <button className="flex items-center gap-2 text-sm font-semibold hover:underline">
                <Globe className="w-4 h-4" />
                <span>English (US)</span>
              </button>

              {/* Currency Selector */}
              <button className="text-sm font-semibold hover:underline">
                $ USD
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Promotional Banner */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700">
              Get the app for exclusive deals and easier booking
            </span>
            <button className="text-blue-600 hover:underline font-semibold">
              Download
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}