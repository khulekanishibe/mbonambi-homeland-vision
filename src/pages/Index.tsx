
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. About Section */}
      <section id="about">
        <AboutSection />
      </section>
      
      {/* 3. Clan History Timeline */}
      <section id="history">
        <ClanHistoryTimeline />
      </section>
      
      {/* 4. Community Announcements */}
      <section id="announcements">
        <CommunityAnnouncements />
      </section>
      
      {/* 5. Community Events */}
      <section id="events">
        <CommunityEvents />
      </section>
      
      {/* 6. Photo Gallery */}
      <section id="gallery">
        <CommunityPhotoGallery />
      </section>
      
      {/* 7. Trust Overview Cards */}
      <section id="trusts">
        <TrustOverviewCards />
      </section>
      
      {/* 8. Get Involved */}
      <section id="get-involved">
        <GetInvolvedCommunity />
      </section>
      
      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
