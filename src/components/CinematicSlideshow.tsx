import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  animation: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/hero-slideshow/housing-development.jpg',
    title: 'Building Our Future',
    subtitle: 'Modern housing developments bringing dignity and security to Mbonambi families',
    animation: 'ken-burns'
  },
  {
    id: 2,
    image: '/images/hero-slideshow/rural-landscape.jpg',
    title: 'Our Fertile Land',
    subtitle: 'Vast agricultural heritage sustaining our community for generations',
    animation: 'pan-right'
  },
  {
    id: 3,
    image: '/images/hero-slideshow/plant-growth.jpg',
    title: 'Seeds of Tomorrow',
    subtitle: 'Every small beginning holds the promise of transformative growth',
    animation: 'dramatic-zoom'
  },
  {
    id: 4,
    image: '/images/hero-slideshow/town-aerial.jpg',
    title: 'Community Progress',
    subtitle: 'Strategic development transforms our homeland into thriving centers',
    animation: 'aerial-descent'
  },
  {
    id: 5,
    image: '/images/hero-slideshow/city-aerial.jpg',
    title: 'Connected Future',
    subtitle: 'Modern infrastructure linking our community to endless opportunities',
    animation: 'zoom-out'
  },
  {
    id: 6,
    image: '/images/hero-slideshow/child-globe.jpg',
    title: 'Next Generation',
    subtitle: 'Our youth carry the world\'s potential, ready to lead with wisdom',
    animation: 'focus-pull'
  },
  {
    id: 7,
    image: '/images/hero-slideshow/community-water.jpg',
    title: 'Life-Giving Resources',
    subtitle: 'Clean water flows through our community, bringing health and hope',
    animation: 'pan-left'
  }
];

interface CinematicSlideshowProps {
  onSlideChange?: (slideIndex: number) => void;
  autoPlay?: boolean;
  interval?: number;
}

const CinematicSlideshow: React.FC<CinematicSlideshowProps> = ({
  onSlideChange,
  autoPlay = true,
  interval = 8000
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => {
      const next = (prev + 1) % slides.length;
      onSlideChange?.(next);
      return next;
    });
  }, [onSlideChange]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    onSlideChange?.(index);
  };

  const pauseSlideshow = () => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeSlideshow = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextSlide, interval);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide, isPlaying, interval, nextSlide]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={pauseSlideshow}
      onMouseLeave={resumeSlideshow}
    >
      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 w-full h-16 md:h-20 bg-black z-30 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 bg-black z-30 opacity-60"></div>
      
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          >
            {/* Background image with cinematic effects */}
            <div
              className={`w-full h-full bg-cover bg-center bg-no-repeat transform transition-transform duration-8000 ease-in-out ${
                index === currentSlide ? getAnimationClass(slide.animation) : ''
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10"></div>
          </div>
        ))}
      </div>
      
      {/* Progress indicators */}
      <div className="absolute bottom-24 md:bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-1 bg-white/30 rounded-full transition-all duration-300 hover:bg-white/50 ${
              index === currentSlide ? 'w-12 bg-white/60' : 'w-8'
            }`}
          >
            {index === currentSlide && (
              <div 
                className="absolute top-0 left-0 h-full bg-mbonambi-mauve rounded-full animate-progress"
                style={{
                  animation: `progressBar ${interval}ms linear`
                }}
              />
            )}
          </button>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-40 p-2"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-40 p-2"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide content overlay */}
      <div className="absolute bottom-32 md:bottom-36 left-8 right-8 text-center z-40">
        <div 
          className={`transition-all duration-1000 ease-in-out transform ${
            currentSlide >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading">
            {slides[currentSlide]?.title}
          </h3>
          <p className="text-lg md:text-xl text-mbonambi-lightGray font-light max-w-4xl mx-auto">
            {slides[currentSlide]?.subtitle}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .duration-2000 { transition-duration: 2000ms; }
        .duration-8000 { transition-duration: 8000ms; }
        .animate-progress { animation-duration: ${interval}ms; }
      `}</style>
    </div>
  );
};

// Animation classes for different cinematic effects
const getAnimationClass = (animation: string): string => {
  switch (animation) {
    case 'ken-burns':
      return 'scale-110 animate-ken-burns';
    case 'pan-right':
      return 'scale-120 animate-pan-right';
    case 'pan-left':
      return 'scale-120 animate-pan-left';
    case 'dramatic-zoom':
      return 'scale-100 animate-dramatic-zoom';
    case 'aerial-descent':
      return 'scale-130 animate-aerial-descent';
    case 'zoom-out':
      return 'scale-140 animate-zoom-out';
    case 'focus-pull':
      return 'scale-110 animate-focus-pull';
    default:
      return 'scale-110 animate-ken-burns';
  }
};

export default CinematicSlideshow;