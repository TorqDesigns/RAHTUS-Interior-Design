import React, { useState, useEffect } from 'react';
import logoImage from '../../public/logo.jpg';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Gallary", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="Logo" className="h-16 w-24 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${link.active
                  ? "text-orange-600"
                  : "text-stone-700 hover:text-orange-600"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#A6917C] to-[#A6917C] text-white font-semibold shadow-md hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-stone-800" />
            ) : (
              <Menu className="text-stone-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white  px-4 pt-4 pb-6 border-b border-stone-200 shadow-sm">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-stone-700 hover:text-orange-600 font-medium block py-2 ${link.active ? "text-orange-600" : ""
                  }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r  from-[#A6917C] to-[#A6917C] text-white font-semibold shadow-md mt-2"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;