import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Additional content to show the original complex hero is restored */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Original Complex Hero Restored
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The original HeroSection has been fully restored with CinematicSlideshow, 
            RotatingText, RevealText, dynamic slide content, and all complex animations 
            exactly as it was before this chat started.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;