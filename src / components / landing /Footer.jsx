import React from 'react';

const LOGO = 'https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/25e775a06_LV_2025_TONDO_PNG.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-black/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="https://media.base44.com/images/public/69c2b9fc65157bca2a47dd84/c7323ee38_0598BDAA-D365-49C5-B34F-ABC2DECF108E.png" alt="Wildblood" className="h-10 w-10 rounded-full object-cover opacity-80" />
            <div>
              <p className="font-display text-lg tracking-[0.15em] uppercase"
              style={{ color: 'hsl(45 95% 58%)', textShadow: '0 0 15px hsl(30 90% 52% / 0.4)' }}>
                Wildblood
              </p>
              <p className="font-ui text-xs text-white/22 mt-0.5">
                © {new Date().getFullYear()} Alexander Lawrence. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            {['Instagram', 'TikTok', 'Goodreads', 'Twitter'].map((s) =>
            <a key={s} href="#"
            className="font-ui text-xs tracking-[0.22em] uppercase text-white/22 transition-colors duration-300"
            onMouseEnter={(e) => e.target.style.color = 'hsl(30 90% 52%)'}
            onMouseLeave={(e) => e.target.style.color = 'hsl(0 0% 100% / 0.22)'}>
                {s}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>);

}
