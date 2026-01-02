import React from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import LogoImg from "../../public/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and company info */}
          <div>
            <img src={LogoImg} alt="" className="h-20" />
            <p className="text-stone-600 mt-4 mb-6">
              Crafting beautifully designed spaces that reflect your personality
              and enhance your everyday life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rahtus_interior_parametrics"
                className="text-stone-500 hover:text-stone-800 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-stone-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-stone-500 mr-2" />
                <span className="text-stone-600">
                  Warehouse 06, Plot no 757-0 <br /> Near Cam Auto Centre, DIP
                  1, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-stone-500 mr-2" />
                <a href="tel:043554359">
                  <span className="text-stone-600"> 043554359</span>
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-stone-500 mr-2" />
                <a href="mailto:info@rahtusinterior.com">
                  <span className="text-stone-600">
                    info@rahtusinterior.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-stone-800 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="text-stone-600 hover:text-stone-800 transition-colors duration-300"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-stone-600 hover:text-stone-800 transition-colors duration-300"
                >
                  Decor
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-stone-600 hover:text-stone-800 transition-colors duration-300"
                >
                  Furniture
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-stone-600 hover:text-stone-800 transition-colors duration-300"
                >
                  Handicrafts
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-stone-600 hover:text-stone-800 transition-colors duration-300"
                >
                  Parametric Design
                </a>
              </li>
            </ul>
          </div>

          {/* About links */}
          <div>
            <h3 className="font-semibold text-stone-800 mb-4">Knowledge</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/gallery"
                  className="text-stone-600 hover:text-stone-800 transition-colors duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-stone-600 hover:text-stone-800 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              {/* <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-300">Terms and Conditions</a></li> */}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-200 text-center">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} RAHTUS Interior Design. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
