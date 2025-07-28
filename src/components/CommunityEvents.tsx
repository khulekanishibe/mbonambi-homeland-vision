import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';

const CommunityEvents = () => {
  const { t } = useTranslation();

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Upcoming Events
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-sandstone-50 rounded-lg p-12 border border-sandstone-200">
              <Calendar className="w-16 h-16 text-sandstone-400 mx-auto mb-6" />
              <p className="text-lg text-navy-600 mb-4">
                This section is under development. Please check back soon.
              </p>
              <p className="text-sm text-navy-500">
                We're working on bringing you the latest community events and meetings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityEvents;
