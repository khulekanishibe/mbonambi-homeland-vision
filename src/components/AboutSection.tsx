
import React from 'react';
import { Shield, Users, Handshake, MapPin, Calendar, Building2 } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Community Empowerment',
      description: 'Managing and distributing community benefits derived from RBM\'s operations to uplift the Mbonambi community through transparent governance.'
    },
    {
      icon: Building2,
      title: 'B-BBEE Partnership',
      description: 'Established in 2009 as part of Richards Bay Minerals\' Broad-Based Black Economic Empowerment transaction to ensure community benefit.'
    },
    {
      icon: Users,
      title: 'Dedicated Leadership',
      description: 'Founded by the late Inkosi Sibusiso Mbuyazi and administered by Martin Mbuyazi since 2017, ensuring continuity and community focus.'
    },
    {
      icon: Handshake,
      title: 'Sustainable Development',
      description: 'Focusing on education, infrastructure, and sustainable development initiatives that create lasting positive impact for our community.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            About the Mbonambi Community Public Benefit Trust
          </h2>
          <p className="text-navy-600 text-lg max-w-4xl mx-auto">
            Established in 2009 as part of Richards Bay Minerals' Broad-Based Black Economic Empowerment deal, 
            our Trust serves the KwaMbonambi community within the uMfolozi Local Municipality, KwaZulu-Natal. 
            We are committed to transparent governance and sustainable community development.
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
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-navy-800 mb-2">2009</h4>
              <p className="text-navy-600 text-sm">Trust established by the late Inkosi Sibusiso Mbuyazi as part of RBM's B-BBEE transaction</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-navy-800 mb-2">2017</h4>
              <p className="text-navy-600 text-sm">Martin Mbuyazi appointed as Administrator, ensuring continued community focus and governance</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-navy-800 mb-2">2021</h4>
              <p className="text-navy-600 text-sm">Following DMRE directives, RBM released withheld funds, facilitating expanded community development</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-navy-800 mb-2">Today</h4>
              <p className="text-navy-600 text-sm">Continuing our mission of transparent governance and sustainable community empowerment</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-forest-600 to-navy-700 rounded-2xl p-8 text-center text-white">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Ubuntu - I am because we are
          </h3>
          <p className="text-lg mb-6 max-w-4xl mx-auto opacity-90">
            Through transparent governance and strategic partnerships with Richards Bay Minerals and government, 
            we channel community benefits towards education, infrastructure, and sustainable development. 
            Despite facing governance challenges, we remain committed to empowering every member of the 
            KwaMbonambi community while honoring the vision of our founder, the late Inkosi Sibusiso Mbuyazi.
          </p>
          <button className="bg-white text-navy-700 px-8 py-3 rounded-lg font-semibold hover:bg-sandstone-50 transition-all duration-300 hover:scale-105">
            Learn More About Our Impact
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
