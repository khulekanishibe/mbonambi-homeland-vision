
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Scale, Users, Handshake, FileText, ArrowRight, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const CommunityAnnouncements = () => {
  const { t } = useTranslation();

  const announcements = [
    {
      id: 1,
      category: 'meeting',
      priority: 'high',
      icon: Users,
      title: t('announcements.meeting.title', 'Quarterly Community Meeting - March 2025'),
      summary: t('announcements.meeting.summary', 'Join us for updates on trust activities, RBM partnership progress, and community development initiatives.'),
      date: '2025-03-15',
      cta: t('announcements.meeting.cta', 'Register to Attend'),
      urgent: true
    },
    {
      id: 2,
      category: 'legal',
      priority: 'high',
      icon: Scale,
      title: t('announcements.court.title', 'Land Rights Court Victory'),
      summary: t('announcements.court.summary', 'Successful outcome in King Cetshwayo District Court regarding ancestral land recognition and community representation.'),
      date: '2025-02-20',
      cta: t('announcements.court.cta', 'View Court Documents'),
      urgent: false
    },
    {
      id: 3,
      category: 'partnership',
      priority: 'medium',
      icon: Handshake,
      title: t('announcements.rbm.title', 'RBM Partnership Milestone Achieved'),
      summary: t('announcements.rbm.summary', 'Celebrating 15 years of successful BEE shareholding partnership with Richards Bay Minerals and new development commitments.'),
      date: '2025-02-10',
      cta: t('announcements.rbm.cta', 'Read Full Report'),
      urgent: false
    },
    {
      id: 4,
      category: 'trust',
      priority: 'medium',
      icon: FileText,
      title: t('announcements.scholarship.title', 'New Scholarship Program Launch'),
      summary: t('announcements.scholarship.summary', 'Educational trust announces expanded scholarship opportunities for Mbonambi youth pursuing higher education.'),
      date: '2025-01-28',
      cta: t('announcements.scholarship.cta', 'Apply Now'),
      urgent: false
    },
    {
      id: 5,
      category: 'development',
      priority: 'low',
      icon: Calendar,
      title: t('announcements.infrastructure.title', 'Community Infrastructure Update'),
      summary: t('announcements.infrastructure.summary', 'Progress report on road improvements, water access projects, and clinic facility upgrades in our traditional areas.'),
      date: '2025-01-15',
      cta: t('announcements.infrastructure.cta', 'View Progress'),
      urgent: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'meeting': return 'bg-navy-100 text-navy-800 border-navy-200';
      case 'legal': return 'bg-forest-100 text-forest-800 border-forest-200';
      case 'partnership': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'trust': return 'bg-sandstone-100 text-sandstone-800 border-sandstone-200';
      case 'development': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'meeting': return t('announcements.categories.meeting', 'Community Meeting');
      case 'legal': return t('announcements.categories.legal', 'Legal Update');
      case 'partnership': return t('announcements.categories.partnership', 'Partnership');
      case 'trust': return t('announcements.categories.trust', 'Trust News');
      case 'development': return t('announcements.categories.development', 'Development');
      default: return t('announcements.categories.general', 'General');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sandstone-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            {t('announcements.title', 'Community Announcements')}
          </h2>
          <p className="text-lg md:text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            {t('announcements.subtitle', 'Stay informed about important community updates, legal developments, and partnership milestones affecting the Mbonambi people')}
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:gap-8">
            {announcements.map((announcement, index) => {
              const IconComponent = announcement.icon;
              return (
                <Card 
                  key={announcement.id}
                  className={`group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-l-4 ${
                    announcement.priority === 'high' ? 'border-l-red-500' : 
                    announcement.priority === 'medium' ? 'border-l-yellow-500' : 
                    'border-l-green-500'
                  } ${announcement.urgent ? 'bg-red-50/30' : 'bg-white'}`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            announcement.priority === 'high' ? 'bg-red-100 text-red-700' :
                            announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${getCategoryColor(announcement.category)}`}
                            >
                              {getCategoryLabel(announcement.category)}
                            </Badge>
                            {announcement.urgent && (
                              <Badge variant="destructive" className="text-xs flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" />
                                {t('announcements.urgent', 'Urgent')}
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl md:text-2xl text-navy-800 mb-2 group-hover:text-navy-700 transition-colors">
                            {announcement.title}
                          </CardTitle>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-navy-500 gap-1 flex-shrink-0">
                        <Calendar className="w-4 h-4" />
                        {formatDate(announcement.date)}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-navy-600 text-base leading-relaxed mb-6">
                      {announcement.summary}
                    </p>
                    
                    <div className="flex justify-end">
                      <Button 
                        variant="outline" 
                        className="group/btn hover:bg-navy-700 hover:text-white hover:border-navy-700 dark:text-white dark:hover:bg-sandstone-300 dark:hover:text-navy-900 transition-all duration-300"
                      >
                        {announcement.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button 
              size="lg"
              className="bg-navy-700 hover:bg-navy-800 text-white dark:bg-sandstone-300 dark:text-navy-900 dark:hover:bg-sandstone-400 px-8 py-4 text-lg font-semibold"
            >
              {t('announcements.viewAll', 'View All Announcements')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-forest-600 text-forest-700 hover:bg-forest-600 hover:text-white dark:text-white dark:border-sandstone-300 dark:hover:bg-sandstone-300 dark:hover:text-navy-900 px-8 py-4 text-lg font-semibold"
            >
              {t('announcements.subscribe', 'Subscribe to Updates')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityAnnouncements;
