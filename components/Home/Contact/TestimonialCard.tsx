import { Testimonial } from "./TestimonialsSection";


interface Props {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: Props) => {
  const { quote, name, rating } = testimonial;

  return (
    <article className="flex h-full flex-col justify-between gap-3 rounded-2xl border border-pinkDark bg-rose-50/60 px-4 py-3">
      <p className="text-xs leading-snug text-pinkDark sm:text-sm">
        &quot;{quote}&quot;
      </p>

      <div className="flex items-center justify-between gap-3">
       
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full  text-xs font-semibold text-pinkMedium">
            {name.charAt(0)}
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold text-pinkMedium">
              {name}
            </span>
            <span className="h-1 w-16 rounded-full bg-rose-200" />
          </div>
        </div>

        <div
          className="whitespace-nowrap text-xs"
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={i < rating ? 'text-pinkDark' : 'text-rose-200'}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;