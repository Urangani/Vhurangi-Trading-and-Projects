// App.tsx - Updated for Tailwind v4
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import logo from './assets/vhurangi-trading-logo.jpeg';

// Page Components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light flex flex-col">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Page transition animation
    gsap.fromTo('.page-content', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, [location]);
  
  return (
    <div className="page-content">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navRef = React.useRef(null);
  
  useEffect(() => {
    // Animate nav items on load
    gsap.fromTo('.nav-item', 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)' }
    );
  }, []);
  
  return (
    <nav ref={navRef} className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="Vhurang Trading & Projects" className="h-10 w-auto transition-transform group-hover:scale-110 duration-300" />
              <span className="font-bold text-xl text-dark">Vhurang Trading & Projects</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/contact" className="bg-primary-500 text-white px-5 py-2 rounded-md hover:bg-primary-600 transition-all duration-300 transform hover:scale-105">
              Get Quote
            </Link>
          </div>
          
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-slideDown">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
              <Link to="/contact" className="bg-primary-500 text-white px-4 py-2 rounded-md text-center">Get Quote</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const [hovered, setHovered] = React.useState(false);
  const linkRef = React.useRef(null);
  
  useEffect(() => {
    if (hovered) {
      gsap.to(linkRef.current, { y: -2, duration: 0.2, ease: 'power2.out' });
    } else {
      gsap.to(linkRef.current, { y: 0, duration: 0.2, ease: 'power2.out' });
    }
  }, [hovered]);
  
  return (
    <Link 
      ref={linkRef}
      to={to} 
      className="nav-item text-neutral-700 hover:text-primary-500 font-medium transition-colors duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link to={to} onClick={onClick} className="text-neutral-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="bg-dark text-neutral-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Vhurang Trading & Projects" className="h-8 w-auto" />
              <span className="font-bold text-white text-lg">Vhurang Trading & Projects</span>
            </div>
            <p className="text-sm">Reliable construction services with quality craftsmanship and compliance you can trust.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2"><Phone size={16} /> +27 (0) 609146542"</p>
              <p className="flex items-center gap-2"><Mail size={16} /> N/A</p>
              <p className="flex items-center gap-2"><MapPin size={16} /> Thohoyandou, South Africa</p>
            </div>
            <div className="flex space-x-4 mt-4">
              {/* <Facebook size={20} className="cursor-pointer hover:text-primary-400 transition-colors" />
              <Twitter size={20} className="cursor-pointer hover:text-primary-400 transition-colors" />
              <Linkedin size={20} className="cursor-pointer hover:text-primary-400 transition-colors" /> */}
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-xs">
          <p>&copy; 2025 Vhurang Trading and Projects Pty Ltd. All rights reserved.</p>
          <p className="mt-1 text-neutral-500">Registration No: 2025/561009/07</p>
        </div>
      </div>
    </footer>
  );
};

export default App;