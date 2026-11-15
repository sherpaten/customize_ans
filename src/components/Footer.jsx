import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#006BFF] text-white border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/Logo.jpeg" alt="customize_ans Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-serif font-black text-lg text-white">customize_ans</span>
              <span className="text-[8px] uppercase tracking-widest text-white/80 font-bold">ART STUDIO</span>
            </div>
          </div>
          <p className="text-white/80 text-xs leading-relaxed">
            Wearable Art Studio — Transforming everyday garments into unique personal expressions.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-xs text-white/80">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Studio Location</h4>
          <p className="text-xs text-white/80">Custom Wearable Art Studio</p>
          <p className="text-xs text-white/80">Boudha, Kathmandu</p>
          <p className="text-xs text-white/80">Phone: +977 9746492408</p>
          <p className="text-xs text-white/80">Email: customize.ans@gmail.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-white/20 text-center text-xs text-white/70">
        © {new Date().getFullYear()} customize_ans. All rights reserved.
      </div>
    </footer>
  );
}
