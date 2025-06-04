
import React from 'react';
import { User, Crown } from 'lucide-react';

const TrustLeadership = () => {
  const leaders = [
    {
      name: 'Martin Mbuyazi',
      role: 'Trust Administrator',
      period: 'Since 2017',
      description: 'Leading the Trust with dedication to community empowerment and transparent governance, continuing the vision established by the late Inkosi Sibusiso Mbuyazi.',
      image: '/lovable-uploads/a5a05d20-5142-4894-9114-ccc138784ccd.png',
      icon: User
    },
    {
      name: 'The Late Inkosi Sibusiso Mbuyazi',
      role: 'Founder',
      period: '2009 - 2017',
      description: 'Visionary leader who established the Trust as part of the B-BBEE transaction with RBM, laying the foundation for community development and empowerment.',
      image: '/lovable-uploads/f71d2873-1e55-435e-b2da-2642e37bdf5a.png',
      icon: Crown,
      isFounder: true
    }
  ];

  return (
    <section className="py-16 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Trust Leadership
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Meet the dedicated individuals who have guided the Trust's mission of community empowerment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => {
            const IconComponent = leader.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  leader.isFounder ? 'border-2 border-forest-200' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      leader.isFounder ? 'bg-forest-100' : 'bg-navy-100'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        leader.isFounder ? 'text-forest-600' : 'text-navy-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-800 text-xl">{leader.name}</h3>
                      <p className={`text-sm font-medium ${
                        leader.isFounder ? 'text-forest-600' : 'text-navy-600'
                      }`}>
                        {leader.role} • {leader.period}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-navy-600 leading-relaxed">
                    {leader.description}
                  </p>
                  
                  {leader.isFounder && (
                    <div className="mt-4 p-3 bg-forest-50 rounded-lg">
                      <p className="text-sm text-forest-700 font-medium">
                        🌟 Founding Father - His legacy continues to guide our mission
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustLeadership;
