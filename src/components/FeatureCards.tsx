import React from 'react';
import { Shield, Palette, Sparkles } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-6">
      <div className="flex-shrink-0 p-3 bg-stone-100 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg text-stone-800 mb-1">{title}</h3>
        <p className="text-stone-600">{description}</p>
      </div>
    </div>
  );
};

const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-stone-700" />,
      title: "Durability",
      description: "Premium craftsmanship"
    },
    {
      icon: <Palette className="w-6 h-6 text-stone-700" />,
      title: "Modern Interior",
      description: "Contemporary designs"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-stone-700" />,
      title: "Easy Maintenance",
      description: "Spaces with minimal care"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;