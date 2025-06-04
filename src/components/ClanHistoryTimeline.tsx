
import React from 'react';
import { Flame, Crown, Scroll, Sprout } from 'lucide-react';

const ClanHistoryTimeline = () => {
  const milestones = [
    {
      era: 'Pre-Colonial Era',
      title: 'Origins as Ironworkers',
      description: 'The Mbonambi people established themselves as master blacksmiths in precolonial southern Africa, their forges becoming centers of innovation and trade.',
      icon: Flame,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      era: 'Zulu Kingdom',
      title: 'Alliance with King Shaka',
      description: 'Allied with King Shaka, our people contributed significantly to Zulu military strength, forging weapons and tools that helped shape the region\'s history.',
      icon: Crown,
      color: 'bg-navy-100 text-navy-600'
    },
    {
      era: 'Colonial Period',
      title: 'Preserving Heritage',
      description: 'Despite colonial pressures, the Mbonambi maintained their blacksmithing traditions and oral history, ensuring cultural continuity for future generations.',
      icon: Scroll,
      color: 'bg-sandstone-100 text-sandstone-600'
    },
    {
      era: 'Modern Era',
      title: 'Cultural Revival',
      description: 'Today witnesses a modern revival of cultural traditions alongside active land claims, as the community balances heritage preservation with contemporary development.',
      icon: Sprout,
      color: 'bg-forest-100 text-forest-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Our Journey Through Time
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            From ancient forges to modern progress - the enduring story of the Mbonambi people
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-navy-200 hidden md:block"></div>
            
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative mb-16 ${
                  isEven ? 'md:text-right' : 'md:text-left'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-forest-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>
                  
                  <div className={`md:w-1/2 ${
                    isEven ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}>
                    <div className="bg-sandstone-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className={`flex items-center mb-6 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      } justify-start`}>
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${milestone.color} ${
                          isEven ? 'md:order-2 md:ml-6' : 'mr-6'
                        }`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div className={isEven ? 'md:order-1' : ''}>
                          <h3 className="font-bold text-xl text-forest-700 mb-1">{milestone.era}</h3>
                          <h4 className="font-semibold text-2xl text-navy-800">{milestone.title}</h4>
                        </div>
                      </div>
                      <p className="text-navy-600 leading-relaxed text-lg">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClanHistoryTimeline;
