import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import StorySection from './components/StorySection';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-stone-800">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureCards />
        <StorySection />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;