
import React, { useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Enhanced overlay for better text readability over slideshow */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-800/70 to-forest-900/80 z-10" />
      
      {/* Content */}
      <div ref={heroRef} className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Mbonambi Community Public Benefit Trust
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-sandstone-100 mb-8 font-light animate-fade-in animation-delay-300">
            Empowering Our Community Through Transparent Development and Sustainable Growth
          </p>
          <div className="animate-fade-in animation-delay-600">
            <button className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              Learn About Our Impact
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
