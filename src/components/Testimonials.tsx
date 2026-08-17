import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  role: string;
  garment: string;
  review: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dr. Amina Alabi',
    location: 'Toronto, Canada',
    role: 'Gala Host & Surgeon',
    garment: 'Custom Amara Gown & Aso-Oke Cape',
    review: 'Omobolanle created a custom sculptural Aso-Oke cape for our hospital foundation gala in Toronto. The poise, the internal corsetry, and the respect for our Nigerian heritage brought me to tears. I felt utterly sovereign.',
    rating: 5,
  },
  {
    name: 'Chief Babatunde Adeleke',
    location: 'Lagos & London',
    role: 'Managing Director',
    garment: '3-Piece Swiss Damask Agbada',
    review: 'The embroidery precision on my 3-piece grand Agbada is peerless. Qween Fecy balances modern lightweight drape with regal volume. The fitting in Lagos was prompt and impeccably executed.',
    rating: 5,
  },
  {
    name: 'Nneka & David Nwosu',
    location: 'New York, USA',
    role: 'Bridal Couple',
    garment: 'Bespoke Wedding & Aso-Ebi Ensembles',
    review: 'We coordinated our entire bridal party across three continents using the virtual concierge and tailored measurements. Every single dress and senator suit fit without requiring secondary alterations.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials-section" className="bg-[#FAF8F5] py-20 lg:py-28 border-t border-[#D6B77C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#4B164C]/10 border border-[#D6B77C]/30 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] text-[#4B164C] font-semibold">
            <Sparkles className="w-3 h-3 text-[#A4513C]" />
            <span>CLIENT CHRONICLES</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#181417]">
            Voices of the <span className="italic text-[#A4513C]">Qween Fecy Family</span>
          </h2>

          <p className="text-stone-600 text-sm font-light">
            Real stories from our patrons in Toronto, Lagos, London, and beyond.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200/90 rounded-2xl p-8 shadow-sm hover:border-[#D6B77C] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D6B77C] text-[#D6B77C]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#A4513C]/30" />
                </div>

                <p className="text-stone-700 text-sm font-light leading-relaxed italic">
                  “{item.review}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100">
                <h4 className="font-serif-luxury text-base text-[#181417] font-medium">
                  {item.name}
                </h4>
                <div className="flex items-center justify-between text-xs text-stone-500 mt-1 font-light">
                  <span>{item.role}</span>
                  <span className="text-[#A4513C] font-medium">{item.location}</span>
                </div>
                <div className="mt-2 text-[10.5px] uppercase tracking-wider text-[#4B164C] font-medium bg-[#FAF8F5] px-2.5 py-1 rounded inline-block">
                  {item.garment}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
