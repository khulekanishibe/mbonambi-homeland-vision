
import React from 'react';
import { Shield, Users, Handshake, MapPin, Calendar, Building2 } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Land Rights Protection',
      description: 'Safeguarding community land rights and traditional territories under the Ingonyama Trust in the King Cetshwayo District.'
    },
    {
      icon: Building2,
      title: 'Mining Partnership',
      description: 'Managing the R74.5 million trust fund from our partnership with Richards Bay Minerals (RBM) for community benefit.'
    },
    {
      icon: Users,
      title: 'Traditional Leadership',
      description: 'Led by Inkosi Martin Mbuyazi and the Mbonambi Traditional Council, upholding Zulu cultural heritage and governance.'
    },
    {
      icon: Handshake,
      title: 'Community Development',
      description: 'Investing in education, infrastructure, healthcare, and economic opportunities for the Mbonambi community.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            About the Mbonambi Community Trust
          </h2>
          <p className="text-navy-600 text-lg max-w-4xl mx-auto">
            Established in 2009 as part of Richards Bay Minerals' broad-based black economic empowerment deal, 
            the Mbonambi Community Trust serves as the voice and guardian of our community's interests in the 
            King Cetshwayo District of KwaZulu-Natal.
          </p>
        </div>

        {/* Key Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center group-hover:bg-forest-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-forest-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-navy-800 mb-3 text-lg">
                  {feature.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Historical Timeline */}
        <div className="bg-sandstone-50 rounded-2xl p-8 mb-16">
          <h3 className="font-heading text-2xl font-bold text-navy-800 mb-6 text-center">Our Journey</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-navy-800 mb-2">2009</h4>
              <p className="text-navy-600 text-sm">Trust established under the Trust Property Control Act as part of RBM's empowerment deal</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-navy-800 mb-2">2018</h4>
              <p className="text-navy-600 text-sm">R74.5 million trust fund formally handed over in ceremony attended by government officials</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-navy-800 mb-2">2025</h4>
              <p className="text-navy-600 text-sm">High Court affirms traditional leaders' rights and trust governance structure</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-forest-600 to-navy-700 rounded-2xl p-8 text-center text-white">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Ubuntu - I am because we are
          </h3>
          <p className="text-lg mb-6 max-w-4xl mx-auto opacity-90">
            Through transparent governance, community engagement, and strategic partnerships with RBM and government, 
            we ensure that every member of the Mbonambi community benefits from development opportunities while 
            preserving our cultural heritage and traditional leadership under the guidance of our amakhosi.
          </p>
          <button className="bg-white text-navy-700 px-8 py-3 rounded-lg font-semibold hover:bg-sandstone-50 transition-all duration-300 hover:scale-105">
            Learn More About Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
