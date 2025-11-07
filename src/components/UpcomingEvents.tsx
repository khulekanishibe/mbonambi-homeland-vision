
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Quarterly Community Meeting',
      date: 'March 15, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'KwaMbonambi Community Center',
      description: 'Join us for our quarterly meeting to discuss Trust developments, community projects, and upcoming initiatives.',
      attendees: '150+ Expected',
      priority: 'high',
      category: 'Meeting'
    },
    {
      title: 'Cultural Heritage Day Celebration',
      date: 'March 21, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Mbonambi Cultural Grounds',
      description: 'Celebrating our rich cultural heritage with traditional performances, storytelling, and community feast.',
      attendees: '500+ Expected',
      priority: 'medium',
      category: 'Cultural'
    },
    {
      title: 'Educational Scholarship Awards',
      date: 'April 2, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Local Secondary School',
      description: 'Annual scholarship award ceremony recognizing academic excellence and supporting future community leaders.',
      attendees: '80+ Students & Families',
      priority: 'high',
      category: 'Education'
    },
    {
      title: 'Infrastructure Development Update',
      date: 'April 18, 2024',
      time: '11:00 AM - 1:00 PM',
      location: 'Trust Offices',
      description: 'Progress update on current infrastructure projects and planning for upcoming development initiatives.',
      attendees: '50+ Stakeholders',
      priority: 'medium',
      category: 'Development'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Meeting': return 'bg-mbonambi-lightGray text-mbonambi-darkGray';
      case 'Cultural': return 'bg-mbonambi-lightGray text-mbonambi-darkGray';
      case 'Education': return 'bg-mbonambi-lightGray text-mbonambi-darkGray';
      case 'Development': return 'bg-mbonambi-lightGray text-mbonambi-darkGray';
      default: return 'bg-mbonambi-lightGray text-mbonambi-darkGray';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-mbonambi-darkGray mb-4">
            Upcoming Events
          </h2>
          <p className="text-mbonambi-mediumGray text-lg max-w-2xl mx-auto">
            Mark your calendar for these important community gatherings and celebrations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg border-l-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${getPriorityColor(event.priority)}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-mbonambi-darkGray text-lg">{event.title}</h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(event.category)}`}>
                  {event.category}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-mbonambi-mediumGray">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-mbonambi-mediumGray">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-mbonambi-mediumGray">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-mbonambi-mediumGray">
                  <Users className="w-4 h-4 mr-2" />
                  {event.attendees}
                </div>
              </div>
              
              <p className="text-mbonambi-mediumGray text-sm leading-relaxed">
                {event.description}
              </p>
              
              <div className="mt-4">
                <button className="bg-mbonambi-mauve hover:bg-mbonambi-mauve/80 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-300">
                  Register Interest
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
