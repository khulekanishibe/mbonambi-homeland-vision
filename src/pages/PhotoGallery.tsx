import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import GalleryGrid from '../components/GalleryGrid';

const PhotoGallery = () => {
  return (
    <div className="min-h-screen bg-sandstone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 via-navy-800 to-forest-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl text-sandstone-100 mb-8 max-w-3xl mx-auto">
            Visual stories of our community's journey, achievements, and cultural heritage
          </p>
        </div>
      </section>

      <GalleryGrid />
      
      <Footer />
    </div>
  );
};

export default PhotoGallery;
