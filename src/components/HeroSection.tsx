import { useRef, useEffect, useState } from 'react';
import RotatingText from './RotatingText';
import WaveDivider from './ui/WaveDivider';
import CinematicSlideshow from './CinematicSlideshow';
import './CinematicSlideshow.css';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Slide-specific content that changes with the slideshow
  const slideContent = [
    {
      mainTitle: "Mbonambi",
      rotatingTexts: ['Community', 'Development', 'Progress'],
      subtitle: "From the legendary forges of our ancestors to modern halls of progress"
    },
    {
      mainTitle: "Mbonambi", 
      rotatingTexts: ['Heritage', 'Agriculture', 'Abundance'],
      subtitle: "Fertile grounds that have sustained the Mbonambi people for generations"
    },
    {
      mainTitle: "Mbonambi",
      rotatingTexts: ['Growth', 'Potential', 'Future'],
      subtitle: "Every small beginning holds the promise of transformative change"
    },
    {
      mainTitle: "Mbonambi",
      rotatingTexts: ['Unity', 'Progress', 'Vision'],
      subtitle: "Strategic development transforms our homeland into thriving centers"
    },
    {
      mainTitle: "Mbonambi",
      rotatingTexts: ['Innovation', 'Opportunity', 'Growth'],
      subtitle: "Modern infrastructure linking our community to endless possibilities"
    },
    {
      mainTitle: "Mbonambi",
      rotatingTexts: ['Leadership', 'Wisdom', 'Hope'],
      subtitle: "Our youth carry the world's potential, ready to lead with ancestral wisdom"
    },
    {
      mainTitle: "Mbonambi",
      rotatingTexts: ['Water', 'Health', 'Community'],
      subtitle: "Essential resources bringing vitality and hope to every household"
    }
  ];

  const currentContent = slideContent[currentSlideIndex] || slideContent[0];

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

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlideIndex(slideIndex);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-mbonambi-darkGray">
      {/* Cinematic Slideshow Background */}
      <CinematicSlideshow 
        onSlideChange={handleSlideChange}
        autoPlay={true}
        interval={8000}
      />
      
      {/* Fallback Video Background (if slideshow fails to load) */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Content */}
      <div ref={heroRef} className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {currentContent.mainTitle}
          </h1>
          
          {/* Rotating Text Accent */}
          <div className="mb-8 h-16 flex justify-center">
            <RotatingText
              texts={currentContent.rotatingTexts}
              rotationInterval={2700}
              mainClassName="px-4 md:px-6 bg-mbonambi-mauve text-white font-semibold text-2xl md:text-3xl rounded-lg py-2"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-mbonambi-lightGray mb-8 font-light">
            Guardians of our land, partners in progress
          </p>
          
          {/* Slide Subtitle */}
          <div className="text-base md:text-lg text-white mb-10 max-w-3xl mx-auto">
            <p className="transition-all duration-700 ease-in-out">
              {currentContent.subtitle}
            </p>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-mbonambi-mauve hover:bg-mbonambi-mauve/80 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Our Community
            </button>
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div ref={waveRef} className="absolute bottom-0 left-0 w-full z-20">
        <WaveDivider color="#37353E" vignetteColor="rgb(0, 0, 0)" />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;