
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
          
          if (visibleRatio < 0.2) {
            setOpacity(0);
          } else if (visibleRatio > fadeOutThreshold) {
            // Start fading out when past threshold
            const fadeOutProgress = (visibleRatio - fadeOutThreshold) / (1 - fadeOutThreshold);
            setOpacity(Math.max(0, 1 - fadeOutProgress));
          } else {
            // Fade in phase
            const fadeInProgress = (visibleRatio - 0.2) / (fadeOutThreshold - 0.2);
            setOpacity(Math.min(1, fadeInProgress));
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
          return 'translate-x-[-50px]';
        case 'right':
          return 'translate-x-[50px]';
        case 'down':
          return 'translate-y-[50px]';
        case 'up':
        default:
          return 'translate-y-[50px]';
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
        className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-white/20"
      />
    </div>
  );
};

const ScrollTriggeredImages = () => {
  return (
    <div className="relative z-30 pointer-events-none">
      {/* Images positioned to overlap with text content */}
      
      {/* About section overlays */}
      <div className="absolute top-[100vh] left-4 w-80 h-60 md:left-8 md:w-96 md:h-72">
        <ScrollTriggeredImage
          src="/lovable-uploads/db7d8c40-6568-4ddb-8649-687bea3a6327.png"
          alt="Community meeting - leadership discussing partnership agreements"
          direction="left"
          fadeOutThreshold={0.7}
        />
      </div>

      <div className="absolute top-[130vh] right-4 w-72 h-56 md:right-8 md:w-88 md:h-64">
        <ScrollTriggeredImage
          src="/lovable-uploads/9ed24b4c-5c9d-49cb-a15f-d7b31a96b03c.png"
          alt="Partnership ceremony - formal cheque handover event"
          direction="right"
          fadeOutThreshold={0.6}
        />
      </div>

      {/* Center overlay for mid-content */}
      <div className="absolute top-[160vh] left-1/2 transform -translate-x-1/2 w-64 h-48 md:w-80 md:h-60">
        <ScrollTriggeredImage
          src="/lovable-uploads/00378684-e3c1-470a-bc30-7f191cdf3818.png"
          alt="Leadership speaking at community gathering"
          direction="up"
          fadeOutThreshold={0.75}
        />
      </div>

      {/* Announcements section overlays */}
      <div className="absolute top-[190vh] left-6 w-76 h-52 md:left-12 md:w-92 md:h-64">
        <ScrollTriggeredImage
          src="/lovable-uploads/60a08da7-972e-4ea4-b5ad-020e0a6d4330.png"
          alt="Community gathering for project announcements"
          direction="left"
          fadeOutThreshold={0.65}
        />
      </div>

      <div className="absolute top-[210vh] right-6 w-68 h-50 md:right-12 md:w-84 md:h-62">
        <ScrollTriggeredImage
          src="/lovable-uploads/12072462-ddbf-4a15-a550-5c459a8e56a9.png"
          alt="Government partnership meeting"
          direction="right"
          fadeOutThreshold={0.8}
        />
      </div>

      {/* Additional overlays for visual interest */}
      <div className="absolute top-[240vh] left-8 w-72 h-54 md:left-16 md:w-88 md:h-66">
        <ScrollTriggeredImage
          src="/lovable-uploads/86f44801-d1ec-4831-b394-72d7f4bf9e07.png"
          alt="Community leader addressing stakeholders"
          direction="up"
          fadeOutThreshold={0.7}
        />
      </div>

      <div className="absolute top-[270vh] right-4 w-80 h-58 md:right-8 md:w-96 md:h-70">
        <ScrollTriggeredImage
          src="/lovable-uploads/0b4da62b-6b0c-4735-965d-85fbbcff1cd5.png"
          alt="Community members during formal meeting"
          direction="down"
          fadeOutThreshold={0.6}
        />
      </div>
    </div>
  );
};

export default ScrollTriggeredImages;
