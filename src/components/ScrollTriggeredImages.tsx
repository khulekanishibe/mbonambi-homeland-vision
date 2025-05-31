
import React, { useEffect, useRef, useState } from 'react';

interface ScrollImageProps {
  src: string;
  alt: string;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  fadeOutThreshold?: number;
}

const ScrollTriggeredImage: React.FC<ScrollImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  direction = 'up',
  fadeOutThreshold = 0.8
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    const handleScroll = () => {
      if (imageRef.current && isVisible) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate opacity based on scroll position
        if (elementTop < windowHeight && elementTop > -elementHeight) {
          const visibleRatio = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
          
          if (visibleRatio < 0.15) {
            setOpacity(0);
          } else if (visibleRatio > fadeOutThreshold) {
            // Start fading out when past threshold
            const fadeOutProgress = (visibleRatio - fadeOutThreshold) / (1 - fadeOutThreshold);
            setOpacity(Math.max(0, 1 - fadeOutProgress * 2));
          } else {
            // Fade in phase
            const fadeInProgress = (visibleRatio - 0.15) / (fadeOutThreshold - 0.15);
            setOpacity(Math.min(0.9, fadeInProgress));
          }
        } else {
          setOpacity(0);
        }
      }
    };

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, fadeOutThreshold]);

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return 'translate-x-[-40px]';
        case 'right':
          return 'translate-x-[40px]';
        case 'down':
          return 'translate-y-[40px]';
        case 'up':
        default:
          return 'translate-y-[40px]';
      }
    }
    return 'translate-x-0 translate-y-0';
  };

  return (
    <div
      ref={imageRef}
      className={`transition-all duration-1000 ease-out ${getTransformClass()} ${className}`}
      style={{ opacity }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain drop-shadow-2xl"
      />
    </div>
  );
};

const ScrollTriggeredImages = () => {
  return (
    <div className="relative z-30 pointer-events-none">
      {/* About section overlays - positioned to work with the padded content */}
      <div className="absolute top-[120vh] left-6 w-80 h-60 md:left-12 md:w-96 md:h-72">
        <ScrollTriggeredImage
          src="/lovable-uploads/a5a05d20-5142-4894-9114-ccc138784ccd.png"
          alt="Martin Mbuyazi - Trust Administrator"
          direction="left"
          fadeOutThreshold={0.7}
        />
      </div>

      <div className="absolute top-[140vh] right-6 w-72 h-48 md:right-12 md:w-80 md:h-56">
        <ScrollTriggeredImage
          src="/lovable-uploads/f71d2873-1e55-435e-b2da-2642e37bdf5a.png"
          alt="Community stakeholders meeting discussing Trust initiatives"
          direction="right"
          fadeOutThreshold={0.6}
        />
      </div>

      {/* Center overlay for mid-content */}
      <div className="absolute top-[160vh] left-1/2 transform -translate-x-1/2 w-64 h-48 md:w-80 md:h-60">
        <ScrollTriggeredImage
          src="/lovable-uploads/7a881d5e-75d8-4b4e-b1e4-decb2092efa3.png"
          alt="Trust representative addressing community members"
          direction="up"
          fadeOutThreshold={0.75}
        />
      </div>

      {/* Announcements section overlays */}
      <div className="absolute top-[200vh] left-8 w-72 h-54 md:left-16 md:w-88 md:h-66">
        <ScrollTriggeredImage
          src="/lovable-uploads/5d45910c-f946-4613-9f9a-67afe0f3fa16.png"
          alt="Trust leadership during formal meeting"
          direction="left"
          fadeOutThreshold={0.65}
        />
      </div>

      <div className="absolute top-[220vh] right-8 w-96 h-64 md:right-16 md:w-[28rem] md:h-80">
        <ScrollTriggeredImage
          src="/lovable-uploads/a5eca7bc-8a98-4431-9fc1-27fa5323c6b9.png"
          alt="Community representatives and stakeholders group photo"
          direction="right"
          fadeOutThreshold={0.8}
        />
      </div>

      {/* RBM cheque handover images */}
      <div className="absolute top-[250vh] left-10 w-96 h-64 md:left-20 md:w-[30rem] md:h-80">
        <ScrollTriggeredImage
          src="/lovable-uploads/a7f2540f-7d63-4e91-bee7-def798d3adf9.png"
          alt="RBM cheque handover ceremony - R74.5 million funding"
          direction="up"
          fadeOutThreshold={0.7}
        />
      </div>

      <div className="absolute top-[280vh] right-6 w-80 h-60 md:right-12 md:w-96 md:h-72">
        <ScrollTriggeredImage
          src="/lovable-uploads/cba1884b-c693-4a87-9229-8434fe41c99e.png"
          alt="Trust Administrator speaking at community event"
          direction="down"
          fadeOutThreshold={0.6}
        />
      </div>

      {/* Additional celebration and formal ceremony images */}
      <div className="absolute top-[310vh] left-8 w-[28rem] h-72 md:left-16 md:w-[32rem] md:h-80">
        <ScrollTriggeredImage
          src="/lovable-uploads/c4c707af-3f2d-4811-9aa0-b81f491400cc.png"
          alt="Community celebration of RBM funding milestone"
          direction="left"
          fadeOutThreshold={0.65}
        />
      </div>

      <div className="absolute top-[330vh] right-10 w-72 h-54 md:right-20 md:w-80 md:h-60">
        <ScrollTriggeredImage
          src="/lovable-uploads/d579de73-44b8-48c8-9c3e-ff3434164816.png"
          alt="Community member addressing Trust meeting"
          direction="right"
          fadeOutThreshold={0.7}
        />
      </div>
    </div>
  );
};

export default ScrollTriggeredImages;
