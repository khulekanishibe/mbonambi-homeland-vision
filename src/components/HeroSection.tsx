import React, { useRef, useEffect } from 'react';
import RotatingText from './RotatingText';
import WaveDivider from './ui/WaveDivider';
import { RevealText } from './ui/RevealText';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (waveRef.current) {
        const { top } = waveRef.current.getBoundingClientRect();
        const scrollPercent = Math.max(0, Math.min(100, (top / window.innerHeight) * 100));
        if (waveRef.current) {
          waveRef.current.style.transform = `translateY(${scrollPercent}%)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-theme">
      {/* Video Background */}
      <video autoPlay loop muted playsInline preload="auto" poster="/videos/vlcsnap-2025-07-13-14h05m58s976.png" className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Enhanced overlay for better text readability over slideshow */}
      
      
      {/* Content */}
      <div ref={heroRef} className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            <RevealText text="Mbonambi" /> <RotatingText
              texts={['Community', 'Trust', 'Land']}
              rotationInterval={4000}
              mainClassName="px-2 sm:px-2 md:px-3 bg-rotating-text-bg text-black overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
            />
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-sandstone-100 mb-8 font-light animate-fade-in animation-delay-300">
            Guardians of our land, partners in progress
          </p>
          <div className="text-base md:text-lg text-sandstone-200 mb-8 animate-fade-in animation-delay-600 max-w-3xl mx-auto">
            <p className="text-theme">
              From the legendary forges of our ancestors to the modern halls of progress, 
              the Mbonambi people continue their legacy of craftsmanship, unity, and resilience.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      <div ref={waveRef} className="absolute bottom-0 left-0 w-full">
        <WaveDivider color="rgb(10, 45, 1)" vignetteColor="rgb(0, 0, 0)" />
      </div>
    </section>
  );
};

export default HeroSection;
