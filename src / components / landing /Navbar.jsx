import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/25e775a06_LV_2025_TONDO_PNG.png';

const navLinks = [
{ label: 'The Saga', href: '#saga' },
{ label: 'Savage Heart', href: '#book' },
{ label: 'The Author', href: '#author' },
{ label: 'Buy', href: '#buy' },
{ label: 'Newsletter', href: '#newsletter' }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled ? 'bg-[hsl(20_15%_4%/0.95)] backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`
    }>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/c7323ee38_0598BDAA-D365-49C5-B34F-ABC2DECF108E.png" alt="Wildblood Saga" className="h-10 w-10 object-cover rounded-full" />
          <span className="font-display text-sm tracking-[0.2em] uppercase hidden sm:block"
          style={{ color: 'hsl(45 95% 58%)', textShadow: '0 0 20px hsl(30 90% 52% / 0.5)' }}>
            Wildblood
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) =>
          <a key={l.href} href={l.href}
          className="font-ui text-xs tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors duration-300">
              {l.label}
            </a>
          )}
        </div>

        <a href="#buy"
        className="hidden md:flex items-center px-5 py-2 font-ui text-xs tracking-widest uppercase text-black font-semibold transition-all duration-300"
        style={{ background: 'linear-gradient(135deg, hsl(45 95% 58%), hsl(30 90% 48%))', boxShadow: '0 0 20px hsl(30 90% 52% / 0.4)' }}>
          Get the Book
        </a>

        <button className="md:hidden text-white/60 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
        className="md:hidden bg-[hsl(20_15%_4%/0.98)] backdrop-blur-xl border-b border-white/5 overflow-hidden">
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((l) =>
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
            className="font-ui text-xs tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors">
                  {l.label}
                </a>
            )}
              <a href="#buy" onClick={() => setMobileOpen(false)}
            className="mt-2 text-center py-3 font-ui text-xs tracking-widest uppercase text-black font-semibold"
            style={{ background: 'linear-gradient(135deg, hsl(45 95% 58%), hsl(30 90% 48%))' }}>
                Get the Book
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}
