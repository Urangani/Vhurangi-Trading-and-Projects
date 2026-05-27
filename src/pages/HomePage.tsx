// pages/HomePage.tsx
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Building, HardHat, Wrench, PaintRoller, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

import ServiceCard from '../components/home/ServiceCard';
import TestimonialCard from '../components/home/TestimonialCard';
// import ProjectShowcase from '../components/home/ProjectShowcase';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Navigation animation on load
    gsap.fromTo('.nav-item', 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)' }
    );
    
    // Hero section animations
    const heroTl = gsap.timeline();
    heroTl
      .fromTo('.hero-tagline', 
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo('.hero-title', 
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo('.hero-description', 
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo('.hero-button', 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' },
        '-=0.2'
      );
    
    // Services cards stagger on scroll
    gsap.fromTo('.service-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    // About section animations
    gsap.fromTo('.about-image',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    gsap.fromTo('.about-content',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    // Testimonials stagger
    gsap.fromTo('.testimonial-card',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    // Contact form fields animation
    gsap.fromTo('.form-field',
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    // Footer animation
    gsap.fromTo('.footer-section',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="assets/vhurangi-trading-logo.jpeg"
            alt="Construction background"
            className="w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-none"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="hero-tagline inline-block bg-primary-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-primary-500 font-semibold">Building with precision, renovating with care.</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
              Quality Construction & 
              <span className="text-primary-500"> Renovation Services</span>
            </h1>
            <p className="hero-description text-xl text-neutral-200 mb-8 drop-shadow-lg">
              Professional construction solutions tailored to your needs. From structural work to interior finishing, we deliver excellence.
            </p>
            <Link to="/contact" className="hero-button inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-black/50">
              Get Free Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}

      </section>
      
      {/* Services Overview */}
      <section id="services" ref={servicesRef} className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">Comprehensive construction solutions for every need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<Building size={32} />}
              title="Construction"
              description="Residential, commercial, and industrial building projects"
              delay={0}
            />
            <ServiceCard 
              icon={<HardHat size={32} />}
              title="Structural Works"
              description="Foundations, concrete, steel, and roofing solutions"
              delay={1}
            />
            <ServiceCard
              icon={<Wrench size={32} />}
              title="Plumbing & Mechanical"
              description="Water supply, drainage, HVAC, and mechanical systems"
              delay={2}
            />
            <ServiceCard 
              icon={<PaintRoller size={32} />}
              title="Finishing & Maintenance"
              description="Plastering, painting, tiling, and property upkeep"
              delay={3}
            />
          </div>
        </div>
      </section>
      
      {/* About Us Preview */}
      <section id="about" ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="about-image rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="src/assets/vhurangi-trading-logo.jpeg"
                alt="About Vhurang"
                className="w-full h-full object-fit transform hover:scale-90 transition-transform duration-500"
              />
            </div>
            <div className="about-content">
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
                3+ Years of Excellence in Construction
              </h2>
              <p className="text-neutral-600 mb-6">
                Vhurang Trading and Projects has been delivering quality construction services since 2010. 
                Our commitment to excellence, safety, and customer satisfaction sets us apart.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary-500" size={20} />
                  <span className="text-sm">Quality Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary-500" size={20} />
                  <span className="text-sm">98% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary-500" size={20} />
                  <span className="text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary-500" size={20} />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:gap-3 transition-all">
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Showcase - Horizontal Scroll Gallery */}
      {/* <ProjectShowcase /> */}
      
      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
            <p className="text-neutral-600 mt-4">Trusted by hundreds of satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="John Mokoena"
              project="Residential Renovation"
              quote="Excellent workmanship and attention to detail. Completed on time and within budget."
              rating={5}
            />
            <TestimonialCard
              name="Sarah Williams"
              project="Commercial Build"
              quote="Professional team that delivered beyond expectations. Highly recommended!"
              rating={5}
            />
            <TestimonialCard
              name="David Ndlovu"
              project="Structural Repairs"
              quote="Great communication and quality work. Will definitely use them again."
              rating={5}
            />
          </div>
        </div>
      </section>
      
      {/* Contact & Call to Action */}
      <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg text-white/90 mb-6">
                Contact us today for a free consultation and competitive quote. 
                Our team is ready to bring your vision to life.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={20} />
                  <span>+27 (0) 609146542</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} />
                  <span>N/A</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span>Thohoyandou, South Africa</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-dark mb-6">Request a Quote</h3>
              <form className="space-y-4">
                <div className="form-field">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div className="form-field">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div className="form-field">
                  <textarea 
                    placeholder="Tell us about your project" 
                    rows={4}
                    className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="form-field w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
