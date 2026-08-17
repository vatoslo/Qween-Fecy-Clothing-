import React from 'react';
import { Sparkles, Award } from 'lucide-react';

interface PressItem {
  outlet: string;
  location: string;
  quote: string;
  tag: string;
}

const PRESS_ITEMS: PressItem[] = [
  {
    outlet: 'AFRICAN FASHION WEEK TORONTO',
    location: 'Toronto, Canada',
    quote: 'Qweenfecy brings an electric fusion of traditional Nigerian damask and ultra-clean modern silhouettes to the Canadian runway.',
    tag: 'Runway Showcase',
  },
  {
    outlet: 'LAGOS FASHION EDITORIAL',
    location: 'Lagos, Nigeria',
    quote: 'Omobolanle Adesiyan preserves the timeless art of Aso-Oke and intricate hand-embroidery while re-engineering it for the modern global wardrobe.',
    tag: 'Designer Spotlight',
  },
  {
    outlet: 'DIASPORA LUXURY STYLE',
    location: 'Global Feature',
    quote: 'A triumphant celebration of cultural pride and body inclusivity that redefines luxury for the contemporary African diaspora.',
    tag: 'Editorial Feature',
  },
];

export const PressRecognition: React.FC = () => {
  return (
    <section id="press-section" className="bg-[#181417] text-[#F5EFE5] py-20 lg:py-28 relative overflow-hidden border-t border-[#D6B77C]/20">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] rounded-full bg-[#4B164C]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B164C]/70 border border-[#D6B77C]/30 text-[10px] uppercase tracking-[0.3em] text-[#D6B77C] font-medium">
            <Award className="w-3 h-3 text-[#D6B77C]" />
            <span>EDITORIAL SPOTLIGHT</span>
          </div>
          
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5EFE5]">
            Featured in <span className="italic text-[#D6B77C]">Fashion & Culture</span>
          </h2>
          
          <p className="text-[#D8C2A3] text-sm font-light">
            Recognized across Canadian and Nigerian fashion platforms for cultural authenticity and contemporary tailoring.
          </p>
        </div>

        {/* Press Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRESS_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#29132D]/70 border border-[#D6B77C]/25 rounded-2xl p-8 flex flex-col justify-between hover:border-[#D6B77C]/60 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.24em] text-[#D6B77C] font-semibold bg-[#4B164C] px-2.5 py-1 rounded">
                    {item.tag}
                  </span>
                  <span className="text-[10px] text-[#D8C2A3]/70">{item.location}</span>
                </div>

                <p className="font-serif-luxury text-base text-[#F5EFE5] font-light italic leading-relaxed pt-2">
                  “{item.quote}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D6B77C]/20">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#D6B77C] font-semibold">
                  {item.outlet}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Runway & Media Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#29132D]/40 border border-[#D6B77C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#D6B77C] shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-widest text-[#F5EFE5] font-medium">Toronto Fashion Week & African Fashion Platforms</p>
              <p className="text-xs text-[#D8C2A3] font-light">Showcasing Afro-contemporary couture to audiences in North America, the UK, and West Africa.</p>
            </div>
          </div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D6B77C] font-semibold px-4 py-2 rounded-full border border-[#D6B77C]/40 bg-[#181417]">
            Toronto × Lagos
          </span>
        </div>

      </div>
    </section>
  );
};
