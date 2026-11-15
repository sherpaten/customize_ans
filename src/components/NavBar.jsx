import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#006BFF] text-white sticky top-0 z-50 border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" aria-label="customize_ans Art Studio Home">
          <img src="/Logo.jpeg" alt="customize_ans Logo" className="h-12 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="font-serif font-black text-xl tracking-tight text-white leading-none">customize_ans</span>
            <span className="text-[9px] uppercase tracking-widest text-white/80 font-bold mt-1">ART STUDIO</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-white/90">
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white/70 transition-colors">About Us</Link>
          <Link to="/services" className="hover:text-white/70 transition-colors">Services</Link>
          <Link to="/gallery" className="hover:text-white/70 transition-colors">Gallery</Link>
          <Link to="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
          className="md:hidden text-white hover:text-white/70 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#006BFF] border-b border-white/20 px-4 pt-2 pb-6 space-y-3 font-bold text-xs uppercase tracking-widest text-white/90">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-white/70">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-white/70">About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 hover:text-white/70">Services</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="block py-2 hover:text-white/70">Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-white/70">Contact</Link>
        </div>
      )}
    </nav>
  );
}
