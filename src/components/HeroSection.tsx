
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mapRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      mapRef.current.style.transform = `translate(${xPos}px, ${yPos}px) scale(1.1)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Map with Parallax Effect */}
      <div 
        ref={mapRef}
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          backgroundImage: 'url("/lovable-uploads/8fdcf32a-dee5-4487-940e-dc3690b8193b.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/70 via-navy-800/60 to-forest-900/70" />
      
      {/* Content */}
      <div ref={heroRef} className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Mbonambi Community Trust
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-sandstone-100 mb-8 font-light animate-fade-in animation-delay-300">
            Guardians of our Land, Partners in Progress
          </p>
          <div className="animate-fade-in animation-delay-600">
            <button className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              Learn About Our Mission
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
