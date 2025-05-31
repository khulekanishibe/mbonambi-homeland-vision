
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">
              Mbonambi Community Public Benefit Trust
            </h3>
            <p className="text-navy-200 mb-4">
              Empowering our community through transparent development and sustainable growth. 
              Serving KwaMbonambi within the uMfolozi Local Municipality since 2009.
            </p>
            <div className="text-sandstone-300 text-sm">
              Founded by the late Inkosi Sibusiso Mbuyazi • Administered by Martin Mbuyazi
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#leadership" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Leadership</a></li>
              <li><a href="#impact" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Community Impact</a></li>
              <li><a href="#announcements" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Announcements</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact the Trust</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-forest-400" />
                <span className="text-navy-200">KwaMbonambi, uMfolozi Local Municipality, KwaZulu-Natal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-forest-400" />
                <span className="text-navy-200">+27 (0) 35 580 1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-forest-400" />
                <span className="text-navy-200">info@mbonambitrust.org.za</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-navy-800 rounded-lg">
              <p className="text-sm text-sandstone-200">
                Community members are encouraged to engage with the Trust regarding development initiatives and benefit distribution.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-navy-300 text-sm">
            © 2024 Mbonambi Community Public Benefit Trust. All rights reserved. | 
            <span className="text-sandstone-300 ml-2">Transparency • Community • Empowerment</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
