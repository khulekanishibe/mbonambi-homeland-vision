import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-theme text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">
              Mbonambi Community Trust
            </h3>
            <p className="text-navy-200 mb-6 leading-relaxed">
              Guardians of Our Land, Partners in Progress. Building a sustainable future through 
              transparent governance, economic empowerment, and community development.
            </p>
            <div className="text-sandstone-300 text-sm">
              Honoring our heritage • Building our future
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/tenders" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Tenders & Procurement</Link></li>
              <li><Link to="/programmes" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Community Programmes</Link></li>
              <li><Link to="/transparency" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Transparency Portal</Link></li>
              <li><Link to="/#announcements" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Announcements</Link></li>
              <li><Link to="/gallery" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/trust" className="text-navy-200 hover:text-sandstone-300 transition-colors duration-300">Trust Overview</Link></li>
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
            <div className="mt-6 p-4 bg-black/20 rounded-lg">
              <p className="text-sm text-sandstone-200">
                Community members are encouraged to participate in trust activities, apply for programmes, 
                and engage with transparency initiatives.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-navy-300 text-sm">
            © 2024 Mbonambi Community Trust. All rights reserved. | 
            <span className="text-sandstone-300 ml-2">Transparency • Empowerment • Progress</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
