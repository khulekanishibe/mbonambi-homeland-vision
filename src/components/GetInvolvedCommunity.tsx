
import React from 'react';
import { Heart, HandHeart, Users, MessageCircle } from 'lucide-react';

const GetInvolvedCommunity = () => {
  const opportunities = [
    {
      icon: HandHeart,
      title: 'Volunteer with Us',
      description: 'Join community initiatives, cultural events, and development projects that make a real difference.',
      action: 'Start Volunteering'
    },
    {
      icon: Heart,
      title: 'Support Our Cause',
      description: 'Contribute to education, cultural preservation, and community development through donations.',
      action: 'Make a Donation'
    },
    {
      icon: Users,
      title: 'Join Community Groups',
      description: 'Participate in cultural groups, youth programs, and community committees shaping our future.',
      action: 'Get Connected'
    },
    {
      icon: MessageCircle,
      title: 'Share Your Voice',
      description: 'Attend community meetings, share ideas, and help guide decisions affecting our community.',
      action: 'Join the Conversation'
    }
  ];

  return (
    <section className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Get Involved
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Be part of the continuing story of the Mbonambi people. Every contribution strengthens our community and preserves our heritage for future generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-forest-600" />
                </div>
                <h3 className="font-semibold text-xl text-navy-800 mb-4">
                  {opportunity.title}
                </h3>
                <p className="text-navy-600 leading-relaxed mb-6">
                  {opportunity.description}
                </p>
                <button className="bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full">
                  {opportunity.action}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="font-semibold text-2xl text-navy-800 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-navy-600 mb-6">
              Connect with us today and become part of the Mbonambi community's journey toward a brighter future.
            </p>
            <button className="bg-navy-700 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedCommunity;
