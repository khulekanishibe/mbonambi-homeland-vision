
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EventsCalendar from '../components/EventsCalendar';
import UpcomingEvents from '../components/UpcomingEvents';

const CommunityEvents = () => {
  return (
    <div className="min-h-screen bg-sandstone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 via-navy-800 to-forest-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Community Events
          </h1>
          <p className="text-lg md:text-xl text-sandstone-100 mb-8 max-w-3xl mx-auto">
            Stay connected with our community through meetings, cultural celebrations, 
            and development initiatives happening throughout KwaMbonambi.
          </p>
        </div>
      </section>

      <UpcomingEvents />
      <EventsCalendar />
      
      <Footer />
    </div>
  );
};

export default CommunityEvents;
