import React from 'react';

const steps = [
  {
    title: "Discovery",
    description: "We start with a conversation—your lifestyle, tastes, needs, and dreams. This is where ideas start flowing.",
  },
  {
    title: "Concept & Mood",
    description: "We develop a personalized design concept with mood boards, color palettes, and style direction to capture your vision.",
  },
  {
    title: "Design & Planning",
    description: "Layouts, materials, and furnishings come together in detailed plans, making sure function meets beauty at every turn.",
  },
  {
    title: "Execution & Oversight",
    description: "We coordinate everything—from contractors to deliveries—ensuring your project runs smoothly and on schedule.",
  },
  {
    title: "Reveal & Refine",
    description: "The big moment! We walk you through the finished space and fine-tune every detail until it's just right.",
  },
];

const Timeline: React.FC = () => (
  <section className="lg:py-20 lg:mb-24 mt-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-7xl mx-auto">
      {/* Desktop/Tablet: Horizontal Timeline */}
      <div className="hidden md:block">
        {/* Timeline Line & Circles */}
        <div className="relative w-full flex items-center mb-8 mt-32">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-3 h-0.5 bg-stone-300 z-0" />

          {/* Circles with alternating text */}
          <div className="relative w-full flex">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex-1">
                {/* Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#A6917C] to-[#A6917C] text-white flex items-center justify-center font-bold shadow-md border-4 border-white">
                    {idx + 1}
                  </div>
                </div>

                {/* Text container */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-48 ${idx % 2 === 0
                  ? '-top-[12pc]'
                  : 'top-14'
                  }`}>
                  <h3 className="font-semibold text-lg text-stone-800 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 text-sm text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br /><br />

      {/* Mobile: Vertical Timeline */}
      <div className="md:hidden flex flex-col gap-12">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#A6917C] to-[#A6917C] text-white flex items-center justify-center font-bold shadow-md border-4 border-white">
                {idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div className="w-0.5 h-12 bg-stone-300" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-stone-800 mb-2">{step.title}</h3>
              <p className="text-stone-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;