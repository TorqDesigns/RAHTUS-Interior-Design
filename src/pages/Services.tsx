import React from 'react';

const services = [
  {
    title: "Interior Design",
    description: "We create beautiful and functional spaces that reflect your personal style. Our expert designers combine aesthetics with practicality to craft spaces that feel like home. From color schemes to furniture placement, we ensure every detail is perfect.",
    image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
  },
  {
    title: "Parametric Design",
    description: "Using cutting-edge digital tools and computational design methods, we create unique architectural elements and custom features. Our parametric designs add a distinctive touch to your space while maintaining functionality.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
  },
  {
    title: "Handicrafts",
    description: "Our skilled artisans create bespoke pieces that add character and style to your space. From custom furniture to decorative elements, each piece is crafted with attention to detail and a commitment to quality.",
    image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg"
  },
  {
    title: "Furniture",
    description: "Our curated furniture pieces combine comfort, style, and durability. We source high-quality pieces that complement your space and lifestyle. From classic to contemporary, we help you find the perfect pieces for your home.",
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg"
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center text-sm text-stone-500">
          <a href="/" className="hover:text-stone-800">Home</a>
          <span className="mx-2">/</span>
          <span className="text-stone-800">Services</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Services</h1>
        <p className="text-xl text-stone-600">Explore Our Signature Services</p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-stone-800 mb-8">Curated Services. Exceptional Results.</h2>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="relative h-[300px] lg:h-[400px] overflow-hidden rounded-lg">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-stone-800">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;