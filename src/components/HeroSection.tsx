import React from 'react';
import btnIcon from '../../public/assets/Hero/hero-btn.png'
import bgImage from '../../public/assets/Hero/Bg.jpeg' // Add this import
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero background image */}
      <img
        src={bgImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}


      {/* Content container */}
      <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full max-w-lg">
          {/* Glass card */}
          <div className="backdrop-blur-[5px] bg-white/55 p-8 md:p-10 rounded-3xl shadow-lg border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Your Vibe.<br />Our Blueprint.
            </h1>
            <p className="text-black text-sm md:text-xl lg:text-[18px] mb-8 font-light leading-relaxed">
              Thoughtfully designed spaces that echo your essence and elevate everyday living.
            </p>
            <Link
              to="/contact">

              <button className="flex items-center px-6 py-3 gap-2 rounded-full bg-gradient-to-r from-[#A6917C] to-[#A6917C] text-white font-semibold shadow-md hover:scale-105 transition-transform"
              >
                <img src={btnIcon} className="transition-transform duration-300 group-hover:translate-x-1" />
                Step Inside
              </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;