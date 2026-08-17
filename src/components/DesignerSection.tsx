import React from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { Scissors, Sparkles, MapPin, Award } from 'lucide-react';

export const DesignerSection: React.FC = () => {
  const { openTailoringModal, navigateTo } = useBoutique();

  return (
    <section id="designer-story-section" className="relative bg-[#181417] text-[#F5EFE5] py-20 lg:py-32 overflow-hidden border-t border-[#D6B77C]/20">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#4B164C]/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#A4513C]/20 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4B164C]/60 border border-[#D6B77C]/30 text-[#D6B77C] text-[10px] uppercase tracking-[0.3em] font-medium">
            <Sparkles className="w-3 h-3 text-[#D6B77C]" />
            <span>THE CREATIVE DIRECTOR</span>
          </div>
          
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5EFE5] tracking-tight">
            Meet <span className="italic text-[#D6B77C]">Omobolanle Adesiyan</span>
          </h2>
          
          <p className="text-[#D8C2A3] text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            The visionary designer bringing African heritage, Lagos craftsmanship, and contemporary Canadian elegance to the global runway.
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Designer Portrait Spread */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-3 border border-[#D6B77C]/40 rounded-2xl -z-10 translate-x-3 translate-y-3 hidden sm:block"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#29132D] aspect-[3/4] group">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                  alt="Omobolanle Adesiyan, Designer & Creative Director of Qweenfecy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181417]/90 via-transparent to-transparent"></div>

                {/* Designer Title Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#29132D]/90 backdrop-blur-md border border-[#D6B77C]/30 p-5 rounded-xl">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[#D6B77C] font-semibold">Founder & Head of Design</p>
                  <h3 className="font-serif-luxury text-xl text-[#F5EFE5] font-normal mt-1">Omobolanle Adesiyan</h3>
                  <div className="flex items-center gap-4 mt-2 text-xs text-[#D8C2A3]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D6B77C]" /> Toronto & Lagos
                    </span>
                    <span>•</span>
                    <span>African-Canadian Fashion</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Designer Philosophy & Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Quote Block */}
            <div className="p-8 rounded-2xl bg-[#29132D]/60 border border-[#D6B77C]/25 relative">
              <span className="font-serif-luxury text-6xl text-[#D6B77C]/20 absolute top-4 left-5 leading-none">“</span>
              <p className="font-serif-luxury text-xl sm:text-2xl text-[#F5EFE5] font-light italic leading-relaxed relative z-10 pl-4">
                African fashion is not a trend; it is a timeless reservoir of culture, sculptural strength, and regal identity. My mission is to translate our heritage into contemporary, high-fashion silhouettes that empower every individual—regardless of size or origin—to feel majestic.
              </p>
              <div className="mt-4 pt-4 border-t border-[#D6B77C]/20 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D6B77C] font-semibold">Omobolanle Adesiyan</span>
                <span className="text-xs text-[#D8C2A3]">Creative Director, Qweenfecy</span>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-5 rounded-xl bg-[#181417] border border-[#D6B77C]/15 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#4B164C] flex items-center justify-center text-[#D6B77C] mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5EFE5]">African Creativity</h4>
                <p className="text-xs text-[#D8C2A3] leading-relaxed font-light">
                  Bridging Lagos textile artistry—rich Damasks, Aso-Oke, and vibrant Ankara—with modern architectural structures.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#181417] border border-[#D6B77C]/15 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#4B164C] flex items-center justify-center text-[#D6B77C] mb-2">
                  <Scissors className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5EFE5]">Custom Bespoke Craft</h4>
                <p className="text-xs text-[#D8C2A3] leading-relaxed font-light">
                  Every bespoke piece is crafted to individual measurements with precision boning, drape, and impeccable finishing.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#181417] border border-[#D6B77C]/15 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#4B164C] flex items-center justify-center text-[#D6B77C] mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5EFE5]">Runway Presence</h4>
                <p className="text-xs text-[#D8C2A3] leading-relaxed font-light">
                  Creating statement collections showcased at major African-Canadian and global runway platforms.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#181417] border border-[#D6B77C]/15 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#4B164C] flex items-center justify-center text-[#D6B77C] mb-2">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5EFE5]">Toronto × Lagos Roots</h4>
                <p className="text-xs text-[#D8C2A3] leading-relaxed font-light">
                  Direct connection between our Lagos tailoring atelier and our Toronto studio for seamless global service.
                </p>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="designer-book-consultation-btn"
                onClick={() => openTailoringModal()}
                className="bg-[#D6B77C] hover:bg-[#C8A462] text-[#181417] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg cursor-pointer"
              >
                REQUEST A BESPOKE CONSULTATION
              </button>
              
              <button
                id="designer-view-collections-btn"
                onClick={() => navigateTo('shop')}
                className="bg-transparent hover:bg-[#4B164C]/50 text-[#F5EFE5] border border-[#D6B77C]/40 px-6 py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
              >
                EXPLORE HER CREATIONS
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
