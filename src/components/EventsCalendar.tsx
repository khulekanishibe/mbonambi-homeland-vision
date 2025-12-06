import { Calendar } from 'lucide-react';

const EventsCalendar = () => {
  return (
    <section className="py-16 bg-sandstone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Events Calendar
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            View all scheduled community events and important dates
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <Calendar className="w-24 h-24 text-navy-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-navy-800 mb-4">
              Interactive Calendar Coming Soon
            </h3>
            <p className="text-navy-600 mb-6">
              We're developing an interactive calendar to help you stay up-to-date with all community events, 
              meetings, and important announcements.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-forest-50 p-4 rounded-lg">
                <h4 className="font-semibold text-forest-700 mb-2">Monthly Meetings</h4>
                <p className="text-sm text-forest-600">3rd Saturday of every month</p>
              </div>
              <div className="bg-navy-50 p-4 rounded-lg">
                <h4 className="font-semibold text-navy-700 mb-2">Quarterly Reviews</h4>
                <p className="text-sm text-navy-600">March, June, September, December</p>
              </div>
              <div className="bg-sandstone-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sandstone-700 mb-2">Cultural Events</h4>
                <p className="text-sm text-sandstone-600">Heritage Day, Youth Day, Freedom Day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
