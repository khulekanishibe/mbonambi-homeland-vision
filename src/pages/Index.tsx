
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ClanHistoryTimeline from '../components/ClanHistoryTimeline';
import CommunityAnnouncements from '../components/CommunityAnnouncements';
import CommunityEvents from '../components/CommunityEvents';
import CommunityPhotoGallery from '../components/CommunityPhotoGallery';
import TrustOverviewCards from '../components/TrustOverviewCards';
import GetInvolvedCommunity from '../components/GetInvolvedCommunity';
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
      
      {/* Main content with proper z-index layering and spacing for image overlays */}
      <div className="relative z-40">
        <Navigation />
        <HeroSection />
        
        {/* About section with extra padding to accommodate overlapping images */}
        <div className="py-20 md:py-32" id="about">
          <AboutSection />
        </div>
        
        {/* Clan History Timeline */}
        <div className="py-20 md:py-32" id="history">
          <ClanHistoryTimeline />
        </div>
        
        {/* Community Announcements */}
        <div className="py-20 md:py-32" id="announcements">
          <CommunityAnnouncements />
        </div>
        
        {/* Upcoming Events */}
        <div className="py-20 md:py-32" id="events">
          <CommunityEvents />
        </div>
        
        {/* Photo Gallery Preview */}
        <div className="py-20 md:py-32" id="gallery">
          <CommunityPhotoGallery />
        </div>
        
        {/* Trust Overview Cards */}
        <div className="py-20 md:py-32" id="trusts">
          <TrustOverviewCards />
        </div>
        
        {/* Get Involved Section */}
        <div className="py-20 md:py-32" id="get-involved">
          <GetInvolvedCommunity />
        </div>
        
        {/* Additional spacing for scroll effects */}
        <div className="py-20 md:py-32"></div>
        
        <div id="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
