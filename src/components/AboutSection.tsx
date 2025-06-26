
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hammer, Shield, Mountain, Users } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Hammer,
      title: t('home.about.feature1Title', 'Master Blacksmiths'),
      description: t('home.about.feature1Desc', 'Renowned across the region for crafting superior tools and weapons that equipped the Zulu impis and neighboring communities.')
    },
    {
      icon: Shield,
      title: t('home.about.feature2Title', 'Allied with Kings'),
      description: t('home.about.feature2Desc', 'Proud contributors to the Zulu military strength under King Shaka, our forge-masters were sought after by royalty.')
    },
    {
      icon: Mountain,
      title: t('home.about.feature3Title', 'Guardians of the Land'),
      description: t('home.about.feature3Desc', 'KwaMbonambi - "Place of the Mbonambi" - named after our legendary artisans who made this land their home.')
    },
    {
      icon: Users,
      title: t('home.about.feature4Title', 'Living Heritage'),
      description: t('home.about.feature4Desc', 'Maintaining our ancestral traditions while embracing modern development in King Cetshwayo District.')
    }
  ];

  return (
    <section className="py-20 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            {t('home.about.title', 'About the Mbonambi Clan')}
          </h2>
          <p className="text-lg text-navy-600 max-w-4xl mx-auto leading-relaxed">
            {t('home.about.description', 'The Mbonambi clan is an Nguni-speaking people with deep roots in the Zulu kingdom, known historically for their exceptional skill in blacksmithing. From the 15th century, our ancestors forged the iron tools and weapons that shaped this region\'s early economy and defense. Today, we honor this proud heritage while fostering unity, cultural identity, and sustainable community development across King Cetshwayo District.')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-forest-600" />
                </div>
                <h3 className="font-semibold text-xl text-navy-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
