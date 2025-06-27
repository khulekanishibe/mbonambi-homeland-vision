
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flame, Shield, Swords, Scale, HandHeart } from 'lucide-react';

const ClanHistoryTimeline = () => {
  const { t } = useTranslation();

  const milestones = [
    {
      era: t('home.history.era1', 'Pre-1700s'),
      title: t('home.history.title1', 'Nguni Migrations'),
      description: t('home.history.desc1', 'The Mbonambi people settle in northern KwaZulu-Natal as part of the great Nguni migrations, establishing their ancestral homeland.'),
      icon: Flame,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      era: t('home.history.era2', '1700s'),
      title: t('home.history.title2', 'Master Blacksmiths'),
      description: t('home.history.desc2', 'Renowned throughout the region for forging superior spears, assegais, and tools. Our forges become centers of innovation, serving surrounding tribes with exceptional craftsmanship.'),
      icon: Swords,
      color: 'bg-navy-100 text-navy-600'
    },
    {
      era: t('home.history.era3', 'Early 1800s'),
      title: t('home.history.title3', 'Alliance with King Shaka'),
      description: t('home.history.desc3', 'Become trusted allies and master craftsmen in Shaka Zulu\'s military campaigns. Our weapons and tools contribute significantly to the strength of the Zulu kingdom.'),
      icon: Shield,
      color: 'bg-forest-100 text-forest-600'
    },
    {
      era: t('home.history.era4', '1900s'),
      title: t('home.history.title4', 'Colonial Resistance'),
      description: t('home.history.desc4', 'Face colonial and apartheid disruptions including land dispossession. The community maintains unity through legal resistance and preservation of cultural traditions.'),
      icon: Scale,
      color: 'bg-sandstone-100 text-sandstone-600'
    },
    {
      era: t('home.history.era5', '2000s–Present'),
      title: t('home.history.title5', 'Modern Renaissance'),
      description: t('home.history.desc5', 'Achieve significant land restitution progress, establish community trust structures, and form strategic partnerships with RBM (Richards Bay Minerals) for sustainable development.'),
      icon: HandHeart,
      color: 'bg-forest-100 text-forest-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            {t('home.history.sectionTitle', 'Our Clan\'s Journey')}
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            {t('home.history.sectionDesc', 'From ancient migrations to modern partnerships - the enduring legacy of the Mbonambi people')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-forest-200 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8 gap-4`}>
                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:px-8`}>
                      <div className="bg-sandstone-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className={`flex items-center mb-4 ${isEven ? 'lg:flex-row-reverse lg:justify-start' : 'lg:flex-row lg:justify-start'} flex-col lg:gap-4 gap-2`}>
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${milestone.color}`}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <div className={`${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                            <h3 className="font-bold text-lg text-forest-700">{milestone.era}</h3>
                            <h4 className="font-semibold text-xl text-navy-800">{milestone.title}</h4>
                          </div>
                        </div>
                        <p className="text-navy-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot for larger screens */}
                    <div className="hidden lg:block relative z-10">
                      <div className="w-4 h-4 bg-forest-600 rounded-full border-4 border-white shadow-md"></div>
                    </div>
                    
                    <div className="flex-1 lg:block hidden"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClanHistoryTimeline;
