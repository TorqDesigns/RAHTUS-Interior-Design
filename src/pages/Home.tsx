import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCards from '../components/FeatureCards';
import StorySection from '../components/StorySection';
import Timeline from '../components/Timeline';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeatureCards />
      <StorySection />
      <Timeline />
      <Testimonials />
    </main>
  );
};

export default Home;