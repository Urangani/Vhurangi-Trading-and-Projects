import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  {
    title: 'Modern Residential Complex',
    category: 'Structural Construction',
    image: 'https://images.unsplash.com/photo-1545324412-3e4b3e5dc9c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Luxury Interior Renovation',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1581092335871-4c6af942aad5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Commercial Office Build',
    category: 'Commercial Construction',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Industrial Warehouse',
    category: 'Industrial Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sectionEl = sectionRef.current;
    if (!container || !sectionEl) return;

    const totalScroll = container.scrollWidth - window.innerWidth;
    if (totalScroll <= 0) return;

    const pinTrigger = ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top top',
      end: `+=${totalScroll}`,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
    });

    const tween = gsap.to(container, {
      x: () => -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top top',
        end: `+=${totalScroll}`,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    return () => {
      pinTrigger.kill();
      tween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Latest Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p className="text-neutral-600 mt-4">Transforming visions into reality</p>
        </div>
      </div>

      <div className="overflow-hidden">
        <div ref={containerRef} className="flex gap-6 px-4 sm:px-6 lg:px-8" style={{ width: 'max-content' }}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-primary-500 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
