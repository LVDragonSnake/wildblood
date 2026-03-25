import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  { src: 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/3fafecb24_243BE2D3-CE10-40C9-83C0-0ABAEAF1F343.PNG', caption: 'The transformation unleashed' },
  { src: 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/9d84e9835_6458E524-7080-4766-80DC-BF38E1D75158.PNG', caption: 'First encounter with the beast' },
  { src: 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/ec2cd8209_763CE002-DF8C-4C3E-8748-560778A7B69C.png', caption: 'The ruins of an ancient god' },
  { src: 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/ee0c7231f_90B8FCF8-7500-47B6-A027-FB3E07D367A5.png', caption: 'Running from ARGOS' },
  { src: 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/60d66bd68_2FD1BEC5-4BAB-43AF-8A14-00698C1183C1.png', caption: 'Wildblood in the deep' },
  { src: 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/de8543593_B1AE489A-7843-4131-8C1C-A3CD881BAC27.png', caption: 'Hunted through the dust' },
];

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <p className="font-ui text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'hsl(45 95% 58%)' }}>
            Concept Art
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide">The World of Wildblood</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.button key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(img)}
              className="relative overflow-hidden group aspect-square"
            >
              <img src={img.src} alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-body text-sm italic text-white/80">{img.caption}</p>
              </div>
              {/* Fiery corner accent */}
              <div className="absolute top-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, hsl(30 90% 52% / 0.7), transparent)' }} />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <img src={selected.src} alt={selected.caption} className="w-full max-h-[80vh] object-contain" />
              <p className="font-body italic text-white/50 text-center mt-4">{selected.caption}</p>
              <button onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 p-2 bg-white/10 hover:bg-white/20 text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
