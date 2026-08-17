import React from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { QWEEN_FECY_CONFIG } from '../config/concierge';
import { Mic, Sparkles, PhoneCall, Volume2 } from 'lucide-react';

export const VoiceConciergeSection: React.FC = () => {
  const { openConcierge } = useBoutique();

  return (
    <section id="voice-concierge-section" className="relative py-20 lg:py-28 bg-[#181417] text-[#F5EFE5] overflow-hidden border-t border-[#D6B77C]/25">
      
      {/* Subtle Warm Amber / Plum Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#4B164C]/30 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#29132D]/90 border border-[#D6B77C]/35 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Visual AI Concierge Acoustic Orb */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
              
              {/* Interactive Orb Frame */}
              <div 
                onClick={() => openConcierge()}
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#181417] border border-[#D6B77C]/60 flex items-center justify-center cursor-pointer group shadow-[0_0_40px_rgba(214,183,124,0.18)] hover:shadow-[0_0_60px_rgba(214,183,124,0.35)] transition-all duration-500"
              >
                {/* Minimalist Orbit Rings */}
                <div className="absolute inset-0 rounded-full border border-[#D6B77C]/25 pointer-events-none"></div>
                <div className="absolute -inset-3 rounded-full border border-[#D6B77C]/15 pointer-events-none"></div>

                {/* Center Mic Icon & Audio Bars */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-13 h-13 rounded-full bg-[#D6B77C] text-[#181417] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <Mic className="w-6 h-6" />
                  </div>
                  
                  {/* Acoustic Waveform bars */}
                  <div className="flex items-center gap-1 h-5">
                    <span className="w-0.5 h-3 bg-[#D6B77C] rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                    <span className="w-0.5 h-5 bg-[#D6B77C] rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                    <span className="w-0.5 h-3.5 bg-[#D6B77C] rounded-full animate-pulse [animation-delay:-0.4s]"></span>
                    <span className="w-0.5 h-4.5 bg-[#D6B77C] rounded-full animate-pulse [animation-delay:-0.2s]"></span>
                    <span className="w-0.5 h-2.5 bg-[#D6B77C] rounded-full animate-pulse [animation-delay:-0.35s]"></span>
                  </div>
                </div>

                {/* Status Pill Badge */}
                <div className="absolute -bottom-3 bg-[#181417] text-[#D6B77C] text-[9.5px] font-semibold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full border border-[#D6B77C]/50 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Voice Concierge Live</span>
                </div>
              </div>

              <p className="text-[11px] text-[#D8C2A3] mt-7 tracking-[0.2em] uppercase font-light">
                Tap orb to begin instant voice styling
              </p>
            </div>

            {/* Right Column: Copy and CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B164C]/70 border border-[#D6B77C]/30 text-[10px] uppercase tracking-[0.3em] text-[#D6B77C] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B77C]" />
                <span>AI VOICE & HAUTE STYLING ADVISORY</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5EFE5] leading-tight">
                Meet Your Qween Fecy Concierge
              </h2>

              <p className="text-[#D8C2A3] text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Need guidance selecting an African-inspired gala piece, matching Aso-Ebi textiles, or scheduling a Toronto or Lagos bespoke fitting? Speak directly with our intelligent voice concierge.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                
                <button
                  id="talk-to-qween-fecy-btn"
                  onClick={() => openConcierge()}
                  className="w-full sm:w-auto bg-[#D6B77C] hover:bg-[#C8A462] text-[#181417] font-bold text-xs uppercase tracking-[0.22em] px-8 py-4 rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(214,183,124,0.25)] flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <Mic className="w-4 h-4 text-[#181417] group-hover:scale-105 transition-transform" />
                  <span>Talk to Qween Fecy</span>
                </button>

                <a
                  id="voice-call-direct-btn"
                  href={`tel:${QWEEN_FECY_CONFIG.concierge.conciergePhoneNumber}`}
                  className="w-full sm:w-auto bg-transparent hover:bg-[#4B164C]/50 text-[#F5EFE5] border border-[#D6B77C]/40 hover:border-[#D6B77C] px-7 py-4 rounded-full text-xs font-medium uppercase tracking-[0.22em] transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#D6B77C]" />
                  <span>Call Boutique Directly</span>
                </a>

              </div>

              {/* Sample Prompts Preview */}
              <div className="pt-5 border-t border-[#D6B77C]/20 text-left">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#D8C2A3] mb-2.5 font-medium">
                  Try asking the concierge:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    '“What should I wear to a Toronto wedding?”',
                    '“Tell me about The Amara Evening Gown corsetry”',
                    '“How do I order a custom Swiss Damask Agbada?”',
                    '“Can I book a fitting in Lagos or virtually?”'
                  ].map((sample, idx) => (
                    <button
                      key={idx}
                      onClick={() => openConcierge(sample.replace(/^[“"]|[”"]$/g, ''))}
                      className="text-xs bg-[#181417] hover:bg-[#4B164C]/60 text-[#D8C2A3] hover:text-[#F5EFE5] border border-[#D6B77C]/25 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer text-left font-light"
                    >
                      {sample}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
