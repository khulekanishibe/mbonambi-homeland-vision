
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flame, Crown, Scroll, Sprout } from 'lucide-react';

const ClanHistoryTimeline = () => {
  const { t } = useTranslation();

  const milestones = [
    {
      era: t('home.history.era1', 'Pre-Colonial Era'),
      title: t('home.history.title1', 'Origins as Ironworkers'),
      description: t('home.history.desc1', 'The Mbonambi people established themselves as master blacksmiths, their forges becoming centers of innovation and trade.'),
      icon: Flame,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      era: t('home.history.era2', 'Zulu Kingdom'),
      title: t('home.history.title2', 'Alliance with King Shaka'),
      description: t('home.history.desc2', 'Allied with King Shaka, our people contributed significantly to Zulu military strength.'),
      icon: Crown,
      color: 'bg-navy-100 text-navy-600'
    },
    {
      era: t('home.history.era3', 'Colonial Period'),
      title: t('home.history.title3', 'Preserving Heritage'),
      description: t('home.history.desc3', 'Despite colonial pressures, the Mbonambi maintained their blacksmithing traditions and oral history.'),
      icon: Scroll,
      color: 'bg-sandstone-100 text-sandstone-600'
    },
    {
      era: t('home.history.era4', 'Modern Era'),
      title: t('home.history.title4', 'Cultural Revival'),
      description: t('home.history.desc4', 'Today witnesses a modern revival of cultural traditions alongside contemporary development.'),
      icon: Sprout,
      color: 'bg-forest-100 text-forest-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            {t('home.history.sectionTitle', 'Our Journey Through Time')}
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            {t('home.history.sectionDesc', 'From ancient forges to modern progress - the enduring story of the Mbonambi people')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                <div className="flex-1">
                  <div className="bg-sandstone-50 rounded-lg p-8 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${milestone.color} mr-4`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-forest-700">{milestone.era}</h3>
                        <h4 className="font-semibold text-xl text-navy-800">{milestone.title}</h4>
                      </div>
                    </div>
                    <p className="text-navy-600">{milestone.description}</p>
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

export default ClanHistoryTimeline;
