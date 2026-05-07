import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BrickWall,
  Trees,
  Car,
  PaintRoller,
  Layout,
  Shield,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
  Building,
  Home,
  HardHat,
  Droplet,
  Zap,
  Hammer,
  Ruler,
  Package,
  Truck
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<Array<HTMLDivElement | null>>([]);

  const categories = [
    { id: 'structural', title: 'Structural & External', icon: <Building size={32} /> },
    { id: 'interior', title: 'Interior & Maintenance', icon: <Home size={32} /> },
    // lucide-react in this project does not export `Tool`, so use an available icon
    { id: 'ancillary', title: 'Minor Ancillary', icon: <Truck size={32} /> },
    { id: 'welding', title: 'Welding & Fitting', icon: <Shield size={32} /> }
  ];

  useEffect(() => {
    // Hero parallax effect
    if (heroRef.current) {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
          gsap.to('.hero-parallax', {
            y: self.progress * 200,
            duration: 0,
            overwrite: true
          });
        }
      });
    }

    // Animate each category
    categoriesRef.current.forEach((category) => {
      if (category) {
        gsap.fromTo(
          category,
          {
            y: 50,
            opacity: 0,
            rotationX: -10
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: category,
              start: 'top 85%',
              end: 'bottom 70%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Floating animation for service icons
    gsap.to('.service-icon', {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.2
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-light min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="hero-parallax absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Construction Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeInUp">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              Comprehensive construction solutions tailored to your needs
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-8 animate-fadeInUp animation-delay-400">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    const element = document.getElementById(cat.id);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all hover:scale-105"
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Structural & External */}
        <div
          id="structural"
          ref={(el) => {
            categoriesRef.current[0] = el;
          }}
        >
          <EnhancedServiceCategory
            title="Structural & External"
            subtitle="Foundation to Finish"
            icon={<Building size={36} />}
            color="from-blue-500 to-cyan-500"
            services={structuralServices}
          />
        </div>

        {/* Interior & Maintenance */}
        <div
          id="interior"
          ref={(el) => {
            categoriesRef.current[1] = el;
          }}
        >
          <EnhancedServiceCategory
            title="Interior & Maintenance"
            subtitle="Transform Your Space"
            icon={<Home size={36} />}
            color="from-emerald-500 to-teal-500"
            services={interiorServices}
          />
        </div>

        {/* Minor Ancillary */}
        <div
          id="ancillary"
          ref={(el) => {
            categoriesRef.current[2] = el;
          }}
        >
          <EnhancedServiceCategory
            title="Minor Ancillary Services"
            subtitle="Quick & Reliable"
            icon={<Truck size={36} />}
            color="from-amber-500 to-orange-500"
            services={ancillaryServices}
          />
        </div>

        {/* Welding & Fitting */}
        <div
          id="welding"
          ref={(el) => {
            categoriesRef.current[3] = el;
          }}
        >
          <EnhancedServiceCategory
            title="Welding & Fitting"
            subtitle="Precision Metalwork"
            icon={<Shield size={36} />}
            color="from-red-500 to-rose-500"
            services={weldingServices}
            restrictions={true}
          />
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-white/90 mb-8">Contact us for tailored construction services</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            Get Custom Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

type Service = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features?: string[];
};

type EnhancedServiceCategoryProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  services: Service[];
  restrictions?: boolean;
};

const EnhancedServiceCategory = ({
  title,
  subtitle,
  icon,
  color,
  services,
  restrictions
}: EnhancedServiceCategoryProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.2)' }
    );
  }, []);

  const toggleExpand = () => {
    if (!contentRef.current) return;

    if (isExpanded) {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => setIsExpanded(false)
      });
    } else {
      gsap.to(contentRef.current, {
        height: 'auto',
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => setIsExpanded(true)
      });
    }
  };

  return (
    <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden">
      <div ref={headerRef} className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10`}></div>
        <div className="relative p-8 cursor-pointer" onClick={toggleExpand}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="service-icon p-3 bg-primary-50 rounded-xl text-primary-500">{icon}</div>
              <div>
                <h2 className="text-3xl font-bold text-dark">{title}</h2>
                <p className="text-neutral-500 mt-1">{subtitle}</p>
              </div>
            </div>
            <button className="p-2 rounded-full bg-neutral-100 hover:bg-primary-100 transition-colors">
              {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div ref={contentRef} className="overflow-hidden" style={{ height: 'auto' }}>
        <div className="p-8 pt-0 border-t border-neutral-100">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((service, idx) => (
              <ServiceDetailCard key={idx} {...service} />
            ))}
          </div>
          {restrictions && (
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3">
              <X className="text-amber-600 flex-shrink-0" size={20} />
              <div className="text-sm text-amber-800">
                <strong>Permissible Work Only:</strong> Structural steelwork, mechanical fitting, and specialist fencing are
                not offered.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type ServiceDetailCardProps = Service;

const ServiceDetailCard = ({
  title,
  description,
  image,
  icon,
  features
}: ServiceDetailCardProps) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    if (hovered) {
      gsap.to(cardRef.current, {
        y: -8,
        scale: 1.02,
        duration: 0.3,
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
      });
    } else {
      gsap.to(cardRef.current, {
        y: 0,
        scale: 1,
        duration: 0.3,
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'
      });
    }
  }, [hovered]);

  return (
    <div
      ref={cardRef}
      className="group rounded-xl overflow-hidden bg-white border border-neutral-200 transition-all cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-lg">{icon}</div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
        <p className="text-neutral-600 text-sm mb-4">{description}</p>
        {features && (
          <ul className="space-y-2">
            {features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
                <CheckCircle size={14} className="text-primary-500" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const structuralServices = [
  {
    title: 'Masonry Walls',
    description: 'Professional brick, block, and stone wall construction for residential and commercial properties.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <BrickWall size={20} className="text-primary-500" />,
    features: ['Load-bearing walls', 'Retaining walls', 'Decorative stonework']
  },
  {
    title: 'Timber Fencing',
    description: 'Durable and aesthetically pleasing wooden fencing solutions for privacy and security.',
    image: 'https://images.unsplash.com/photo-1501630864272-67b2e2c8c515?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Trees size={20} className="text-primary-500" />,
    features: ['Palisade fencing', 'Picket fences', 'Privacy screens']
  },
  {
    title: 'Carports & Storage',
    description: 'Custom-designed covered parking and secure storage structures.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Car size={20} className="text-primary-500" />,
    features: ['Single/double carports', 'Tool sheds', 'Workshop spaces']
  },
  {
    title: 'Renovations',
    description: 'Complete property refurbishment and structural renovations.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Hammer size={20} className="text-primary-500" />,
    features: ['Extensions', 'Conversions', 'Restorations']
  }
];

const interiorServices = [
  {
    title: 'Painting & Decorating',
    description: 'Professional interior and exterior painting with premium finishes.',
    image: 'https://images.unsplash.com/photo-1581092335871-4c6af942aad5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <PaintRoller size={20} className="text-primary-500" />,
    features: ['Wall painting', 'Wallpapering', 'Decorative finishes']
  },
  {
    title: 'Flooring Solutions',
    description: 'Expert installation of all flooring types for any space.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Layout size={20} className="text-primary-500" />,
    features: ['Tiling', 'Vinyl flooring', 'Carpet installation', 'Laminate']
  },
  {
    title: 'Custom Carpentry',
    description: 'Bespoke wooden solutions for storage and living spaces.',
    image: 'https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Ruler size={20} className="text-primary-500" />,
    features: ['Kitchen units', 'Built-in cupboards', 'Shelving systems']
  },
  {
    title: 'Glass & Glazing',
    description: 'Professional window glass replacement and installation.',
    image: 'https://images.unsplash.com/photo-1581783898371-1c2e5e3d14c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Package size={20} className="text-primary-500" />,
    features: ['Standard windows', 'Glass replacement', 'Mirror installation']
  }
];

const ancillaryServices = [
  {
    title: 'Basic Plumbing',
    description: 'Quick and reliable plumbing repairs and maintenance.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57b2e0e7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Droplet size={20} className="text-primary-500" />,
    features: ['Cistern repairs', 'Unblocking drains', 'Leak fixes']
  },
  {
    title: 'Electrical Services',
    description: 'Minor electrical work for residential properties.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a26c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Zap size={20} className="text-primary-500" />,
    features: ['Light fitting installation', 'Socket replacement', 'Switch repairs']
  }
];

const weldingServices = [
  {
    title: 'Steel Mesh Fitting',
    description: 'Professional installation of steel reinforcement mesh.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <HardHat size={20} className="text-primary-500" />,
    features: ['Concrete reinforcement', 'Slab mesh fitting', 'Foundation mesh']
  },
  {
    title: 'Palisade Fencing',
    description: 'Secure perimeter fencing for properties.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Truck size={20} className="text-primary-500" />,
    features: ['Security fencing', 'Gate installation', 'Perimeter protection']
  },
  {
    title: 'Basic Steelwork',
    description: 'Non-structural steel fabrication and installation.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Hammer size={20} className="text-primary-500" />,
    features: ['Handrails', 'Brackets', 'Support frames']
  }
];

export default ServicesPage;
