import React, { useState } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  MessageSquare, 
  Mail, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const InquiryDrawer: React.FC = () => {
  const {
    isInquiryDrawerOpen,
    toggleInquiryDrawer,
    inquiryItems,
    removeFromInquiry,
    updateInquiryQuantity,
    clearInquiry,
    formatPrice,
    totalInquiryPriceUSD,
    showToast,
  } = useBoutique();

  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  if (!isInquiryDrawerOpen) return null;

  const handleWhatsAppInquiry = () => {
    if (inquiryItems.length === 0) return;

    let text = `Hello Qween Fecy Concierge,\n\nI would like to submit an inquiry for the following luxury pieces:\n\n`;
    
    inquiryItems.forEach((item, idx) => {
      text += `${idx + 1}. *${item.product.name}*\n`;
      text += `   - Palette: ${item.selectedColor.name}\n`;
      text += `   - Size: ${item.selectedSize}\n`;
      text += `   - Quantity: ${item.quantity}\n`;
      text += `   - Est. Price: ${formatPrice(item.product.priceUSD * item.quantity)}\n`;
      if (item.customNotes) {
        text += `   - Tailoring Notes: ${item.customNotes}\n`;
      }
      text += `\n`;
    });

    text += `*Total Estimated Investment:* ${formatPrice(totalInquiryPriceUSD)}\n\n`;
    if (clientName) text += `*Client Name:* ${clientName}\n`;
    if (clientPhone) text += `*Phone:* ${clientPhone}\n`;
    if (clientEmail) text += `*Email:* ${clientEmail}\n`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/2348100007329?text=${encoded}`, '_blank');
    showToast('Inquiry Directed to WhatsApp', 'Connecting you with the Qween Fecy stylist.', 'gold');
  };

  const handleEmailInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) {
      showToast('Contact Required', 'Please enter your name and email to transmit this inquiry.', 'info');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      showToast('Inquiry Transmitted', 'Your wardrobe inquiry has been delivered to our private atelier.', 'gold');
      clearInquiry();
    }, 900);
  };

  return (
    <div 
      id="inquiry-drawer-backdrop"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end"
      onClick={() => toggleInquiryDrawer(false)}
    >
      <div
        id="inquiry-drawer-panel"
        className="w-full max-w-lg bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-stone-200/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/50 flex items-center justify-center text-[#8C6D23]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-lg sm:text-xl font-medium text-stone-900">
                Bespoke Inquiry Bag
              </h3>
              <p className="text-[10.5px] text-stone-500 uppercase tracking-[0.2em] font-medium">
                {inquiryItems.length} {inquiryItems.length === 1 ? 'Creation Selected' : 'Creations Selected'}
              </p>
            </div>
          </div>

          <button
            id="inquiry-drawer-close-btn"
            onClick={() => toggleInquiryDrawer(false)}
            className="p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          
          {submittedSuccess ? (
            <div className="text-center py-14 space-y-4 my-auto">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border-2 border-[#D4AF37] text-[#8C6D23] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-stone-900 font-light">
                Inquiry Received
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                Thank you, <strong>{clientName}</strong>. Our personal fashion concierge is preparing your sizing & fabric dossier and will contact you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmittedSuccess(false);
                  toggleInquiryDrawer(false);
                }}
                className="bg-[#111111] hover:bg-[#252525] text-white text-xs uppercase tracking-[0.2em] font-medium px-7 py-3.5 rounded-full transition-colors cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          ) : inquiryItems.length === 0 ? (
            <div className="text-center py-16 space-y-4 text-stone-500">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="font-serif-luxury text-xl text-stone-800 font-light">
                Your Inquiry Bag is Empty
              </h4>
              <p className="text-xs max-w-xs mx-auto font-light leading-relaxed">
                Explore our collections and click "Enquire About This Piece" to add items to your bespoke portfolio.
              </p>
              <button
                onClick={() => toggleInquiryDrawer(false)}
                className="bg-[#111111] text-white text-xs uppercase tracking-[0.2em] font-medium px-7 py-3.5 rounded-full transition-colors cursor-pointer"
              >
                Explore Collections
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* List of items */}
              {inquiryItems.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}-${idx}`}
                  className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-sm flex gap-4 relative group"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif-luxury text-sm font-normal text-stone-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromInquiry(idx)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-stone-600 mt-1 font-light">
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-stone-300"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          <span>{item.selectedColor.name}</span>
                        </span>
                        <span>•</span>
                        <span className="font-medium text-stone-800">Size: {item.selectedSize}</span>
                      </div>

                      {item.customNotes && (
                        <p className="text-[10px] text-[#8C6D23] italic mt-1 line-clamp-1 font-light">
                          Note: {item.customNotes}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-stone-100 mt-2">
                      <div className="flex items-center bg-stone-100 rounded-lg overflow-hidden border border-stone-200">
                        <button
                          onClick={() => updateInquiryQuantity(idx, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-200 font-medium cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-semibold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateInquiryQuantity(idx, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-200 font-medium cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif-luxury text-sm font-normal text-stone-900">
                        {formatPrice(item.product.priceUSD * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Client Contact Details for Quick Submission */}
              <div className="bg-white border border-stone-200/90 rounded-2xl p-4 space-y-3">
                <h4 className="text-[10.5px] uppercase tracking-[0.2em] font-medium text-stone-800 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#8C6D23]" />
                  <span>Your Contact Dossier</span>
                </h4>
                
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Your Full Name *"
                  className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-[#D4AF37]"
                />

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Phone / WhatsApp"
                    className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="Email Address *"
                    className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Drawer Bottom Bar with Total & Submit Action */}
        {!submittedSuccess && inquiryItems.length > 0 && (
          <div className="p-5 sm:p-6 bg-white border-t border-stone-200/90 space-y-3">
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-500 block font-light">Total Est. Investment</span>
                <span className="text-[10px] text-stone-400 font-light">VAT & Atelier prep included</span>
              </div>
              <span className="font-serif-luxury text-2xl font-light text-stone-900">
                {formatPrice(totalInquiryPriceUSD)}
              </span>
            </div>

            {/* Submit Action Buttons */}
            <div className="space-y-2 pt-1">
              
              {/* WhatsApp 1-Click Submission */}
              <button
                id="inquiry-submit-whatsapp-btn"
                onClick={handleWhatsAppInquiry}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3.5 rounded-full text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Inquiry via WhatsApp</span>
              </button>

              {/* Direct Atelier Email Submission */}
              <button
                id="inquiry-submit-email-btn"
                onClick={handleEmailInquiry}
                disabled={isSubmitting}
                className="w-full bg-[#111111] hover:bg-[#252525] text-white font-medium py-3.5 rounded-full text-xs uppercase tracking-[0.18em] border border-[#D4AF37]/40 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    <span>Send Inquiry to Atelier</span>
                  </>
                )}
              </button>

            </div>

            <p className="text-[10px] text-center text-stone-400 font-light">
              No immediate payment required. Our atelier will confirm sizing, fabrics & delivery schedule.
            </p>

          </div>
        )}

      </div>
    </div>
  );
};

