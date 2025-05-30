
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AnnouncementsSection from '../components/AnnouncementsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Local landscape background image */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/lovable-uploads/09d14928-202d-4d23-8b8a-610a24803a10.png")'
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
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
