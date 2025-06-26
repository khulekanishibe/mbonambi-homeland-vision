
import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-forest-900">
      <div className="text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          {t('home.heroTitle', 'Mbonambi Community')}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-sandstone-100 mb-6 font-light">
          {t('home.heroSubtitle', 'Guardians of Our Land, Partners in Progress')}
        </p>
        <p className="text-base md:text-lg text-sandstone-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          {t('home.heroDescription', 'Descendants of master blacksmiths who forged the tools and weapons that shaped the Zulu kingdom. From our ancestral forges to modern community development, we honor our heritage while building a united future for all Mbonambi people.')}
        </p>
        <div className="mt-8">
          <button className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
            {t('home.heroCTA', 'Explore Our Heritage')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
