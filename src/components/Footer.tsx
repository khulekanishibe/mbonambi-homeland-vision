
import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">
              Mbonambi Community
            </h3>
            <p className="text-navy-200 mb-6 leading-relaxed">
              Guardians of Our Land, Partners in Progress. The Mbonambi people continue their legacy 
              of craftsmanship, unity, and resilience from KwaMbonambi - "Place of the Mbonambi."
            </p>
            <div className="text-sandstone-300 text-sm">
              Honoring the legacy of our ancestors • Building for future generations
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">About Our Clan</a></li>
              <li><a href="#history" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Clan History</a></li>
              <li><a href="#trusts" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Community Trusts</a></li>
              <li><a href="#events" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Events & Announcements</a></li>
              <li><a href="#gallery" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Photo Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-forest-400 flex-shrink-0" />
                <span className="text-navy-200">KwaMbonambi Tribal Authority Office, KwaZulu-Natal, South Africa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-forest-400" />
                <span className="text-navy-200">+27 (0) 35 580 1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-forest-400" />
                <span className="text-navy-200">info@mbonambi.org.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-forest-400" />
                <span className="text-navy-200">www.mbonambi.org.za</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-navy-800 rounded-lg">
              <p className="text-sm text-sandstone-200">
                Community members are encouraged to participate in meetings, cultural events, 
                and development initiatives that strengthen our collective future.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 text-center">
          <p className="text-navy-300 text-sm">
            © 2024 Mbonambi Community. All rights reserved. | 
            <span className="text-sandstone-300 ml-2">Heritage • Unity • Progress</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
