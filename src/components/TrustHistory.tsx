import { Calendar, Handshake, Award, Users } from 'lucide-react';

const TrustHistory = () => {
  const milestones = [
    {
      year: '2009',
      title: 'Trust Establishment',
      description: 'Empowerment structure formed through Blue Horizon Investments 41 (Pty) Ltd, which received 24% of RBM.',
      icon: Calendar,
      color: 'bg-forest-100 text-forest-600'
    },
    {
      year: '2016',
      title: 'Leadership Transition',
      description: 'Martin Mbuyazi appointed interim administrator by KZN Premier.',
      icon: Users,
      color: 'bg-navy-100 text-navy-600'
    },
    {
      year: '2021',
      title: 'Funding Release',
      description: 'DMRE orders release of trust funds for public benefit.',
      icon: Award,
      color: 'bg-sandstone-100 text-sandstone-600'
    },
    {
      year: '2025',
      title: 'Court Affirmation',
      description: 'Court affirms Mbonambi community representation via CDT/PBT under Martin Mbuyazi.',
      icon: Handshake,
      color: 'bg-forest-100 text-forest-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Our Journey Through Time
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            From establishment to present day - key milestones that shaped our community impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-navy-200 hidden md:block"></div>
            
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative mb-12 md:mb-16 ${
                  isEven ? 'md:text-right' : 'md:text-left'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-forest-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>
                  
                  <div className={`md:w-1/2 ${
                    isEven ? 'md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="bg-sandstone-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className={`flex items-center mb-4 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      } justify-start`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${milestone.color} ${
                          isEven ? 'md:order-2 md:ml-4' : 'mr-4'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className={isEven ? 'md:order-1' : ''}>
                          <h3 className="font-bold text-2xl text-navy-800">{milestone.year}</h3>
                          <h4 className="font-semibold text-lg text-navy-700">{milestone.title}</h4>
                        </div>
                      </div>
                      <p className="text-navy-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustHistory;
