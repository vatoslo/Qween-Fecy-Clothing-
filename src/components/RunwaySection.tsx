import React, { useState } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { Sparkles, ArrowRight, Play, Eye } from 'lucide-react';

interface RunwayLook {
  id: string;
  season: string;
  title: string;
  theme: string;
  image: string;
  concept: string;
  pillText: string;
}

const RUNWAY_LOOKS: RunwayLook[] = [
  {
    id: 'runway-1',
    season: 'RUNWAY EDITORIAL',
    title: 'The Sovereign Sculptural Cape',
    theme: 'Heritage Architecture',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    concept: 'Hand-woven Aso-Oke cape with metallic gold filament weft over an aubergine column gown.',
    pillText: 'CRAFT',
  },
  {
    id: 'runway-2',
    season: 'FASHION WEEK SPOTLIGHT',
    title: 'Damask & Silk Motion',
    theme: 'Lagos Fluidity',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
    concept: 'Voluminous tiered silk organza meeting precision Italian wool structure in burnt terracotta.',
    pillText: 'MOVEMENT',
  },
  {
    id: 'runway-3',
    season: 'HAUTE COUTURE ARCHIVE',
    title: 'The Royal Corseted Agbada Fusion',
    theme: 'Sartorial Sovereignty',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
    concept: 'Deconstructed traditional Nigerian grand robes re-imagined with modern sharp lines.',
    pillText: 'IDENTITY',
  },
  {
    id: 'runway-4',
    season: 'AVANT-GARDE EDITION',
    title: 'The Celestial Gele Crown & Gown',
    theme: 'Sculptural Form',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
    concept: 'High-contrast drapery celebrating the geometry of African headwear with red carpet grandeur.',
    pillText: 'FORM',
  },
];

export const RunwaySection: React.FC = () => {
  const { navigateTo, openTailoringModal } = useBoutique();
  const [activeLookIndex, setActiveLookIndex] = useState(0);

  return (
    <section id="runway-section" className="relative bg-[#181417] text-[#F5EFE5] py-24 lg:py-32 overflow-hidden border-t border-[#D6B77C]/20">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] rounded-full bg-[#4B164C]/25 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-[#A4513C]/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4B164C]/70 border border-[#D6B77C]/30 text-[#D6B77C] text-[10px] uppercase tracking-[0.3em] font-medium">
              <Sparkles className="w-3 h-3 text-[#D6B77C]" />
              <span>RUNWAY FASHION MASTERY</span>
            </div>
            
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5EFE5] tracking-tight">
              African Heritage on the <span className="italic text-[#D6B77C]">Global Runway</span>
            </h2>
            
            <p className="text-[#D8C2A3] text-sm sm:text-base font-light leading-relaxed">
              Experience the sculptural power, dramatic movement, and couture mastery showcased across Toronto Fashion Week and Lagos runway presentations.
            </p>
          </div>

          {/* Runway Concept Tags */}
          <div className="flex flex-wrap gap-2">
            {['RUNWAY', 'CRAFT', 'MOVEMENT', 'FORM', 'IDENTITY'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-[#29132D] border border-[#D6B77C]/30 text-[#D6B77C] text-[10px] uppercase tracking-[0.24em] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Runway Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RUNWAY_LOOKS.map((look, index) => (
            <div
              key={look.id}
              onClick={() => setActiveLookIndex(index)}
              className={`group relative rounded-2xl overflow-hidden bg-[#29132D] border transition-all duration-500 cursor-pointer ${
                activeLookIndex === index
                  ? 'border-[#D6B77C] shadow-[0_15px_40px_rgba(214,183,124,0.2)] scale-[1.02]'
                  : 'border-[#D6B77C]/20 hover:border-[#D6B77C]/60'
              }`}
            >
              {/* Image Frame */}
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181417] via-[#181417]/30 to-transparent"></div>

                {/* Pill Badge */}
                <div className="absolute top-4 left-4 bg-[#181417]/85 backdrop-blur-md border border-[#D6B77C]/40 px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.22em] text-[#D6B77C] font-semibold">
                  {look.pillText}
                </div>

                {/* Season Badge */}
                <div className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.2em] text-[#D8C2A3] font-medium bg-[#4B164C]/70 px-2.5 py-1 rounded-md">
                  {look.season}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-5 space-y-2 bg-[#181417]/95 border-t border-[#D6B77C]/20">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D6B77C] font-medium block">
                  {look.theme}
                </span>
                <h3 className="font-serif-luxury text-lg text-[#F5EFE5] font-normal leading-snug group-hover:text-[#D6B77C] transition-colors">
                  {look.title}
                </h3>
                <p className="text-xs text-[#D8C2A3] font-light line-clamp-2 leading-relaxed">
                  {look.concept}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-[#D6B77C] font-medium">
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Runway Look <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Look Feature Panel */}
        <div className="mt-12 bg-[#29132D]/80 backdrop-blur-md border border-[#D6B77C]/30 rounded-3xl p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D6B77C]">
                <Eye className="w-4 h-4 text-[#D6B77C]" />
                <span>Featured Runway Piece: {RUNWAY_LOOKS[activeLookIndex].theme}</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5EFE5]">
                {RUNWAY_LOOKS[activeLookIndex].title}
              </h3>
              <p className="text-[#D8C2A3] text-sm leading-relaxed max-w-2xl font-light">
                {RUNWAY_LOOKS[activeLookIndex].concept} Handcrafted in our Lagos atelier and refined in our Toronto studio, this design exemplifies the elevated synergy of African heritage textiles with contemporary global fashion architecture.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                id="runway-order-custom-btn"
                onClick={() => openTailoringModal(`Runway Look: ${RUNWAY_LOOKS[activeLookIndex].title}`)}
                className="w-full bg-[#D6B77C] hover:bg-[#C8A462] text-[#181417] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-lg cursor-pointer text-center"
              >
                REQUEST AS CUSTOM BESPOKE
              </button>
              <button
                id="runway-shop-all-btn"
                onClick={() => navigateTo('shop', 'runway')}
                className="w-full bg-transparent hover:bg-[#4B164C]/50 text-[#F5EFE5] border border-[#D6B77C]/40 px-6 py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] transition-all cursor-pointer text-center"
              >
                BROWSE RUNWAY ARCHIVE
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
