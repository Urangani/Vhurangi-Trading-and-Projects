// pages/AboutPage.tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Shield, Award, Heart, Star } from 'lucide-react';
import image from '../assets/image.png'

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const certsRef = useRef(null);
  
  useEffect(() => {
    // Story section animation
    gsap.fromTo('.story-content',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 70%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    gsap.fromTo('.story-image',
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 70%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    // Values cards animation
    gsap.fromTo('.value-card',
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    // Certifications animation
    gsap.fromTo('.cert-card',
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: certsRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Team cards animation
    gsap.fromTo('.team-card',
      { rotationY: 90, opacity: 0 },
      {
        rotationY: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);
  
  return (
    <div>
      {/* Hero */}
      <div className="bg-neutral-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3')] bg-cover"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold animate-fadeInUp">About Vhurang Trading & Projects</h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 animate-scaleIn"></div>
        </div>
      </div>
      
      {/* Story */}
      <section ref={storyRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="story-content">
            <h2 className="text-4xl font-bold text-neutral-800">Our Story</h2>
            <div className="w-16 h-1 bg-primary-500 mt-3 mb-6"></div>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Founded with a commitment to quality and community, Vhurang Trading and Projects Pty Ltd has grown into a trusted name for construction services in South Africa. We combine skilled workmanship with strict compliance to industry standards.
            </p>
            <p className="text-neutral-600 leading-relaxed mt-4">
              Our team takes pride in every project—from small maintenance tasks to large structural renovations—always prioritizing safety, timeliness, and customer satisfaction.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="flex items-center gap-2"><Star className="text-primary-500" size={20} /><span>500+ Projects Completed</span></div>
              <div className="flex items-center gap-2"><Heart className="text-primary-500" size={20} /><span>98% Client Satisfaction</span></div>
            </div>
          </div>
          <div className="story-image rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Construction team" className="w-full h-96 object-cover" />
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section ref={valuesRef} className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-neutral-800">Our Core Values</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-3 mb-14"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard icon={<Shield size={32} />} title="Compliance First" desc="Adhering to all safety and building regulations, including permissible welding and fitting tasks." />
            <ValueCard icon={<Users size={32} />} title="Community Trust" desc="Building lasting relationships through transparency and reliable service." />
            <ValueCard icon={<Award size={32} />} title="Quality Craftsmanship" desc="Meticulous attention to detail on every project, large or small." />
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Meet Our Leadership</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-3 mb-14"></div>
          <div className="flex justify-around">
            <TeamCard name="Vhulenda Makhetha" role="Managing Director" image={image} />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section ref={certsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-neutral-800">Our Certifications</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-3 mb-14"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <CertCard icon={<Award size={32} />} title="B-BBEE Level 1" desc="Level 1 B-BBEE contributor, maximizing procurement recognition for our clients." />
            <CertCard icon={<Shield size={32} />} title="CSD Registered" desc="Registered on the Central Supplier Database for government procurement." />
            <CertCard icon={<Award size={32} />} title="cidb Registered" desc="Registered with the Construction Industry Development Board." />
          </div>
        </div>
      </section>
    </div>
  );
};

const CertCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => {
  return (
    <div className="cert-card bg-white rounded-xl p-8 text-center shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-primary-600 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-50 rounded-full">{icon}</div>
      <h3 className="font-bold text-2xl mb-3">{title}</h3>
      <p className="text-neutral-600">{desc}</p>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => {
  const cardRef = useRef(null);
  
  return (
    <div ref={cardRef} className="value-card bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-primary-600 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-50 rounded-full">{icon}</div>
      <h3 className="font-bold text-2xl mb-3">{title}</h3>
      <p className="text-neutral-600">{desc}</p>
    </div>
  );
};

const TeamCard = ({ name, role, image }: { name: string; role: string; image: string }) => {
  const [hovered, setHovered] = React.useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    if (hovered) {
      gsap.to(cardRef.current, { y: -10, duration: 0.3 });
    } else {
      gsap.to(cardRef.current, { y: 0, duration: 0.3 });
    }
  }, [hovered]);
  
  return (
    <div 
      ref={cardRef}
      className="team-card cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-48 h-48 bg-neutral-300 rounded-full mx-auto mb-5 bg-cover bg-center border-4 border-primary-500 shadow-lg transform transition-transform duration-300 hover:scale-110" style={{ backgroundImage: `url(${image})` }}></div>
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-primary-600 font-medium">{role}</p>
    </div>
  );
};

export default AboutPage;