import React, { useState, useEffect } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { TailoringInquiry } from '../types';
import { QWEEN_FECY_CONFIG } from '../config/concierge';
import { 
  Scissors, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  Globe,
  MapPin,
  Calendar,
  Ruler
} from 'lucide-react';

interface CustomTailoringProps {
  isModal?: boolean;
}

export const CustomTailoring: React.FC<CustomTailoringProps> = ({ isModal = false }) => {
  const { 
    closeTailoringModal, 
    tailoringPrefillGarment, 
    showToast 
  } = useBoutique();

  const [formData, setFormData] = useState<TailoringInquiry>({
    fullName: '',
    phone: '',
    email: '',
    garmentType: tailoringPrefillGarment || 'Bespoke Evening Gown',
    occasion: 'Wedding / Reception',
    preferredColor: 'Deep Plum & Champagne Gold',
    preferredDate: '',
    measurementsKnown: 'need_consultation',
    additionalNotes: '',
    preferredContact: 'whatsapp',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (tailoringPrefillGarment) {
      setFormData((prev) => ({
        ...prev,
        garmentType: `Custom Bespoke: ${tailoringPrefillGarment}`,
      }));
    }
  }, [tailoringPrefillGarment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      showToast('Missing Details', 'Please enter your name, email, and phone number.', 'info');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast(
        'Consultation Requested',
        'Your bespoke custom design request has been received by the Qween Fecy Atelier.',
        'gold'
      );
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      garmentType: 'Bespoke Evening Gown',
      occasion: 'Wedding / Reception',
      preferredColor: 'Deep Plum & Champagne Gold',
      preferredDate: '',
      measurementsKnown: 'need_consultation',
      additionalNotes: '',
      preferredContact: 'whatsapp',
    });
  };

  const garmentOptions = [
    'Bespoke Couture Evening Gown / Red Carpet',
    'Sovereign 3-Piece Nigerian Agbada (Swiss Damask)',
    'Bridal & Aso-Ebi Beaded French Lace Ensemble',
    'Savile-Grade Bespoke Two-Piece Suit',
    'The Fecy Signature Hourglass Structured Blazer',
    'Men\'s Contemporary Senator Tunic & Trouser',
    'Kids Royal Agbada / Milestone Celebration Outfit',
    'Hand-Woven Aso-Oke Cape / Runway Archive Piece',
    'Other Custom Silhouette Creation',
  ];

  const occasionOptions = [
    'Wedding Ceremony / Reception / Aso-Ebi',
    'Black-Tie Gala / Cultural Milestone / Coronation',
    'Red Carpet / Award Gala / Premiere',
    'Toronto / Lagos Fashion Week Presentation',
    'Corporate Executive / Sovereign Summit',
    'Milestone Birthday / Anniversary Soiree',
    'Private Luxury Wardrobe Update',
  ];

  return (
    <section id="custom-tailoring-section" className={`bg-[#FAF8F5] ${isModal ? 'p-4 sm:p-8' : 'py-20 lg:py-28'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#4B164C]/10 border border-[#D6B77C]/40 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.28em] text-[#4B164C] font-semibold">
            <Scissors className="w-3.5 h-3.5 text-[#A4513C]" />
            <span>DESIGNED FOR YOU</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#181417] tracking-tight">
            Custom Tailoring & <span className="italic text-[#A4513C]">Bespoke Craft</span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Every silhouette is crafted to celebrate your personal identity and posture. Book a private consultation with Omobolanle Adesiyan and our master tailors in Toronto or Lagos, or schedule a worldwide virtual fitting.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-stone-700 pt-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200">
              <MapPin className="w-3.5 h-3.5 text-[#A4513C]" /> Toronto Studio, Canada
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200">
              <MapPin className="w-3.5 h-3.5 text-[#A4513C]" /> Lagos Atelier, Nigeria
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200">
              <Globe className="w-3.5 h-3.5 text-[#4B164C]" /> Global Virtual Fitting
            </span>
          </div>
        </div>

        {/* 3-Step Bespoke Atelier Journey */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-stone-200/90 rounded-2xl p-7 shadow-xs flex flex-col justify-between hover:border-[#D6B77C] transition-colors">
            <div>
              <span className="font-serif-luxury text-2xl font-bold text-[#A4513C] block mb-2">
                01
              </span>
              <h3 className="font-serif-luxury text-xl font-normal text-[#181417] mb-2">
                Design & Silhouette Consultation
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Connect in Toronto, Lagos, or via high-definition video. We analyze your occasion, proportions, neckline, and create custom architectural sketches.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] text-[#4B164C] font-semibold uppercase tracking-wider">
              In-Person or Virtual
            </div>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-7 shadow-xs flex flex-col justify-between hover:border-[#D6B77C] transition-colors">
            <div>
              <span className="font-serif-luxury text-2xl font-bold text-[#A4513C] block mb-2">
                02
              </span>
              <h3 className="font-serif-luxury text-xl font-normal text-[#181417] mb-2">
                Textile Curation & Pattern Drafting
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Select from our authentic vault: handwoven Nigerian Aso-Oke, Swiss Brocade damasks, French corded laces, and pure Italian wools.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] text-[#4B164C] font-semibold uppercase tracking-wider">
              Artisanal Textiles
            </div>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-7 shadow-xs flex flex-col justify-between hover:border-[#D6B77C] transition-colors">
            <div>
              <span className="font-serif-luxury text-2xl font-bold text-[#A4513C] block mb-2">
                03
              </span>
              <h3 className="font-serif-luxury text-xl font-normal text-[#181417] mb-2">
                Muslin Fitting & Final Finish
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Precision adjustments ensure a flawless contour before hand-embroidered metallic detailing, internal corsetry, and final press.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] text-[#4B164C] font-semibold uppercase tracking-wider">
              Perfect Anatomic Fit
            </div>
          </div>
        </div>

        {/* Main Consultation Form Card */}
        <div className="bg-white border border-[#D6B77C]/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl max-w-4xl mx-auto">
          
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border-2 border-[#D6B77C] text-[#4B164C] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#181417] font-light">
                Bespoke Request Received
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. A dedicated Qween Fecy stylist will review your request for <strong>{formData.garmentType}</strong> and reach out via {formData.preferredContact.toUpperCase()} within 24 hours to schedule your consultation.
              </p>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  id="consultation-new-request-btn"
                  onClick={handleReset}
                  className="bg-[#181417] hover:bg-[#29132D] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>

                <a
                  id="consultation-instant-whatsapp-btn"
                  href={`https://wa.me/16478957474?text=Hello%20Qween%20Fecy%20Atelier,%20I%20have%20submitted%20a%20custom%20design%20request%20for%20${encodeURIComponent(formData.garmentType)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Follow-up</span>
                </a>
              </div>
            </div>
          ) : (
            /* Interactive Consultation Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="border-b border-stone-200 pb-4">
                <h3 className="font-serif-luxury text-2xl text-[#181417] font-normal">
                  Private Atelier Consultation Request
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Tell us about your garment vision, preferred location, and timeline.
                </p>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-800">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="tailoring-name-input"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Folake Adeleke"
                    className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#D6B77C] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-800">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="tailoring-phone-input"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (647) 000-0000 or +234..."
                    className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#D6B77C] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-800">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="tailoring-email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@luxury.com"
                    className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#D6B77C] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Garment Details & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-800">
                    Garment Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="tailoring-garment-select"
                    value={formData.garmentType}
                    onChange={(e) => setFormData({ ...formData, garmentType: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#D6B77C] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none cursor-pointer"
                  >
                    {garmentOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-800">
                    Occasion / Event <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="tailoring-occasion-select"
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#D6B77C] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none cursor-pointer"
                  >
                    {occasionOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Colour & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-800">
                    Preferred Palette / Textile Notes
                  </label>
                  <input
                    id="tailoring-color-input"
                    type="text"
                    value={formData.preferredColor}
                    onChange={(e) => setFormData({ ...formData, preferredColor: e.target.value })}
                    placeholder="e.g. Deep Plum, Burnt Terracotta, Emerald & Gold..."
                    className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#D6B77C] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-800">
                    Target Event Date / Fitting Timeline
                  </label>
                  <input
                    id="tailoring-date-input"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#D6B77C] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-800">
                  Custom Design Vision, Measurement Notes & Preferences
                </label>
                <textarea
                  id="tailoring-notes-input"
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Share details regarding your preferred fit, neckline, train length, location (Toronto studio / Lagos atelier / virtual), or any specific reference ideas..."
                  className="w-full bg-[#FAF8F5] border border-stone-300 focus:border-[#D6B77C] rounded-xl p-3.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none"
                />
              </div>

              {/* Preferred Contact Channel */}
              <div className="flex items-center gap-6 pt-1 text-xs">
                <span className="font-bold uppercase tracking-wider text-stone-700">
                  Preferred Contact:
                </span>
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="whatsapp"
                    checked={formData.preferredContact === 'whatsapp'}
                    onChange={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                    className="accent-[#4B164C]"
                  />
                  <span>WhatsApp</span>
                </label>
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
                    className="accent-[#4B164C]"
                  />
                  <span>Direct Phone</span>
                </label>
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                    className="accent-[#4B164C]"
                  />
                  <span>Email</span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex items-center justify-between gap-4">
                {isModal && (
                  <button
                    type="button"
                    onClick={closeTailoringModal}
                    className="text-xs uppercase tracking-wider font-semibold text-stone-500 hover:text-stone-800"
                  >
                    Cancel
                  </button>
                )}
                
                <button
                  type="submit"
                  id="request-consultation-submit-btn"
                  disabled={isSubmitting}
                  className="w-full bg-[#181417] hover:bg-[#29132D] text-[#F5EFE5] border border-[#D6B77C]/60 hover:border-[#D6B77C] py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting to Atelier...</span>
                  ) : (
                    <>
                      <Scissors className="w-4 h-4 text-[#D6B77C]" />
                      <span>Request a Custom Design Consultation</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
