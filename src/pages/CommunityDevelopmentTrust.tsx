import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CommunityDevelopmentTrust = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-earth to-forest">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Community Development Trust
            </h1>
            <p className="text-xl md:text-2xl text-sandstone-200 leading-relaxed">
              Empowering Our Community Through Strategic Partnership
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8 text-white">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The Community Development Trust represents the Mbonambi community's direct participation in one of South Africa's most significant Black Economic Empowerment transactions. Established in 2009, the CDT holds an 11.25% equity stake in Blue Horizon Investments 41 (Pty) Ltd, ensuring our community has a meaningful voice in corporate governance and economic development.
              </p>

              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="mb-6">
                The CDT serves as the primary vehicle for community representation in the Richards Bay Minerals (RBM) partnership. Through our shareholding structure, we ensure that the Mbonambi people benefit directly from mineral extraction activities on our traditional lands while maintaining our cultural heritage and community values.
              </p>

              <h3 className="text-xl font-semibold mb-3">Our Mandate</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Equity Management</strong>: Stewarding our 11.25% shareholding in Blue Horizon Investments</li>
                <li><strong>Community Representation</strong>: Advocating for Mbonambi interests in corporate governance</li>
                <li><strong>Land Rights Protection</strong>: Safeguarding traditional land rights and usage</li>
                <li><strong>Economic Participation</strong>: Ensuring fair distribution of economic benefits</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Vision & Mission</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Vision</h3>
                  <p>To be a leading example of successful community-corporate partnership that delivers sustainable economic benefits while preserving our cultural heritage.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Mission</h3>
                  <p>To responsibly manage our equity participation in the RBM partnership, ensuring transparent governance and meaningful economic transformation for the Mbonambi community.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Leadership</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold">Martin Mbuyazi - <em>Chairman</em></h4>
                  <p className="text-sm">Appointed administrator by the KZN Premier's office, providing strategic leadership and oversight of all trust activities.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold">Lulama Cele-Boughey - <em>Secretary</em></h4>
                  <p className="text-sm">Operational management and day-to-day administration of trust affairs.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold">Fundi Dlamini - <em>Finance Lead</em></h4>
                  <p className="text-sm">Financial oversight and liaison with project implementation partners.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Partnerships</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Primary Partners</h3>
                  <ul className="space-y-2">
                    <li>• Blue Horizon Investments 41 (Pty) Ltd - Empowerment consortium</li>
                    <li>• Richards Bay Minerals (RBM) - Mining operator and BEE partner</li>
                    <li>• Department of Mineral Resources and Energy (DMRE) - Regulatory authority</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Community Partners</h3>
                  <ul className="space-y-2">
                    <li>• Dube Community (uMhlathuze)</li>
                    <li>• Sokhulu Community (North of Richards Bay)</li>
                    <li>• Mkhwanazi Community (KwaMbonambi)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              <p className="mb-4">Since 2009, the CDT has successfully:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintained stable equity participation in a R1.2 billion BEE transaction</li>
                <li>Established transparent governance structures</li>
                <li>Built strategic partnerships across government and private sector</li>
                <li>Created a foundation for sustainable community development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CommunityDevelopmentTrust;