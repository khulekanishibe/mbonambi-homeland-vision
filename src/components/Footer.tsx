
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">
              Mbonambi Community Trust
            </h3>
            <p className="text-navy-200 mb-4">
              Guardians of our Land, Partners in Progress. Serving the Mbonambi community 
              in the King Cetshwayo District with integrity and commitment.
            </p>
            <div className="text-sandstone-300 text-sm">
              Established for community empowerment and land rights protection.
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#leadership" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Leadership</a></li>
              <li><a href="#documents" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Documents</a></li>
              <li><a href="#announcements" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Announcements</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-forest-400" />
                <span className="text-navy-200">King Cetshwayo District, KwaZulu-Natal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-forest-400" />
                <span className="text-navy-200">+27 (0) XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-forest-400" />
                <span className="text-navy-200">info@mbonambitrust.org.za</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-navy-300 text-sm">
            © 2024 Mbonambi Community Trust. All rights reserved. | 
            <span className="text-sandstone-300 ml-2">Ubuntu - I am because we are</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
