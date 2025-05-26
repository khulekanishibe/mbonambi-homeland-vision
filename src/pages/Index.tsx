
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AnnouncementsSection from '../components/AnnouncementsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Mining operation background image */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/lovable-uploads/3efdb206-c0ec-4154-b473-b35153497292.png")'
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
