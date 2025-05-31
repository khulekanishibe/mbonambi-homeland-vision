
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
            setOpacity(Math.max(0, 1 - fadeOutProgress * 1.5));
          } else {
            // Fade in phase
            const fadeInProgress = (visibleRatio - 0.15) / (fadeOutThreshold - 0.15);
            setOpacity(Math.min(0.85, fadeInProgress));
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
          return 'translate-x-[-30px]';
        case 'right':
          return 'translate-x-[30px]';
        case 'down':
          return 'translate-y-[30px]';
        case 'up':
        default:
          return 'translate-y-[30px]';
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
        className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-white/30"
      />
    </div>
  );
};

const ScrollTriggeredImages = () => {
  return (
    <div className="relative z-30 pointer-events-none">
      {/* Images positioned to overlap with text content */}
      
      {/* About section overlays - positioned to work with the padded content */}
      <div className="absolute top-[120vh] left-6 w-72 h-48 md:left-12 md:w-80 md:h-56">
        <ScrollTriggeredImage
          src="/lovable-uploads/db7d8c40-6568-4ddb-8649-687bea3a6327.png"
          alt="Community meeting - leadership discussing partnership agreements"
          direction="left"
          fadeOutThreshold={0.7}
        />
      </div>

      <div className="absolute top-[140vh] right-6 w-68 h-44 md:right-12 md:w-76 md:h-52">
        <ScrollTriggeredImage
          src="/lovable-uploads/9ed24b4c-5c9d-49cb-a15f-d7b31a96b03c.png"
          alt="Partnership ceremony - formal cheque handover event"
          direction="right"
          fadeOutThreshold={0.6}
        />
      </div>

      {/* Center overlay for mid-content */}
      <div className="absolute top-[160vh] left-1/2 transform -translate-x-1/2 w-56 h-40 md:w-72 md:h-48">
        <ScrollTriggeredImage
          src="/lovable-uploads/00378684-e3c1-470a-bc30-7f191cdf3818.png"
          alt="Leadership speaking at community gathering"
          direction="up"
          fadeOutThreshold={0.75}
        />
      </div>

      {/* Announcements section overlays - adjusted for content spacing */}
      <div className="absolute top-[200vh] left-8 w-64 h-42 md:left-16 md:w-80 md:h-54">
        <ScrollTriggeredImage
          src="/lovable-uploads/60a08da7-972e-4ea4-b5ad-020e0a6d4330.png"
          alt="Community gathering for project announcements"
          direction="left"
          fadeOutThreshold={0.65}
        />
      </div>

      <div className="absolute top-[220vh] right-8 w-60 h-38 md:right-16 md:w-72 md:h-46">
        <ScrollTriggeredImage
          src="/lovable-uploads/12072462-ddbf-4a15-a550-5c459a8e56a9.png"
          alt="Government partnership meeting"
          direction="right"
          fadeOutThreshold={0.8}
        />
      </div>

      {/* Additional overlays for visual interest */}
      <div className="absolute top-[250vh] left-10 w-68 h-46 md:left-20 md:w-84 md:h-58">
        <ScrollTriggeredImage
          src="/lovable-uploads/86f44801-d1ec-4831-b394-72d7f4bf9e07.png"
          alt="Community leader addressing stakeholders"
          direction="up"
          fadeOutThreshold={0.7}
        />
      </div>

      <div className="absolute top-[280vh] right-6 w-72 h-50 md:right-12 md:w-88 md:h-62">
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
