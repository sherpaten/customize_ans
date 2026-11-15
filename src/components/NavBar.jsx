import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFF8E9] text-[#263238] sticky top-0 z-50 border-b border-[#E8DCC7] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" aria-label="customize_ans Art Studio Home">
          <img src="/Logo.jpeg" alt="customize_ans Logo" className="h-12 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="font-serif font-black text-xl tracking-tight text-[#263238] leading-none">customize_ans</span>
            <span className="text-[9px] uppercase tracking-widest text-[#766B5B] font-bold mt-1">ART STUDIO</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-[#263238]/90">
          <Link to="/" className="hover:text-[#006BFF] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#006BFF] transition-colors">About Us</Link>
          <Link to="/services" className="hover:text-[#006BFF] transition-colors">Services</Link>
          <Link to="/gallery" className="hover:text-[#006BFF] transition-colors">Gallery</Link>
          <Link to="/contact" className="hover:text-[#006BFF] transition-colors">Contact</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
          className="md:hidden text-[#263238] hover:text-[#006BFF] focus:outline-none"
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
        <div className="md:hidden bg-[#FFF8E9] border-b border-[#E8DCC7] px-4 pt-2 pb-6 space-y-3 font-bold text-xs uppercase tracking-widest text-[#263238]/90">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#006BFF]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#006BFF]">About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#006BFF]">Services</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#006BFF]">Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#006BFF]">Contact</Link>
        </div>
      )}
    </nav>
  );
}
