import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    text: "A breathless, globe-trotting adventure that never lets you go. Lawrence builds a world where myth and reality collide — and the result is electrifying.",
    source: "Fantasy Hive",
  },
  {
    text: "Savage Heart is the kind of book that reminds you why you fell in love with reading. Raw, visceral, and impossible to put down.",
    source: "The Grimdark Report",
  },
  {
    text: "Leonardo's transformation is one of the most compelling hero journeys I've read in years. This saga is just getting started.",
    source: "Goodreads — Top Reviewer",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <p className="font-ui text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'hsl(45 95% 58%)' }}>
            What Readers Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide">Early Reviews</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-8 border border-white/6 bg-card/30 group transition-all duration-500 overflow-hidden"
              style={{ '--hover-border': 'hsl(30 90% 52% / 0.25)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'hsl(30 90% 52% / 0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'hsl(0 0% 100% / 0.06)'}
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, hsl(30 90% 52%), hsl(45 95% 58%))' }} />

              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: 'hsl(30 90% 52%)' }}>★</span>
                ))}
              </div>

              <p className="font-body text-lg italic text-white/60 leading-relaxed mb-6">"{r.text}"</p>
              <p className="font-ui text-xs tracking-widest uppercase" style={{ color: 'hsl(30 90% 52% / 0.7)' }}>
                — {r.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
