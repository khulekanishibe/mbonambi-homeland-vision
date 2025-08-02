import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LandTrust = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-earth to-forest">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Land Trust
            </h1>
            <p className="text-xl md:text-2xl text-sandstone-200 leading-relaxed">
              Preserving Our Heritage, Securing Our Future
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8 text-white">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The Land Trust serves as the custodian of traditional Mbonambi lands, ensuring that our ancestral territories are protected, properly managed, and developed in ways that benefit the community while respecting our cultural heritage. As guardians of the land that has been home to the Mbonambi people for generations, we balance traditional stewardship with modern development opportunities.
              </p>

              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="mb-6">
                Our traditional lands in the King Cetshwayo District represent more than just territory – they are the foundation of our identity, culture, and economic future. The Land Trust manages these assets through partnerships that respect traditional authority while creating sustainable economic opportunities for community members.
              </p>

              <h3 className="text-xl font-semibold mb-3">Our Mandate</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Land Rights Protection</strong>: Safeguarding traditional land rights and usage patterns</li>
                <li><strong>Sustainable Development</strong>: Balancing development with environmental conservation</li>
                <li><strong>Cultural Preservation</strong>: Maintaining sites of cultural and historical significance</li>
                <li><strong>Economic Optimization</strong>: Creating income-generating opportunities from land assets</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Vision & Mission</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Vision</h3>
                  <p>To be exemplary stewards of our traditional lands, ensuring they remain productive, sustainable, and beneficial for current and future generations of the Mbonambi people.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Mission</h3>
                  <p>To protect, develop, and optimize our land assets through responsible partnerships and sustainable practices that honor our heritage while creating economic opportunities.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Land Assets & Management</h2>
              
              <h3 className="text-xl font-semibold mb-3">Traditional Territory</h3>
              <div className="bg-white/5 p-6 rounded-lg mb-6">
                <ul className="space-y-2">
                  <li><strong>Location</strong>: King Cetshwayo District, KwaZulu-Natal</li>
                  <li><strong>Significance</strong>: Ancestral home of the Mbonambi clan</li>
                  <li><strong>Cultural Heritage</strong>: Sites of historical and spiritual importance</li>
                  <li><strong>Natural Resources</strong>: Mineral rights, forestry potential, agricultural land</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Strategic Partnerships</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Siyaqhubeka Forests & Property Trust</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Partnership with Mondi for sustainable forestry development</li>
                    <li>• Environmental conservation and economic benefits</li>
                    <li>• Job creation in forestry and related industries</li>
                    <li>• Sustainable land use practices</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Mining Rights Management</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Coordination with Richards Bay Minerals operations</li>
                    <li>• Community benefit optimization</li>
                    <li>• Environmental impact monitoring</li>
                    <li>• Traditional authority consultation</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Key Activities</h2>
              
              <h3 className="text-xl font-semibold mb-3">Land Development</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Forestry Operations</strong>: Sustainable timber production through partnership agreements</li>
                <li><strong>Agricultural Development</strong>: Supporting community farming initiatives</li>
                <li><strong>Infrastructure Planning</strong>: Coordinating development with community needs</li>
                <li><strong>Environmental Management</strong>: Conservation and rehabilitation programs</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Rights Management</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Traditional Authority Liaison</strong>: Working with Inkosi Mkhanyiseni Mbuyazi</li>
                <li><strong>Legal Compliance</strong>: Ensuring all activities comply with land rights legislation</li>
                <li><strong>Community Consultation</strong>: Regular engagement with community members</li>
                <li><strong>Dispute Resolution</strong>: Addressing land-related conflicts and concerns</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Governance Structure</h2>
              
              <h3 className="text-xl font-semibold mb-3">Traditional Authority</h3>
              <div className="bg-white/5 p-4 rounded-lg mb-4">
                <h4 className="font-semibold">Inkosi Mkhanyiseni Mbuyazi - <em>Traditional Leader</em></h4>
                <p className="text-sm">Provides traditional authority oversight and ensures cultural protocols are respected in all land management decisions.</p>
              </div>

              <h3 className="text-xl font-semibold mb-3">Administrative Management</h3>
              <div className="bg-white/5 p-4 rounded-lg mb-6">
                <h4 className="font-semibold">Martin Mbuyazi - <em>Land Trust Administrator</em></h4>
                <p className="text-sm">Coordinates between traditional authority, government agencies, and commercial partners to ensure optimal land use outcomes.</p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Sustainable Development Initiatives</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Environmental Conservation</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Biodiversity protection programs</li>
                    <li>• Soil conservation and rehabilitation</li>
                    <li>• Water resource management</li>
                    <li>• Climate change adaptation strategies</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Community Benefits</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Employment creation</li>
                    <li>• Skills development programs</li>
                    <li>• Revenue sharing from commercial activities</li>
                    <li>• Food security support</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Cultural Preservation</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Protection of sacred sites</li>
                    <li>• Traditional knowledge preservation</li>
                    <li>• Cultural tourism development</li>
                    <li>• Heritage education programs</li>
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

export default LandTrust;