import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="animated-gradient w-full h-full" />
      <style jsx>{`
        .animated-gradient {
          background: linear-gradient(45deg, #236b47, #113523, #236b47, #1a5035);
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
        }

        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
