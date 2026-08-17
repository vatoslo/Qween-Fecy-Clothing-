import React, { useState, useEffect } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { SAMPLE_PRODUCTS } from '../data/products';
import { ProductColor } from '../types';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  MessageSquare, 
  Scissors, 
  Check, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  ChevronRight,
  Ruler,
  PhoneCall
} from 'lucide-react';
import { QWEEN_FECY_CONFIG } from '../config/concierge';

export const ProductDetailModal: React.FC = () => {
  const { 
    selectedProduct, 
    closeProductDetail, 
    formatPrice, 
    addToInquiry, 
    isWishlisted, 
    toggleWishlist,
    openTailoringModal,
    openSizeGuide,
    openProductDetail,
    openConcierge
  } = useBoutique();

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [customInquiryNote, setCustomInquiryNote] = useState<string>('');
  const [activeAccordion, setActiveAccordion] = useState<'details' | 'fabric' | 'shipping'>('details');

  useEffect(() => {
    if (selectedProduct) {
      setActiveImageIndex(0);
      setSelectedColor(selectedProduct.colors[0] || null);
      setSelectedSize(selectedProduct.sizes[0] || '');
      setQuantity(1);
      setCustomInquiryNote('');
    }
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const wishlisted = isWishlisted(selectedProduct.id);

  // Related / Complementary Products
  const relatedProducts = SAMPLE_PRODUCTS.filter(
    (p) => p.id !== selectedProduct.id && (p.category === selectedProduct.category || p.gender === selectedProduct.gender)
  ).slice(0, 3);

  const handleAddToInquiry = () => {
    if (!selectedColor || !selectedSize) return;
    addToInquiry(
      selectedProduct,
      selectedColor,
      selectedSize,
      quantity,
      customInquiryNote.trim() ? customInquiryNote : undefined
    );
    closeProductDetail();
  };

  return (
    <div 
      id="product-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
      onClick={closeProductDetail}
    >
      <div 
        id="product-detail-modal-card"
        className="bg-[#FAF8F5] border border-[#D4AF37]/50 rounded-3xl w-full max-w-5xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] text-stone-900 overflow-hidden flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Floating Close & Wishlist Bar */}
        <div className="p-4 sm:p-5 bg-white border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-medium">
            <span>Qween Fecy Atelier</span>
            <span>•</span>
            <span className="text-[#8C6D23] font-semibold">{selectedProduct.category.replace('-', ' ')}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="detail-wishlist-toggle"
              onClick={() => toggleWishlist(selectedProduct.id)}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
              title="Save Piece"
            >
              <Heart className={`w-5 h-5 ${wishlisted ? 'fill-[#A7831C] text-[#A7831C]' : ''}`} />
            </button>
            <button
              id="detail-modal-close-btn"
              onClick={closeProductDetail}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Main Image Frame */}
              <div className="relative aspect-[3/4] bg-stone-900 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={selectedProduct.images[activeImageIndex] || selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {selectedProduct.tag && (
                  <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-sm text-[#F7F1DF] text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-md border border-[#D4AF37]/30">
                    {selectedProduct.tag}
                  </div>
                )}
              </div>

              {/* Thumbnails Row */}
              {selectedProduct.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {selectedProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      id={`thumb-img-${idx}`}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                        activeImageIndex === idx
                          ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30 scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}

              {/* Bespoke Fitting Banner */}
              <div className="bg-white border border-[#D4AF37]/40 rounded-xl p-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#D4AF37] flex items-center justify-center text-[#8C6D23]">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-stone-900">Custom Made-to-Measure</h4>
                    <p className="text-xs text-stone-500">Need specific adjustments or family insignia?</p>
                  </div>
                </div>
                <button
                  id="product-book-tailoring-btn"
                  onClick={() => {
                    closeProductDetail();
                    openTailoringModal(selectedProduct.name);
                  }}
                  className="text-xs bg-[#111111] hover:bg-[#252525] text-white font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Consult Tailor
                </button>
              </div>

            </div>

            {/* Right Column: Product Specifications & Inquiry Actions */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
                    {selectedProduct.gender === 'women' ? "Women's Haute Creation" : selectedProduct.gender === 'men' ? "Men's Sartorial Line" : "Exclusive Unisex"}
                  </span>
                </div>
                <h1 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-light text-[#111111] leading-tight">
                  {selectedProduct.name}
                </h1>
                {selectedProduct.subtitle && (
                  <p className="text-stone-500 text-xs sm:text-sm mt-1 font-light italic">
                    {selectedProduct.subtitle}
                  </p>
                )}

                {/* Price Display */}
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#111111]">
                    {formatPrice(selectedProduct.priceUSD)}
                  </span>
                  <span className="text-xs text-stone-500 uppercase tracking-wider">
                    (VAT & Atelier Prep Included)
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Color Selection */}
              <div className="space-y-2 pt-2 border-t border-stone-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-stone-800">
                    Select Palette: <span className="font-normal text-[#8C6D23]">{selectedColor?.name}</span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {selectedProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      id={`modal-color-btn-${c.name}`}
                      onClick={() => setSelectedColor(c)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all cursor-pointer ${
                        selectedColor?.name === c.name
                          ? 'border-[#D4AF37] bg-white shadow-sm ring-1 ring-[#D4AF37]'
                          : 'border-stone-200 bg-stone-50 hover:bg-white text-stone-700'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-stone-300"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-[11px] font-medium">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection & Size Guide */}
              <div className="space-y-2 pt-2 border-t border-stone-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-stone-800">
                    Select Size: <span className="font-normal text-[#8C6D23]">{selectedSize}</span>
                  </span>
                  <button
                    id="open-size-guide-modal-btn"
                    onClick={openSizeGuide}
                    className="text-[11px] text-[#8C6D23] hover:text-[#111111] flex items-center gap-1 font-semibold underline cursor-pointer"
                  >
                    <Ruler className="w-3 h-3" />
                    <span>View Size Guide</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((s) => (
                    <button
                      key={s}
                      id={`modal-size-btn-${s}`}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        selectedSize === s
                          ? 'bg-[#111111] text-white shadow-md'
                          : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                  Quantity:
                </span>
                <div className="flex items-center bg-white border border-stone-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 transition-colors font-bold text-sm cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-xs font-bold text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 transition-colors font-bold text-sm cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Custom Inscription / Tailoring Note */}
              <div className="space-y-1 pt-2">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-600">
                  Optional Fitting Notes / Special Requests:
                </label>
                <input
                  type="text"
                  value={customInquiryNote}
                  onChange={(e) => setCustomInquiryNote(e.target.value)}
                  placeholder="e.g. Please hem for 3-inch heels, or tailor sleeve length..."
                  className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Action Buttons as requested: "Enquire About This Piece" & "Contact Boutique" */}
              <div className="space-y-3 pt-2">
                
                {/* Primary Requested CTA */}
                <button
                  id="enquire-about-piece-btn"
                  onClick={handleAddToInquiry}
                  className="w-full bg-[#111111] hover:bg-[#252525] text-white border border-[#D4AF37]/50 hover:border-[#D4AF37] py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                  <span>Enquire About This Piece</span>
                </button>

                {/* Secondary Action: Contact Boutique */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    id="detail-whatsapp-btn"
                    href={`https://wa.me/2348100007329?text=Hello%20Qween%20Fecy,%20I%20am%20enquiring%20about%20${encodeURIComponent(selectedProduct.name)}%20(${selectedProduct.id})`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Stylist</span>
                  </a>

                  <a
                    id="detail-call-btn"
                    href={`tel:${QWEEN_FECY_CONFIG.boutique.phones.primary}`}
                    className="w-full bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#8C6D23]" />
                    <span>Contact Boutique</span>
                  </a>
                </div>

              </div>

              {/* Accordion Tabs for Craftsmanship, Fabric & Care, Delivery */}
              <div className="pt-4 border-t border-stone-200 space-y-2">
                <div className="border border-stone-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 'details' ? ('' as any) : 'details')}
                    className="w-full p-3.5 text-left flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-800 hover:bg-stone-50"
                  >
                    <span>Garment Details & Construction</span>
                    <span>{activeAccordion === 'details' ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === 'details' && (
                    <div className="p-4 border-t border-stone-100 text-xs text-stone-600 space-y-1.5 bg-[#FAF8F5]">
                      {selectedProduct.details.map((d, idx) => (
                        <p key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#8C6D23] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border border-stone-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 'fabric' ? ('' as any) : 'fabric')}
                    className="w-full p-3.5 text-left flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-800 hover:bg-stone-50"
                  >
                    <span>Fabric Composition & Care</span>
                    <span>{activeAccordion === 'fabric' ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === 'fabric' && (
                    <div className="p-4 border-t border-stone-100 text-xs text-stone-600 space-y-1.5 bg-[#FAF8F5]">
                      {selectedProduct.fabricCare.map((f, idx) => (
                        <p key={idx} className="flex items-start gap-2">
                          <span className="text-[#8C6D23]">•</span>
                          <span>{f}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Related / Curated Complementary Creations */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-stone-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C6D23] font-semibold block">
                    Curated Ensemble
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-light text-[#111111]">
                    You May Also Admire
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <div 
                    key={rel.id} 
                    onClick={() => openProductDetail(rel)}
                    className="bg-white border border-stone-200 rounded-xl p-3 hover:border-[#D4AF37] transition-all cursor-pointer flex items-center gap-3 group"
                  >
                    <img 
                      src={rel.images[0]} 
                      alt={rel.name} 
                      className="w-16 h-20 rounded-lg object-cover group-hover:scale-105 transition-transform" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="overflow-hidden">
                      <h4 className="text-xs font-semibold text-stone-900 group-hover:text-[#8C6D23] truncate">
                        {rel.name}
                      </h4>
                      <p className="text-[10px] text-stone-500">{rel.category.replace('-', ' ')}</p>
                      <p className="font-serif-luxury text-xs font-bold text-stone-900 mt-1">
                        {formatPrice(rel.priceUSD)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
