
import React from 'react';
import { Hammer, Shield, Mountain, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Hammer,
      title: 'Master Blacksmiths',
      description: 'Renowned across the region for crafting superior tools and weapons, our ancestors\' forges shaped the development of southern Africa.'
    },
    {
      icon: Shield,
      title: 'Allied with Kings',
      description: 'Proud contributors to the Zulu military strength under King Shaka, our people have always stood with great leaders.'
    },
    {
      icon: Mountain,
      title: 'Guardians of the Land',
      description: 'KwaMbonambi - "Place of the Mbonambi" - named after our legendary artisans who made this land their home.'
    },
    {
      icon: Users,
      title: 'Living Heritage',
      description: 'Maintaining our oral traditions and cultural practices while embracing modern development and progress.'
    }
  ];

  return (
    <section className="py-20 bg-sandstone-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            About the Mbonambi Clan
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-navy-600 leading-relaxed space-y-4">
            <p>
              The Mbonambi clan is an Nguni-speaking people known historically for their exceptional 
              skill in blacksmithing. Their forges supplied tools and weapons across the region, 
              establishing a reputation for craftsmanship that echoes through generations.
            </p>
            <p>
              KwaMbonambi means "Place of the Mbonambi," named after these legendary artisans 
              whose heritage has shaped the community's development and identity for centuries.
            </p>
            <p>
              Today, we honor this legacy while building partnerships that ensure our community's 
              continued growth and prosperity, remaining true guardians of our ancestral land.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-forest-600" />
                </div>
                <h3 className="font-semibold text-xl text-navy-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
