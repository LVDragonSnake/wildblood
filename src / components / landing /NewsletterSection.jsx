import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const BG = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/54f331b22_generated_image.png'; // savannah

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
    toast.success("You're in the saga. Welcome, Wildblood.");
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="newsletter" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(30_80%_20%/0.3),transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9 }}>

          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px" style={{ background: 'hsl(30 90% 52% / 0.5)' }} />
            <span className="mx-5 text-2xl" style={{ color: 'hsl(45 95% 58%)', textShadow: '0 0 20px hsl(30 90% 52% / 0.8)' }}>🔥</span>
            <div className="w-16 h-px" style={{ background: 'hsl(30 90% 52% / 0.5)' }} />
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-4">Join the Wildblood</h2>
          <p className="font-body italic text-xl text-white/50 mb-10 leading-relaxed">
            Get exclusive updates, lore drops, and be the first to know
            when <em>Abyss</em> — Volume II — enters the hunt.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
            <input type="email" placeholder="Your email address" value={email}
              onChange={e => setEmail(e.target.value)} required
              className="flex-1 h-14 px-5 bg-white/5 border border-white/12 text-white placeholder:text-white/22 font-ui text-sm focus:outline-none transition-colors"
              onFocus={e => e.target.style.borderColor = 'hsl(30 90% 52% / 0.5)'}
              onBlur={e => e.target.style.borderColor = 'hsl(0 0% 100% / 0.12)'}
            />
            <button type="submit" disabled={status === 'loading' || status === 'success'}
              className="h-14 px-8 font-ui text-xs font-semibold tracking-[0.25em] uppercase text-black flex items-center justify-center gap-2 disabled:opacity-70 transition-all duration-300 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, hsl(45 95% 62%), hsl(30 90% 50%))', boxShadow: status === 'idle' ? '0 0 25px hsl(30 90% 52% / 0.4)' : 'none' }}>
              {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
              {status === 'success' && <CheckCircle className="w-4 h-4" />}
              {status === 'idle' && <ArrowRight className="w-4 h-4" />}
              {status === 'success' ? "You're In!" : 'Join Now'}
            </button>
          </form>

          <p className="font-ui text-xs text-white/18 mt-5 tracking-widest">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
