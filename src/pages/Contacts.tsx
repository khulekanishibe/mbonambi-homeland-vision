import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-earth to-forest">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contacts
            </h1>
            <p className="text-xl md:text-2xl text-sandstone-200 leading-relaxed">
              Connect with the Mbonambi Community Trust
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8 text-white">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-8">
                We welcome communication from community members, partners, stakeholders, and the general public. Our team is committed to providing responsive, professional service and maintaining open channels of communication with all who interact with our organization.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Primary Contacts */}
                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Phone className="h-6 w-6" />
                    Primary Contacts
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border-b border-white/20 pb-4">
                      <h3 className="font-semibold text-lg">Martin Mbuyazi</h3>
                      <p className="text-sm text-sandstone-200">Trust Administrator</p>
                      <p className="text-sm mb-2">Chairman, Community Development Trust & Public Benefit Trust</p>
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          administrator@mbonambi.org.za
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          +27 (0) 35 580 1234
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg">Lulama Cele-Boughey</h3>
                      <p className="text-sm text-sandstone-200">Chief Operating Officer</p>
                      <p className="text-sm mb-2">Secretary CDT, Project Director PBT</p>
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          operations@mbonambi.org.za
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          +27 (0) 35 580 1235
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="h-6 w-6" />
                    Office Hours
                  </h2>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">Regular Business Hours</h3>
                      <ul className="text-sm space-y-1 mt-2">
                        <li><strong>Monday - Friday</strong>: 08:00 - 17:00</li>
                        <li><strong>Saturday</strong>: 08:00 - 13:00 (Community services only)</li>
                        <li><strong>Sunday</strong>: Closed (Emergency contact available)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">Community Meetings</h3>
                      <ul className="text-sm space-y-1 mt-2">
                        <li><strong>Monthly Meetings</strong>: Third Saturday of each month, 09:00 - 12:00</li>
                        <li><strong>Quarterly Forums</strong>: March, June, September, December</li>
                        <li><strong>Annual General Meeting</strong>: November (Date announced annually)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Address */}
              <div className="bg-white/5 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Physical Address
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Main Office</h3>
                    <address className="text-sm not-italic">
                      Mbonambi Community Trust<br />
                      KwaMbonambi Tribal Authority Office<br />
                      King Cetshwayo District<br />
                      KwaZulu-Natal, South Africa<br />
                      <strong>Postal Code</strong>: 3915
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Project Offices</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>Infrastructure Development Office</strong><br />
                        Community Development Center<br />
                        KwaMbonambi, KwaZulu-Natal
                      </div>
                      <div>
                        <strong>Skills Development Center</strong><br />
                        Furniture & Upholstery Workshop<br />
                        Industrial Area, KwaMbonambi
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Department Contacts</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Community Development Trust (CDT)</h3>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>General Inquiries: cdt@mbonambi.org.za</li>
                        <li>Governance Matters: governance@mbonambi.org.za</li>
                        <li>Equity Participation: equity@mbonambi.org.za</li>
                        <li>Land Rights: landrights@mbonambi.org.za</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">Public Benefit Trust (PBT)</h3>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>General Inquiries: pbt@mbonambi.org.za</li>
                        <li>Project Information: projects@mbonambi.org.za</li>
                        <li>Infrastructure Development: infrastructure@mbonambi.org.za</li>
                        <li>Skills Development: skills@mbonambi.org.za</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Business Development</h2>
                  
                  <ul className="space-y-2 text-sm">
                    <li><strong>Partnership Opportunities</strong>: partnerships@mbonambi.org.za</li>
                    <li><strong>Procurement Inquiries</strong>: procurement@mbonambi.org.za</li>
                    <li><strong>Supplier Development</strong>: suppliers@mbonambi.org.za</li>
                    <li><strong>Investment Opportunities</strong>: investment@mbonambi.org.za</li>
                  </ul>

                  <h3 className="font-semibold mt-6 mb-2">Traditional Authority Contact</h3>
                  <div className="text-sm">
                    <p><strong>Inkosi Mkhanyiseni Mbuyazi</strong> - Traditional Leader</p>
                    <p>Email: traditional@mbonambi.org.za</p>
                    <p>Phone: +27 (0) 35 580 1240</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold mb-4 text-red-200">Emergency Contacts</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-red-200">After Hours Emergency</h3>
                    <ul className="text-sm space-y-1 mt-2">
                      <li><strong>Emergency Hotline</strong>: +27 (0) 82 123 4567</li>
                      <li><strong>Available</strong>: 24/7 for urgent community matters</li>
                      <li><strong>Response Time</strong>: Within 2 hours for critical issues</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-red-200">Crisis Communication</h3>
                    <ul className="text-sm space-y-1 mt-2">
                      <li><strong>Community Crisis Line</strong>: +27 (0) 80 012 3456</li>
                      <li><strong>Media Inquiries</strong>: media@mbonambi.org.za</li>
                      <li><strong>Legal Emergencies</strong>: legal@mbonambi.org.za</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Feedback and Complaints</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Feedback Channels</h3>
                    <ul className="text-sm space-y-1">
                      <li><strong>General Feedback</strong>: feedback@mbonambi.org.za</li>
                      <li><strong>Service Quality</strong>: quality@mbonambi.org.za</li>
                      <li><strong>Suggestions</strong>: suggestions@mbonambi.org.za</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Anonymous Reporting</h3>
                    <ul className="text-sm space-y-1">
                      <li><strong>Anonymous Hotline</strong>: +27 (0) 80 098 7654</li>
                      <li><strong>Online Portal</strong>: www.mbonambi.org.za/report</li>
                      <li><strong>Drop Box</strong>: Available at main office</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;