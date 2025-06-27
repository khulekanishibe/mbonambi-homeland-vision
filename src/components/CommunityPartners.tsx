import React from 'react';
import { MapPin, Users, Handshake, Building } from 'lucide-react';

const CommunityPartners = () => {
  const partners = [
    {
      name: 'Dube Community',
      location: 'uMhlathuze area',
      description: 'Partnered through its own CDT and PBT structures under Blue Horizon Investments.',
      icon: Building,
      color: 'bg-blue-50 hover:bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      name: 'Sokhulu Community',
      location: 'North of Richards Bay',
      description: 'Stakeholders in the Empowerment Trust, benefiting from skills and infrastructure programs.',
      icon: Users,
      color: 'bg-green-50 hover:bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      name: 'Mkhwanazi Community',
      location: 'Richards Bay, KwaMbonambi',
      description: 'Key partner in land development and training initiatives under RBM support.',
      icon: Handshake,
      color: 'bg-purple-50 hover:bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      name: 'Mbonambi Community',
      location: 'King Cetshwayo District',
      description: 'Hosts the Empowerment Trust and leads the CDT and PBT projects supporting all partners.',
      icon: MapPin,
      color: 'bg-forest-50 hover:bg-forest-100',
      iconColor: 'text-forest-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Community Partners
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Together with our partner communities, we form a united network within the RBM BEE transaction, 
            each contributing to our collective growth and development across the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div 
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${partner.color} border border-white`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <IconComponent className={`w-6 h-6 ${partner.iconColor}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-800 text-xl mb-2">
                      {partner.name}
                    </h3>
                    <div className="flex items-center text-sm text-navy-500 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {partner.location}
                    </div>
                    <p className="text-navy-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-sandstone-50 px-6 py-3 rounded-full border border-sandstone-200">
            <Handshake className="w-5 h-5 text-sandstone-600 mr-2" />
            <span className="text-navy-700 font-medium">
              United in Partnership • Stronger Together
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;