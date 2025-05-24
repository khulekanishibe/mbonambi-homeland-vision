
import React, { useEffect, useState } from 'react';

const BirdCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Reset moving state after mouse stops
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 150);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none'; // Hide default cursor

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto'; // Restore default cursor
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
      style={{
        left: mousePosition.x - 20,
        top: mousePosition.y - 15,
        transform: isMoving 
          ? 'scale(1.1) rotate(-5deg)' 
          : 'scale(1) rotate(0deg)',
      }}
    >
      <div className="relative">
        {/* Bird body */}
        <div className="relative">
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            className="drop-shadow-lg"
          >
            {/* Bird body */}
            <ellipse cx="20" cy="18" rx="8" ry="5" fill="#2d5016" />
            
            {/* Bird head */}
            <circle cx="28" cy="12" r="6" fill="#2d5016" />
            
            {/* Beak */}
            <polygon points="34,12 40,10 34,14" fill="#8B4513" />
            
            {/* Eye */}
            <circle cx="30" cy="10" r="1.5" fill="black" />
            
            {/* Animated wings */}
            <g className={isMoving ? 'animate-wing-flap' : ''}>
              {/* Left wing */}
              <ellipse 
                cx="15" 
                cy="15" 
                rx="12" 
                ry="4" 
                fill="#1a5035"
                style={{
                  transformOrigin: '20px 15px',
                }}
              />
              {/* Right wing */}
              <ellipse 
                cx="25" 
                cy="15" 
                rx="12" 
                ry="4" 
                fill="#1a5035"
                style={{
                  transformOrigin: '20px 15px',
                }}
              />
            </g>
            
            {/* Tail */}
            <ellipse cx="8" cy="20" rx="6" ry="3" fill="#1a5035" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BirdCursor;
