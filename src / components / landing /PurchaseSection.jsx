import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Tablet, BookMarked, Headphones } from 'lucide-react';

const COVER = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/036c0f11d_Cover_front.png';

const stores = [
  {
    name: 'Reader Depot',
    sub: 'Paperback, Hardcover & eBook',
    url: 'https://readerdepot.com/books/wildblood-savage-heart/',
    hot: true,
  },
  {
    name: 'Amazon',
    sub: 'Paperback & Kindle',
    url: 'https://www.amazon.com/dp/9798900025872',
    hot: true,
  },
  {
    name: 'Barnes & Noble',
    sub: 'Paperback & Nook',
    url: 'https://www.barnesandnoble.com/s/wildblood+savage+heart+alexander+lawrence',
    hot: false,
  },
  {
    name: 'Book Depository',
    sub: 'Free Worldwide Shipping',
    url: 'https://www.bookdepository.com/search?searchTerm=wildblood+savage+heart',
    hot: false,
  },
  {
    name: 'Kobo',
    sub: 'eBook',
    url: 'https://www.kobo.com/search?query=wildblood+savage+heart',
    hot: false,
  },
  {
    name: 'Apple Books',
    sub: 'eBook',
    url: 'https://books.apple.com/search?term=wildblood+savage+heart',
    hot: false,
  },
  {
    name: 'Audible',
    sub: 'Audiobook',
    url: 'https://www.audible.com/search?keywords=wildblood+savage+heart+alexander+lawrence',
    hot: false,
    audio: true,
  },
];

export default function PurchaseSection() {
  return (
    <section id="buy" className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(30_80%_18%/0.1),transparent_65%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <p className="font-ui text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'hsl(45 95% 58%)' }}>Get Your Copy</p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wide mb-4">Order Now</h2>
          <p className="font-body italic text-lg text-white/40 max-w-md mx-auto">
            Available in paperback, hardcover, digital and audiobook formats worldwide.
          </p>
        </motion.div>

        {/* Format badges */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 md:gap-6 mb-14 flex-wrap">
          {[
            { icon: <BookOpen className="w-5 h-5" />, label: 'Paperback' },
            { icon: <BookMarked className="w-5 h-5" />, label: 'Hardcover' },
            { icon: <Tablet className="w-5 h-5" />, label: 'eBook' },
            { icon: <Headphones className="w-5 h-5" />, label: 'Audiobook' },
          ].map(b => (
            <div key={b.label} className="flex items-center gap-3 px-5 py-4 border bg-card/50"
              style={{ borderColor: 'hsl(30 90% 52% / 0.2)' }}>
              <span style={{ color: 'hsl(30 90% 52%)' }}>{b.icon}</span>
              <p className="font-ui text-xs tracking-widest uppercase text-white/50">{b.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto lg:mx-0 flex-shrink-0">
            <img src={COVER} alt="Savage Heart"
              className="w-40 md:w-48 shadow-2xl"
              style={{ filter: 'drop-shadow(0 20px 40px hsl(30 90% 35% / 0.5))' }} />
          </motion.div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stores.map((s, i) => (
              <motion.a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group flex items-center justify-between px-5 py-4 border transition-all duration-300"
                style={{
                  borderColor: s.hot ? 'hsl(30 90% 52% / 0.45)' : s.audio ? 'hsl(200 70% 40% / 0.3)' : 'hsl(25 12% 14%)',
                  background: s.hot ? 'hsl(30 90% 52% / 0.06)' : s.audio ? 'hsl(200 70% 40% / 0.04)' : 'hsl(0 0% 100% / 0.01)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'hsl(30 90% 52% / 0.5)'; e.currentTarget.style.background = 'hsl(30 90% 52% / 0.07)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = s.hot ? 'hsl(30 90% 52% / 0.45)' : s.audio ? 'hsl(200 70% 40% / 0.3)' : 'hsl(25 12% 14%)'; e.currentTarget.style.background = s.hot ? 'hsl(30 90% 52% / 0.06)' : s.audio ? 'hsl(200 70% 40% / 0.04)' : 'hsl(0 0% 100% / 0.01)'; }}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-ui text-sm font-medium text-white/75 group-hover:text-white transition-colors">{s.name}</p>
                    {s.audio && <Headphones className="w-3 h-3 text-white/30" />}
                  </div>
                  <p className="font-ui text-xs text-white/22 mt-0.5">{s.sub}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
