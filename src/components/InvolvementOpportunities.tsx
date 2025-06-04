
import React from 'react';
import { Heart, Users, HandHeart, MessageSquare, DollarSign, Lightbulb } from 'lucide-react';

const InvolvementOpportunities = () => {
  const opportunities = [
    {
      title: 'Volunteer Programs',
      description: 'Join our community volunteer initiatives including educational support, elderly care, and environmental projects.',
      icon: Heart,
      action: 'Volunteer Now',
      color: 'bg-red-50 border-red-200 hover:bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      title: 'Community Meetings',
      description: 'Attend our regular community meetings to stay informed and contribute to decision-making processes.',
      icon: Users,
      action: 'Join Meetings',
      color: 'bg-navy-50 border-navy-200 hover:bg-navy-100',
      iconColor: 'text-navy-600'
    },
    {
      title: 'Mentorship Program',
      description: 'Share your skills and experience by mentoring young community members in various fields.',
      icon: HandHeart,
      action: 'Become a Mentor',
      color: 'bg-forest-50 border-forest-200 hover:bg-forest-100',
      iconColor: 'text-forest-600'
    },
    {
      title: 'Community Feedback',
      description: 'Provide valuable feedback on Trust initiatives and suggest improvements for community development.',
      icon: MessageSquare,
      action: 'Share Feedback',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Support Donations',
      description: 'Contribute to specific community projects and initiatives that align with your values and interests.',
      icon: DollarSign,
      action: 'Make a Donation',
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Project Ideas',
      description: 'Submit innovative project proposals that could benefit the Mbonambi community.',
      icon: Lightbulb,
      action: 'Submit Ideas',
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Ways to Get Involved
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Discover meaningful ways to contribute to our community's growth and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <div 
                key={index}
                className={`p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${opportunity.color}`}
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <IconComponent className={`w-8 h-8 ${opportunity.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-navy-800 mb-3 text-lg">
                    {opportunity.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed mb-6">
                    {opportunity.description}
                  </p>
                  <button className={`w-full py-2 px-4 rounded font-medium transition-colors duration-300 ${opportunity.iconColor} bg-white hover:bg-gray-50 border border-current`}>
                    {opportunity.action}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-forest-600 to-navy-700 rounded-2xl p-8 text-center text-white">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto opacity-90">
            Your involvement matters. Whether you have a few hours a month or want to take on a larger role, 
            there's a place for you in our community development efforts.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-navy-700 px-8 py-3 rounded-lg font-semibold hover:bg-sandstone-50 transition-all duration-300 hover:scale-105">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy-700 transition-all duration-300">
              Download Information Pack
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvolvementOpportunities;
