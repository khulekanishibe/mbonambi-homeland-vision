import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PublicBenefitTrust = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-earth to-forest">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Public Benefit Trust
            </h1>
            <p className="text-xl md:text-2xl text-sandstone-200 leading-relaxed">
              Transforming Lives Through Strategic Development
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8 text-white">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The Public Benefit Trust is the implementation arm of the Mbonambi Community Trust ecosystem, directly delivering development projects that improve the quality of life for our community members. Through strategic partnerships and careful project management, we transform economic benefits into tangible improvements in infrastructure, education, and community facilities.
              </p>

              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="mb-6">
                Established to complement the Community Development Trust, the PBT focuses on the practical delivery of community benefits. We manage and implement development projects funded through our partnership with Richards Bay Minerals, ensuring that economic gains translate into real improvements for the Mbonambi people.
              </p>

              <h3 className="text-xl font-semibold mb-3">Our Core Functions</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Project Implementation</strong>: Managing large-scale infrastructure and development projects</li>
                <li><strong>Community Services</strong>: Delivering essential services and facilities</li>
                <li><strong>Skills Development</strong>: Creating training and employment opportunities</li>
                <li><strong>Infrastructure Development</strong>: Building and upgrading community infrastructure</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Vision & Mission</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Vision</h3>
                  <p>To create a thriving, well-equipped community where every member has access to quality infrastructure, education, and economic opportunities.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Mission</h3>
                  <p>To efficiently implement development projects that address community needs while building local capacity and creating sustainable employment opportunities.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Major Projects & Achievements</h2>
              
              <h3 className="text-xl font-semibold mb-3">Infrastructure Development</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Road Upgrades Programme - R31 Million</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Comprehensive road network improvements</li>
                    <li>• Enhanced connectivity between communities</li>
                    <li>• Improved access to economic opportunities</li>
                    <li>• Job creation for local residents</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Elevated Reservoir Project - R11.5 Million</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Reliable water supply infrastructure</li>
                    <li>• Improved water security for the community</li>
                    <li>• Modern engineering solutions</li>
                    <li>• Long-term sustainability focus</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Education & Skills Development</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">School Ablution Facilities - R7.3 Million</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Modern sanitation facilities for local schools</li>
                    <li>• Improved learning environment for students</li>
                    <li>• Health and hygiene improvements</li>
                    <li>• Delivered through partnership with Andisa FT</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Furniture & Upholstery Workshop - R2 Million</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Skills training facility establishment</li>
                    <li>• Job creation and entrepreneurship development</li>
                    <li>• Local manufacturing capabilities</li>
                    <li>• Sustainable income generation</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Leadership & Management</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold">Martin Mbuyazi - <em>Chairman</em></h4>
                  <p className="text-sm">Strategic oversight and project approval authority, ensuring alignment with community needs and priorities.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold">Lulama Cele-Boughey - <em>Project Director</em></h4>
                  <p className="text-sm">Day-to-day project management and implementation oversight, ensuring quality delivery and community engagement.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold">Fundi Dlamini - <em>Education & Infrastructure Lead</em></h4>
                  <p className="text-sm">Specialized focus on educational facilities and infrastructure development projects.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Community Impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Direct Benefits</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Employment Creation</strong>: Over 200 jobs created through project implementation</li>
                    <li>• <strong>Skills Development</strong>: Training programs for local residents</li>
                    <li>• <strong>Infrastructure Access</strong>: Improved roads, water, and educational facilities</li>
                    <li>• <strong>Economic Stimulation</strong>: Local procurement and supplier development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Long-term Outcomes</h3>
                  <ul className="space-y-2">
                    <li>• Enhanced quality of life for community members</li>
                    <li>• Improved access to economic opportunities</li>
                    <li>• Strengthened community infrastructure</li>
                    <li>• Sustainable development model for other communities</li>
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

export default PublicBenefitTrust;