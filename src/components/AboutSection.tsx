import React from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { Sparkles, Globe, Heart, Scissors } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { navigateTo, openTailoringModal } = useBoutique();

  return (
    <section id="about-section" className="bg-[#29132D] text-[#F5EFE5] py-20 lg:py-32 relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-[#4B164C]/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#A4513C]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Brand Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Editorial Dual-Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Primary Image Frame: Lagos to Toronto Creative Heritage */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D6B77C]/30 aspect-[4/5] bg-[#181417] relative group">
                <img
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
                  alt="Qween Fecy African-Canadian Editorial Craftsmanship"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181417]/80 via-transparent to-transparent"></div>
              </div>

              {/* Secondary Floating Card: Toronto × Lagos */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-[#181417]/95 backdrop-blur-md text-[#F5EFE5] p-6 sm:p-7 rounded-2xl border border-[#D6B77C]/40 shadow-2xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#D6B77C] font-semibold mb-2">
                  <Globe className="w-3.5 h-3.5 text-[#D6B77C]" />
                  <span>Dual Diaspora Heritage</span>
                </div>
                <p className="font-serif-luxury text-base font-light text-[#F5EFE5] leading-snug">
                  “From the textile markets of Lagos to the runways of Toronto.”
                </p>
                <div className="mt-3 pt-3 border-t border-[#D6B77C]/20 flex items-center justify-between text-[11px] text-[#D8C2A3]">
                  <span>Omobolanle Adesiyan</span>
                  <span className="text-[#D6B77C]">Est. 2020</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-7">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B164C]/70 border border-[#D6B77C]/30 text-[10px] uppercase tracking-[0.3em] text-[#D6B77C] font-medium">
              <Sparkles className="w-3 h-3 text-[#D6B77C]" />
              <span>THE QWEEN FECY STORY</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5EFE5] leading-[1.12]">
              Where African Heritage Meets <span className="italic text-[#D6B77C]">Contemporary Elegance</span>.
            </h2>

            {/* Core Explanation */}
            <p className="text-[#D8C2A3] text-base sm:text-lg font-light leading-relaxed">
              Qweenfecy is an African-Canadian fashion brand celebrated across Toronto and Lagos. We honor the depth, vibrancy, and architectural grandeur of African textiles while filtering them through a modern, urban, and sophisticated lens.
            </p>

            <p className="text-[#F5EFE5]/80 text-xs sm:text-sm font-light leading-relaxed">
              Founded and led by designer Omobolanle Adesiyan, Qweenfecy champions inclusivity across diverse body shapes and sizes, delivering couture collections for women, men, and children—alongside made-to-measure bespoke services and runway showpieces.
            </p>

            {/* Core Brand Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="bg-[#181417]/80 border border-[#D6B77C]/20 p-5 rounded-2xl">
                <div className="flex items-center gap-2.5 mb-2 text-[#D6B77C] font-medium text-xs uppercase tracking-[0.16em]">
                  <Globe className="w-4 h-4 text-[#D6B77C]" />
                  <span>Lagos Craftsmanship</span>
                </div>
                <p className="text-xs text-[#D8C2A3] font-light leading-relaxed">
                  Authentic hand-woven Aso-Oke, rich Swiss Damasks, fine cord lace, and traditional embroidery techniques.
                </p>
              </div>

              <div className="bg-[#181417]/80 border border-[#D6B77C]/20 p-5 rounded-2xl">
                <div className="flex items-center gap-2.5 mb-2 text-[#D6B77C] font-medium text-xs uppercase tracking-[0.16em]">
                  <Scissors className="w-4 h-4 text-[#D6B77C]" />
                  <span>Toronto Contemporary</span>
                </div>
                <p className="text-xs text-[#D8C2A3] font-light leading-relaxed">
                  Modern Canadian cosmopolitan tailoring, structured silhouettes, and world-class garment finishing.
                </p>
              </div>

              <div className="bg-[#181417]/80 border border-[#D6B77C]/20 p-5 rounded-2xl">
                <div className="flex items-center gap-2.5 mb-2 text-[#D6B77C] font-medium text-xs uppercase tracking-[0.16em]">
                  <Heart className="w-4 h-4 text-[#D6B77C]" />
                  <span>Form Inclusivity</span>
                </div>
                <p className="text-xs text-[#D8C2A3] font-light leading-relaxed">
                  Engineered to celebrate every curve, proportion, and size with confidence, dignity, and regal poise.
                </p>
              </div>

              <div className="bg-[#181417]/80 border border-[#D6B77C]/20 p-5 rounded-2xl">
                <div className="flex items-center gap-2.5 mb-2 text-[#D6B77C] font-medium text-xs uppercase tracking-[0.16em]">
                  <Sparkles className="w-4 h-4 text-[#D6B77C]" />
                  <span>Individual Expression</span>
                </div>
                <p className="text-xs text-[#D8C2A3] font-light leading-relaxed">
                  Bespoke custom outfits crafted for milestones, weddings, red carpets, and daily statement looks.
                </p>
              </div>

            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="about-explore-collection-btn"
                onClick={() => navigateTo('shop')}
                className="bg-[#D6B77C] hover:bg-[#C8A462] text-[#181417] text-xs uppercase tracking-[0.22em] font-bold px-8 py-4 rounded-full transition-colors cursor-pointer shadow-lg"
              >
                EXPLORE THE COLLECTION
              </button>

              <button
                id="about-book-consultation-btn"
                onClick={() => openTailoringModal()}
                className="bg-transparent hover:bg-[#4B164C]/50 text-[#F5EFE5] border border-[#D6B77C]/40 hover:border-[#D6B77C] text-xs uppercase tracking-[0.22em] font-medium px-7 py-4 rounded-full transition-colors cursor-pointer"
              >
                REQUEST A CUSTOM DESIGN
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
