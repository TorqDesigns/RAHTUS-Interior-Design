import React from 'react';
import { Star } from 'lucide-react';

type TestimonialProps = {
  name: string;
  location: string;
  image: string;
  review: string;
  rating: number;
};

const Testimonial: React.FC<TestimonialProps> = ({ name, location, image, review, rating }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-10 border border-stone-100 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-stone-800">{name}</h4>
          <p className="text-stone-500 text-sm">{location}</p>
        </div>
      </div>
      <p className="text-stone-600 mb-4 italic">"{review}"</p>
      <div className="flex text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? "currentColor" : "none"}
            className={i < rating ? "text-amber-400" : "text-stone-300"}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Olivia T.",
      location: "Dubai, UAE",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      review: "I wasn't sure what to expect when I started, but the team really listened and helped shape my vague ideas into a space that feels like home. It's modern, cozy, and just works for our family. Thank you!",
      rating: 5
    },
    {
      name: "James P.",
      location: "Downtown Dubai",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      review: "What impressed me most was their attention to small details—things I wouldn't have thought of. The lighting choices alone made a huge difference in how the space flows. The communication was clear, the timeline was respected, and I love the result.",
      rating: 5
    },
    {
      name: "Amit V.",
      location: "Marina, Dubai",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      review: "I wanted my apartment to feel both modern and welcoming, and they helped me achieve a perfectly blended style with comfort seamlessly. From the initial consultation to the touch-ups, everything was smooth. Plus, the timeline was spot-on, which was a huge relief!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Real Stories. Real Results.</h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Here's what our clients have to say about their experience working with RAHTUS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            location={testimonial.location}
            image={testimonial.image}
            review={testimonial.review}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;