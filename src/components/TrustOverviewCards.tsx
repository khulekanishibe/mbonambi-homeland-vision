
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Users, Crown } from 'lucide-react';

const TrustOverviewCards = () => {
  const { t } = useTranslation();

  const trusts = [
    {
      name: t('home.trusts.trust1Name', 'Public Benefit Trust (PBT)'),
      purpose: t('home.trusts.trust1Purpose', 'Implements development projects including roads, water infrastructure, and educational scholarships for community members.'),
      role: t('home.trusts.trust1Role', 'Public-facing community improvements and social welfare initiatives.'),
      icon: Heart,
      color: 'bg-forest-100 hover:bg-forest-200',
      iconColor: 'text-forest-600',
      link: '/trust'
    },
    {
      name: t('home.trusts.trust2Name', 'Community Development Trust (CDT)'),
      purpose: t('home.trusts.trust2Purpose', 'Holds 11.25% shareholding in RBM (Richards Bay Minerals) on behalf of the Mbonambi community.'),
      role: t('home.trusts.trust2Role', 'Governance oversight, shareholder relations, and land/legal matters management.'),
      icon: Users,
      color: 'bg-navy-100 hover:bg-navy-200',
      iconColor: 'text-navy-600',
      link: '/trust'
    },
    {
      name: t('home.trusts.trust3Name', 'Empowerment Trust'),
      purpose: t('home.trusts.trust3Purpose', 'Owns and provides strategic oversight of both CDT and PBT under one unified empowerment structure.'),
      role: t('home.trusts.trust3Role', 'Strategic oversight of the entire empowerment partnership deal with RBM.'),
      icon: Crown,
      color: 'bg-sandstone-100 hover:bg-sandstone-200',
      iconColor: 'text-sandstone-600',
      link: '/trust'
    }
  ];

  return (
    <section className="py-20 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            {t('home.trusts.sectionTitle', 'Our Community Trusts')}
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto leading-relaxed">
            {t('home.trusts.sectionDesc', 'Three interconnected trusts working together to manage our community\'s development, resources, and strategic partnerships for sustainable prosperity.')}
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trusts.map((trust, index) => {
            const IconComponent = trust.icon;
            return (
              <Link 
                key={index}
                to={trust.link}
                className="group block h-full"
              >
                <div className={`p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col ${trust.color} border border-white`}>
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <IconComponent className={`w-10 h-10 ${trust.iconColor}`} />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-navy-800 mb-4 text-xl text-center">
                    {trust.name}
                  </h3>
                  
                  <div className="flex-grow space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy-700 mb-2 text-sm uppercase tracking-wide">Purpose</h4>
                      <p className="text-navy-600 text-sm leading-relaxed">
                        {trust.purpose}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-navy-700 mb-2 text-sm uppercase tracking-wide">Role</h4>
                      <p className="text-navy-600 text-sm leading-relaxed">
                        {trust.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-sm font-semibold text-navy-700 group-hover:text-navy-900 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
                      {t('home.trusts.explore', 'Explore Trust')} →
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
