import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const COVER = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/036c0f11d_Cover_front.png';

const books = [
{
  vol: 'Volume I', title: 'Savage Heart', subtitle: 'Out Now', available: true, cover: COVER,
  desc: 'Leonardo survives an attack by an impossible beast in Kenya. His blood will never be the same again.'
},
{
  vol: 'Volume II', title: 'Abyss', subtitle: 'Coming Soon', available: false, cover: null,
  desc: 'Nohea, a Maldivian survivor, is captured by ARGOS and used as a test subject. A clandestine Cult rises from the shadows.'
},
{
  vol: 'Volume III', title: 'Metamorphosis', subtitle: 'Coming Soon', available: false, cover: null,
  desc: 'Ginevra, a young shapeshifter, and Noah join forces to find the missing Leonardo — before the Cult finds them first.'
},
{
  vol: 'Volume IV', title: 'Wild Legacy', subtitle: 'Coming Soon', available: false, cover: null,
  desc: 'Leonardo, Nohea and Ginevra unite. ARGOS and the Cult collide. The fate of all hybrids hangs in the balance.'
}];


export default function SagaSection() {
  return (
    <section id="saga" className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(30_80%_20%/0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}
        className="text-center mb-20">
          <p className="font-ui text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'hsl(45 95% 58%)' }}>
            A Four-Book Epic
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-5 tracking-wide">The Wildblood Saga</h2>
          <p className="font-body italic text-xl text-white/40 max-w-xl mx-auto">
            One world. One bloodline. An unstoppable saga of survival, power, and identity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {books.map((book, i) =>
          <motion.div key={book.vol}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: i * 0.12 }}
          className="group relative flex flex-col border bg-card/40 backdrop-blur-sm transition-all duration-500 overflow-hidden"
          style={{ borderColor: book.available ? 'hsl(30 90% 52% / 0.4)' : 'hsl(25 12% 14%)' }}>
            
              <div className="aspect-[2/3] relative overflow-hidden bg-black/50">
                {book.cover ?
              <img src="https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/036c0f11d_Cover_front.png" alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /> :

              <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <Lock className="w-7 h-7 text-white/8" />
                    <p className="font-display text-xs tracking-[0.3em] text-white/12 uppercase">{book.title}</p>
                  </div>
              }
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {book.available &&
              <div className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, transparent, hsl(30 90% 52%), transparent)' }} />
              }
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <p className="font-ui text-xs tracking-widest uppercase mb-1" style={{ color: 'hsl(30 90% 52% / 0.65)' }}>{book.vol}</p>
                <h3 className="font-display text-lg tracking-wide mb-2" style={{ color: book.available ? 'white' : 'hsl(0 0% 30%)' }}>
                  {book.title}
                </h3>
                <p className="font-body text-sm text-white/35 leading-relaxed flex-1">{book.desc}</p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="font-ui text-xs tracking-[0.3em] uppercase"
                style={{ color: book.available ? 'hsl(45 95% 58%)' : 'hsl(0 0% 22%)' }}>
                    {book.subtitle}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
