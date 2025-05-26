
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AnnouncementsSection from '../components/AnnouncementsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Mining-themed background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sandstone-100 via-sandstone-200 to-sandstone-300"></div>
        
        {/* Layered earth texture */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sandstone-400/30 to-sandstone-600/40"></div>
        </div>
        
        {/* Mining shaft lines pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="mining-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#8B4513" strokeWidth="1"/>
                <circle cx="50" cy="50" r="2" fill="#8B4513"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mining-grid)" />
          </svg>
        </div>
        
        {/* Subtle rock formations */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sandstone-400/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-sandstone-300/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-sandstone-400/15 blur-2xl"></div>
      </div>
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AnnouncementsSection />
      <Footer />
    </div>
  );
};

export default Index;
