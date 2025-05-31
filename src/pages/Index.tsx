
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AnnouncementsSection from '../components/AnnouncementsSection';
import Footer from '../components/Footer';
import BackgroundSlideshow from '../components/BackgroundSlideshow';
import ScrollTriggeredImages from '../components/ScrollTriggeredImages';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background slideshow */}
      <BackgroundSlideshow />
      
      {/* Scroll-triggered images that overlap content */}
      <ScrollTriggeredImages />
      
      {/* Main content with proper z-index layering */}
      <div className="relative z-40">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <AnnouncementsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
