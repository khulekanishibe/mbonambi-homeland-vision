import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Users, Crown } from 'lucide-react';

const TrustOverviewCards = () => {
  const { t } = useTranslation();

  const trusts = [
    {
      name: 'Public Benefit Trust (PBT)',
      description: 'Delivers infrastructure, education, and health services to the Mbonambi community.',
      icon: Heart,
      color: 'bg-forest-100 hover:bg-forest-200',
      iconColor: 'text-forest-600',
      link: '/trust'
    },
    {
      name: 'Community Development Trust (CDT)',
      description: 'Holds shares and represents the community\'s interest in corporate partnerships.',
      icon: Users,
      color: 'bg-navy-100 hover:bg-navy-200',
      iconColor: 'text-navy-600',
      link: '/trust'
    },
    {
      name: 'Empowerment Trust',
      description: 'Parent trust overseeing CDT and PBT within the RBM/Blue Horizon BEE structure.',
      icon: Crown,
      color: 'bg-sandstone-100 hover:bg-sandstone-200',
      iconColor: 'text-sandstone-600',
      link: '/trust'
    }
  ];

  return (
    <section id="trusts" className="py-20 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Our Trusts
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Three interconnected trusts working together to manage our community's development, resources, and strategic partnerships for sustainable prosperity.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trusts.map((trust, index) => {
            const IconComponent = trust.icon;
            return (
              <Link 
                key={index}
                to={trust.link}
                className="group block h-full"
              >
                <div className={`p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col ${trust.color} border border-white`}>
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <IconComponent className={`w-10 h-10 ${trust.iconColor}`} />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-navy-800 mb-4 text-xl text-center">
                    {trust.name}
                  </h3>
                  
                  <div className="flex-grow">
                    <p className="text-navy-600 text-base leading-relaxed text-center">
                      {trust.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-sm font-semibold text-navy-700 group-hover:text-navy-900 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
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

export default TrustOverviewCards;