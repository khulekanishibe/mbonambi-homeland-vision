
import React from 'react';
import { Building, GraduationCap, MapPin, Scroll } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustOverviewCards = () => {
  const trusts = [
    {
      name: 'Public Benefit Trust',
      description: 'Managing community benefits and ensuring transparent distribution of resources for sustainable development.',
      icon: Building,
      color: 'bg-navy-100 text-navy-600',
      link: '/trust'
    },
    {
      name: 'Education & Skills Trust',
      description: 'Empowering our youth through educational opportunities, scholarships, and skills development programs.',
      icon: GraduationCap,
      color: 'bg-forest-100 text-forest-600',
      link: '/education'
    },
    {
      name: 'Land Rights & Development Trust',
      description: 'Protecting ancestral lands and facilitating sustainable development that honors our heritage.',
      icon: MapPin,
      color: 'bg-orange-100 text-orange-600',
      link: '/land-rights'
    },
    {
      name: 'Cultural Preservation Trust',
      description: 'Safeguarding Mbonambi traditions, language, and blacksmithing heritage for future generations.',
      icon: Scroll,
      color: 'bg-purple-100 text-purple-600',
      link: '/cultural'
    }
  ];

  return (
    <section className="py-20 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Our Community Trusts
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Each trust serves a vital role in preserving our heritage while building a prosperous future for the Mbonambi community
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
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${trust.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-xl text-navy-800 mb-4 text-center group-hover:text-forest-700 transition-colors">
                    {trust.name}
                  </h3>
                  <p className="text-navy-600 leading-relaxed text-center">
                    {trust.description}
                  </p>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-forest-600 font-medium group-hover:text-forest-700 transition-colors">
                      Learn More →
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
