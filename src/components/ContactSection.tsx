import React, { useState } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { QWEEN_FECY_CONFIG } from '../config/concierge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  Send, 
  Scissors, 
  PhoneCall, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { openTailoringModal, showToast } = useBoutique();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Bespoke Couture Commission',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Missing Fields', 'Please fill in your name, email and message.', 'info');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      showToast(
        'Inquiry Transmitted',
        'Thank you for contacting Qween Fecy. Our atelier concierge will reply promptly.',
        'gold'
      );
    }, 800);
  };

  return (
    <section id="contact-section" className="bg-[#FAF8F5] py-20 lg:py-32 border-t border-[#D6B77C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#4B164C]/10 border border-[#D6B77C]/30 px-3.5 py-1 rounded-full text-[10.5px] uppercase tracking-[0.32em] text-[#4B164C] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#A4513C]" />
            <span>TORONTO & LAGOS ATELIERS</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#181417]">
            Connect With <span className="italic text-[#A4513C]">Qween Fecy</span>
          </h1>

          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            We invite you to connect for custom couture fittings, bridal commissions, red-carpet runway styling, and international delivery inquiries.
          </p>
        </div>

        {/* 3 Quick Action Buttons Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          
          {/* Action 1: Call Qween Fecy */}
          <a
            id="call-qween-fecy-action-btn"
            href={`tel:${QWEEN_FECY_CONFIG.boutique.phones.primary}`}
            className="bg-[#29132D] hover:bg-[#4B164C] text-[#F5EFE5] border border-[#D6B77C]/35 p-6 sm:p-7 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-sm group"
          >
            <div className="w-12 h-12 rounded-full bg-[#D6B77C] text-[#181417] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#D6B77C] font-medium block">
                Direct Line
              </span>
              <h3 className="font-serif-luxury text-base sm:text-lg font-normal">
                Call the Atelier
              </h3>
              <p className="text-xs text-[#D8C2A3] mt-0.5 font-light">{QWEEN_FECY_CONFIG.boutique.phones.primary}</p>
            </div>
          </a>

          {/* Action 2: Send an Inquiry */}
          <a
            id="send-inquiry-action-btn"
            href="#contact-form-card"
            className="bg-white hover:bg-stone-50 text-stone-900 border border-stone-200 p-6 sm:p-7 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-sm group"
          >
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D6B77C]/50 text-[#4B164C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#A4513C] font-semibold block">
                Concierge Inbox
              </span>
              <h3 className="font-serif-luxury text-base sm:text-lg font-normal">
                Send an Inquiry
              </h3>
              <p className="text-xs text-stone-500 mt-0.5 font-light">{QWEEN_FECY_CONFIG.boutique.emails.general}</p>
            </div>
          </a>

          {/* Action 3: Book a Consultation */}
          <button
            id="book-consultation-action-btn"
            onClick={() => openTailoringModal()}
            className="bg-[#FAF8F5] hover:bg-white text-stone-900 border border-[#D6B77C]/50 p-6 sm:p-7 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-sm group cursor-pointer text-left"
          >
            <div className="w-12 h-12 rounded-full bg-[#4B164C]/10 border border-[#D6B77C]/60 text-[#4B164C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#A4513C] font-semibold block">
                Bespoke Fitting
              </span>
              <h3 className="font-serif-luxury text-base sm:text-lg font-normal">
                Book Consultation
              </h3>
              <p className="text-xs text-stone-500 mt-0.5 font-light">Toronto, Lagos & Virtual</p>
            </div>
          </button>

        </div>

        {/* Main Grid: Boutique Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Boutique Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Studios in Toronto & Lagos */}
            <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#D6B77C]/35 flex items-center justify-center text-[#4B164C]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9.5px] uppercase tracking-[0.2em] text-stone-400 font-medium block">
                    Locations
                  </span>
                  <h3 className="font-serif-luxury text-base font-medium text-stone-900">
                    Toronto & Lagos Presence
                  </h3>
                </div>
              </div>
              <div className="text-xs text-stone-600 space-y-2 pl-12 font-light">
                <div>
                  <p className="font-semibold text-stone-900">Toronto Design Studio</p>
                  <p>Ontario, Canada (Private by Appointment)</p>
                </div>
                <div className="pt-2 border-t border-stone-100">
                  <p className="font-semibold text-stone-900">Lagos Artisan Atelier</p>
                  <p>Lagos, Nigeria (Bespoke Craft & Fitting Salon)</p>
                </div>
              </div>
            </div>

            {/* 2. Direct Lines */}
            <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#D6B77C]/35 flex items-center justify-center text-[#4B164C]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9.5px] uppercase tracking-[0.2em] text-stone-400 font-medium block">
                    Telephone & WhatsApp
                  </span>
                  <h3 className="font-serif-luxury text-base font-medium text-stone-900">
                    Direct Client Hotlines
                  </h3>
                </div>
              </div>
              <div className="text-xs text-stone-600 space-y-2 pl-12 font-light">
                <div>
                  <span className="text-stone-400 block text-[10px]">Canada & International:</span>
                  <a href={`tel:${QWEEN_FECY_CONFIG.boutique.phones.primary}`} className="text-stone-900 font-medium hover:text-[#4B164C]">
                    +1 (647) 895-7474
                  </a>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Nigeria Atelier Line:</span>
                  <a href={`tel:${QWEEN_FECY_CONFIG.boutique.phones.lagosAtelier}`} className="text-stone-900 font-medium hover:text-[#4B164C]">
                    +234 810 000 0000
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Email Inquiries */}
            <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#D6B77C]/35 flex items-center justify-center text-[#4B164C]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9.5px] uppercase tracking-[0.2em] text-stone-400 font-medium block">
                    Email Correspondence
                  </span>
                  <h3 className="font-serif-luxury text-base font-medium text-stone-900">
                    Atelier & Inquiries
                  </h3>
                </div>
              </div>
              <div className="text-xs text-stone-600 space-y-1 pl-12 font-light">
                <p>General: <a href="mailto:concierge@qweenfecy.com" className="font-medium text-stone-900 hover:underline">concierge@qweenfecy.com</a></p>
                <p>Bespoke: <a href="mailto:custom@qweenfecy.com" className="font-medium text-stone-900 hover:underline">custom@qweenfecy.com</a></p>
              </div>
            </div>

            {/* 4. Global Operations */}
            <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#D6B77C]/35 flex items-center justify-center text-[#4B164C]">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9.5px] uppercase tracking-[0.2em] text-stone-400 font-medium block">
                    International Service
                  </span>
                  <h3 className="font-serif-luxury text-base font-medium text-stone-900">
                    Worldwide White-Glove Dispatch
                  </h3>
                </div>
              </div>
              <div className="text-xs text-stone-600 space-y-1.5 pl-12 font-light">
                <p>Courier delivery across Canada, United States, United Kingdom, Europe, and Nigeria with tracked express shipping.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Send an Inquiry Form */}
          <div id="contact-form-card" className="lg:col-span-7 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col justify-between">
            
            {isSent ? (
              <div className="text-center py-14 space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border-2 border-[#D6B77C] text-[#4B164C] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl text-stone-900 font-light">
                  Message Sent Successfully
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto font-light">
                  Thank you for reaching out to Qween Fecy. Our team will review your inquiry and connect with you shortly.
                </p>
                <button
                  id="contact-send-another-btn"
                  onClick={() => {
                    setIsSent(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'Bespoke Couture Commission', message: '' });
                  }}
                  className="bg-[#181417] hover:bg-[#29132D] text-white text-xs uppercase tracking-[0.2em] font-bold px-7 py-3.5 rounded-full transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-stone-900 font-light">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 font-light">
                    Questions about a garment, custom sizing, bridal parties, or private fittings?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-stone-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Amina Alabi"
                      className="w-full bg-[#FAF8F5] border border-stone-200 focus:border-[#D6B77C] rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-stone-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className="w-full bg-[#FAF8F5] border border-stone-200 focus:border-[#D6B77C] rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-stone-700">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      id="contact-phone-input"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (647) 000-0000"
                      className="w-full bg-[#FAF8F5] border border-stone-200 focus:border-[#D6B77C] rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-stone-700">
                      Inquiry Topic
                    </label>
                    <select
                      id="contact-subject-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-stone-200 focus:border-[#D6B77C] rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none cursor-pointer"
                    >
                      <option value="Bespoke Couture Commission">Bespoke Couture Commission</option>
                      <option value="Bridal & Aso-Ebi Entourage">Bridal & Aso-Ebi Entourage</option>
                      <option value="Men's Sartorial / Agbada Tailoring">Men's Sartorial / Agbada Tailoring</option>
                      <option value="Runway Piece Acquisition">Runway Piece Acquisition</option>
                      <option value="Private Salon Fitting (Toronto or Lagos)">Private Salon Fitting (Toronto or Lagos)</option>
                      <option value="International Shipping & Sizing">International Shipping & Sizing</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-stone-700">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your desired silhouette, event date, measurements, or styling questions..."
                    className="w-full bg-[#FAF8F5] border border-stone-200 focus:border-[#D6B77C] rounded-xl p-4 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none font-light"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-inquiry-btn"
                  disabled={isSubmitting}
                  className="w-full bg-[#181417] hover:bg-[#29132D] text-white border border-[#D6B77C]/50 hover:border-[#D6B77C] py-4 rounded-full text-xs font-bold uppercase tracking-[0.22em] shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#D6B77C]" />
                      <span>Transmit Inquiry</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
