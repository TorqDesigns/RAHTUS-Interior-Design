import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image gallery side */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          <div className="col-span-1 row-span-1">
            <img 
              src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Minimalist living room" 
              className="w-full h-full object-cover rounded-lg"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
          <div className="col-span-1 row-span-2">
            <img 
              src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Modern kitchen design" 
              className="w-full h-full object-cover rounded-lg"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img 
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Cozy bedroom space" 
              className="w-full h-full object-cover rounded-lg"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        </div>
        
        {/* Text content side */}
        <div className="lg:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">How It All Began</h2>
          <div className="space-y-4 text-stone-600">
            <p>
              Since our humble beginnings in 2006, we've grown into a trusted name in exclusive, high-quality interior design. Today, we're proud to offer a curated collection of designs that blend elegance, innovation, and quality.
            </p>
            <p>
              With new designs added daily, we're constantly evolving—and we're truly grateful to have your continued support on this journey.
            </p>
            <p>
              Our philosophy has always been simple: create spaces that don't just look beautiful, but feel like home. Every project is approached with a deep understanding of our clients' unique lifestyles and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;