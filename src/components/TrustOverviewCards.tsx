import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Users, Crown } from 'lucide-react';
import TiltedCard from './TiltedCard'; // Import TiltedCard

const TrustOverviewCards = () => {
  const { t } = useTranslation();

  const trusts = [
    {
      name: 'Public Benefit Trust (PBT)',
      description: 'Implements public benefit projects like road upgrades, school refurbishments, elevated reservoirs, and entrepreneurship programs.',
      details: [
        'Funding: Draws from RBM BEE benefits and partnerships',
        'R31M roadway upgrades',
        'R11.5M elevated reservoir',
        'R2M furniture workshop (Furniture & Upholstery Initiative)'
      ],
      icon: Heart,
      color: 'bg-forest-100 hover:bg-forest-200',
      iconColor: 'text-forest-600',
      link: '/trust'
    },
    {
      name: 'Community Development Trust (CDT)',
      description: 'Holds 11.25% shareholding in Blue Horizon Investments 41 (Pty) Ltd on behalf of the Mbonambi community.',
      details: [
        'Represents community interests in governance and economic development',
        'Linked to land rights and administrative representation',
        'Strategic partnership management'
      ],
      icon: Users,
      color: 'bg-navy-100 hover:bg-navy-200',
      iconColor: 'text-navy-600',
      link: '/trust'
    },
    {
      name: 'Empowerment Trust',
      description: 'Parent trust managing both CDT and PBT under the RBM/Blue Horizon BEE framework.',
      details: [
        'Established in 2009 as part of RBM\'s 24% share transfer via Blue Horizon Investments',
        'Guides project approval and legal compliance',
        'Provides strategic oversight and focus'
      ],
      icon: Crown,
      color: 'bg-sandstone-100 hover:bg-sandstone-200',
      iconColor: 'text-sandstone-600',
      link: '/trust'
    }
  ];

  return (
    <section id="trusts" className="py-20 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Our Community Trusts
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Three interconnected trusts working together to manage our community's development, resources, and strategic partnerships for sustainable prosperity.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {trusts.map((trust, index) => {
            const IconComponent = trust.icon;
            return (
              <TiltedCard
                key={index}
                imageSrc="" // Empty image source since we're using overlay content
                containerHeight="200px" // Smaller height
                containerWidth="200px" // Smaller width
                scale={0.95} // Initial scale (slightly zoomed out)
                scaleOnHover={1.05} // Zoom in slightly on hover
                displayOverlayContent={true}
                showTooltip={true} // Enable tooltip
                captionText={trust.description}
                overlayContent={
                  <div 
                    className={`p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-full w-full relative z-10 flex flex-col ${trust.color} border border-white`}
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                        <IconComponent className={`w-10 h-10 ${trust.iconColor}`} />
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-navy-800 mb-4 text-xl text-center">
                      {trust.name}
                    </h3>
                    
                    <div className="mt-6 text-center">
                      <Link 
                        to={trust.link}
                        className="inline-flex items-center bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustOverviewCards;