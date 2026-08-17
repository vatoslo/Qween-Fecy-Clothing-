import React from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { Heart, Sparkles, Check, Scissors } from 'lucide-react';

export const BodyInclusivity: React.FC = () => {
  const { openTailoringModal, openSizeGuide } = useBoutique();

  return (
    <section id="body-inclusivity-section" className="relative bg-[#29132D] text-[#F5EFE5] py-20 lg:py-32 overflow-hidden border-t border-[#D6B77C]/20">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#4B164C]/35 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] rounded-full bg-[#A4513C]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Narrative on Form Inclusivity */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4B164C]/80 border border-[#D6B77C]/30 text-[#D6B77C] text-[10px] uppercase tracking-[0.3em] font-medium">
              <Heart className="w-3 h-3 text-[#D6B77C]" />
              <span>FASHION FOR EVERY FORM</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5EFE5] leading-[1.08] tracking-tight">
              Designed to Honor <br />
              <span className="italic text-[#D6B77C]">Every Silhouette</span>.
            </h2>

            <p className="text-[#D8C2A3] text-base sm:text-lg font-light leading-relaxed">
              At Qweenfecy, luxury is not restricted by shape, size, or height. We believe true couture is sculpted around the person, celebrating individuality with confidence, poise, and dignified craftsmanship.
            </p>

            {/* Inclusivity Pillars */}
            <div className="space-y-4 pt-2">
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#181417]/70 border border-[#D6B77C]/20">
                <div className="w-8 h-8 rounded-full bg-[#4B164C] flex items-center justify-center shrink-0 text-[#D6B77C] mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5EFE5] uppercase tracking-wider">Inclusive Sizing Scale</h4>
                  <p className="text-xs text-[#D8C2A3] font-light mt-0.5">
                    Ready-to-wear pieces offered across UK 6 to UK 22+ (US 2 to US 18+) with proportioned curves and bust adjustments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#181417]/70 border border-[#D6B77C]/20">
                <div className="w-8 h-8 rounded-full bg-[#4B164C] flex items-center justify-center shrink-0 text-[#D6B77C] mt-0.5">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5EFE5] uppercase tracking-wider">100% Made-to-Measure Bespoke</h4>
                  <p className="text-xs text-[#D8C2A3] font-light mt-0.5">
                    Individual pattern drafting customized for posture, sleeve length, waist-to-hip balance, and torso proportions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#181417]/70 border border-[#D6B77C]/20">
                <div className="w-8 h-8 rounded-full bg-[#4B164C] flex items-center justify-center shrink-0 text-[#D6B77C] mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5EFE5] uppercase tracking-wider">Architectural Internal Support</h4>
                  <p className="text-xs text-[#D8C2A3] font-light mt-0.5">
                    Engineered corsetry, discreet stretch linings, and weighted hems ensuring comfort without compromise.
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                id="inclusivity-book-fitting-btn"
                onClick={() => openTailoringModal()}
                className="bg-[#D6B77C] hover:bg-[#C8A462] text-[#181417] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-lg cursor-pointer"
              >
                REQUEST CUSTOM MEASUREMENTS
              </button>
              
              <button
                id="inclusivity-size-guide-btn"
                onClick={() => openSizeGuide()}
                className="bg-transparent hover:bg-[#4B164C]/50 text-[#F5EFE5] border border-[#D6B77C]/40 px-6 py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] transition-all cursor-pointer"
              >
                VIEW FIT & SIZE GUIDE
              </button>
            </div>

          </div>

          {/* Right: Editorial Visual Grid */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D6B77C]/30 aspect-[3/4] bg-[#181417]">
                  <img
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80"
                    alt="Inclusive Couture Gown"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 rounded-xl bg-[#181417]/80 border border-[#D6B77C]/20 text-center">
                  <p className="font-serif-luxury text-xl text-[#D6B77C]">Curvature & Grace</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#D8C2A3] mt-1">Sculpted Corsetry</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 rounded-xl bg-[#181417]/80 border border-[#D6B77C]/20 text-center">
                  <p className="font-serif-luxury text-xl text-[#D6B77C]">Universal Posture</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#D8C2A3] mt-1">Sartorial Precision</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D6B77C]/30 aspect-[3/4] bg-[#181417]">
                  <img
                    src="https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&w=800&q=80"
                    alt="Inclusive Tailored Silhouette"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
