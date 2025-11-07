
import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import { Hammer, Shield, Mountain, Users, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Feature = {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
};

const AboutSection = () => {
  const { t } = useTranslation();
  const spline = useRef<Application | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  function onSplineLoad(splineApp: Application) {
    spline.current = splineApp;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && spline.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const scrollPercent = Math.max(0, Math.min(100, (-top / (height - window.innerHeight)) * 100));
        spline.current.setVariable('scroll', scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      id: 1,
      icon: Hammer,
      title: t('home.about.feature1Title', 'Master Blacksmiths'),
      description: t('home.about.feature1Desc', 'Renowned across the region for crafting superior tools and weapons that equipped the Zulu impis and neighboring communities.')
    },
    {
      id: 2,
      icon: Shield,
      title: t('home.about.feature2Title', 'Allied with Kings'),
      description: t('home.about.feature2Desc', 'Proud contributors to the Zulu military strength under King Shaka, our forge-masters were sought after by royalty.')
    },
    {
      id: 3,
      icon: Mountain,
      title: t('home.about.feature3Title', 'Guardians of the Land'),
      description: t('home.about.feature3Desc', 'KwaMbonambi - "Place of the Mbonambi" - named after our legendary artisans who made this land their home.')
    },
    {
      id: 4,
      icon: Users,
      title: t('home.about.feature4Title', 'Living Heritage'),
      description: t('home.about.feature4Desc', 'Maintaining our ancestral traditions while embracing modern development in King Cetshwayo District.')
    }
  ];

  return (
    <section ref={sectionRef} className="h-screen bg-mbonambi-darkGray text-white relative overflow-hidden flex flex-col justify-end pb-24">
      {/* Background Spline Animation */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/h0gtlwldM-Pjzt1D/scene.splinecode"
          onLoad={onSplineLoad}
          className="w-full h-full"
        />
      </div>

      {/* Icons at the bottom */}
      <div className="relative z-10 flex justify-center items-center gap-8 pb-8">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconComponent className="w-10 h-10 text-mbonambi-mauve" />
            </motion.div>
          );
        })}
      </div>

      {/* Animated card in the center */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-md"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              className="relative text-center p-8 bg-black/30 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white"
              >
                <X size={24} />
              </button>
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <selectedFeature.icon className="w-12 h-12 text-mbonambi-mauve" />
              </div>
              <h3 className="font-semibold text-2xl text-white mb-4">
                {selectedFeature.title}
              </h3>
              <p className="text-mbonambi-lightGray text-lg">
                {selectedFeature.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
