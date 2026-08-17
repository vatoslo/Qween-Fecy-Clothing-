import React from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { SAMPLE_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight, Sparkles, Crown, Scissors, Heart, Star } from 'lucide-react';
import { CategoryType } from '../types';

export const FeaturedCollections: React.FC = () => {
  const { navigateTo, openTailoringModal } = useBoutique();

  // Featured pieces
  const featuredPieces = SAMPLE_PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  // Women's highlights
  const womenHighlights = SAMPLE_PRODUCTS.filter((p) => p.gender === 'women').slice(0, 3);

  // Men's highlights
  const menHighlights = SAMPLE_PRODUCTS.filter((p) => p.gender === 'men').slice(0, 3);

  // African-inspired & traditional
  const africanHighlights = SAMPLE_PRODUCTS.filter((p) => p.category === 'african-inspired').slice(0, 2);

  // Kids highlights
  const kidsHighlights = SAMPLE_PRODUCTS.filter((p) => p.category === 'kids').slice(0, 2);

  const collectionCategories: { id: CategoryType; label: string; image: string; description: string; tag: string }[] = [
    {
      id: 'women',
      label: "Women's Haute Couture",
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
      description: 'Sculpted corsetry gowns, structured power blazers, and fluid liquid silk slips.',
      tag: 'WOMEN',
    },
    {
      id: 'men',
      label: "Men's Sartorial & Traditional",
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      description: 'Sovereign Damask Agbadas, tailored Senator sets, and bespoke two-piece suits.',
      tag: 'MEN',
    },
    {
      id: 'kids',
      label: 'Kids Royal & Celebration',
      image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80',
      description: 'Miniature Agbadas and couture Ankara dresses crafted for milestones and family galas.',
      tag: 'KIDS',
    },
    {
      id: 'african-inspired',
      label: 'African-Inspired Couture',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
      description: 'Ancestral Aso-Oke, Swiss Brocade, and French corded lace enriched with hand embroidery.',
      tag: 'HERITAGE',
    },
    {
      id: 'runway',
      label: 'Runway Exclusives',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      description: 'Showpiece capes and avant-garde silhouettes direct from Toronto and Lagos runways.',
      tag: 'RUNWAY',
    },
    {
      id: 'accessories',
      label: 'Accessories & Leather',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      description: 'Handcrafted box calfskin bags, baroque pearls, and architectural footwear.',
      tag: 'ACCESSORIES',
    },
  ];

  return (
    <div id="featured-collections-root" className="space-y-24 lg:space-y-36 py-8">
      
      {/* 1. COLLECTION DIRECTORY NAVIGATION GRID */}
      <section id="collection-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B164C]/70 border border-[#D6B77C]/30 text-[10px] uppercase tracking-[0.3em] text-[#D6B77C] font-medium">
            <Sparkles className="w-3 h-3 text-[#D6B77C]" />
            <span>DISCOVER THE ARCHIVE</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#181417] tracking-tight">
            Curated <span className="italic text-[#A4513C]">Qween Fecy</span> Collections
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light max-w-xl mx-auto">
            From red carpet haute couture to everyday bespoke tailoring and traditional celebration wear.
          </p>
        </div>

        {/* 6-Grid of Collections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collectionCategories.map((col) => (
            <div
              key={col.id}
              onClick={() => navigateTo('shop', col.id)}
              className="group relative rounded-2xl overflow-hidden bg-[#181417] border border-[#D6B77C]/20 hover:border-[#D6B77C] transition-all duration-500 cursor-pointer shadow-lg aspect-[4/5]"
            >
              <img
                src={col.image}
                alt={col.label}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#181417] via-[#181417]/30 to-transparent"></div>

              <div className="absolute top-4 left-4 bg-[#29132D]/90 backdrop-blur-md border border-[#D6B77C]/40 px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.24em] text-[#D6B77C] font-semibold">
                {col.tag}
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-[#F5EFE5]">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-light leading-snug group-hover:text-[#D6B77C] transition-colors">
                  {col.label}
                </h3>
                <p className="text-xs text-[#D8C2A3] font-light line-clamp-2 leading-relaxed">
                  {col.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-[#D6B77C] font-semibold uppercase tracking-wider group-hover:translate-x-1.5 transition-transform">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 2. SIGNATURE ATELIER SPOTLIGHT PIECES */}
      <section id="featured-creations-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-[#D6B77C]/25">
          <div>
            <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.28em] text-[#A4513C] font-medium mb-1.5">
              <Star className="w-3.5 h-3.5 text-[#D6B77C]" />
              <span>Chapter I • Sovereign Highlights</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#181417] font-light">
              Signature Pieces
            </h2>
            <p className="text-stone-600 text-sm font-light mt-1.5 max-w-xl">
              Hand-finished couture silhouettes, Swiss damask agbadas, and power hourglass blazers.
            </p>
          </div>

          <button
            id="view-all-featured-btn"
            onClick={() => navigateTo('shop', 'all')}
            className="mt-5 md:mt-0 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#181417] hover:text-[#4B164C] transition-colors cursor-pointer group"
          >
            <span>Explore Entire Archive</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D6B77C] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredPieces.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>

      {/* 3. AFRICAN-INSPIRED & TRADITIONAL ROYALTY */}
      <section id="african-couture-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#29132D] text-[#F5EFE5] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#D6B77C]/35 shadow-2xl">
          
          <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-[#4B164C]/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 border-b border-[#D6B77C]/60 pb-1 text-[10px] uppercase tracking-[0.32em] text-[#D6B77C] font-medium">
                <Crown className="w-3.5 h-3.5 text-[#D6B77C]" />
                <span>Chapter II • Heritage of Royalty</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12]">
                African-Inspired & <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#D6B77C]">Ceremonial Couture</span>
              </h2>

              <p className="text-[#D8C2A3] text-sm sm:text-base font-light leading-relaxed">
                Honoring grand weddings, milestone galas, and coronation events with authentic sovereign African luxury. From 3-piece grand Swiss Damask Agbadas to hand-beaded lace Aso-Ebi gowns, each garment is customized with Lagos artisanal precision and contemporary Canadian haute aesthetics.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  id="explore-african-btn"
                  onClick={() => navigateTo('shop', 'african-inspired')}
                  className="bg-[#D6B77C] hover:bg-[#C8A462] text-[#181417] font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg"
                >
                  EXPLORE AFRICAN COUTURE
                </button>

                <button
                  id="african-bespoke-btn"
                  onClick={() => openTailoringModal()}
                  className="bg-transparent hover:bg-[#4B164C]/50 text-[#F5EFE5] border border-[#D6B77C]/50 hover:border-[#D6B77C] text-xs font-medium uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-colors cursor-pointer"
                >
                  REQUEST BESPOKE FITTING
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {africanHighlights.map((product) => (
                <div key={product.id} className="text-stone-900">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* 4. KIDS ROYAL & CELEBRATION COLLECTION */}
      <section id="kids-collection-section" className="bg-[#FAF8F5] py-20 lg:py-28 border-y border-[#D6B77C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Editorial Lead Banner */}
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-[#181417] group">
              <img
                src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=85"
                alt="Kids Royal Fashion Collection"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181417]/95 via-[#29132D]/40 to-transparent flex flex-col justify-end p-7 sm:p-9 text-[#F5EFE5]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D6B77C] font-medium mb-1.5">
                  Chapter III • Next Generation
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light leading-snug mb-3 text-[#F5EFE5]">
                  Kids Heritage & Royal Celebration
                </h3>
                <p className="text-[#D8C2A3] text-xs font-light mb-6 leading-relaxed">
                  Tailored miniature damask agbadas and organic cotton Ankara dresses designed with breathable comfort for family celebrations.
                </p>
                <button
                  id="shop-kids-banner-btn"
                  onClick={() => navigateTo('shop', 'kids')}
                  className="self-start bg-[#D6B77C] hover:bg-[#C8A462] text-[#181417] text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Shop Kids Line
                </button>
              </div>
            </div>

            {/* Product Duo */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {kidsHighlights.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 5. MEN'S SARTORIAL & SAVILE-GRADE COLLECTION */}
      <section id="mens-collection-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-[#D6B77C]/25">
          <div>
            <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.28em] text-[#A4513C] font-medium mb-1.5">
              <span>Chapter IV • Sartorial Authority</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#181417] font-light">
              Men's Sartorial Line
            </h2>
            <p className="text-stone-600 text-sm font-light mt-1.5 max-w-xl">
              Precision-cut wool suits, modern senator tunics, and sovereign Swiss damask sets.
            </p>
          </div>

          <button
            id="view-mens-catalog-btn"
            onClick={() => navigateTo('shop', 'men')}
            className="mt-5 md:mt-0 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#181417] hover:text-[#4B164C] transition-colors cursor-pointer group"
          >
            <span>Shop Men's Collection</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D6B77C] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {menHighlights.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>

    </div>
  );
};
