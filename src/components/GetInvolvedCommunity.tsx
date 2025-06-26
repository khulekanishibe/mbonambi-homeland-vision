
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Users, HandHeart, Mail } from 'lucide-react';

const GetInvolvedCommunity = () => {
  const { t } = useTranslation();

  const opportunities = [
    {
      title: t('home.getInvolved.opportunity1Title', 'Volunteer'),
      description: t('home.getInvolved.opportunity1Desc', 'Help teach skills, mentor youth, or assist with event planning.'),
      icon: Users,
      action: t('home.getInvolved.opportunity1Action', 'Join Our Team'),
      color: 'bg-forest-600 hover:bg-forest-700'
    },
    {
      title: t('home.getInvolved.opportunity2Title', 'Donate'),
      description: t('home.getInvolved.opportunity2Desc', 'Support scholarships, medical aid, and cultural programs.'),
      icon: Heart,
      action: t('home.getInvolved.opportunity2Action', 'Make a Donation'),
      color: 'bg-navy-600 hover:bg-navy-700'
    },
    {
      title: t('home.getInvolved.opportunity3Title', 'Partner'),
      description: t('home.getInvolved.opportunity3Desc', 'Collaborate with us on community development projects.'),
      icon: HandHeart,
      action: t('home.getInvolved.opportunity3Action', 'Become a Partner'),
      color: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      title: t('home.getInvolved.opportunity4Title', 'Stay Connected'),
      description: t('home.getInvolved.opportunity4Desc', 'Receive updates about community news and events.'),
      icon: Mail,
      action: t('home.getInvolved.opportunity4Action', 'Subscribe'),
      color: 'bg-sandstone-600 hover:bg-sandstone-700'
    }
  ];

  return (
    <section className="py-20 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            {t('home.getInvolved.sectionTitle', 'Get Involved')}
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            {t('home.getInvolved.sectionDesc', 'Join us in building a stronger community and preserving our heritage for future generations')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-forest-600" />
                </div>
                <h3 className="font-semibold text-xl text-navy-800 mb-4">
                  {opportunity.title}
                </h3>
                <p className="text-navy-600 mb-6">
                  {opportunity.description}
                </p>
                <button className={`w-full px-6 py-3 rounded-lg text-white font-medium transition-colors duration-300 ${opportunity.color}`}>
                  {opportunity.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedCommunity;
