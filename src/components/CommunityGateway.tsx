
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Camera, Heart, Users } from 'lucide-react';

const CommunityGateway = () => {
  const gateways = [
    {
      title: 'Trust Overview',
      description: 'Learn about our mission, leadership, and impact on the Mbonambi community',
      icon: Users,
      link: '/trust',
      color: 'bg-forest-100 hover:bg-forest-200',
      iconColor: 'text-forest-600'
    },
    {
      title: 'Community Events',
      description: 'Stay updated with upcoming meetings, cultural celebrations, and community gatherings',
      icon: Calendar,
      link: '/events',
      color: 'bg-navy-100 hover:bg-navy-200',
      iconColor: 'text-navy-600'
    },
    {
      title: 'Photo Gallery',
      description: 'Visual showcase of our community activities, achievements, and cultural heritage',
      icon: Camera,
      link: '/gallery',
      color: 'bg-sandstone-100 hover:bg-sandstone-200',
      iconColor: 'text-sandstone-600'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Explore Our Community
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Discover more about the Mbonambi community, our initiatives, and how you can be part of our journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {gateways.map((gateway, index) => {
            const IconComponent = gateway.icon;
            return (
              <Link 
                key={index}
                to={gateway.link}
                className="group block"
              >
                <div className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${gateway.color}`}>
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 ${gateway.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-navy-800 mb-3 text-lg text-center">
                    {gateway.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed text-center">
                    {gateway.description}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="text-sm font-medium text-navy-700 group-hover:text-navy-900 transition-colors">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityGateway;
