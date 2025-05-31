
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
      
      {/* Scroll-triggered images */}
      <ScrollTriggeredImages />
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AnnouncementsSection />
      <Footer />
    </div>
  );
};

export default Index;
