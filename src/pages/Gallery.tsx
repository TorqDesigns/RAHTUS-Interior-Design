import React, { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    url: "/assets/Gallary/M1.jpeg",
    title: "Contemporary Staircase",
    category: "Organic Flow",
    aspectRatio: "4/3"
  },
  {
    id: 2,
    url: "/assets/Gallary/M5.jpeg",
    title: "Artistic Café Lounge",
    category: "Lounge / Café",
    aspectRatio: "3/1"
  },
  {
    id: 3,
    url: "/assets/Gallary/M2.jpeg",
    title: "Minimalist Meeting Nook",
    category: "Office",
    aspectRatio: "4/3"
  },
  {
    id: 4,
    url: "/assets/Gallary/M6.jpeg",
    title: "Elegant Reception",
    category: "Office",
    aspectRatio: "4/3"
  },
  {
    id: 5,
    url: "/assets/Gallary/M3.jpeg",
    title: "Modern Office Entrance with Wooden Paneling",
    category: "Interior Design",
    aspectRatio: "3/4"
  },
  {
    id: 6,
    url: "/assets/Gallary/M8.jpeg",
    title: " Collaborative Workspace with Tiered Seating and Modern Design",
    category: "Interior Design / Office Lounge Area",
    aspectRatio: "16/9"
  },
  {
    id: 7,
    url: "/assets/Gallary/M9.jpeg",
    title: "Elegant Executive Lounge with Contemporary Seating and Indoor Plants",
    category: "Office Reception & Lounge Area",
    aspectRatio: "1/1"
  },
  {
    id: 8,
    url: "/assets/Gallary/M10.jpeg",
    title: "Modern Amphitheater-Style Workspace",
    category: "Interior Design",
    aspectRatio: "3/2"
  },
  {
    id: 9,
    url: "/assets/Gallary/M7.jpeg",
    title: "Executive Boardroom with U-Shaped Seating",
    category: "Office",
    aspectRatio: "4/5"
  },
  {
    id: 10,
    url: "/assets/Gallary/M18.jpeg",
    title: "Modern Interior Stairwell",
    category: "Open Plan Design",
    aspectRatio: "3/2"
  },
  {
    id: 11,
    url: "/assets/Gallary/M17.jpeg",
    title: "Office Reception Area",
    category: "Modern Lobby",
    aspectRatio: "1/1"
  },
  {
    id: 12,
    url: "/assets/Gallary/M16.jpeg",
    title: "Commercial Lounge",
    category: "Modern Office Lobby",
    aspectRatio: "4/3"
  },
  {
    id: 13,
    url: "/assets/Gallary/M15.jpeg",
    title: "Executive Home Office",
    category: "Workspace Interior",
    aspectRatio: "4/3"
  },
  {
    id: 14,
    url: "/assets/Gallary/M14.jpeg",
    title: "Manar Mall Promenade",
    category: "Outdoor Architecture",
    aspectRatio: "4/3"
  },
  {
    id: 15,
    url: "/assets/Gallary/M13.jpeg",
    title: "Bathroom Showroom",
    category: "Fixture Display",
    aspectRatio: "4/3"
  },
  {
    id: 16,
    url: "/assets/Gallary/M12.jpeg",
    title: "Fast Casual Dining",
    category: "Food Service Interior",
    aspectRatio: "4/3"
  },
  {
    id: 17,
    url: "/assets/Gallary/M4.jpeg",
    title: "Retail Kiosk Design",
    category: "Interior Design",
    aspectRatio: "3/2"
  },
  {
    id: 18,
    url: "/assets/Gallary/M11.jpeg",
    title: "Modern Wall Design",
    category: "Parametric Design",
    aspectRatio: "4/5"
  },
];


const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center text-sm text-stone-500">
          <a href="/" className="hover:text-stone-800">Home</a>
          <span className="mx-2">/</span>
          <span className="text-stone-800">Gallery</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Our Gallery</h1>
        <p className="text-xl text-stone-600">Explore our collection of stunning interior designs</p>
      </div>


      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(200px,auto)]">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              style={{
                height: '100%',
                gridRow: `span ${Math.ceil(parseFloat(image.aspectRatio.split('/')[1]) / parseFloat(image.aspectRatio.split('/')[0]) * 2)}`
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-1">{image.title}</h3>
                  <p className="text-stone-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;