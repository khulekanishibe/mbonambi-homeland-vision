import { Calendar, AlertCircle, FileText } from 'lucide-react';

const AnnouncementsSection = () => {
  const announcements = [
    {
      type: 'update',
      icon: AlertCircle,
      title: 'Community Meeting Scheduled',
      date: '2024-02-15',
      description: 'Join us for the quarterly community meeting to discuss recent developments and upcoming initiatives.',
      priority: 'high'
    },
    {
      type: 'legal',
      icon: FileText,
      title: 'Court Proceedings Update',
      date: '2024-02-10',
      description: 'Latest update on land rights proceedings in the King Cetshwayo District Court.',
      priority: 'medium'
    },
    {
      type: 'partnership',
      icon: Calendar,
      title: 'RBM Partnership Milestone',
      date: '2024-02-05',
      description: 'Celebrating successful collaboration and community development achievements with our mining partners.',
      priority: 'low'
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

  return (
    <section className="py-16 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Recent Announcements
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Stay informed about important updates, court proceedings, and community developments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {announcements.map((announcement, index) => {
            const IconComponent = announcement.icon;
            return (
              <div 
                key={index}
                className={`p-6 rounded-lg border-l-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${getPriorityColor(announcement.priority)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-navy-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy-800 mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-sm text-navy-600 mb-3">
                      {announcement.description}
                    </p>
                    <div className="flex items-center text-xs text-navy-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(announcement.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button className="bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
            View All Announcements
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
