
import React, { useState, useEffect } from 'react';

const BackgroundSlideshow = () => {
  const images = [
    '/lovable-uploads/3efdb206-c0ec-4154-b473-b35153497292.png',
    '/lovable-uploads/8fdcf32a-dee5-4487-940e-dc3690b8193b.png',
    '/lovable-uploads/09d14928-202d-4d23-8b8a-610a24803a10.png',
    '/lovable-uploads/a5eca7bc-8a98-4431-9fc1-27fa5323c6b9.png',
    '/lovable-uploads/a7f2540f-7d63-4e91-bee7-def798d3adf9.png',
    '/lovable-uploads/c4c707af-3f2d-4811-9aa0-b81f491400cc.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 z-0">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Mbonambi Community ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-navy-900/60" />
    </div>
  );
};

export default BackgroundSlideshow;
