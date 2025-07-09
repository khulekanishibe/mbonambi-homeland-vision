
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Flame, Shield, Swords, Scale, HandHeart, Crown, Hammer, Trophy, Building, ChevronDown, Sparkles } from 'lucide-react';

const ClanHistoryTimeline = () => {
  const { t } = useTranslation();
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      era: '1820',
      title: 'Ancestral Legacy Begins',
      subtitle: '"From the Fires of the Forge, We Rose."',
      description: 'The Mbonambi clan, a revered Zulu lineage, was known for blacksmithing excellence — crafting tools, weapons, and cultural symbols for the Zulu Kingdom.',
      expandedContent: `Settled in northern KwaZulu-Natal, their metallurgical skills made them vital to both trade and war.

Oral histories credit Mbonambi smiths for forging spears used during Shaka Zulu's military campaigns.

The word "Mbonambi" is derived from "abonwa ngabanye" – meaning "the ones who are seen/respected by others."

🌀 Cultural Impact: Mbonambi blacksmiths held sacred status, blending spirituality and utility.`,
      icon: Hammer,
      color: 'bg-orange-500',
      dotColor: 'border-orange-500'
    },
    {
      era: '1879',
      title: 'Conflict and Resilience',
      subtitle: '"Amidst the Anglo-Zulu War, our spirit endured."',
      description: 'The Anglo-Zulu War erupted between the British Empire and Zulu Kingdom.',
      expandedContent: `Mbonambi warriors participated in defense strategies and protected key territories near present-day Richards Bay.

After the British victory, colonial boundaries fractured traditional governance.

Despite disruptions, the Mbonambi maintained cultural rituals and adapted leadership structures to preserve clan identity.

📜 Legacy: Cultural councils (amakhosi) upheld ancestral rites under colonial scrutiny.`,
      icon: Shield,
      color: 'bg-red-600',
      dotColor: 'border-red-600'
    },
    {
      era: '1906',
      title: 'Bambatha Rebellion',
      subtitle: '"Standing Against Colonial Oppression"',
      description: 'Mbonambi leaders participated in the Bambatha Rebellion against British colonial taxation and land policies.',
      expandedContent: `The rebellion, led by Chief Bambatha kaMancinza, saw Mbonambi warriors join the resistance against the poll tax imposed by the Natal government.

Though the rebellion was ultimately unsuccessful, it demonstrated the clan's commitment to resisting colonial oppression.

Many Mbonambi families faced displacement and persecution following the rebellion's defeat.

⚔️ Courage: The clan's participation cemented their reputation as defenders of traditional rights.`,
      icon: Swords,
      color: 'bg-forest-600',
      dotColor: 'border-forest-600'
    },
    {
      era: '1948-1994',
      title: 'Apartheid Resistance',
      subtitle: '"Preserving Identity Under Systematic Oppression"',
      description: 'Under apartheid, the Mbonambi community faced forced removals and land dispossession.',
      expandedContent: `The Group Areas Act and Bantu Authorities Act severely impacted traditional governance structures.

Community leaders maintained clan unity through underground cultural practices and legal resistance.

Educational initiatives were secretly organized to preserve Zulu language and customs.

🏛️ Persistence: Legal challenges laid groundwork for post-apartheid land claims.`,
      icon: Scale,
      color: 'bg-gray-700',
      dotColor: 'border-gray-700'
    },
    {
      era: '1994-2008',
      title: 'Democratic Transition',
      subtitle: '"New Dawn, Ancient Roots"',
      description: 'Post-apartheid democracy brought opportunities for land restitution and cultural revival.',
      expandedContent: `The Restitution of Land Rights Act enabled the community to begin formal land claims processes.

Traditional leadership structures were legally recognized under the Traditional Leadership and Governance Framework Act.

Community development programs focused on education, healthcare, and economic empowerment.

🌅 Renewal: Democratic freedoms allowed open celebration of Mbonambi heritage.`,
      icon: Trophy,
      color: 'bg-green-600',
      dotColor: 'border-green-600'
    },
    {
      era: '2009',
      title: 'Historic RBM Partnership',
      subtitle: '"From Shareholders to Stakeholders"',
      description: 'Landmark BBBEE shareholding deal with Richards Bay Minerals transformed community prospects.',
      expandedContent: `The community secured an 11.25% stake in RBM through Blue Horizon Investments, valued at R1.2 billion.

This partnership represented one of the largest community-based mining deals in South African history.

Three community trusts were established to manage different aspects of the shareholding and community development.

💎 Transformation: Mining revenues began funding education, healthcare, and infrastructure projects.`,
      icon: HandHeart,
      color: 'bg-blue-600',
      dotColor: 'border-blue-600'
    },
    {
      era: '2017-Present',
      title: 'Modern Leadership Era',
      subtitle: '"Building Tomorrow on Ancestral Wisdom"',
      description: 'Under Martin Mbuyazi\'s leadership, the community has achieved unprecedented growth and recognition.',
      expandedContent: `The appointment of Martin Mbuyazi as Trust Administrator marked a new era of transparent governance and strategic development.

Major infrastructure projects include schools, clinics, and community centers throughout the KwaMbonambi area.

Legal victories have secured additional mineral rights and strengthened the community's economic position.

🏗️ Progress: Modern development balanced with traditional values creates sustainable prosperity.`,
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
                const isExpanded = expandedCards.has(index);
                const isVisible = visibleCards.has(index);
                
                return (
                  <div 
                    key={index}
                    ref={(el) => cardRefs.current[index] = el}
                    data-index={index}
                    className={`relative flex items-start ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row group transform transition-all duration-700 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-20">
                      <div className={`w-6 h-6 rounded-full bg-white border-4 ${milestone.dotColor} shadow-lg group-hover:scale-125 transition-all duration-300 ${
                        isVisible ? 'scale-100' : 'scale-75'
                      }`}>
                        <div className={`absolute inset-0 rounded-full ${milestone.color} opacity-20 animate-pulse`}></div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 ml-20 md:ml-0 ${
                      isEven ? 'md:pr-8' : 'md:pl-8'
                    }`}>
                      <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-4 ${
                        isExpanded ? 'border-opacity-100' : 'border-opacity-60'
                      }`} 
                           style={{ borderLeftColor: milestone.color.replace('bg-', '').replace('-500', '').replace('-600', '').replace('-700', '') }}>
                        
                        <div className="p-6 md:p-8">
                          {/* Icon and Era */}
                          <div className={`flex items-center gap-4 mb-4 ${
                            isEven ? 'md:flex-row-reverse md:justify-start' : 'md:flex-row md:justify-start'
                          } justify-start`}>
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg ${milestone.color} group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                              <IconComponent className="w-7 h-7 relative z-10" />
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                            </div>
                            <div className={`${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                              <h3 className="font-bold text-lg md:text-xl text-forest-700 tracking-wide">
                                {milestone.era}
                              </h3>
                            </div>
                          </div>

                          {/* Title, Subtitle and Description */}
                          <div className={`${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                            <h4 className="font-bold text-xl md:text-2xl text-navy-800 mb-2 leading-tight">
                              {milestone.title}
                            </h4>
                            <p className="text-forest-600 italic text-sm md:text-base mb-3 font-medium">
                              {milestone.subtitle}
                            </p>
                            <p className="text-navy-600 leading-relaxed text-base md:text-lg">
                              {milestone.description}
                            </p>
                            
                            {/* Expand Button */}
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="mt-4 inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 font-semibold transition-colors duration-200 group/btn"
                            >
                              <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                              }`} />
                              <Sparkles className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200" />
                            </button>
                          </div>
                        </div>

                        {/* Expanded Content with Scroll Reveal */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-100">
                            <div className={`pt-6 transform transition-all duration-700 ${
                              isExpanded ? 'translate-y-0' : 'translate-y-4'
                            }`}>
                              <div className="bg-gradient-to-br from-sandstone-50 to-forest-50 rounded-lg p-4 md:p-6">
                                <pre className="whitespace-pre-wrap text-navy-700 leading-relaxed font-sans text-sm md:text-base">
                                  {milestone.expandedContent}
                                </pre>
                              </div>
                            </div>
                          </div>
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
