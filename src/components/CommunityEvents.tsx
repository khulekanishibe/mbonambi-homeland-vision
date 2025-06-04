
import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const CommunityEvents = () => {
  const events = [
    {
      title: 'Youth Skills Workshop',
      date: 'August 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'KwaMbonambi Community Center',
      description: 'Empowering our youth with practical skills including traditional crafts, modern technology, and leadership development.',
      attendees: '100+ Youth Expected',
      category: 'Education',
      color: 'bg-forest-100 text-forest-700'
    },
    {
      title: 'Cultural Festival',
      date: 'October 2025',
      time: '8:00 AM - 6:00 PM',
      location: 'Traditional Grounds',
      description: 'Annual celebration of Mbonambi heritage featuring traditional music, dance, storytelling, and blacksmithing demonstrations.',
      attendees: '500+ Community Members',
      category: 'Cultural',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      title: 'Agricultural Market',
      date: 'September 2025',
      time: '6:00 AM - 2:00 PM',
      location: 'Central Market Square',
      description: 'Monthly community market showcasing local produce, crafts, and traditional foods. Supporting local entrepreneurs.',
      attendees: '200+ Vendors & Visitors',
      category: 'Economic',
      color: 'bg-navy-100 text-navy-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Upcoming Events
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Join us in celebrating our heritage and building our future together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-sandstone-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
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
              
              <p className="text-navy-600 leading-relaxed mb-6">
                {event.description}
              </p>
              
              <button className="w-full bg-forest-600 hover:bg-forest-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300">
                Register Interest
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityEvents;
