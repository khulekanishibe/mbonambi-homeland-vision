
import React from 'react';
import { Shield, Users, Handshake, MapPin } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Land Rights Protection',
      description: 'Safeguarding community land rights and traditional territories in the King Cetshwayo District.'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Building capacity and fostering leadership within the Mbonambi community for sustainable development.'
    },
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Collaborating with mining companies and government entities to ensure fair compensation and development.'
    },
    {
      icon: MapPin,
      title: 'Local Heritage',
      description: 'Preserving Zulu cultural heritage while embracing progressive community development initiatives.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Our Mission
          </h2>
          <p className="text-navy-600 text-lg max-w-3xl mx-auto">
            The Mbonambi Community Trust serves as the voice and guardian of our community's interests, 
            ensuring that development benefits our people while preserving our cultural heritage and land rights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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

        <div className="mt-16 bg-gradient-to-r from-forest-600 to-navy-700 rounded-2xl p-8 text-center text-white">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Building a Stronger Community Together
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto opacity-90">
            Through transparent governance, community engagement, and strategic partnerships, 
            we work to ensure that every member of the Mbonambi community benefits from development opportunities.
          </p>
          <button className="bg-white text-navy-700 px-8 py-3 rounded-lg font-semibold hover:bg-sandstone-50 transition-all duration-300 hover:scale-105">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
