import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Stakeholders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-earth to-forest">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Stakeholders
            </h1>
            <p className="text-xl md:text-2xl text-sandstone-200 leading-relaxed">
              Building Partnerships for Sustainable Development
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8 text-white">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The Mbonambi Community Trust operates within a complex ecosystem of stakeholders, each playing a vital role in our community's development journey. Through transparent communication, collaborative partnerships, and shared accountability, we work together to achieve sustainable economic transformation and community empowerment.
              </p>

              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="mb-6">
                Our stakeholder network spans government, corporate partners, community organizations, and traditional authorities. This collaborative approach ensures that development initiatives are well-coordinated, culturally appropriate, and deliver maximum benefit to the Mbonambi community while meeting the needs of all partners.
              </p>

              <h2 className="text-2xl font-bold mb-4">Government Stakeholders</h2>
              
              <h3 className="text-xl font-semibold mb-3">National Government</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Department of Mineral Resources and Energy (DMRE)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Regulatory oversight and compliance monitoring</li>
                    <li>• BEE transaction approval and monitoring</li>
                    <li>• Community benefit verification</li>
                    <li>• Policy development and implementation</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Department of Rural Development and Land Reform</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Land rights protection and development</li>
                    <li>• Traditional authority recognition</li>
                    <li>• Community development support</li>
                    <li>• Agricultural development programs</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Provincial & Local Government</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">KwaZulu-Natal Provincial Government</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Policy coordination and implementation</li>
                    <li>• Development program alignment</li>
                    <li>• Traditional leadership support</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">King Cetshwayo District Municipality</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Local development coordination</li>
                    <li>• Infrastructure planning</li>
                    <li>• Service delivery partnerships</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Corporate Partners</h2>
              
              <h3 className="text-xl font-semibold mb-3">Primary Partners</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Richards Bay Minerals (RBM) / Rio Tinto</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Mining operations and community partnerships</li>
                    <li>• BEE transaction implementation</li>
                    <li>• Community development funding</li>
                    <li>• Environmental stewardship</li>
                    <li>• Skills development and employment creation</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Blue Horizon Investments 41 (Pty) Ltd</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Empowerment consortium management</li>
                    <li>• Equity participation coordination</li>
                    <li>• Strategic planning and governance</li>
                    <li>• Stakeholder relationship management</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Strategic Partners</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Mondi (Forestry Partnership)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Sustainable forestry development</li>
                    <li>• Environmental conservation</li>
                    <li>• Job creation and skills development</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Unitrans & Ivysea 15</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Transport and logistics services</li>
                    <li>• Local procurement opportunities</li>
                    <li>• Employment creation</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Community Partners</h2>
              
              <h3 className="text-xl font-semibold mb-3">Partner Communities</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Dube Community</h4>
                  <p className="text-sm">uMhlathuze</p>
                  <ul className="text-xs mt-2 space-y-1">
                    <li>• Shared BEE benefits</li>
                    <li>• Joint development initiatives</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Sokhulu Community</h4>
                  <p className="text-sm">North of Richards Bay</p>
                  <ul className="text-xs mt-2 space-y-1">
                    <li>• Empowerment Trust participation</li>
                    <li>• Resource sharing</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Mkhwanazi Community</h4>
                  <p className="text-sm">KwaMbonambi</p>
                  <ul className="text-xs mt-2 space-y-1">
                    <li>• Land development partnerships</li>
                    <li>• Infrastructure sharing</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Traditional Authorities</h2>
              
              <div className="bg-white/5 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">Mbonambi Traditional Authority</h3>
                <div className="mb-4">
                  <h4 className="font-semibold">Inkosi Mkhanyiseni Mbuyazi - <em>Traditional Leader</em></h4>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>• Cultural leadership and guidance</li>
                    <li>• Traditional law and customs</li>
                    <li>• Community consultation and consent</li>
                    <li>• Conflict resolution and mediation</li>
                  </ul>
                </div>
                <h4 className="font-semibold mb-2">Traditional Council</h4>
                <ul className="text-sm space-y-1">
                  <li>• Community representation and advocacy</li>
                  <li>• Cultural preservation and promotion</li>
                  <li>• Traditional knowledge protection</li>
                  <li>• Ceremonial and cultural activities</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4">Professional Service Providers</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Blackbird Advisory</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Financial consulting and project management</li>
                    <li>• Governance and compliance support</li>
                    <li>• Strategic planning assistance</li>
                    <li>• Risk management and mitigation</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Andisa FT</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Infrastructure development and construction</li>
                    <li>• Project management and delivery</li>
                    <li>• Local procurement and employment</li>
                    <li>• Quality assurance and compliance</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Stakeholder Engagement Framework</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Communication Channels</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Quarterly Reports</strong>: Regular performance and progress updates</li>
                    <li>• <strong>Community Meetings</strong>: Open forums for discussion and feedback</li>
                    <li>• <strong>Stakeholder Forums</strong>: Multi-party coordination meetings</li>
                    <li>• <strong>Traditional Gatherings</strong>: Cultural and ceremonial consultations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Transparency Measures</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Public Reporting</strong>: Regular publication of activities and outcomes</li>
                    <li>• <strong>Financial Disclosure</strong>: Transparent financial reporting and auditing</li>
                    <li>• <strong>Impact Assessment</strong>: Regular evaluation of community benefits</li>
                    <li>• <strong>Stakeholder Feedback</strong>: Formal mechanisms for input and concerns</li>
                  </ul>
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

export default Stakeholders;