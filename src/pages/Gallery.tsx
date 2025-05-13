import React, { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    url: "/assets/Gallary/living-room.jpeg",
    title: "Modern Living Room",
    category: "Living Space",
    aspectRatio: "4/3"
  },
  {
    id: 2,
    url: "/assets/Gallary/kitchen.jpeg",
    title: "Minimalist Kitchen",
    category: "Kitchen",
    aspectRatio: "3/4"
  },
  {
    id: 3,
    url: "/assets/Gallary/Bedroom.jpeg",
    title: "Cozy Bedroom",
    category: "Bedroom",
    aspectRatio: "16/9"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    title: "Contemporary Bathroom",
    category: "Bathroom",
    aspectRatio: "1/1"
  },
  {
    id: 5,
    url: "/assets/Gallary/Dining.jpeg",
    title: "Dining Area",
    category: "Dining",
    aspectRatio: "3/2"
  },
  {
    id: 6,
    url: "/assets/Gallary/Office.jpeg",
    title: "Office Space",
    category: "Office",
    aspectRatio: "4/5"
  },
  {
    id: 7,
    url: "/assets/Gallary/Living.jpeg",
    title: "Modern Living Room",
    category: "Living Space",
    aspectRatio: "3/2"
  },
  {
    id: 8,
    url: "/assets/Gallary/Kitchen2.jpeg",
    title: "Minimalist Kitchen",
    category: "Kitchen",
    aspectRatio: "1/1"
  },
  {
    id: 9,
    url: "/assets/Gallary/Bedroom2.jpeg",
    title: "Cozy Bedroom",
    category: "Bedroom",
    aspectRatio: "4/3"
  }
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