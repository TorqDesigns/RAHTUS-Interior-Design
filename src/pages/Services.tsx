import React from 'react';

const services = [
  {
    title: "Interior Design",
    description: "We create beautiful and functional spaces that reflect your personal style. Our expert designers combine aesthetics with practicality to craft spaces that feel like home. From color schemes to furniture placement, we ensure every detail is perfect. Every space tells a story, and we help you tell yours. Whether you're updating a single room or reimagining your entire home, we work closely with you to understand your tastes, preferences, and how you live. The result is a space that feels personal, practical, and perfectly tailored to you. Design success lies in the details. Lighting, textures, scale, and spatial relationships all play a vital role in how a room looks and feels. We take a holistic approach, ensuring that each decision contributes to a cohesive and harmonious environment. Nothing is overlooked—from the initial layout to the final decorative touches.",
    image: "../../public/assets/Services/Interior.jpeg"
  },
  {
    title: "Parametric Design",
    description: "Using cutting-edge digital tools and advanced computational design methods, we push the boundaries of creativity and precision in architecture and interior design. Parametric design allows us to explore complex geometries and patterns that are both visually striking and highly functional. By leveraging algorithms and data-driven design processes, we create unique architectural elements and custom features tailored specifically to your space. Whether it’s a sculptural facade, a dynamic partition, or bespoke furniture, every piece is crafted with meticulous attention to detail and purpose. Our parametric designs not only stand out visually—they’re deeply responsive to context, environment, and usability. From optimizing natural light and airflow to enhancing spatial flow and user interaction, we ensure each form serves a function.",
    image: "../../public/assets/Services/Parametric.jpeg"
  },
  {
    title: "Handicrafts",
    description: "Our skilled artisans create bespoke pieces that add character and style to your space. From custom furniture to decorative elements, each piece is crafted with attention to detail and a commitment to quality. Our skilled artisans bring tradition, craftsmanship, and creativity together to create bespoke pieces that infuse your space with character and soul. Every item—whether it's custom furniture, intricate decor, or hand-finished accents—is a celebration of artistry and attention to detail.Working with a variety of natural and sustainable materials, we craft pieces that are not only beautiful but built to last. Each creation tells a story, reflecting the unique touch of the hands that made it and the vision behind its design. Whether you're looking for a statement piece or subtle handcrafted details, our handicrafts add warmth, texture, and individuality to any space.",
    image: "../../public/assets/Services/Handicrafts.jpeg"
  },
  {
    title: "Furniture",
    description: "Our curated selection of furniture brings together comfort, style, and lasting quality to elevate every corner of your home. Each piece is carefully chosen or custom-crafted to align with your aesthetic, spatial needs, and way of living. We source high-quality materials and timeless designs—from classic elegance to modern minimalism—to ensure your furniture not only looks stunning but stands the test of time. Whether you're furnishing a single room or your entire home, we help you find pieces that feel just right. Every item is more than just functional—it's an expression of your personality and lifestyle, seamlessly integrated into your space. Furnish your home with pieces that bring both beauty and purpose—crafted to be lived in and loved for years to come.",
    image: "../../public/assets/Gallary/Kitchen.jpeg"
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
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
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