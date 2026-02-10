
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) ${
        isScrolled || isMenuOpen ? 'bg-[#FDFBF7]/80 backdrop-blur-2xl py-4 border-b border-gray-100/50 shadow-sm' : 'bg-transparent py-10'
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-8 md:px-16 flex justify-between items-center" aria-label="Main Navigation">
        <Link to="/" className="group flex items-center" aria-label="Manna Farming Home">
          <img 
            src="logo.png" 
            alt="Manna Farming" 
            className="h-10 md:h-12 w-auto object-contain transition-all duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const span = document.createElement('span');
              span.className = 'font-serif text-2xl tracking-tighter text-[#0F0F0F]';
              span.innerText = 'MANNA';
              e.currentTarget.parentElement?.appendChild(span);
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-14">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[9px] kerning-luxury uppercase transition-all duration-500 hover:text-[#C5A059] relative gold-underline ${
                location.pathname === link.path ? 'text-[#2E4D3E]' : 'text-[#0F0F0F]/50'
              }`}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/partner" 
            className="bg-[#2E4D3E] text-[#FDFBF7] px-10 py-4 text-[9px] kerning-luxury uppercase hover:bg-[#C5A059] hover:shadow-xl transition-all duration-700 shadow-lg shadow-[#2E4D3E]/10 flex items-center justify-center min-w-[180px]"
          >
            Partner With Us
          </Link>
        </div>

        {/* Hamburger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden group relative z-50 p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="space-y-2.5" aria-hidden="true">
            <div className={`h-[0.5px] bg-[#2E4D3E] transition-all duration-700 ${isMenuOpen ? 'w-6 rotate-45 translate-y-3' : 'w-6'}`}></div>
            <div className={`h-[0.5px] bg-[#2E4D3E] transition-all duration-700 ${isMenuOpen ? 'opacity-0' : 'w-6'}`}></div>
            <div className={`h-[0.5px] bg-[#2E4D3E] transition-all duration-700 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-3' : 'w-4 ml-auto'}`}></div>
          </div>
        </button>

        {/* Mobile Overlay */}
        <div 
          id="mobile-menu"
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-12 transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) lg:hidden bg-[#FDFBF7]/95 backdrop-blur-3xl ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#2E4D3E]/[0.02] font-serif text-[40vw] select-none pointer-events-none italic" role="presentation">
            M
          </div>
          
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-4xl font-serif italic transition-all duration-700 hover:text-[#C5A059] ${
                location.pathname === link.path ? 'text-[#C5A059]' : 'text-[#2E4D3E]'
              }`}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/partner" 
            className="bg-[#2E4D3E] text-[#FDFBF7] px-16 py-7 text-[10px] kerning-luxury uppercase shadow-2xl active:scale-95 transition-all duration-500 hover:bg-[#C5A059]"
          >
            Partner With Us
          </Link>
          
          <div className="absolute bottom-16 flex flex-col items-center space-y-6" role="presentation">
            <div className="w-12 h-px bg-[#C5A059]/30"></div>
            <p className="text-[9px] kerning-luxury text-[#2E4D3E]/40 font-bold uppercase tracking-[0.6em]">Mississippi Heritage</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
