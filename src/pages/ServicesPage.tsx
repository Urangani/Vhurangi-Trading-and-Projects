import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Building,
  HardHat,
  PaintRoller,
  Trees,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
  Droplet,
  Fan,
  Settings
} from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const heroRef = useRef<HTMLElement>(null);

  const categories = [
    { id: 'construction', title: 'Construction Services', icon: <Building size={32} /> },
    { id: 'structural', title: 'Structural Works', icon: <HardHat size={32} /> },
    { id: 'plumbing', title: 'Plumbing Services', icon: <Droplet size={32} /> },
    { id: 'mechanical', title: 'Mechanical Services', icon: <Fan size={32} /> },
    { id: 'finishing', title: 'Finishing Works', icon: <PaintRoller size={32} /> },
    { id: 'maintenance', title: 'Maintenance Services', icon: <Settings size={32} /> },
    { id: 'exterior', title: 'Exterior Works', icon: <Trees size={32} /> }
  ];

  useEffect(() => {
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-light min-h-screen">
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="hero-parallax absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40 z-10"></div>
          <img
            src="assets/exterior-design.jpeg"
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

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div id="construction">
          <ServiceCategory
            title="Construction Services"
            subtitle="Building from the ground up"
            icon={<Building size={36} />}
            color="from-blue-600 to-blue-800"
            services={constructionServices}
          />
        </div>

        <div id="structural">
          <ServiceCategory
            title="Structural Works"
            subtitle="Strong foundations, lasting structures"
            icon={<HardHat size={36} />}
            color="from-blue-500 to-blue-700"
            services={structuralServices}
          />
        </div>

        <div id="plumbing">
          <ServiceCategory
            title="Plumbing Services"
            subtitle="Reliable water and drainage systems"
            icon={<Droplet size={36} />}
            color="from-cyan-500 to-blue-600"
            services={plumbingServices}
          />
        </div>

        <div id="mechanical">
          <ServiceCategory
            title="Mechanical Services"
            subtitle="Climate control and mechanical solutions"
            icon={<Fan size={36} />}
            color="from-sky-500 to-blue-600"
            services={mechanicalServices}
          />
        </div>

        <div id="finishing">
          <ServiceCategory
            title="Finishing Works"
            subtitle="Perfecting every surface and detail"
            icon={<PaintRoller size={36} />}
            color="from-indigo-500 to-blue-600"
            services={finishingServices}
          />
        </div>

        <div id="maintenance">
          <ServiceCategory
            title="Maintenance Services"
            subtitle="Keeping your property in prime condition"
            icon={<Settings size={36} />}
            color="from-blue-500 to-blue-700"
            services={maintenanceServices}
          />
        </div>

        <div id="exterior">
          <ServiceCategory
            title="Exterior Works"
            subtitle="Beautiful and functional outdoor spaces"
            icon={<Trees size={36} />}
            color="from-emerald-500 to-blue-600"
            services={exteriorServices}
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-6 rounded-xl bg-neutral-50 hover:shadow-md transition-shadow">
                <CheckCircle className="text-primary-500 mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg text-dark">{item.title}</h3>
                  <p className="text-neutral-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

type ServiceItem = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
};

type ServiceCategoryProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  services: ServiceItem[];
};

const ServiceCategory = ({
  title,
  subtitle,
  icon,
  color,
  services,
}: ServiceCategoryProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    if (!contentRef.current) return;

    if (isExpanded) {
      gsap.to(contentRef.current, {
        height: 0,
        onComplete: () => setIsExpanded(false)
      });
    } else {
      gsap.to(contentRef.current, {
        height: 'auto',
        onComplete: () => setIsExpanded(true)
      });
    }
  };

  return (
    <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10`}></div>
        <div className="relative p-8 cursor-pointer" onClick={toggleExpand}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-50 rounded-xl text-primary-500">{icon}</div>
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
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({
  title,
  description,
  image,
  icon,
  features
}: ServiceItem) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-white border border-neutral-200 transition-all cursor-pointer hover:shadow-lg">
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
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
              <CheckCircle size={14} className="text-primary-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const constructionServices: ServiceItem[] = [
  {
    title: 'Construction Services',
    description: 'Comprehensive building construction for residential, commercial, and industrial projects.',
    image: "assets/exterior-design.jpeg",
    icon: <Building size={20} className="text-primary-500" />,
    features: [
      'Residential building construction',
      'Commercial building construction',
      'Industrial construction',
      'Turnkey construction projects',
      'Renovations and remodeling',
      'Building extensions and alterations',
      'Demolition works',
      'Civil engineering works'
    ]
  }
];

const structuralServices: ServiceItem[] = [
  {
    title: 'Structural Works',
    description: 'Professional structural solutions from foundations to roofing.',
    image: "assets/exterior-design.jpeg",
    icon: <HardHat size={20} className="text-primary-500" />,
    features: [
      'Foundation construction',
      'Concrete works',
      'Steel structure installation',
      'Bricklaying and block work',
      'Roofing installation and repairs',
      'Retaining walls',
      'Paving and roadworks'
    ]
  }
];

const plumbingServices: ServiceItem[] = [
  {
    title: 'Plumbing Services',
    description: 'Complete plumbing solutions for residential and commercial properties.',
    image: "assets/pipes.jpeg",
    icon: <Droplet size={20} className="text-primary-500" />,
    features: [
      'Water supply installations',
      'Drainage systems',
      'Sewer line installation',
      'Bathroom and kitchen plumbing',
      'Geyser installation and repairs',
      'Borehole pump installations',
      'Stormwater systems'
    ]
  }
];

const mechanicalServices: ServiceItem[] = [
  {
    title: 'Mechanical Services',
    description: 'Professional HVAC and mechanical system installations and maintenance.',
    image: "assets/wielding.jpeg",
    icon: <Fan size={20} className="text-primary-500" />,
    features: [
      'HVAC installations',
      'Ventilation systems',
      'Air conditioning services',
      'Refrigeration systems',
      'Mechanical maintenance'
    ]
  }
];

const finishingServices: ServiceItem[] = [
  {
    title: 'Finishing Works',
    description: 'Expert finishing services to bring your space to life.',
    image: "assets/exterior-design.jpeg",
    icon: <PaintRoller size={20} className="text-primary-500" />,
    features: [
      'Plastering',
      'Painting',
      'Ceiling installation',
      'Tiling',
      'Carpentry and joinery',
      'Aluminum and glass installation',
      'Flooring solutions',
      'Waterproofing'
    ]
  }
];

const maintenanceServices: ServiceItem[] = [
  {
    title: 'Maintenance Services',
    description: 'Reliable maintenance and facility management for your property.',
    image: "assets/exterior-design.jpeg",
    icon: <Settings size={20} className="text-primary-500" />,
    features: [
      'Building maintenance',
      'Preventative maintenance',
      'Facility management',
      'Repair and refurbishment',
      'Property maintenance services'
    ]
  }
];

const exteriorServices: ServiceItem[] = [
  {
    title: 'Exterior Works',
    description: 'Complete exterior solutions for beautiful and functional outdoor spaces.',
    image: "assets/exterior-design.jpeg",
    icon: <Trees size={20} className="text-primary-500" />,
    features: [
      'Landscaping',
      'Boundary walls and fencing',
      'Driveways and paving',
      'Drainage systems',
      'Outdoor lighting'
    ]
  }
];

const whyChooseUs = [
  { title: 'Quality Workmanship', desc: 'We deliver exceptional quality on every project, large or small.' },
  { title: 'Experienced Professionals', desc: 'Our team brings years of industry experience and expertise.' },
  { title: 'Timely Project Delivery', desc: 'We respect your time and consistently meet project deadlines.' },
  { title: 'Competitive Pricing', desc: 'High-quality services at fair and transparent prices.' },
  { title: 'Compliance with Safety Standards', desc: 'Full adherence to safety regulations and building codes.' },
  { title: 'Client-Focused Approach', desc: 'We listen, communicate, and deliver what you need.' }
];

export default ServicesPage;
