import React from 'react';

interface WaveDividerProps {
  color: string;
  vignetteColor: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ color, vignetteColor }) => {
  const gradientId = "wave-vignette";
  return (
    <div className="absolute bottom-0 left-0 w-full h-24">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: vignetteColor, stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path d="M0,70 C300,100 1140,0 1440,70 L1440,100 L0,100 Z" fill={`url(#${gradientId})`}></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
