import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import LogoImg from '../../public/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and company info */}
          <div>
            <img src={LogoImg} alt="" className='h-20' />
            <p className="text-stone-600 mt-4 mb-6">
              Crafting beautifully designed spaces that reflect your personality and enhance your everyday life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-500 hover:text-stone-800 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-500 hover:text-stone-800 transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-stone-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-stone-500 mt-0.5 mr-2" />
                <span className="text-stone-600">1056, Broadway Street 5th New York, USA</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-stone-500 mr-2" />
                <span className="text-stone-600">+1 212 678 90</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-stone-500 mr-2" />
                <span className="text-stone-600">rahtus@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-stone-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-300">Decor</a></li>
              <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-300">Furniture</a></li>
              <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-300">Lighting</a></li>
              <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-300">Shop</a></li>
            </ul>
          </div>

          {/* About links */}
          <div>
            <h3 className="font-semibold text-stone-800 mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-300">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-200 text-center">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} RAHTUS Interior Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;