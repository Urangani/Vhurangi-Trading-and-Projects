import { Star, Quote } from 'lucide-react';

type TestimonialCardProps = {
  name: string;
  project: string;
  quote: string;
  rating: number;
};

export default function TestimonialCard({ name, project, quote, rating }: TestimonialCardProps) {
  return (
    <div className="testimonial-card bg-white rounded-xl p-6 shadow-md">
      <Quote className="text-primary-500 mb-4" size={32} />
      <p className="text-neutral-600 mb-4 italic">"{quote}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-dark">{name}</p>
          <p className="text-sm text-neutral-500">{project}</p>
        </div>
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-primary-500 text-primary-500" />
          ))}
        </div>
      </div>
    </div>
  );
}
