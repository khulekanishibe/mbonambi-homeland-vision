
import React, { useEffect, useState } from 'react';
import { Bird } from 'lucide-react';

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
        left: mousePosition.x - 16,
        top: mousePosition.y - 16,
        transform: isMoving 
          ? 'scale(1.3) rotate(-8deg) translateY(-2px)' 
          : 'scale(1) rotate(0deg) translateY(0px)',
      }}
    >
      <div className={`relative ${isMoving ? 'animate-pulse' : ''}`}>
        <Bird 
          size={32} 
          className={`text-forest-700 drop-shadow-xl transition-all duration-75 ${
            isMoving 
              ? 'animate-bounce text-forest-800' 
              : 'text-forest-600'
          }`}
          fill="currentColor"
          strokeWidth={1.5}
        />
        {/* Wing flap effect */}
        {isMoving && (
          <div className="absolute inset-0 animate-ping">
            <Bird 
              size={32} 
              className="text-forest-400 opacity-30"
              fill="none"
              strokeWidth={0.5}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BirdCursor;
