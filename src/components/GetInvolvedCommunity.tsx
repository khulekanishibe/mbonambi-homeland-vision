import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Users, HandHeart, Mail } from 'lucide-react';

const GetInvolvedCommunity = () => {
  const { t } = useTranslation();

  return (
    <section id="get-involved" className="py-20 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Get Involved
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-12 border border-gray-200 shadow-sm">
              <HandHeart className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <p className="text-lg text-navy-600 mb-6">
                Volunteer, support, and connect — coming soon!
              </p>
              <p className="text-sm text-navy-500 mb-8">
                We're developing new ways for community members to get involved and make a difference.
              </p>
              <button 
                className="bg-gray-300 text-gray-500 px-8 py-4 rounded-lg font-medium cursor-not-allowed shadow-sm"
                disabled
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedCommunity;