
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const CommunityEvents = () => {
  const { t } = useTranslation();

  const events = [
    {
      title: t('home.events.event1Title', 'Youth Skills Workshop'),
      date: t('home.events.event1Date', 'August 2025'),
      time: t('home.events.event1Time', '9:00 AM - 4:00 PM'),
      location: t('home.events.event1Location', 'Community Center'),
      description: t('home.events.event1Desc', 'Empowering our youth with practical skills and leadership development.'),
      attendees: t('home.events.event1Attendees', '100+ Youth Expected'),
      category: t('home.events.event1Category', 'Education'),
      color: 'bg-forest-100 text-forest-700'
    },
    {
      title: t('home.events.event2Title', 'Cultural Festival'),
      date: t('home.events.event2Date', 'September 2025'),
      time: t('home.events.event2Time', '8:00 AM - 6:00 PM'),
      location: t('home.events.event2Location', 'Traditional Grounds'),
      description: t('home.events.event2Desc', 'Annual celebration featuring traditional music, dance, and demonstrations.'),
      attendees: t('home.events.event2Attendees', '500+ Community Members'),
      category: t('home.events.event2Category', 'Cultural'),
      color: 'bg-orange-100 text-orange-700'
    },
    {
      title: t('home.events.event3Title', 'Agricultural Market'),
      date: t('home.events.event3Date', 'October 2025'),
      time: t('home.events.event3Time', '6:00 AM - 2:00 PM'),
      location: t('home.events.event3Location', 'Market Square'),
      description: t('home.events.event3Desc', 'Monthly market showcasing local produce and crafts.'),
      attendees: t('home.events.event3Attendees', '200+ Vendors & Visitors'),
      category: t('home.events.event3Category', 'Economic'),
      color: 'bg-navy-100 text-navy-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            {t('home.events.sectionTitle', 'Upcoming Events')}
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            {t('home.events.sectionDesc', 'Join us in celebrating our heritage and building our future together')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-sandstone-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-semibold text-xl text-navy-800">{event.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.color}`}>
                  {event.category}
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-navy-600">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center text-navy-600">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-navy-600">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-navy-600">
                  <Users className="w-5 h-5 mr-3" />
                  <span>{event.attendees}</span>
                </div>
              </div>
              
              <p className="text-navy-600 mb-6">{event.description}</p>
              
              <button className="w-full bg-forest-600 hover:bg-forest-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300">
                {t('home.events.registerButton', 'Register Interest')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityEvents;
