import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BusinessWithUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-earth to-forest">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Business with Us
            </h1>
            <p className="text-xl md:text-2xl text-sandstone-200 leading-relaxed">
              Partnership Opportunities for Sustainable Growth
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8 text-white">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The Mbonambi Community Trust welcomes strategic partnerships with businesses and organizations that share our commitment to sustainable development, community empowerment, and economic transformation. Through our established trust structure and proven track record, we offer unique opportunities for meaningful collaboration that benefits all stakeholders.
              </p>

              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="mb-6">
                As custodians of significant equity participation and community development resources, we seek partnerships that align with our values of transparency, sustainability, and community benefit. Our trust ecosystem provides multiple avenues for business collaboration, from direct procurement opportunities to strategic joint ventures.
              </p>

              <h3 className="text-xl font-semibold mb-3">Partnership Principles</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Mutual Benefit</strong>: Creating value for all stakeholders</li>
                <li><strong>Community Focus</strong>: Prioritizing local economic development</li>
                <li><strong>Sustainability</strong>: Long-term environmental and social responsibility</li>
                <li><strong>Transparency</strong>: Open and accountable business practices</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Our Business Portfolio</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Equity Participation</h3>
                  <h4 className="font-semibold mb-2">Community Development Trust (CDT)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 11.25% shareholding in Blue Horizon Investments</li>
                    <li>• Strategic participation in RBM partnership</li>
                    <li>• Governance and decision-making influence</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Development Projects</h3>
                  <h4 className="font-semibold mb-2">Public Benefit Trust (PBT)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• R31 million road infrastructure upgrades</li>
                    <li>• R11.5 million elevated reservoir project</li>
                    <li>• R7.3 million educational facility improvements</li>
                    <li>• R2 million furniture workshop</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Land Assets</h3>
                  <h4 className="font-semibold mb-2">Traditional Territory Management</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Sustainable forestry partnerships</li>
                    <li>• Agricultural development opportunities</li>
                    <li>• Mineral rights coordination</li>
                    <li>• Cultural and eco-tourism potential</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Partnership Opportunities</h2>
              
              <h3 className="text-xl font-semibold mb-3">Infrastructure Development</h3>
              <div className="bg-white/5 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Construction & Engineering Services</h4>
                <ul className="mb-4 space-y-2">
                  <li>• Road construction and maintenance contracts</li>
                  <li>• Water infrastructure development</li>
                  <li>• Educational facility construction</li>
                  <li>• Community center development</li>
                </ul>
                <h4 className="font-semibold mb-2">Requirements</h4>
                <ul className="text-sm space-y-1">
                  <li>• Proven track record in public infrastructure</li>
                  <li>• Commitment to local employment and skills transfer</li>
                  <li>• Environmental compliance and sustainability focus</li>
                  <li>• Community engagement experience</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Skills Development & Training</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Educational Partnerships</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Vocational training program development</li>
                    <li>• Skills certification and accreditation</li>
                    <li>• Youth development initiatives</li>
                    <li>• Adult education and literacy programs</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Opportunities</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Training facility partnerships</li>
                    <li>• Curriculum development collaboration</li>
                    <li>• Equipment and technology provision</li>
                    <li>• Instructor and expert exchanges</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Procurement Framework</h2>
              
              <h3 className="text-xl font-semibold mb-3">Local Procurement Policy</h3>
              <p className="mb-4">We prioritize partnerships that:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Create local employment opportunities</li>
                <li>Transfer skills to community members</li>
                <li>Source materials and services locally where possible</li>
                <li>Build long-term capacity within the community</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Supplier Development</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Support Programs</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Mentorship and business development</li>
                    <li>• Financial literacy and management training</li>
                    <li>• Market access facilitation</li>
                    <li>• Quality assurance and compliance support</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Target Sectors</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Construction and maintenance services</li>
                    <li>• Professional and technical services</li>
                    <li>• Transportation and logistics</li>
                    <li>• Manufacturing and processing</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Strategic Partnerships</h2>
              
              <h3 className="text-xl font-semibold mb-3">Current Partners</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Andisa FT</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Educational infrastructure specialist</li>
                    <li>• R7.3 million school ablution facilities project</li>
                    <li>• Local employment and skills development</li>
                    <li>• Quality delivery and community engagement</li>
                  </ul>
                </div>
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
                  <h4 className="font-semibold mb-2">Mondi (Forestry Partnership)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Sustainable forestry development through Siyaqhubeka Forests</li>
                    <li>• Environmental conservation initiatives</li>
                    <li>• Job creation in forestry and related sectors</li>
                    <li>• Community benefit sharing</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Business Development</h3>
                  <ul className="space-y-2">
                    <li><strong>Partnership Inquiries</strong>: partnerships@mbonambi.org.za</li>
                    <li><strong>Procurement Opportunities</strong>: procurement@mbonambi.org.za</li>
                    <li><strong>Investment Discussions</strong>: investment@mbonambi.org.za</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Project-Specific Contacts</h3>
                  <ul className="space-y-2">
                    <li><strong>Infrastructure Projects</strong>: infrastructure@mbonambi.org.za</li>
                    <li><strong>Skills Development</strong>: skills@mbonambi.org.za</li>
                    <li><strong>Environmental Initiatives</strong>: environment@mbonambi.org.za</li>
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

export default BusinessWithUs;