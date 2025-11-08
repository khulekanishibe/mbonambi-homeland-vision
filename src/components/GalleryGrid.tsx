import { useState } from 'react';
import { X } from 'lucide-react';

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: '/lovable-uploads/a5a05d20-5142-4894-9114-ccc138784ccd.png',
      title: 'Trust Administrator Martin Mbuyazi',
      category: 'Leadership'
    },
    {
      src: '/lovable-uploads/a5eca7bc-8a98-4431-9fc1-27fa5323c6b9.png',
      title: 'Community Representatives Meeting',
      category: 'Community'
    },
    {
      src: '/lovable-uploads/a7f2540f-7d63-4e91-bee7-def798d3adf9.png',
      title: 'RBM Funding Handover Ceremony',
      category: 'Partnerships'
    },
    {
      src: '/lovable-uploads/c4c707af-3f2d-4811-9aa0-b81f491400cc.png',
      title: 'Community Celebration',
      category: 'Events'
    },
    {
      src: '/lovable-uploads/f71d2873-1e55-435e-b2da-2642e37bdf5a.png',
      title: 'Community Stakeholders Discussion',
      category: 'Meetings'
    },
    {
      src: '/lovable-uploads/7a881d5e-75d8-4b4e-b1e4-decb2092efa3.png',
      title: 'Trust Representative Address',
      category: 'Leadership'
    }
  ];

  const categories = ['All', 'Leadership', 'Community', 'Partnerships', 'Events', 'Meetings'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-navy-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
