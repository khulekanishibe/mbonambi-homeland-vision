
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TrustLeadership from '../components/TrustLeadership';
import TrustHistory from '../components/TrustHistory';
import TrustContributions from '../components/TrustContributions';
import { Shield, Users, Handshake, Building2 } from 'lucide-react';

const TrustOverview = () => {
  return (
    <div className="min-h-screen bg-sandstone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 via-navy-800 to-forest-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Mbonambi Community Public Benefit Trust
          </h1>
          <p className="text-lg md:text-xl text-sandstone-100 mb-8 max-w-3xl mx-auto">
            Established in 2009 to manage and distribute community benefits from Richards Bay Minerals, 
            fostering sustainable development and empowerment within the KwaMbonambi community.
          </p>
        </div>
      </section>

      {/* Trust Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-forest-50 rounded-lg">
                <Shield className="w-12 h-12 text-forest-600 mx-auto mb-4" />
                <h3 className="font-semibold text-navy-800 mb-3 text-xl">Mission</h3>
                <p className="text-navy-600">
                  To transparently manage and distribute community benefits derived from RBM's operations, 
                  ensuring sustainable development and empowerment for all members of the Mbonambi community.
                </p>
              </div>
              <div className="p-6 bg-navy-50 rounded-lg">
                <Building2 className="w-12 h-12 text-navy-600 mx-auto mb-4" />
                <h3 className="font-semibold text-navy-800 mb-3 text-xl">Vision</h3>
                <p className="text-navy-600">
                  A thriving, self-reliant Mbonambi community where every member benefits from 
                  sustainable development initiatives, quality education, and improved infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustHistory />
      <TrustLeadership />
      <TrustContributions />
      
      <Footer />
    </div>
  );
};

export default TrustOverview;
