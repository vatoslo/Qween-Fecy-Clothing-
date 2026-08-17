import React, { useState } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { QWEEN_FECY_CONFIG } from '../config/concierge';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Globe, 
  CheckCircle2
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, openTailoringModal, openSizeGuide, showToast } = useBoutique();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    showToast(
      'Welcome to the Circle',
      'You are now subscribed to Qween Fecy runway previews, private trunk shows, and editorial releases.',
      'gold'
    );
  };

  return (
    <footer id="main-footer" className="bg-[#181417] text-[#D8C2A3] border-t border-[#D6B77C]/20 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Section */}
        <div className="bg-[#29132D] border border-[#D6B77C]/30 rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4B164C]/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#D6B77C] font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE QWEEN FECY INNER CIRCLE</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5EFE5] font-light">
                Private Trunk Shows & Runway Previews
              </h3>
              <p className="text-[#D8C2A3] text-xs sm:text-sm font-light leading-relaxed">
                Be the first to receive invitations to Toronto Fashion Week presentations, Lagos private salons, and limited bespoke capsule releases.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="bg-[#181417] border border-[#D6B77C]/40 rounded-2xl p-4 flex items-center gap-3 text-[#F5EFE5]">
                  <CheckCircle2 className="w-5 h-5 text-[#D6B77C] shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold">Welcome to the Qween Fecy Private Circle</h4>
                    <p className="text-[11px] text-[#D8C2A3]">Your invitation to upcoming private collections is on its way.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your VIP email address..."
                    className="flex-1 bg-[#181417] border border-[#D6B77C]/30 focus:border-[#D6B77C] rounded-full px-5 py-3.5 text-xs sm:text-sm text-[#F5EFE5] placeholder-[#D8C2A3]/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    id="newsletter-subscribe-btn"
                    className="bg-[#D6B77C] hover:bg-[#C8A462] text-[#181417] font-bold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-sm"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#D6B77C]/20">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-brand-display text-2xl font-bold tracking-[0.2em] text-[#F5EFE5]">
                QWEEN FECY
              </span>
              <span className="text-[#D6B77C] text-lg">✦</span>
            </div>
            
            <p className="font-serif-luxury text-lg italic text-[#D6B77C] font-light">
              “Where African Heritage Meets Contemporary Fashion.”
            </p>

            <p className="text-xs text-[#D8C2A3] leading-relaxed font-light max-w-sm">
              An African-Canadian contemporary luxury fashion house founded by Omobolanle Adesiyan. Bridging Toronto and Lagos with bespoke tailoring, sovereign African textiles, and body-inclusive couture.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-instagram-link"
                href={QWEEN_FECY_CONFIG.boutique.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#29132D] border border-[#D6B77C]/30 hover:border-[#D6B77C] hover:bg-[#D6B77C] hover:text-[#181417] text-[#D8C2A3] flex items-center justify-center transition-colors"
                aria-label="Follow Qween Fecy on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-facebook-link"
                href={QWEEN_FECY_CONFIG.boutique.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#29132D] border border-[#D6B77C]/30 hover:border-[#D6B77C] hover:bg-[#D6B77C] hover:text-[#181417] text-[#D8C2A3] flex items-center justify-center transition-colors"
                aria-label="Follow Qween Fecy on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-website-link"
                href="https://qweenfecy.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#29132D] border border-[#D6B77C]/30 hover:border-[#D6B77C] hover:bg-[#D6B77C] hover:text-[#181417] text-[#D8C2A3] flex items-center justify-center transition-colors"
                aria-label="Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3.5">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5EFE5] border-b border-[#D6B77C]/20 pb-2">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#D8C2A3] font-light">
              <li>
                <button onClick={() => navigateTo('shop', 'women')} className="hover:text-[#F5EFE5] transition-colors cursor-pointer">
                  Women's Haute Couture
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'men')} className="hover:text-[#F5EFE5] transition-colors cursor-pointer">
                  Men's Sartorial & Agbada
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'kids')} className="hover:text-[#F5EFE5] transition-colors cursor-pointer">
                  Kids Royal Celebration
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'african-inspired')} className="hover:text-[#F5EFE5] transition-colors cursor-pointer">
                  African-Inspired Couture
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'runway')} className="hover:text-[#F5EFE5] transition-colors cursor-pointer">
                  Runway Archives
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('tailoring')} className="hover:text-[#F5EFE5] transition-colors cursor-pointer">
                  Custom Bespoke Design
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Services */}
          <div className="space-y-3.5">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5EFE5] border-b border-[#D6B77C]/20 pb-2">
              Atelier Services
            </h4>
            <ul className="space-y-2 text-xs text-[#D8C2A3] font-light">
              <li>
                <button onClick={openSizeGuide} className="hover:text-[#F5EFE5] transition-colors cursor-pointer text-left">
                  Fit & Sizing Guide
                </button>
              </li>
              <li>
                <button onClick={() => openTailoringModal()} className="hover:text-[#F5EFE5] transition-colors cursor-pointer text-left">
                  Book In-Person Fitting
                </button>
              </li>
              <li>
                <button onClick={() => openTailoringModal('Virtual Video Consultation')} className="hover:text-[#F5EFE5] transition-colors cursor-pointer text-left">
                  Worldwide Virtual Fitting
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-[#F5EFE5] transition-colors cursor-pointer text-left">
                  Meet Omobolanle Adesiyan
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-[#F5EFE5] transition-colors cursor-pointer text-left">
                  Concierge & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Atelier Locations */}
          <div className="space-y-3.5">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5EFE5] border-b border-[#D6B77C]/20 pb-2">
              Studio & Atelier
            </h4>
            <div className="space-y-2.5 text-xs text-[#D8C2A3] font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D6B77C] shrink-0 mt-0.5" />
                <span>Toronto Studio: Ontario, Canada</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D6B77C] shrink-0 mt-0.5" />
                <span>Lagos Atelier: Lagos, Nigeria</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D6B77C] shrink-0" />
                <a href={`tel:${QWEEN_FECY_CONFIG.boutique.phones.primary}`} className="hover:text-[#F5EFE5]">
                  +1 (647) 895-7474
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D6B77C] shrink-0" />
                <a href={`mailto:${QWEEN_FECY_CONFIG.boutique.emails.general}`} className="hover:text-[#F5EFE5]">
                  concierge@qweenfecy.com
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C2A3]/70 font-light">
          <p id="footer-copyright-text">
            © 2026 Qweenfecy Clothing / Qween Fecy. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-[#D8C2A3]/80">
            <span>Toronto × Lagos</span>
            <span>•</span>
            <span>African-Canadian Contemporary Luxury</span>
            <span>•</span>
            <span>Authenticity Guaranteed</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
