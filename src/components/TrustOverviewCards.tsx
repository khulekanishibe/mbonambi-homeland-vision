
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, GraduationCap, Home, Scroll } from 'lucide-react';

const TrustOverviewCards = () => {
  const { t } = useTranslation();

  const trusts = [
    {
      name: t('home.trusts.trust1Name', 'Community Public Benefit Trust'),
      description: t('home.trusts.trust1Desc', 'Focus on health, education, and social welfare projects including scholarships and clinic upgrades.'),
      icon: Heart,
      color: 'bg-forest-100 hover:bg-forest-200',
      iconColor: 'text-forest-600',
      link: '/trust'
    },
    {
      name: t('home.trusts.trust2Name', 'Education & Skills Trust'),
      description: t('home.trusts.trust2Desc', 'Vocational training, youth mentorship, and literacy programs for community development.'),
      icon: GraduationCap,
      color: 'bg-navy-100 hover:bg-navy-200',
      iconColor: 'text-navy-600',
      link: '/trust'
    },
    {
      name: t('home.trusts.trust3Name', 'Land Rights & Development Trust'),
      description: t('home.trusts.trust3Desc', 'Land restitution, sustainable agriculture, and infrastructure improvements.'),
      icon: Home,
      color: 'bg-sandstone-100 hover:bg-sandstone-200',
      iconColor: 'text-sandstone-600',
      link: '/trust'
    },
    {
      name: t('home.trusts.trust4Name', 'Cultural Preservation Trust'),
      description: t('home.trusts.trust4Desc', 'Documenting oral histories, preserving traditional crafts, and promoting cultural tourism.'),
      icon: Scroll,
      color: 'bg-orange-100 hover:bg-orange-200',
      iconColor: 'text-orange-600',
      link: '/trust'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            {t('home.trusts.sectionTitle', 'Our Community Trusts')}
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            {t('home.trusts.sectionDesc', 'Specialized trusts working together to serve our community\'s diverse needs')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {trusts.map((trust, index) => {
            const IconComponent = trust.icon;
            return (
              <Link 
                key={index}
                to={trust.link}
                className="group block"
              >
                <div className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${trust.color}`}>
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 ${trust.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-navy-800 mb-3 text-lg text-center">
                    {trust.name}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed text-center">
                    {trust.description}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="text-sm font-medium text-navy-700 group-hover:text-navy-900 transition-colors">
                      {t('home.trusts.learnMore', 'Learn More →')}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustOverviewCards;
