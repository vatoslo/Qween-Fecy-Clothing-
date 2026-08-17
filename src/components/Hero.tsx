import React, { useState, useEffect } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { ArrowRight, Sparkles, Scissors, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateTo, openTailoringModal } = useBoutique();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero-section" className="relative bg-[#29132D] text-[#F5EFE5] pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
      
      {/* Editorial Luxury Ambient Lighting in Plum, Terracotta & Warm Sand */}
      <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#4B164C]/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] rounded-full bg-[#A4513C]/25 blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[350px] h-[350px] rounded-full bg-[#D6B77C]/10 blur-[100px] pointer-events-none" />

      {/* Floating Interactive Elements with Mouse Movement */}
      <div
        className="hidden lg:block absolute top-20 right-16 z-20 pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate3d(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px, 0)` }}
      >
        <div className="bg-[#181417]/80 backdrop-blur-md border border-[#D6B77C]/30 px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 text-[11px] uppercase tracking-[0.24em] text-[#D6B77C]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D6B77C] animate-ping" />
          <span>Toronto × Lagos Atelier</span>
        </div>
      </div>

      <div
        className="hidden lg:block absolute bottom-32 left-12 z-20 pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 0)` }}
      >
        <div className="bg-[#4B164C]/60 backdrop-blur-md border border-[#D6B77C]/20 px-4 py-2 rounded-xl text-[10px] uppercase tracking-[0.28em] text-[#F5EFE5]/90">
          ✦ African Heritage • Contemporary Form
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#4B164C]/80 border border-[#D6B77C]/40 text-[#D6B77C] text-[11px] uppercase tracking-[0.3em] font-medium shadow-sm">
              <Globe className="w-3.5 h-3.5 text-[#D6B77C]" />
              <span>TORONTO × LAGOS</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-light text-[#F5EFE5] leading-[1.04] tracking-tight">
                AFRICAN HERITAGE.
                <span className="block font-normal italic text-[#D6B77C] mt-2">
                  CONTEMPORARY ELEGANCE.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-[#D8C2A3] text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Fashion shaped by African creativity, Lagos craftsmanship, and contemporary Canadian style. Designed for diverse forms, runway presence, and sovereign individuality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              
              {/* Primary CTA */}
              <button
                id="hero-explore-collection-btn"
                onClick={() => navigateTo('shop')}
                className="w-full sm:w-auto bg-[#D6B77C] hover:bg-[#C8A462] text-[#181417] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.24em] transition-all duration-300 shadow-[0_8px_30px_rgba(214,183,124,0.25)] flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>EXPLORE THE COLLECTION</span>
                <ArrowRight className="w-4 h-4 text-[#181417] group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              {/* Secondary CTA */}
              <button
                id="hero-discover-qween-fecy-btn"
                onClick={() => {
                  const el = document.getElementById('designer-story-section');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigateTo('about');
                  }
                }}
                className="w-full sm:w-auto bg-transparent hover:bg-[#4B164C]/50 text-[#F5EFE5] border border-[#D6B77C]/40 hover:border-[#D6B77C] px-8 py-4 rounded-full text-xs font-medium uppercase tracking-[0.22em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>DISCOVER QWEEN FECY</span>
              </button>

              {/* Custom Design CTA */}
              <button
                id="hero-custom-design-btn"
                onClick={() => openTailoringModal()}
                className="w-full sm:w-auto bg-[#181417]/80 hover:bg-[#181417] text-[#D8C2A3] border border-[#A4513C]/50 hover:border-[#A4513C] px-6 py-4 rounded-full text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Scissors className="w-3.5 h-3.5 text-[#D6B77C]" />
                <span>CUSTOM DESIGN</span>
              </button>

            </div>

            {/* Atelier Pillars Grid */}
            <div className="pt-6 border-t border-[#D6B77C]/20 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="font-serif-luxury text-2xl font-light text-[#D6B77C]">Toronto × Lagos</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D8C2A3]/80 font-medium mt-0.5">Dual Atelier Hubs</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl font-light text-[#D6B77C]">All Bodies</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D8C2A3]/80 font-medium mt-0.5">Inclusive Fitting</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl font-light text-[#D6B77C]">Runway</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D8C2A3]/80 font-medium mt-0.5">Couture Mastery</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fashion Editorial Imagery Spread */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Fine Hairline Border in Gold */}
              <div className="absolute -inset-3 border border-[#D6B77C]/30 rounded-2xl -z-10 translate-x-3 translate-y-3 hidden sm:block"></div>

              {/* Main Editorial Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-[#181417] aspect-[3/4] group">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85"
                  alt="Qween Fecy African-Canadian Haute Couture"
                  className="w-full h-full object-cover object-center luxury-img-zoom"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Editorial Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181417]/90 via-[#29132D]/30 to-transparent"></div>

                {/* Editorial Collection Placard */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#181417]/90 backdrop-blur-md border border-[#D6B77C]/30 p-4 rounded-xl text-[#F5EFE5]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[9.5px] uppercase tracking-[0.28em] text-[#D6B77C] font-medium block">
                        Editorial Runway Spotlight
                      </span>
                      <h2 className="font-serif-luxury text-base text-[#F5EFE5] font-normal mt-0.5">
                        The Sovereign Damask & Silk Edition
                      </h2>
                    </div>
                    <button
                      id="hero-view-editorial-piece-btn"
                      onClick={() => navigateTo('shop')}
                      className="text-[11px] bg-[#D6B77C] hover:bg-[#C8A462] text-[#181417] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
                    >
                      View
                    </button>
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 right-4 bg-[#4B164C]/90 text-[#F5EFE5] border border-[#D6B77C]/40 px-3.5 py-1 rounded-full text-[9.5px] font-semibold uppercase tracking-[0.24em] backdrop-blur-sm">
                  African Heritage
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Brand Value Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-20">
        <div className="bg-[#181417]/70 backdrop-blur-md border border-[#D6B77C]/20 rounded-2xl p-6 sm:p-8 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#D6B77C]/15">
          
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-3 first:pt-0 first:px-0">
            <div className="w-10 h-10 rounded-full bg-[#4B164C]/70 border border-[#D6B77C]/30 flex items-center justify-center shrink-0 text-[#D6B77C]">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#F5EFE5]">Toronto × Lagos</h4>
              <p className="text-xs text-[#D8C2A3] font-light mt-0.5">Diaspora luxury rooted in heritage</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-full bg-[#4B164C]/70 border border-[#D6B77C]/30 flex items-center justify-center shrink-0 text-[#D6B77C]">
              <Scissors className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#F5EFE5]">Custom Bespoke</h4>
              <p className="text-xs text-[#D8C2A3] font-light mt-0.5">Made-to-measure for your silhouette</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-full bg-[#4B164C]/70 border border-[#D6B77C]/30 flex items-center justify-center shrink-0 text-[#D6B77C]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#F5EFE5]">Body Inclusivity</h4>
              <p className="text-xs text-[#D8C2A3] font-light mt-0.5">Flattering every shape and size</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-full bg-[#4B164C]/70 border border-[#D6B77C]/30 flex items-center justify-center shrink-0 text-[#D6B77C]">
              <span className="text-xs font-bold font-serif-luxury">QF</span>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#F5EFE5]">Runway Craftsmanship</h4>
              <p className="text-xs text-[#D8C2A3] font-light mt-0.5">Lagos textiles & Canadian tailoring</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
