
import { User, Crown } from 'lucide-react';

const TrustLeadership = () => {
  const leaders = [
    {
      name: 'Martin Mbuyazi',
      role: 'Chair, Empowerment Trust; ultimate oversight of CDT & PBT',
      period: 'Since 2016',
      description: 'Appointed administrator of CDT and PBT by the KZN Premier\'s office, providing ultimate oversight.',
      image: '/lovable-uploads/a5a05d20-5142-4894-9114-ccc138784ccd.png',
      icon: User
    },
    {
      name: 'Lulama Cele-Boughey',
      role: 'COO, Empowerment Trust; Project Director, PBT',
      period: 'Current',
      description: 'Manages day-to-day operations of the Empowerment Trust and directs projects for the Public Benefit Trust.',
      image: '/lovable-uploads/a5a05d20-5142-4894-9114-ccc138784ccd.png',
      icon: User
    },
    {
      name: 'Manne Dipico',
      role: 'Non-exec Trustee, Empowerment Trust',
      period: 'Current',
      description: 'Former Premier, serves as a governance advisor to the Empowerment Trust.',
      image: '/lovable-uploads/a5a05d20-5142-4894-9114-ccc138784ccd.png',
      icon: User
    },
    {
      name: 'Nhlanhla Gasa',
      role: 'Trustee Emeritus (Deceased)',
      period: 'Founding',
      description: 'A founding director of the trust structure, his legacy continues to be an inspiration.',
      image: '/lovable-uploads/f71d2873-1e55-435e-b2da-2642e37bdf5a.png',
      icon: Crown,
      isFounder: true
    }
  ];

  return (
    <section className="py-16 bg-mbonambi-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-mbonambi-darkGray mb-4">
            Trust Leadership
          </h2>
          <p className="text-mbonambi-mediumGray text-lg max-w-2xl mx-auto">
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
                  leader.isFounder ? 'border-2 border-mbonambi-mauve' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      leader.isFounder ? 'bg-mbonambi-mauve/20' : 'bg-mbonambi-lightGray'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        leader.isFounder ? 'text-mbonambi-mauve' : 'text-mbonambi-mediumGray'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mbonambi-darkGray text-xl">{leader.name}</h3>
                      <p className={`text-sm font-medium ${
                        leader.isFounder ? 'text-mbonambi-mauve' : 'text-mbonambi-mediumGray'
                      }`}>
                        {leader.role} • {leader.period}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-mbonambi-mediumGray leading-relaxed">
                    {leader.description}
                  </p>
                  
                  {leader.isFounder && (
                    <div className="mt-4 p-3 bg-mbonambi-mauve/10 rounded-lg">
                      <p className="text-sm text-mbonambi-mauve font-medium">
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
