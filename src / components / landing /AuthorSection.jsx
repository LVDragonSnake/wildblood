import React from 'react';
import { motion } from 'framer-motion';

// Real author photo (round portrait provided by the author)
const AUTHOR_PHOTO = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/324273162_5BC35FD1-93F5-4B43-94A1-9D5992C2CDD6.PNG';
const BG_JUNGLE = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/c982a75e2_generated_image.png'; // jungle

export default function AuthorSection() {
  return (
    <section id="author" className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={BG_JUNGLE} alt="" className="w-full h-full object-cover opacity-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Author photo — real portrait with fire ring */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9 }}
          className="flex-shrink-0 relative">
            <div className="relative">
              {/* Glowing conic ring */}
              <div className="absolute -inset-[3px] rounded-full z-0"
              style={{ background: 'conic-gradient(from 0deg, hsl(30 90% 52%), hsl(45 95% 62%), hsl(15 80% 40%), hsl(30 90% 52%))' }} />
              <div className="relative rounded-full overflow-hidden w-60 md:w-72 aspect-square z-10"
              style={{ boxShadow: '0 0 60px hsl(30 90% 35% / 0.45)' }}>
                <img src="https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/58d95537f_LV_2025_TONDO_PNG.png" alt="Alexander Lawrence" className="w-full h-full object-cover object-top scale-110" />
                
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: 0.2 }}
          className="flex-1">
            <p className="font-ui text-xs tracking-[0.4em] uppercase mb-5" style={{ color: 'hsl(45 95% 58%)' }}>
              The Author
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-8">
              Alexander Lawrence
            </h2>

            <div className="space-y-5">
              <p className="font-body text-xl italic text-white/45 mb-2">
                "Alexander Lawrence is not a name, but an echo."
              </p>
              <p className="font-body text-lg text-white/60 leading-relaxed">
                Behind his stories lie traces of distant journeys, places that never appear on maps,
                and secrets that surface only in the shadows. His novels weave myth and reality,
                revealing what many would rather forget: the unknown has never vanished —
                it has only learned to hide.
              </p>
              <p className="font-body text-lg text-white/60 leading-relaxed">
                For him, writing means walking the thin line between legend and truth.
                Those who read his words may find themselves crossing it too.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/5">
              {[
              { n: '4', label: 'Books Planned' },
              { n: '1', label: 'Published' },
              { n: '170K', label: 'Words in the Saga' }].
              map((s) =>
              <div key={s.label}>
                  <p className="font-display text-3xl font-bold"
                style={{ color: 'hsl(30 90% 52%)', textShadow: '0 0 20px hsl(30 90% 52% / 0.5)' }}>
                    {s.n}
                  </p>
                  <p className="font-ui text-xs tracking-widest uppercase text-white/35 mt-1">{s.label}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
