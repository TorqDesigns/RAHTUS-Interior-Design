import React from 'react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    title: "Modern Living Room",
    category: "Living Space"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    title: "Minimalist Kitchen",
    category: "Kitchen"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
    title: "Cozy Bedroom",
    category: "Bedroom"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
    title: "Contemporary Bathroom",
    category: "Bathroom"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
    title: "Dining Area",
    category: "Dining"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg",
    title: "Office Space",
    category: "Office"
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
    title: "Modern Living Room",
    category: "Living Space"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
    title: "Minimalist Kitchen",
    category: "Kitchen"
  },
  {
    id: 9,
    url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    title: "Cozy Bedroom",
    category: "Bedroom"
  }
];

const Gallery: React.FC = () => {
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
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Our Gallery</h1>
        <p className="text-xl text-stone-600">Explore our collection of stunning interior designs</p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3]">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
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