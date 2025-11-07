
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CommunityPhotoGallery = () => {
  const { t } = useTranslation();
  
  const galleryImages = [
    {
      src: '/lovable-uploads/a5a05d20-5142-4894-9114-ccc138784ccd.png',
      title: t('home.gallery.image1Title', 'Community Leadership'),
      category: t('home.gallery.image1Category', 'Leadership')
    },
    {
      src: '/lovable-uploads/c4c707af-3f2d-4811-9aa0-b81f491400cc.png',
      title: t('home.gallery.image2Title', 'Cultural Celebration'),
      category: t('home.gallery.image2Category', 'Culture')
    },
    {
      src: '/lovable-uploads/a7f2540f-7d63-4e91-bee7-def798d3adf9.png',
      title: t('home.gallery.image3Title', 'Community Partnership'),
      category: t('home.gallery.image3Category', 'Development')
    },
    {
      src: '/lovable-uploads/f71d2873-1e55-435e-b2da-2642e37bdf5a.png',
      title: t('home.gallery.image4Title', 'Community Discussion'),
      category: t('home.gallery.image4Category', 'Engagement')
    }
  ];

  return (
    <section className="py-20 bg-mbonambi-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-mbonambi-darkGray mb-6">
            {t('home.gallery.sectionTitle', 'Community Life')}
          </h2>
          <p className="text-lg text-mbonambi-darkGray max-w-2xl mx-auto">
            {t('home.gallery.sectionDesc', 'Visual stories of our heritage, celebrations, and progress as a united community')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/gallery"
            className="inline-block bg-mbonambi-mauve hover:bg-mbonambi-mauve/80 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t('home.gallery.viewAllButton', 'View Full Gallery')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityPhotoGallery;
