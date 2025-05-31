
import React, { useEffect, useRef, useState } from 'react';

interface ScrollImageProps {
  src: string;
  alt: string;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}

const ScrollTriggeredImage: React.FC<ScrollImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  direction = 'up' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return 'translate-x-[-100px]';
        case 'right':
          return 'translate-x-[100px]';
        case 'down':
          return 'translate-y-[100px]';
        case 'up':
        default:
          return 'translate-y-[100px]';
      }
    }
    return 'translate-x-0 translate-y-0';
  };

  return (
    <div
      ref={imageRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransformClass()} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

const ScrollTriggeredImages = () => {
  return (
    <div className="relative z-10">
      {/* First set of images - in About section area */}
      <div className="absolute top-[120vh] left-8 w-64 h-48 opacity-80">
        <ScrollTriggeredImage
          src="/lovable-uploads/db7d8c40-6568-4ddb-8649-687bea3a6327.png"
          alt="Community meeting"
          direction="left"
        />
      </div>

      <div className="absolute top-[140vh] right-8 w-72 h-56 opacity-80">
        <ScrollTriggeredImage
          src="/lovable-uploads/9ed24b4c-5c9d-49cb-a15f-d7b31a96b03c.png"
          alt="Partnership ceremony"
          direction="right"
        />
      </div>

      {/* Second set of images - in Announcements section area */}
      <div className="absolute top-[200vh] left-16 w-60 h-44 opacity-75">
        <ScrollTriggeredImage
          src="/lovable-uploads/00378684-e3c1-470a-bc30-7f191cdf3818.png"
          alt="Leadership speaking"
          direction="up"
        />
      </div>

      <div className="absolute top-[220vh] right-12 w-68 h-52 opacity-75">
        <ScrollTriggeredImage
          src="/lovable-uploads/60a08da7-972e-4ea4-b5ad-020e0a6d4330.png"
          alt="Community gathering"
          direction="down"
        />
      </div>

      {/* Third set of images - scattered throughout */}
      <div className="absolute top-[180vh] left-1/2 transform -translate-x-1/2 w-56 h-42 opacity-70">
        <ScrollTriggeredImage
          src="/lovable-uploads/12072462-ddbf-4a15-a550-5c459a8e56a9.png"
          alt="Government partnership"
          direction="up"
        />
      </div>

      <div className="absolute top-[260vh] left-8 w-64 h-48 opacity-70">
        <ScrollTriggeredImage
          src="/lovable-uploads/86f44801-d1ec-4831-b394-72d7f4bf9e07.png"
          alt="Community leader"
          direction="left"
        />
      </div>

      <div className="absolute top-[280vh] right-16 w-72 h-54 opacity-70">
        <ScrollTriggeredImage
          src="/lovable-uploads/0b4da62b-6b0c-4735-965d-85fbbcff1cd5.png"
          alt="Community members"
          direction="right"
        />
      </div>
    </div>
  );
};

export default ScrollTriggeredImages;
