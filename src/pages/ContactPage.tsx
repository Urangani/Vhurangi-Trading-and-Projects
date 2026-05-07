// pages/ContactPage.tsx
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  useEffect(() => {
    // Animate contact info cards
    gsap.fromTo('.info-card',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.2)' }
    );
    
    // Animate form
    gsap.fromTo(formRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power3.out' }
    );
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Animate button on submit
    gsap.to('.submit-btn', { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 500));
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="bg-neutral-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-800">Contact Us</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-3"></div>
          <p className="mt-5 text-neutral-600 text-lg">We're ready to discuss your project. Reach out today.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div ref={infoRef} className="md:col-span-1 space-y-5">
            <InfoCard icon={<Phone />} title="Phone" content="+27 (0) 12 345 6789" sub="Mon-Fri, 8am-5pm" />
            <InfoCard icon={<Mail />} title="Email" content="info@vhurang.co.za" sub="Queries responded within 24h" />
            <InfoCard icon={<MapPin />} title="Service Area" content="Pretoria & Surroundings" sub="Gauteng, South Africa" />
            <InfoCard icon={<Clock />} title="Office Hours" content="Monday - Friday" sub="8:00 – 17:00" />
          </div>
          
          {/* Form */}
          <div ref={formRef} className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
            {submitted && (
              <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6 flex items-center gap-3 animate-slideDown">
                <CheckCircle className="text-green-600" />
                <span>Thank you! We'll get back to you within 24 hours.</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="p-4 border border-neutral-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email address" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="p-4 border border-neutral-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                  required 
                />
              </div>
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone number" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full p-4 border border-neutral-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                required 
              />
              <textarea 
                name="message" 
                rows={6} 
                placeholder="Tell us about your project..." 
                value={formData.message} 
                onChange={handleChange} 
                className="w-full p-4 border border-neutral-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors resize-none"
                required
              ></textarea>
              <button 
                type="submit" 
                className="submit-btn bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16 bg-neutral-200 h-80 rounded-2xl overflow-hidden shadow-lg transform hover:shadow-xl transition-shadow duration-300">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14373.29049609532!2d28.1883364!3d-25.7475768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561f3af7f0b3b%3A0x3b5f5b5b5b5b5b5b!2sPretoria%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Vhurang Service Area Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, content, sub }: { icon: React.ReactNode; title: string; content: string; sub: string }) => {
  const [hovered, setHovered] = React.useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    if (hovered) {
      gsap.to(cardRef.current, { x: 5, duration: 0.2 });
    } else {
      gsap.to(cardRef.current, { x: 0, duration: 0.2 });
    }
  }, [hovered]);
  
  return (
    <div 
      ref={cardRef}
      className="info-card bg-white p-6 rounded-xl shadow-md transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex gap-4 items-start">
        <div className="text-amber-600 bg-amber-50 p-3 rounded-lg">{icon}</div>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-neutral-800 font-medium mt-1">{content}</p>
          <p className="text-neutral-500 text-sm mt-1">{sub}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;