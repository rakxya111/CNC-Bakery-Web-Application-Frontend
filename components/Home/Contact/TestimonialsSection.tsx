import TestimonialCard from './TestimonialCard';

export interface Testimonial {
  quote: string;
  name: string;
  rating: number; // 1–5
}

const testimonials: Testimonial[] = [
  {
    quote:
      'The strawberry cupcakes melted in my mouth — fluffy, fresh, and topped with the perfect swirl of cream. Pure happiness in every bite!',
    name: 'Emily R.',
    rating: 5,
  },
  {
    quote:
      'The chocolate cake was rich, moist, and absolutely decadent. It made my birthday unforgettable — everyone kept asking for seconds!',
    name: 'James K.',
    rating: 5,
  },
  {
    quote:
      'I gifted the hazelnut choco box to my best friend, and she loved it! It’s elegant, delicious, and the perfect present for any occasion.',
    name: 'Sophia L.',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <div
      className="flex-[1.6] rounded-2xl border border-pinkDark bg-white px-6 py-6"
      aria-labelledby="clients-heading "
    >

      <p className="mt-1 text-center text-sm text-black font-bold">
        Here’s what our satisfied clients are saying!
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;