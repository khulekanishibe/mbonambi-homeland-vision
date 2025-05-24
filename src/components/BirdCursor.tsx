
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
      timeoutId = setTimeout(() => setIsMoving(false), 100);
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
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transform: isMoving ? 'scale(1.2) rotate(-5deg)' : 'scale(1) rotate(0deg)',
      }}
    >
      <Bird 
        size={24} 
        className="text-forest-600 drop-shadow-lg"
        fill="currentColor"
      />
    </div>
  );
};

export default BirdCursor;
