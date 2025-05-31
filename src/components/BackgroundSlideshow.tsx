
import React, { useState, useEffect } from 'react';

const BackgroundSlideshow = () => {
  const images = [
    '/lovable-uploads/09d14928-202d-4d23-8b8a-610a24803a10.png',
    '/lovable-uploads/8fdcf32a-dee5-4487-940e-dc3690b8193b.png',
    '/lovable-uploads/3efdb206-c0ec-4154-b473-b35153497292.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 -z-10">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url("${image}")`,
            transform: index === currentImageIndex ? 'scale(1.05)' : 'scale(1)',
            transition: 'opacity 2s ease-in-out, transform 10s ease-in-out'
          }}
        />
      ))}
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default BackgroundSlideshow;
