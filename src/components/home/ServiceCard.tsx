import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

export default function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    if (hovered) {
      gsap.to(cardRef.current, { y: -8, scale: 1.02, duration: 0.3 });
    } else {
      gsap.to(cardRef.current, { y: 0, scale: 1, duration: 0.3 });
    }
  }, [hovered]);

  return (
    <div
      ref={cardRef}
      className="service-card bg-white rounded-xl p-6 shadow-md cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="text-primary-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-primary-500 text-sm font-medium">
        Learn More <ArrowRight size={14} />
      </div>
    </div>
  );
}
