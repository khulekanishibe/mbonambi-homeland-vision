import MegaMenu from '../components/MegaMenu';
import Footer from '../components/Footer';
import TrustLeadership from '../components/TrustLeadership';
import TrustHistory from '../components/TrustHistory';
import TrustContributions from '../components/TrustContributions';
import { Shield, Building2 } from 'lucide-react';

const TrustOverview = () => {
  return (
    <div className="min-h-screen bg-sandstone-50">
      <MegaMenu />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 via-navy-800 to-forest-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            The Mbonambi Community Trusts
          </h1>
          <p className="text-lg md:text-xl text-sandstone-100 mb-8 max-w-3xl mx-auto">
            A network of trusts established in 2009 to manage and distribute community benefits from Richards Bay Minerals, fostering sustainable development and empowerment within the KwaMbonambi community.
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

      {/* Key Corporate Stakeholders */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-6 text-center">
            Key Corporate Stakeholders & Partners
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-sandstone-50 rounded-lg">
              <h3 className="font-semibold text-navy-800 mb-3 text-xl">Blue Horizon Investments 41 (Pty) Ltd</h3>
              <p className="text-navy-600">
                Empowerment consortium owning 24% of RBM shares.
              </p>
            </div>
            <div className="p-6 bg-sandstone-50 rounded-lg">
              <h3 className="font-semibold text-navy-800 mb-3 text-xl">RBM / Rio Tinto</h3>
              <p className="text-navy-600">
                Mining operator and BEE partner.
              </p>
            </div>
            <div className="p-6 bg-sandstone-50 rounded-lg">
              <h3 className="font-semibold text-navy-800 mb-3 text-xl">DMRE</h3>
              <p className="text-navy-600">
                Government authority ensuring compliance and fund release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Partnerships */}
      <section className="py-16 bg-sandstone-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-6 text-center">
            Community Partnerships
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="w-full bg-navy-800 text-white">
                  <th className="p-4 text-left">Community</th>
                  <th className="p-4 text-left">Location</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Mbonambi</td>
                  <td className="p-4">King Cetshwayo District</td>
                  <td className="p-4">Hosts CDT, PBT, Empowerment Trust lead</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Dube</td>
                  <td className="p-4">uMhlathuze</td>
                  <td className="p-4">CDT & PBT under Blue Horizon</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Sokhulu</td>
                  <td className="p-4">North of Richards Bay</td>
                  <td className="p-4">Empowerment Trust stakeholder</td>
                </tr>
                <tr>
                  <td className="p-4">Mkhwanazi</td>
                  <td className="p-4">KwaMbonambi</td>
                  <td className="p-4">Partner in land & infrastructure development</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TrustOverview;
