import React from 'react';
import { motion } from 'framer-motion';

const COVER    = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/036c0f11d_Cover_front.png';
const BG_EGYPT = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/3a62ac6ee_generated_image.png'; // pyramids at night
const traits   = ['Adventure', 'Supernatural', 'Psychological Thriller', 'Young Adult', 'Global Locations'];

export default function BookSection() {
  return (
    <section id="book" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={BG_EGYPT} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}
          className="text-center mb-20">
          <p className="font-ui text-xs tracking-[0.4em] uppercase mb-3" style={{ color: 'hsl(45 95% 58%)' }}>Volume I</p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wide mb-4">Savage Heart</h2>
          <span className="divider font-ui text-xs tracking-widest uppercase text-white/20">Synopsis</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9 }} className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-6 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: 'hsl(30 90% 35% / 0.3)' }} />
              <img src={COVER} alt="Savage Heart"
                className="relative w-52 md:w-60 lg:w-72 shadow-2xl"
                style={{ filter: 'drop-shadow(0 20px 50px hsl(30 90% 35% / 0.5))' }} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }} className="flex-1">

            <blockquote className="pl-6 mb-8" style={{ borderLeft: '2px solid hsl(30 90% 52%)' }}>
              <p className="font-body text-2xl md:text-3xl italic text-white/80 leading-snug">
                "You can't escape what you're destined to become."
              </p>
            </blockquote>

            <div className="space-y-5 mb-10">
              <p className="font-body text-lg text-white/60 leading-relaxed">
                Seventeen-year-old <strong className="text-white/85">Leonardo</strong>, an Italian boy from Lecco,
                sets off on a safari in Kenya with his parents. During an excursion in the savannah, he is attacked
                by an impossible creature: a gigantic feline with white fur and a primordial gaze.
                He survives — but something inside him breaks. Or perhaps awakens.
              </p>
              <p className="font-body text-lg text-white/60 leading-relaxed">
                Blackouts. Memory lapses. A body that no longer obeys. His blood is no longer entirely human.
                And while he tries to hold on to normality, a shadowy government organization called{' '}
                <strong className="text-white/85">ARGOS</strong> hunts in silence — after ancient artifacts
                buried beneath the pyramids and in volcanic caves lost to the seas of Indonesia.
              </p>
              <p className="font-body text-lg text-white/60 leading-relaxed">
                To protect those he loves, Leonardo must confront forces far beyond him.
                But the real question is: how long can he resist the predator rising within?
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {traits.map(t => (
                <span key={t} className="font-ui text-xs tracking-widest uppercase px-3 py-1.5 border text-white/50 hover:text-white transition-colors duration-300"
                  style={{ borderColor: 'hsl(30 90% 52% / 0.25)' }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'hsl(25 12% 14%)' }}>
              {[
                { label: 'Pages', value: '704' },
                { label: 'Genre', value: 'YA / New Adult' },
                { label: 'Publisher', value: 'Spines' },
                { label: 'ISBN', value: '9798900025872' },
              ].map(d => (
                <div key={d.label} className="bg-background px-4 py-4">
                  <p className="font-ui text-xs text-white/25 tracking-widest uppercase mb-1">{d.label}</p>
                  <p className="font-body text-base text-white/80">{d.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
