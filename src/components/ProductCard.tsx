import React, { useState } from 'react';
import { Product, ProductColor } from '../types';
import { useBoutique } from '../context/BoutiqueContext';
import { Heart, ArrowUpRight, Scissors } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    formatPrice, 
    openProductDetail, 
    toggleWishlist, 
    isWishlisted,
  } = useBoutique();

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [isHovered, setIsHovered] = useState(false);

  const wishlisted = isWishlisted(product.id);

  // Switch image on hover if secondary image is available
  const activeImage = isHovered && product.images.length > 1 ? product.images[1] : product.images[0];

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group flex flex-col bg-white border border-stone-200/80 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.05)] transition-all duration-500 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Product Image Frame */}
      <div 
        className="relative aspect-[3/4] bg-stone-100 overflow-hidden cursor-pointer" 
        onClick={() => openProductDetail(product)}
      >
        <img
          src={activeImage}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Minimalist Editorial Tag */}
        {product.tag && (
          <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-sm text-[#F7F1DF] text-[9.5px] uppercase tracking-[0.22em] font-medium px-2.5 py-1 rounded-sm border border-[#D4AF37]/30">
            {product.tag}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-stone-200/80 flex items-center justify-center text-stone-700 hover:text-[#D4AF37] transition-colors shadow-sm cursor-pointer z-10"
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-[#A7831C] text-[#A7831C]' : ''}`} />
        </button>

        {/* Hover Quick View Ribbon */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
          <div className="w-full bg-[#111111]/92 backdrop-blur-md text-white text-[10.5px] font-semibold uppercase tracking-[0.2em] py-2.5 px-3 rounded-lg text-center border border-[#D4AF37]/40 shadow-md">
            View Piece & Details
          </div>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white space-y-3">
        <div>
          
          {/* Category & Gender Pill */}
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1.5 font-medium">
            <span>
              {product.gender === 'women' ? "Women's" : product.gender === 'men' ? "Men's" : 'Unisex'}
            </span>
            {product.isBespokeAvailable && (
              <span className="flex items-center gap-1 text-[#8C6D23] font-semibold text-[9.5px]">
                <Scissors className="w-3 h-3" /> Bespoke Cut
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => openProductDetail(product)}
            className="font-serif-luxury text-base sm:text-lg font-medium text-[#111111] hover:text-[#8C6D23] transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Subtitle / Fabric notes */}
          {product.subtitle && (
            <p className="text-stone-500 text-xs mt-1 line-clamp-1 font-light">
              {product.subtitle}
            </p>
          )}

          {/* Color Swatches */}
          <div className="flex items-center gap-1.5 mt-3">
            {product.colors.map((c) => (
              <button
                key={c.name}
                id={`color-swatch-${product.id}-${c.name}`}
                onClick={() => setSelectedColor(c)}
                title={c.name}
                className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                  selectedColor.name === c.name 
                    ? 'ring-2 ring-[#D4AF37] ring-offset-1 scale-110' 
                    : 'border-stone-300 opacity-75 hover:opacity-100'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
            <span className="text-[10px] text-stone-500 ml-1.5 truncate font-light">
              {selectedColor.name}
            </span>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-medium">Investment</span>
            <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#111111]">
              {formatPrice(product.priceUSD)}
            </span>
          </div>

          <button
            id={`view-details-btn-${product.id}`}
            onClick={() => openProductDetail(product)}
            className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111111] hover:text-[#8C6D23] flex items-center gap-1 group/link cursor-pointer py-1"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};

