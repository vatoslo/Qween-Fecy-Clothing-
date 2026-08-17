import React, { useState, useEffect } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { QWEEN_FECY_CONFIG } from '../config/concierge';
import { 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  Mic, 
  Globe, 
  ChevronDown,
  PhoneCall,
  Scissors
} from 'lucide-react';
import { CurrencyCode } from '../types';

export const Navbar: React.FC = () => {
  const {
    activeView,
    navigateTo,
    currency,
    setCurrency,
    inquiryItems,
    toggleInquiryDrawer,
    wishlist,
    openConcierge,
    openTailoringModal,
  } = useBoutique();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', view: 'home' },
    { id: 'shop-all', label: 'Archive', view: 'shop', category: 'all' as const },
    { id: 'women', label: 'Women', view: 'shop', category: 'women' as const },
    { id: 'men', label: 'Men', view: 'shop', category: 'men' as const },
    { id: 'kids', label: 'Kids', view: 'shop', category: 'kids' as const },
    { id: 'african', label: 'African-Inspired', view: 'shop', category: 'african-inspired' as const },
    { id: 'runway', label: 'Runway', view: 'shop', category: 'runway' as const },
    { id: 'tailoring', label: 'Custom Design', view: 'tailoring' },
    { id: 'about', label: 'About the House', view: 'about' },
    { id: 'contact', label: 'Contact', view: 'contact' },
  ];

  const currencies: CurrencyCode[] = ['CAD', 'USD', 'NGN', 'GBP', 'EUR'];

  const totalInquiryCount = inquiryItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div id="top-announcement-bar" className="bg-[#181417] text-[#D8C2A3] text-[10px] uppercase tracking-[0.28em] py-2 px-4 sm:px-8 border-b border-[#D6B77C]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D6B77C] opacity-80"></span>
            <span className="text-[#D6B77C] font-semibold tracking-[0.24em]">TORONTO × LAGOS</span>
            <span className="text-stone-600">|</span>
            <span className="text-[#D8C2A3] font-light">African Heritage Meets Contemporary Fashion</span>
          </div>

          <div className="mx-auto sm:mx-0 flex items-center gap-5 text-[10px]">
            <button 
              id="top-book-fitting-btn"
              onClick={() => openTailoringModal()}
              className="text-[#D6B77C] hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-semibold cursor-pointer tracking-[0.22em]"
            >
              <Scissors className="w-3 h-3 text-[#D6B77C]" />
              <span>Request Custom Fitting</span>
            </button>
            <span className="text-stone-600">|</span>
            <a 
              id="top-call-hotline"
              href={`tel:${QWEEN_FECY_CONFIG.concierge.conciergePhoneNumber}`}
              className="text-[#D8C2A3] hover:text-[#D6B77C] transition-colors duration-200 flex items-center gap-1.5 tracking-[0.2em]"
            >
              <PhoneCall className="w-3 h-3 text-[#D6B77C]" />
              <span className="hidden md:inline text-stone-400">Atelier:</span> {QWEEN_FECY_CONFIG.boutique.phones.primary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Architectural Navbar */}
      <header
        id="main-navbar-header"
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-[#D6B77C]/30 py-3.5'
            : 'bg-[#FAF8F5] border-b border-[#D6B77C]/20 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-[#181417] hover:text-[#4B164C] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Brand Logo & Editorial Typography */}
            <div 
              id="brand-logo-container"
              className="cursor-pointer flex flex-col items-center lg:items-start group select-none py-0.5"
              onClick={() => navigateTo('home')}
            >
              <div className="flex items-center gap-2">
                <span className="font-brand-display text-xl sm:text-2xl font-bold tracking-[0.22em] text-[#181417] uppercase group-hover:text-[#4B164C] transition-colors duration-300">
                  QWEEN FECY
                </span>
                <span className="text-[#D6B77C] text-sm font-light">✦</span>
              </div>
              <span className="text-[8.5px] uppercase tracking-[0.34em] text-[#A4513C] font-semibold -mt-0.5">
                African-Canadian Luxury
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav id="desktop-navigation-links" className="hidden lg:flex items-center space-x-5 xl:space-x-6">
              {navLinks.map((link) => {
                const isActive = 
                  (link.view === activeView && !link.category) ||
                  (activeView === 'shop' && link.category && link.category === 'all' && activeView === 'shop');
                
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => {
                      if (link.category) {
                        navigateTo(link.view, link.category);
                      } else {
                        navigateTo(link.view);
                      }
                    }}
                    className={`relative text-[11px] uppercase tracking-[0.16em] font-medium py-1.5 transition-colors duration-300 cursor-pointer ${
                      isActive 
                        ? 'text-[#181417] font-bold' 
                        : 'text-stone-600 hover:text-[#4B164C]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D6B77C] transition-all duration-300"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Actions: Currency, Concierge CTA, Wishlist & Inquiry Bag */}
            <div id="navbar-actions-container" className="flex items-center gap-2.5 sm:gap-3.5">
              
              {/* Currency Selector */}
              <div className="relative">
                <button
                  id="currency-selector-btn"
                  onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                  className="flex items-center gap-1.5 text-[11px] font-semibold text-stone-800 hover:text-stone-950 bg-stone-100 hover:bg-stone-200/80 px-2.5 py-1.5 rounded-full border border-[#D6B77C]/30 transition-all cursor-pointer"
                  aria-label="Select currency"
                >
                  <Globe className="w-3 h-3 text-[#A4513C]" />
                  <span className="tracking-wider">{currency}</span>
                  <ChevronDown className="w-3 h-3 text-stone-400" />
                </button>

                {currencyDropdownOpen && (
                  <div 
                    id="currency-dropdown-menu"
                    className="absolute right-0 mt-2 w-32 bg-[#FAF8F5] border border-[#D6B77C]/40 rounded-xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    {currencies.map((c) => (
                      <button
                        key={c}
                        id={`currency-opt-${c}`}
                        onClick={() => {
                          setCurrency(c);
                          setCurrencyDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-stone-100/80 transition-colors cursor-pointer ${
                          currency === c ? 'font-bold text-[#4B164C] bg-stone-100' : 'text-stone-700'
                        }`}
                      >
                        <span className="tracking-wider">{c}</span>
                        {currency === c && <span className="text-[#D6B77C]">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Concierge Voice CTA */}
              <button
                id="navbar-talk-to-concierge-btn"
                onClick={() => openConcierge()}
                className="hidden sm:inline-flex items-center gap-2 bg-[#181417] hover:bg-[#29132D] text-[#F5EFE5] border border-[#D6B77C]/60 hover:border-[#D6B77C] px-4 py-1.5 rounded-full text-[10.5px] font-medium tracking-[0.16em] uppercase transition-all duration-300 shadow-sm cursor-pointer group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6B77C] opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6B77C]"></span>
                </span>
                <Mic className="w-3 h-3 text-[#D6B77C] group-hover:scale-110 transition-transform" />
                <span className="font-bold">Concierge</span>
              </button>

              {/* Wishlist Button */}
              <button
                id="navbar-wishlist-btn"
                onClick={() => navigateTo('shop')}
                className="relative p-2 text-stone-700 hover:text-[#181417] hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
                title="Saved Pieces"
                aria-label="View saved pieces in catalog"
              >
                <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'fill-[#A4513C] text-[#A4513C]' : 'text-stone-700'}`} />
                {wishlist.length > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#4B164C] text-white text-[8px] font-bold rounded-full flex items-center justify-center border border-[#FAF8F5]">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Inquiry Bag Button */}
              <button
                id="navbar-inquiry-bag-btn"
                onClick={() => toggleInquiryDrawer(true)}
                className="relative flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-900 border border-[#D6B77C]/50 hover:border-[#D6B77C] px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-xs cursor-pointer"
                title="Inquiry Bag"
                aria-label="Open bespoke inquiry bag"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#4B164C]" />
                <span className="text-[11px] font-semibold tracking-wider hidden md:inline uppercase">Inquiry</span>
                {totalInquiryCount > 0 && (
                  <span className="w-4 h-4 bg-[#D6B77C] text-[#181417] text-[9px] font-bold rounded-full flex items-center justify-center">
                    {totalInquiryCount}
                  </span>
                )}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-backdrop"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer-content"
            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#FAF8F5] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-stone-200">
                <div>
                  <h2 className="font-brand-display text-lg font-bold tracking-widest text-[#181417]">
                    QWEEN FECY
                  </h2>
                  <p className="text-[8.5px] uppercase tracking-[0.25em] text-[#A4513C] font-semibold">
                    Toronto × Lagos
                  </p>
                </div>
                <button
                  id="mobile-drawer-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-stone-600 hover:text-stone-900 rounded-full hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Concierge Voice CTA on Mobile */}
              <div className="mt-5">
                <button
                  id="mobile-talk-to-concierge-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openConcierge();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#181417] text-[#F5EFE5] border border-[#D6B77C] py-3 px-4 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] shadow-sm"
                >
                  <Mic className="w-3.5 h-3.5 text-[#D6B77C]" />
                  <span>Talk to Fashion Concierge</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => {
                      if (link.category) {
                        navigateTo(link.view, link.category);
                      } else {
                        navigateTo(link.view);
                      }
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs uppercase tracking-[0.16em] font-medium flex items-center justify-between transition-colors ${
                      activeView === link.view
                        ? 'bg-stone-200 text-[#181417] font-bold'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[#A4513C] text-xs">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom info */}
            <div className="pt-6 border-t border-stone-200 space-y-2">
              <div className="text-[11px] text-stone-500">
                <p className="font-semibold text-stone-800 uppercase tracking-wider text-[10px]">Studio & Atelier</p>
                <p>Toronto, Canada & Lagos, Nigeria</p>
              </div>
              <a
                id="mobile-phone-link"
                href={`tel:${QWEEN_FECY_CONFIG.concierge.conciergePhoneNumber}`}
                className="inline-block text-xs text-[#A4513C] font-semibold hover:underline"
              >
                Hotline: {QWEEN_FECY_CONFIG.boutique.phones.primary}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
