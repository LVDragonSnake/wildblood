import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// User-provided hero background (concept art with the three hybrids)
const BG_HERO   = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/6132c207e_C1B09979-F451-45F0-BFBA-DF2F052F0135copia.jpg';
// Official logo image (WILDBLOOD + SAVAGE HEART text on transparent-ish bg)
const LOGO_IMG  = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/234d9eb64_6EDD22C5-94E0-4261-95C6-0E7D79894A4F.png';
const COVER     = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/036c0f11d_Cover_front.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={BG_HERO} alt="" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-[hsl(20_15%_4%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/50" />
      </div>

      {/* Subtle fire glow at bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(30_90%_30%/0.25),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 justify-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Official logo image used as the title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="mb-6"
            >
              <img
                src={LOGO_IMG}
                alt="WILDBLOOD – Savage Heart"
                className="w-72 md:w-96 lg:w-[28rem] mx-auto lg:mx-0"
                style={{ filter: 'drop-shadow(0 0 30px hsl(30 90% 40% / 0.5)) drop-shadow(0 4px 20px rgba(0,0,0,0.9))' }}
              />
            </motion.div>

            {/* Tagline — universe-level, not Vol 1-specific */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-body text-xl md:text-2xl italic text-white/55 max-w-md mx-auto lg:mx-0 leading-relaxed mb-3"
            >
              "Hunter. Prey. Hybrid."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="font-body text-base md:text-lg text-white/40 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              A four-book saga where myth and mutation collide. Ancient artifacts, shadowy organisations, and the unstoppable force of a bloodline that refuses to stay human.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#buy"
                className="inline-flex items-center justify-center px-8 py-4 font-ui text-xs font-semibold tracking-[0.25em] uppercase text-black transition-all duration-300 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, hsl(45 95% 62%), hsl(30 90% 50%))', boxShadow: '0 0 40px hsl(30 90% 52% / 0.5)' }}>
                Begin the Saga
              </a>
              <a href="#saga"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/15 text-white/65 hover:text-white hover:border-white/30 font-ui text-xs tracking-[0.25em] uppercase transition-all duration-300">
                Explore the World
              </a>
            </motion.div>

            {/* Vol 1 badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-8 inline-flex items-center gap-3"
            >
              <div className="h-px w-8" style={{ background: 'hsl(30 90% 52% / 0.5)' }} />
              <span className="font-ui text-xs tracking-[0.3em] uppercase" style={{ color: 'hsl(45 95% 58% / 0.7)' }}>
                Volume I — Savage Heart — Out Now
              </span>
              <div className="h-px w-8" style={{ background: 'hsl(30 90% 52% / 0.5)' }} />
            </motion.div>
          </motion.div>

          {/* BOOK COVER */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative"
          >
            <div className="absolute -inset-10 rounded-full blur-3xl" style={{ background: 'hsl(30 90% 40% / 0.2)' }} />
            <motion.img
              src={COVER}
              alt="Wildblood: Savage Heart — cover"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative w-52 md:w-64 lg:w-72 xl:w-80 shadow-2xl"
              style={{ filter: 'drop-shadow(0 25px 60px hsl(30 90% 35% / 0.6))' }}
            />
          </motion.div>
        </div>
      </div>

      <motion.a href="#book" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 hover:text-white/60 transition-colors">
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
