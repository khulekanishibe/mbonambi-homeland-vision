
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Award, Drum } from 'lucide-react';

const CommunityAnnouncements = () => {
  const { t } = useTranslation();

  const announcements = [
    {
      type: 'gathering',
      icon: Calendar,
      title: t('home.announcements.announcement1Title', 'Inkosi\'s Gathering'),
      date: t('home.announcements.announcement1Date', 'July 2025'),
      description: t('home.announcements.announcement1Desc', 'Join our traditional community gathering where important matters will be addressed.'),
      priority: 'high'
    },
    {
      type: 'partnership',
      icon: Award,
      title: t('home.announcements.announcement2Title', 'Partnership Milestone'),
      date: t('home.announcements.announcement2Date', 'Recent'),
      description: t('home.announcements.announcement2Desc', 'Celebrating successful partnership milestones achieved in community development.'),
      priority: 'medium'
    },
    {
      type: 'cultural',
      icon: Drum,
      title: t('home.announcements.announcement3Title', 'Heritage Festival'),
      date: t('home.announcements.announcement3Date', 'Coming Soon'),
      description: t('home.announcements.announcement3Desc', 'Prepare for our upcoming festival celebrating blacksmithing traditions.'),
      priority: 'high'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-forest-500 bg-forest-50';
      case 'medium': return 'border-l-navy-500 bg-navy-50';
      default: return 'border-l-sandstone-500 bg-sandstone-50';
    }
  };

  return (
    <section className="py-20 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            {t('home.announcements.sectionTitle', 'Community Announcements')}
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            {t('home.announcements.sectionDesc', 'Stay informed about important developments and celebrations in our community')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {announcements.map((announcement, index) => {
            const IconComponent = announcement.icon;
            return (
              <div 
                key={index}
                className={`p-8 rounded-lg border-l-4 shadow-md hover:shadow-lg transition-all duration-300 ${getPriorityColor(announcement.priority)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <IconComponent className="w-6 h-6 text-navy-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-navy-800 mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-sm text-navy-600 mb-4 font-medium">
                      {announcement.date}
                    </p>
                    <p className="text-navy-600">
                      {announcement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityAnnouncements;
