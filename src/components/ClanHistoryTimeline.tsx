
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flame, Shield, Swords, Scale, HandHeart, Crown, Hammer, Trophy, Building } from 'lucide-react';

const ClanHistoryTimeline = () => {
  const { t } = useTranslation();

  const milestones = [
    {
      era: t('home.history.era1', 'Pre-1700s'),
      title: t('home.history.title1', 'Origins in the Zulu Kingdom'),
      description: t('home.history.desc1', 'The Mbonambi clan establishes itself within the greater Zulu nation, settling in northern KwaZulu-Natal as part of the Nguni migrations.'),
      icon: Crown,
      color: 'bg-orange-500',
      dotColor: 'border-orange-500'
    },
    {
      era: t('home.history.era2', '1700s-1800s'),
      title: t('home.history.title2', 'Master Blacksmiths & Royal Craftsmen'),
      description: t('home.history.desc2', 'Renowned throughout the region for forging superior spears, assegais, and tools. Our forges become centers of innovation, serving the Zulu impis and surrounding tribes.'),
      icon: Hammer,
      color: 'bg-red-600',
      dotColor: 'border-red-600'
    },
    {
      era: t('home.history.era3', 'Early 1800s'),
      title: t('home.history.title3', 'Alliance with King Shaka'),
      description: t('home.history.desc3', 'Become trusted allies and master craftsmen in Shaka Zulu\'s military campaigns. The Mbuyazi royal lineage emerges as key leaders within our community structure.'),
      icon: Shield,
      color: 'bg-forest-600',
      dotColor: 'border-forest-600'
    },
    {
      era: t('home.history.era4', '1879-1948'),
      title: t('home.history.title4', 'Colonial Resistance & Leadership'),
      description: t('home.history.desc4', 'Face colonial disruption and land dispossession. Community leaders from the Mbuyazi lineage maintain unity through legal resistance and cultural preservation.'),
      icon: Scale,
      color: 'bg-navy-600',
      dotColor: 'border-navy-600'
    },
    {
      era: t('home.history.era5', '1948-1994'),
      title: t('home.history.title5', 'Apartheid Era Struggles'),
      description: t('home.history.desc5', 'Systematic oppression and forced removals challenge the community. Legal battles and cultural resistance preserve our ancestral claims and identity.'),
      icon: Swords,
      color: 'bg-gray-700',
      dotColor: 'border-gray-700'
    },
    {
      era: t('home.history.era6', '1994-2009'),
      title: t('home.history.title6', 'Democracy & Land Claims'),
      description: t('home.history.desc6', 'Post-apartheid era brings new opportunities. Community begins formal land restitution processes and establishes legal frameworks for future development.'),
      icon: Trophy,
      color: 'bg-green-600',
      dotColor: 'border-green-600'
    },
    {
      era: t('home.history.era7', '2009'),
      title: t('home.history.title7', 'Historic RBM Partnership'),
      description: t('home.history.desc7', 'Landmark BEE shareholding deal with Richards Bay Minerals. Community secures 11.25% stake, establishing foundation for sustainable economic empowerment.'),
      icon: HandHeart,
      color: 'bg-blue-600',
      dotColor: 'border-blue-600'
    },
    {
      era: t('home.history.era8', '2010-Present'),
      title: t('home.history.title8', 'Modern Representation & Growth'),
      description: t('home.history.desc8', 'Establish community trust structures and achieve recognition in King Cetshwayo District. Continue winning key legal battles while developing infrastructure and educational programs.'),
      icon: Building,
      color: 'bg-forest-600',
      dotColor: 'border-forest-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sandstone-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-forest-600 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-navy-600 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-sandstone-600 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
            {t('home.history.sectionTitle', 'Our Clan\'s Journey')}
          </h2>
          <p className="text-lg md:text-xl text-navy-600 max-w-4xl mx-auto leading-relaxed">
            {t('home.history.sectionDesc', 'From ancient forges to modern partnerships - the enduring legacy of the Mbonambi people through centuries of triumph, struggle, and renewal')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 via-forest-500 to-blue-500 h-full"></div>
            
            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row group`}
                    style={{
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-20">
                      <div className={`w-6 h-6 rounded-full bg-white border-4 ${milestone.dotColor} shadow-lg group-hover:scale-125 transition-transform duration-300`}></div>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 ml-20 md:ml-0 ${
                      isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                    }`}>
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border-l-4 border-opacity-60" 
                           style={{ borderLeftColor: milestone.color.replace('bg-', '') }}>
                        
                        {/* Icon and Era */}
                        <div className={`flex items-center gap-4 mb-4 ${
                          isEven ? 'md:flex-row-reverse md:justify-start' : 'md:flex-row md:justify-start'
                        } justify-start`}>
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg ${milestone.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-7 h-7" />
                          </div>
                          <div className={`${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                            <h3 className="font-bold text-lg md:text-xl text-forest-700 tracking-wide">
                              {milestone.era}
                            </h3>
                          </div>
                        </div>

                        {/* Title and Description */}
                        <div className={`${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                          <h4 className="font-bold text-xl md:text-2xl text-navy-800 mb-3 leading-tight">
                            {milestone.title}
                          </h4>
                          <p className="text-navy-600 leading-relaxed text-base md:text-lg">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            <Crown className="w-5 h-5" />
            {t('home.history.cta', 'Explore Our Heritage Further')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClanHistoryTimeline;
