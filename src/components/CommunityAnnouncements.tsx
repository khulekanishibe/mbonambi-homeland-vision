
import React from 'react';
import { Calendar, Award, Drum } from 'lucide-react';

const CommunityAnnouncements = () => {
  const announcements = [
    {
      type: 'gathering',
      icon: Calendar,
      title: 'Inkosi\'s Gathering',
      date: 'July 2025',
      description: 'Join our traditional community gathering where the Inkosi will address the clan on important matters affecting our community and future development.',
      priority: 'high'
    },
    {
      type: 'partnership',
      icon: Award,
      title: 'RBM Partnership Milestone Recognized',
      date: 'Recent',
      description: 'Celebrating the successful partnership milestones achieved with Richards Bay Minerals, bringing significant benefits to our community development.',
      priority: 'medium'
    },
    {
      type: 'cultural',
      icon: Drum,
      title: 'Blacksmith Heritage Festival Coming Soon',
      date: 'Announced',
      description: 'Prepare for our upcoming festival celebrating the ancient blacksmithing traditions that made the Mbonambi people legendary across the region.',
      priority: 'high'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-forest-500 bg-forest-50';
      case 'medium': return 'border-l-navy-500 bg-navy-50';
      case 'low': return 'border-l-sandstone-500 bg-sandstone-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <section className="py-20 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Community Announcements
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Stay informed about important developments, gatherings, and celebrations in our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {announcements.map((announcement, index) => {
            const IconComponent = announcement.icon;
            return (
              <div 
                key={index}
                className={`p-8 rounded-lg border-l-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${getPriorityColor(announcement.priority)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <IconComponent className="w-6 h-6 text-navy-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-navy-800 mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-sm text-navy-600 mb-4 font-medium">
                      {announcement.date}
                    </p>
                    <p className="text-navy-600 leading-relaxed">
                      {announcement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-navy-700 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
            View All Announcements
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityAnnouncements;
