
import React from 'react';
import { GraduationCap, Building, Leaf, Heart } from 'lucide-react';

const TrustContributions = () => {
  const contributions = [
    {
      title: 'Education Initiatives',
      description: 'Scholarship programs, school infrastructure development, and educational resource provision for local students.',
      icon: GraduationCap,
      stats: '500+ Students Supported',
      color: 'bg-forest-50 border-forest-200',
      iconColor: 'text-forest-600'
    },
    {
      title: 'Infrastructure Development',
      description: 'Community center construction, road improvements, and essential facility upgrades throughout KwaMbonambi.',
      icon: Building,
      stats: '15+ Projects Completed',
      color: 'bg-navy-50 border-navy-200',
      iconColor: 'text-navy-600'
    },
    {
      title: 'Sustainable Development',
      description: 'Environmental conservation projects, renewable energy initiatives, and sustainable livelihood programs.',
      icon: Leaf,
      stats: '8 Green Projects',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      title: 'Community Welfare',
      description: 'Healthcare support, elderly care programs, and emergency assistance for community members in need.',
      icon: Heart,
      stats: '1,200+ Beneficiaries',
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Major Contributions
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Our commitment to community development through targeted initiatives and sustainable projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {contributions.map((contribution, index) => {
            const IconComponent = contribution.icon;
            return (
              <div 
                key={index}
                className={`p-6 rounded-lg border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 ${contribution.color}`}
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <IconComponent className={`w-8 h-8 ${contribution.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-navy-800 mb-3 text-lg">
                    {contribution.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed mb-4">
                    {contribution.description}
                  </p>
                  <div className={`font-bold text-lg ${contribution.iconColor}`}>
                    {contribution.stats}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Project Showcase */}
        <div className="bg-gradient-to-r from-forest-600 to-navy-700 rounded-2xl p-8 text-center text-white">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            R74.5 Million Community Investment
          </h3>
          <p className="text-lg mb-6 max-w-4xl mx-auto opacity-90">
            Through our partnership with Richards Bay Minerals and transparent governance, 
            we have successfully channeled significant resources towards sustainable community development, 
            creating lasting positive impact for the people of KwaMbonambi.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">15+</div>
              <div className="text-sm">Infrastructure Projects</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">500+</div>
              <div className="text-sm">Students Supported</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">1,200+</div>
              <div className="text-sm">Community Beneficiaries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustContributions;
