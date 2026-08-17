import React, { useState, useMemo } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { SAMPLE_PRODUCTS, CATEGORIES_LIST } from '../data/products';
import { ProductCard } from './ProductCard';
import { CategoryType, GenderType } from '../types';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  RotateCcw, 
  Sparkles, 
  Filter,
  Check,
  ChevronDown
} from 'lucide-react';

export const ShopCatalog: React.FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedGender,
    setSelectedGender,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
  } = useBoutique();

  const [selectedColorFilter, setSelectedColorFilter] = useState<string>('all');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number>(1500);
  const [showMobileFilterDrawer, setShowMobileFilterDrawer] = useState<boolean>(false);

  // Extract all unique color names & size names for filtering
  const allColors = useMemo(() => {
    const map = new Map<string, string>();
    SAMPLE_PRODUCTS.forEach((p) => {
      p.colors.forEach((c) => {
        if (!map.has(c.name)) map.set(c.name, c.hex);
      });
    });
    return Array.from(map.entries()).map(([name, hex]) => ({ name, hex }));
  }, []);

  const allSizes = useMemo(() => {
    const set = new Set<string>();
    SAMPLE_PRODUCTS.forEach((p) => {
      p.sizes.forEach((s) => set.add(s.split('/')[0].trim()));
    });
    return Array.from(set);
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((product) => {
      // 1. Gender Filter
      if (selectedGender !== 'all') {
        if (product.gender !== selectedGender && product.gender !== 'unisex') {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'women') {
          if (product.gender !== 'women') return false;
        } else if (selectedCategory === 'men') {
          if (product.gender !== 'men') return false;
        } else if (product.category !== selectedCategory) {
          return false;
        }
      }

      // 3. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesSub = (product.subtitle || '').toLowerCase().includes(q);
        const matchesTag = (product.tag || '').toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesSub && !matchesTag) {
          return false;
        }
      }

      // 4. Color Filter
      if (selectedColorFilter !== 'all') {
        const hasColor = product.colors.some((c) => c.name === selectedColorFilter);
        if (!hasColor) return false;
      }

      // 5. Size Filter
      if (selectedSizeFilter !== 'all') {
        const hasSize = product.sizes.some((s) => s.toLowerCase().includes(selectedSizeFilter.toLowerCase()));
        if (!hasSize) return false;
      }

      // 6. Price Range
      if (product.priceUSD > priceRange) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'newest') {
        return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      }
      if (sortBy === 'price-asc') {
        return a.priceUSD - b.priceUSD;
      }
      if (sortBy === 'price-desc') {
        return b.priceUSD - a.priceUSD;
      }
      // Default: featured
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedGender, searchQuery, selectedColorFilter, selectedSizeFilter, priceRange, sortBy]);

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedGender('all');
    setSearchQuery('');
    setSelectedColorFilter('all');
    setSelectedSizeFilter('all');
    setPriceRange(1500);
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedGender !== 'all' ||
    searchQuery.trim() !== '' ||
    selectedColorFilter !== 'all' ||
    selectedSizeFilter !== 'all' ||
    priceRange < 1500;

  return (
    <section id="shop-catalog-section" className="bg-[#FAF8F5] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Catalog Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
            Haute Couture & Ready-to-Wear
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#111111]">
            The Qween Fecy Catalog
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm font-light">
            Every piece is crafted to celebrate elegance, precision fitting, and individual expression.
          </p>
        </div>

        {/* Gender Tabs & Search Bar */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Gender Switcher */}
            <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200 w-full md:w-auto">
              <button
                id="gender-filter-all"
                onClick={() => setSelectedGender('all')}
                className={`flex-1 md:flex-none px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedGender === 'all'
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Pieces
              </button>
              <button
                id="gender-filter-women"
                onClick={() => setSelectedGender('women')}
                className={`flex-1 md:flex-none px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedGender === 'women'
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Women
              </button>
              <button
                id="gender-filter-men"
                onClick={() => setSelectedGender('men')}
                className={`flex-1 md:flex-none px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedGender === 'men'
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Men
              </button>
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="shop-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gowns, suits, agbada, bags..."
                className="w-full pl-9 pr-8 py-2 bg-[#FAF8F5] border border-stone-200 focus:border-[#D4AF37] rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  id="shop-clear-search-btn"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort & Mobile Filter Toggle */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              
              {/* Sort By Dropdown */}
              <div className="relative flex items-center gap-2">
                <span className="text-xs text-stone-500 font-medium hidden sm:inline">Sort:</span>
                <select
                  id="shop-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#FAF8F5] border border-stone-200 text-stone-800 text-xs font-semibold py-2 px-3 rounded-xl focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                >
                  <option value="featured">Featured Selection</option>
                  <option value="newest">Newest Arrivals</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              {/* Mobile Filter Button */}
              <button
                id="shop-mobile-filter-btn"
                onClick={() => setShowMobileFilterDrawer(true)}
                className="lg:hidden flex items-center gap-1.5 bg-stone-100 border border-stone-300 text-stone-800 px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C6D23]" />
                <span>Filters {hasActiveFilters && '•'}</span>
              </button>

            </div>

          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-3 border-t border-stone-100 no-scrollbar">
            {CATEGORIES_LIST.map((cat) => {
              const isCatActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-pill-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id as CategoryType)}
                  className={`text-xs whitespace-nowrap px-3.5 py-1.5 rounded-full uppercase tracking-wider font-medium transition-colors cursor-pointer shrink-0 ${
                    isCatActive
                      ? 'bg-[#D4AF37] text-[#111111] font-bold shadow-sm'
                      : 'bg-[#FAF8F5] text-stone-600 hover:text-stone-900 border border-stone-200/80 hover:border-stone-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Catalog Main Layout (Sidebar Filters on Desktop + Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 bg-white border border-stone-200/90 rounded-2xl p-6 shadow-sm space-y-6 sticky top-28">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#8C6D23]" />
                <h3 className="font-serif-luxury text-base font-semibold text-[#111111]">
                  Filter Creations
                </h3>
              </div>
              {hasActiveFilters && (
                <button
                  id="reset-filters-btn"
                  onClick={resetAllFilters}
                  className="text-[11px] text-[#8C6D23] hover:text-[#111111] flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Price Max Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-700 uppercase tracking-wider text-[10px]">
                  Max Investment
                </span>
                <span className="font-serif-luxury font-bold text-stone-900">
                  ${priceRange} USD
                </span>
              </div>
              <input
                id="price-range-slider"
                type="range"
                min={300}
                max={1500}
                step={50}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400">
                <span>$300</span>
                <span>$1500+</span>
              </div>
            </div>

            {/* Colors Swatches Filter */}
            <div className="space-y-3 pt-4 border-t border-stone-100">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-bold text-stone-800">
                  Palette
                </span>
                {selectedColorFilter !== 'all' && (
                  <button
                    onClick={() => setSelectedColorFilter('all')}
                    className="text-[10px] text-stone-500 hover:text-stone-800"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {allColors.slice(0, 10).map((col) => (
                  <button
                    key={col.name}
                    id={`filter-color-${col.name}`}
                    onClick={() =>
                      setSelectedColorFilter(selectedColorFilter === col.name ? 'all' : col.name)
                    }
                    title={col.name}
                    className={`w-6 h-6 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                      selectedColorFilter === col.name
                        ? 'ring-2 ring-[#D4AF37] ring-offset-2 scale-110'
                        : 'border-stone-300 hover:scale-105'
                    }`}
                    style={{ backgroundColor: col.hex }}
                  >
                    {selectedColorFilter === col.name && (
                      <Check className={`w-3 h-3 ${col.hex === '#F7F3E8' || col.hex === '#FAF7EE' || col.hex === '#FDFBF7' ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                ))}
              </div>
              {selectedColorFilter !== 'all' && (
                <p className="text-[11px] text-[#8C6D23] font-medium">
                  Filtering by: {selectedColorFilter}
                </p>
              )}
            </div>

            {/* Size Filter */}
            <div className="space-y-3 pt-4 border-t border-stone-100">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-bold text-stone-800">
                  Sizes
                </span>
                {selectedSizeFilter !== 'all' && (
                  <button
                    onClick={() => setSelectedSizeFilter('all')}
                    className="text-[10px] text-stone-500 hover:text-stone-800"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {allSizes.slice(0, 8).map((sz) => (
                  <button
                    key={sz}
                    id={`filter-size-${sz}`}
                    onClick={() =>
                      setSelectedSizeFilter(selectedSizeFilter === sz ? 'all' : sz)
                    }
                    className={`text-xs px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                      selectedSizeFilter === sz
                        ? 'bg-[#111111] text-white border-[#111111] font-bold'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Bespoke Notice */}
            <div className="bg-[#FAF8F5] border border-[#D4AF37]/30 rounded-xl p-3 text-[11px] text-stone-600 leading-relaxed">
              <p className="font-semibold text-stone-900 mb-0.5">Bespoke Made-to-Measure</p>
              Don't see your exact size? All Qween Fecy garments can be custom tailored for you.
            </div>

          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Active Filter Pills Bar */}
            <div className="flex items-center justify-between text-xs text-stone-500">
              <span>
                Showing <strong className="text-stone-900">{filteredProducts.length}</strong> creations
              </span>
              {hasActiveFilters && (
                <button
                  id="clear-all-filters-btn"
                  onClick={resetAllFilters}
                  className="text-[#8C6D23] hover:underline font-semibold"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl text-stone-800 font-light">
                  No creations matched your criteria
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm max-w-md mx-auto">
                  Try adjusting your filters, clearing your search query, or contact our bespoke concierge to craft a custom garment.
                </p>
                <button
                  id="empty-reset-filters-btn"
                  onClick={resetAllFilters}
                  className="bg-[#111111] hover:bg-[#252525] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </main>

        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {showMobileFilterDrawer && (
        <div 
          id="mobile-filters-backdrop"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end"
          onClick={() => setShowMobileFilterDrawer(false)}
        >
          <div
            id="mobile-filters-drawer-content"
            className="w-[85%] max-w-sm bg-[#FAF8F5] h-full p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <h3 className="font-serif-luxury text-lg font-bold text-[#111111]">
                  Filter Creations
                </h3>
                <button 
                  id="mobile-filters-close-btn"
                  onClick={() => setShowMobileFilterDrawer(false)} 
                  className="p-1 text-stone-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Price slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Max Price</span>
                  <span className="text-[#8C6D23] font-bold">${priceRange} USD</span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={1500}
                  step={50}
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#D4AF37]"
                />
              </div>

              {/* Color filter */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider font-bold text-stone-700">Colors</p>
                <div className="flex flex-wrap gap-2">
                  {allColors.map((col) => (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColorFilter(selectedColorFilter === col.name ? 'all' : col.name)}
                      className={`w-7 h-7 rounded-full border ${selectedColorFilter === col.name ? 'ring-2 ring-[#D4AF37] scale-110' : 'border-stone-300'}`}
                      style={{ backgroundColor: col.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size filter */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider font-bold text-stone-700">Sizes</p>
                <div className="flex flex-wrap gap-1.5">
                  {allSizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSizeFilter(selectedSizeFilter === sz ? 'all' : sz)}
                      className={`text-xs px-3 py-1 rounded-lg border ${selectedSizeFilter === sz ? 'bg-[#111111] text-white font-bold' : 'bg-white text-stone-700'}`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 flex gap-3">
              <button
                onClick={resetAllFilters}
                className="flex-1 bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider py-3 rounded-xl"
              >
                Reset
              </button>
              <button
                onClick={() => setShowMobileFilterDrawer(false)}
                className="flex-1 bg-[#111111] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
