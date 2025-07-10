import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Flame, Shield, Swords, Scale, HandHeart, Crown, Hammer, Trophy, Building, ChevronDown, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ClanHistoryTimeline = () => {
  const { t } = useTranslation();
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(prev).add(index));
          } else {
            setVisibleCards(prev => {
              const newVisible = new Set(prev);
              newVisible.delete(index);
              return newVisible;
            });
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
      expandedContent: `Settled in northern KwaZulu-Natal, their metallurgical skills made them vital to both trade and war.\n\nOral histories credit Mbonambi smiths for forging spears used during Shaka Zulu\'s military campaigns.\n\nThe word "Mbonambi" is derived from "abonwa ngabanye" – meaning "the ones who are seen/respected by others."\n\n🌀 Cultural Impact: Mbonambi blacksmiths held sacred status, blending spirituality and utility.`,
      icon: Hammer,
      color: 'bg-orange-500',
      dotColor: 'border-orange-500'
    },
    {
      era: '1879',
      title: 'Conflict and Resilience',
      subtitle: '"Amidst the Anglo-Zulu War, our spirit endured."',
      description: 'The Anglo-Zulu War erupted between the British Empire and Zulu Kingdom.',
      expandedContent: `Mbonambi warriors participated in defense strategies and protected key territories near present-day Richards Bay.\n\nAfter the British victory, colonial boundaries fractured traditional governance.\n\nDespite disruptions, the Mbonambi maintained cultural rituals and adapted leadership structures to preserve clan identity.\n\n📜 Legacy: Cultural councils (amakhosi) upheld ancestral rites under colonial scrutiny.`,
      icon: Shield,
      color: 'bg-red-600',
      dotColor: 'border-red-600'
    },
    {
      era: '1906',
      title: 'Bambatha Rebellion',
      subtitle: '"Standing Against Colonial Oppression"',
      description: 'Mbonambi leaders participated in the Bambatha Rebellion against British colonial taxation and land policies.',
      expandedContent: `The rebellion, led by Chief Bambatha kaMancinza, saw Mbonambi warriors join the resistance against the poll tax imposed by the Natal government.\n\nThough the rebellion was ultimately unsuccessful, it demonstrated the clan\'s commitment to resisting colonial oppression.\n\nMany Mbonambi families faced displacement and persecution following the rebellion\'s defeat.\n\n⚔️ Courage: The clan\'s participation cemented their reputation as defenders of traditional rights.`,
      icon: Swords,
      color: 'bg-forest-600',
      dotColor: 'border-forest-600'
    },
    {
      era: '1948-1994',
      title: 'Apartheid Resistance',
      subtitle: '"Preserving Identity Under Systematic Oppression"',
      description: 'Under apartheid, a Mbonambi community faced forced removals and land dispossession.',
      expandedContent: `The Group Areas Act and Bantu Authorities Act severely impacted traditional governance structures.\n\nCommunity leaders maintained clan unity through underground cultural practices and legal resistance.\n\nEducational initiatives were secretly organized to preserve Zulu language and customs.\n\n🏛️ Persistence: Legal challenges laid groundwork for post-apartheid land claims.`,
      icon: Scale,
      color: 'bg-gray-700',
      dotColor: 'border-gray-700'
    },
    {
      era: '1994-2008',
      title: 'Democratic Transition',
      subtitle: '"New Dawn, Ancient Roots"',
      description: 'Post-apartheid democracy brought opportunities for land restitution and cultural revival.',
      expandedContent: `The Restitution of Land Rights Act enabled the community to begin formal land claims processes.\n\nTraditional leadership structures were legally recognized under the Traditional Leadership and Governance Framework Act.\n\nCommunity development programs focused on education, healthcare, and economic empowerment.\n\n🌅 Renewal: Democratic freedoms allowed open celebration of Mbonambi heritage.`,
      icon: Trophy,
      color: 'bg-green-600',
      dotColor: 'border-green-600'
    },
    {
      era: '2009',
      title: 'Historic RBM Partnership',
      subtitle: '"From Shareholders to Stakeholders"',
      description: 'Landmark BBBEE shareholding deal with Richards Bay Minerals transformed community prospects.',
      expandedContent: `The community secured an 11.25% stake in RBM through Blue Horizon Investments, valued at R1.2 billion.\n\nThis partnership represented one of the largest community-based mining deals in South African history.\n\nThree community trusts were established to manage different aspects of the shareholding and community development.\n\n💎 Transformation: Mining revenues began funding education, healthcare, and infrastructure projects.`,
      icon: HandHeart,
      color: 'bg-blue-600',
      dotColor: 'border-blue-600'
    },
    {
      era: '2017-Present',
      title: 'Modern Leadership Era',
      subtitle: '"Building Tomorrow on Ancestral Wisdom"',
      description: "Under Martin Mbuyazi's leadership, the community has achieved unprecedented growth and recognition.",
      expandedContent: `The appointment of Martin Mbuyazi as Trust Administrator marked a new era of transparent governance and strategic development.\n\nMajor infrastructure projects include schools, clinics, and community centers throughout the KwaMbonambi area.\n\nLegal victories have secured additional mineral rights and strengthened the community\'s economic position.\n\n🏗️ Progress: Modern development balanced with traditional values creates sustainable prosperity.`,
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
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 via-forest-500 to-blue-500 h-full"></div>
            
            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 0;
                const isVisible = visibleCards.has(index);
                
                return (
                  <div 
                    key={index}
                    ref={(el) => cardRefs.current[index] = el}
                    data-index={index}
                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start group transform transition-all duration-700 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Timeline Dot - Centered */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                      <div className={`w-6 h-6 rounded-full bg-white border-4 ${milestone.dotColor} shadow-lg group-hover:scale-125 transition-all duration-300 ${
                        isVisible ? 'scale-100' : 'scale-75'
                      }`}>
                        <div className={`absolute inset-0 rounded-full ${milestone.color} opacity-20 animate-pulse`}></div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                      <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-4`}
                           style={{ borderLeftColor: milestone.color.replace('bg-', '').replace('-500', '').replace('-600', '').replace('-700', '') }}>
                        
                        <div className="p-6 md:p-8">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg ${milestone.color} group-hover:scale-110 transition-all duration-500 relative overflow-hidden ${
                              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                              <IconComponent className="w-7 h-7 relative z-10" />
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                            </div>
                            <div>
                              <h3 className="font-bold text-lg md:text-xl text-forest-700 tracking-wide">
                                {milestone.era}
                              </h3>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-bold text-xl md:text-2xl text-navy-800 mb-2 leading-tight">
                              {milestone.title}
                            </h4>
                            <p className="text-forest-600 italic text-sm md:text-base mb-3 font-medium">
                              {milestone.subtitle}
                            </p>
                            <p className="text-navy-600 leading-relaxed text-base md:text-lg">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content with Scroll Reveal */}
                    <div className={`flex-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <ScrollReveal
                        enableBlur={true}
                        blurStrength={11}
                        baseOpacity={0}
                        baseRotation={6}
                        stagger={6}
                        textClassName="text-navy-700 !text-base md:!text-lg !font-normal leading-relaxed"
                        endTriggerRef={cardRefs.current[index + 1]}
                      >
                        {milestone.expandedContent}
                      </ScrollReveal>
                    </div>
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