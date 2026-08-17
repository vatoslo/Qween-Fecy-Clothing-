import React from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { Sparkles, Scissors, Gem, Award, Users, HeartHandshake, Globe } from 'lucide-react';

export const WhyQweenFecy: React.FC = () => {
  const { openTailoringModal, openConcierge } = useBoutique();

  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-[#D6B77C]" />,
      title: 'African Craftsmanship & Heritage',
      description:
        'We honor Nigerian textiles including hand-woven Aso-Oke, Swiss Brocade damasks, and corded French lace, celebrating ancestral traditions with regal dignity.',
    },
    {
      icon: <Scissors className="w-5 h-5 text-[#D6B77C]" />,
      title: 'Contemporary Urban Precision',
      description:
        'Infusing modern North American and European tailoring into African design, producing sleek power blazers, liquid silk gowns, and structured silhouettes.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#D6B77C]" />,
      title: 'Body Inclusivity For Every Form',
      description:
        'Fashion should honor the individual. We offer ready-to-wear sizing from UK 6 to UK 22+ along with 100% bespoke made-to-measure pattern drafting.',
    },
    {
      icon: <Globe className="w-5 h-5 text-[#D6B77C]" />,
      title: 'Toronto & Lagos Dual Presence',
      description:
        'Connecting our Canadian design studio in Ontario with our artisanal Lagos atelier, delivering authentic transatlantic luxury worldwide.',
    },
    {
      icon: <Gem className="w-5 h-5 text-[#D6B77C]" />,
      title: 'Bespoke Custom Tailoring',
      description:
        'From red-carpet couture gowns to 3-piece grand Agbadas and bridal party wardrobes, every custom commission is drafted to your exact measurements.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#D6B77C]" />,
      title: 'Intelligent Fashion Concierge',
      description:
        'Experience seamless styling advice, size recommendations, and appointment scheduling via our integrated voice concierge or WhatsApp.',
    },
  ];

  return (
    <section id="why-qween-fecy-section" className="bg-[#FAF8F5] py-20 lg:py-28 border-y border-[#D6B77C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#4B164C]/10 border border-[#D6B77C]/30 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] text-[#4B164C] font-semibold">
            <Sparkles className="w-3 h-3 text-[#A4513C]" />
            <span>THE QWEEN FECY STANDARD</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#181417]">
            The Pillars of <span className="italic text-[#A4513C]">Qween Fecy</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Where African heritage meets contemporary fashion: elevating culture, individuality, and bespoke craftsmanship for those who command the room.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200/80 rounded-2xl p-8 hover:border-[#D6B77C] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#29132D] border border-[#D6B77C]/40 flex items-center justify-center mb-6 text-[#D6B77C]">
                  {pillar.icon}
                </div>
                <h3 className="font-serif-luxury text-xl font-normal text-[#181417] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#A4513C] font-medium">
                <span>Atelier Standard</span>
                <span className="text-[#D6B77C]">✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner for booking a private consultation */}
        <div className="mt-16 bg-[#29132D] text-[#F5EFE5] rounded-3xl p-8 sm:p-12 border border-[#D6B77C]/35 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light text-[#F5EFE5]">
              Ready to create your custom silhouette?
            </h3>
            <p className="text-[#D8C2A3] text-xs sm:text-sm font-light">
              Speak with Omobolanle Adesiyan and our master tailors in Toronto or Lagos.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              id="why-book-consultation-btn"
              onClick={() => openTailoringModal()}
              className="bg-[#D6B77C] hover:bg-[#C8A462] text-[#181417] font-bold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-colors cursor-pointer"
            >
              Request Consultation
            </button>
            <button
              id="why-talk-concierge-btn"
              onClick={() => openConcierge()}
              className="bg-transparent hover:bg-[#4B164C]/50 text-[#F5EFE5] border border-[#D6B77C]/40 hover:border-[#D6B77C] text-xs font-medium uppercase tracking-[0.2em] px-6 py-3.5 rounded-full transition-colors cursor-pointer"
            >
              Talk to Concierge
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
