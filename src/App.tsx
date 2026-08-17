import React, { useEffect } from 'react';
import { BoutiqueProvider, useBoutique } from './context/BoutiqueContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DesignerSection } from './components/DesignerSection';
import { FeaturedCollections } from './components/FeaturedCollections';
import { RunwaySection } from './components/RunwaySection';
import { BodyInclusivity } from './components/BodyInclusivity';
import { CustomTailoring } from './components/CustomTailoring';
import { StyleDiscovery } from './components/StyleDiscovery';
import { PressRecognition } from './components/PressRecognition';
import { Testimonials } from './components/Testimonials';
import { VoiceConciergeSection } from './components/VoiceConciergeSection';
import { WhyQweenFecy } from './components/WhyQweenFecy';
import { ContactSection } from './components/ContactSection';
import { ShopCatalog } from './components/ShopCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ConciergeModal } from './components/ConciergeModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { SizeGuideModal } from './components/SizeGuideModal';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { Mic, X } from 'lucide-react';

const MainBoutiqueContent: React.FC = () => {
  const { 
    activeView, 
    openConcierge, 
    toggleInquiryDrawer, 
    inquiryItems, 
    isTailoringModalOpen, 
    closeTailoringModal 
  } = useBoutique();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-[#4B164C] selection:text-white">
      
      {/* Primary Global Sticky Navbar */}
      <Navbar />

      {/* Main Routed Content */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <Hero />
            <AboutSection />
            <FeaturedCollections />
            <DesignerSection />
            <RunwaySection />
            <CustomTailoring />
            <BodyInclusivity />
            <StyleDiscovery />
            <VoiceConciergeSection />
            <PressRecognition />
            <Testimonials />
            <WhyQweenFecy />
            <ContactSection />
          </>
        )}

        {activeView === 'style-discovery' && (
          <>
            <StyleDiscovery />
            <FeaturedCollections />
          </>
        )}

        {(activeView === 'shop' ||
          activeView === 'women' ||
          activeView === 'men' ||
          activeView === 'kids' ||
          activeView === 'african-inspired' ||
          activeView === 'runway' ||
          activeView === 'bags' ||
          activeView === 'shoes' ||
          activeView === 'jewelry' ||
          activeView === 'dresses' ||
          activeView === 'suits') && (
          <ShopCatalog />
        )}

        {activeView === 'about' && (
          <>
            <AboutSection />
            <DesignerSection />
            <BodyInclusivity />
            <PressRecognition />
            <WhyQweenFecy />
            <ContactSection />
          </>
        )}

        {activeView === 'tailoring' && (
          <>
            <CustomTailoring />
            <BodyInclusivity />
            <Testimonials />
            <WhyQweenFecy />
          </>
        )}

        {activeView === 'contact' && (
          <>
            <ContactSection />
            <Testimonials />
          </>
        )}
      </main>

      {/* Global Modals & Overlay Drawers */}
      <ProductDetailModal />
      <ConciergeModal />
      <InquiryDrawer />
      <SizeGuideModal />

      {/* Bespoke Tailoring Modal when opened globally */}
      {isTailoringModalOpen && (
        <div 
          id="global-tailoring-modal-backdrop"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={closeTailoringModal}
        >
          <div 
            id="global-tailoring-modal-card"
            className="bg-[#FAF8F5] border border-[#D6B77C]/50 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden relative my-auto max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="global-tailoring-close-btn"
              onClick={closeTailoringModal}
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <CustomTailoring isModal={true} />
          </div>
        </div>
      )}

      {/* Floating Bottom Quick Action Bubble for Concierge */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
        <button
          id="floating-talk-concierge-btn"
          onClick={() => openConcierge()}
          className="bg-[#181417] hover:bg-[#29132D] text-[#F5EFE5] border border-[#D6B77C] shadow-2xl px-4.5 py-3 rounded-full flex items-center gap-2.5 text-xs uppercase tracking-widest font-semibold transition-all hover:scale-105 cursor-pointer group"
          title="Talk to Qween Fecy Concierge"
        >
          <div className="w-2 h-2 rounded-full bg-[#D6B77C] animate-pulse"></div>
          <Mic className="w-4 h-4 text-[#D6B77C] group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Talk to Qween Fecy</span>
        </button>
      </aside>

      {/* Toast Notification Layer */}
      <Toast />

      {/* Main Luxury Footer */}
      <Footer />

    </div>
  );
};

export default function App() {
  return (
    <BoutiqueProvider>
      <MainBoutiqueContent />
    </BoutiqueProvider>
  );
}
