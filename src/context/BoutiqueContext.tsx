import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductColor, InquiryItem, CategoryType, CurrencyCode } from '../types';
import { SAMPLE_PRODUCTS, CURRENCY_RATES } from '../data/products';

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'gold';
}

interface BoutiqueContextType {
  activeView: string;
  setActiveView: (view: string) => void;
  navigateTo: (view: string, categoryFilter?: CategoryType) => void;
  
  // Shop filters
  selectedCategory: CategoryType;
  setSelectedCategory: (category: CategoryType) => void;
  selectedGender: 'all' | 'women' | 'men';
  setSelectedGender: (gender: 'all' | 'women' | 'men') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: 'featured' | 'newest' | 'price-asc' | 'price-desc';
  setSortBy: (sort: 'featured' | 'newest' | 'price-asc' | 'price-desc') => void;
  
  // Currency
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  formatPrice: (usdPrice: number) => string;
  
  // Modals & Drawers
  selectedProduct: Product | null;
  openProductDetail: (product: Product) => void;
  closeProductDetail: () => void;
  
  isConciergeOpen: boolean;
  openConcierge: (initialPrompt?: string) => void;
  closeConcierge: () => void;
  conciergePrompt: string;
  
  isTailoringModalOpen: boolean;
  openTailoringModal: (prefilledGarment?: string) => void;
  closeTailoringModal: () => void;
  tailoringPrefillGarment: string;
  
  isSizeGuideOpen: boolean;
  openSizeGuide: () => void;
  closeSizeGuide: () => void;
  
  isInquiryDrawerOpen: boolean;
  toggleInquiryDrawer: (open?: boolean) => void;
  
  // Inquiry Bag
  inquiryItems: InquiryItem[];
  addToInquiry: (product: Product, selectedColor: ProductColor, selectedSize: string, quantity: number, customNotes?: string) => void;
  removeFromInquiry: (index: number) => void;
  updateInquiryQuantity: (index: number, quantity: number) => void;
  clearInquiry: () => void;
  totalInquiryPriceUSD: number;
  
  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  
  // Toast notifications
  toasts: ToastMessage[];
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'gold') => void;
  removeToast: (id: string) => void;
}

const BoutiqueContext = createContext<BoutiqueContextType | undefined>(undefined);

export const BoutiqueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedGender, setSelectedGender] = useState<'all' | 'women' | 'men'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'price-asc' | 'price-desc'>('featured');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  
  // Modals
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isConciergeOpen, setIsConciergeOpen] = useState<boolean>(false);
  const [conciergePrompt, setConciergePrompt] = useState<string>('');
  const [isTailoringModalOpen, setIsTailoringModalOpen] = useState<boolean>(false);
  const [tailoringPrefillGarment, setTailoringPrefillGarment] = useState<string>('');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState<boolean>(false);
  
  // Inquiry State with Local Storage fallback
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem('qf_inquiry_bag');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('qf_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('qf_inquiry_bag', JSON.stringify(inquiryItems));
    } catch (e) {
      console.warn('Storage unavailable', e);
    }
  }, [inquiryItems]);

  useEffect(() => {
    try {
      localStorage.setItem('qf_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Storage unavailable', e);
    }
  }, [wishlist]);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'gold' = 'gold') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const navigateTo = (view: string, categoryFilter?: CategoryType) => {
    setActiveView(view);
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
      if (categoryFilter === 'women') setSelectedGender('women');
      else if (categoryFilter === 'men') setSelectedGender('men');
      else setSelectedGender('all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatPrice = (usdPrice: number): string => {
    const rateInfo = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
    const converted = usdPrice * rateInfo.rate;
    
    if (currency === 'NGN') {
      return `${rateInfo.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${rateInfo.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const openConcierge = (initialPrompt?: string) => {
    if (initialPrompt) setConciergePrompt(initialPrompt);
    setIsConciergeOpen(true);
  };

  const closeConcierge = () => {
    setIsConciergeOpen(false);
    setConciergePrompt('');
  };

  const openTailoringModal = (prefilledGarment?: string) => {
    setTailoringPrefillGarment(prefilledGarment || '');
    setIsTailoringModalOpen(true);
  };

  const closeTailoringModal = () => {
    setIsTailoringModalOpen(false);
    setTailoringPrefillGarment('');
  };

  const openSizeGuide = () => setIsSizeGuideOpen(true);
  const closeSizeGuide = () => setIsSizeGuideOpen(false);

  const toggleInquiryDrawer = (open?: boolean) => {
    setIsInquiryDrawerOpen((prev) => (open !== undefined ? open : !prev));
  };

  const addToInquiry = (
    product: Product,
    selectedColor: ProductColor,
    selectedSize: string,
    quantity: number,
    customNotes?: string
  ) => {
    setInquiryItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor.name === selectedColor.name &&
          item.selectedSize === selectedSize
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        if (customNotes) updated[existingIdx].customNotes = customNotes;
        return updated;
      }
      return [...prev, { product, selectedColor, selectedSize, quantity, customNotes }];
    });

    showToast(
      'Added to Inquiry Bag',
      `${product.name} (${selectedSize}, ${selectedColor.name}) has been saved to your bespoke inquiry portfolio.`,
      'gold'
    );
    setIsInquiryDrawerOpen(true);
  };

  const removeFromInquiry = (index: number) => {
    setInquiryItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Removed from Inquiry', 'Piece removed from your inquiry list.', 'info');
  };

  const updateInquiryQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromInquiry(index);
      return;
    }
    setInquiryItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const clearInquiry = () => {
    setInquiryItems([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const product = SAMPLE_PRODUCTS.find((p) => p.id === productId);
      if (exists) {
        showToast('Removed from Wishlist', `${product?.name || 'Piece'} removed.`, 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to Wishlist', `${product?.name || 'Piece'} added to your private favorites.`, 'gold');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const totalInquiryPriceUSD = inquiryItems.reduce((sum, item) => {
    return sum + item.product.priceUSD * item.quantity;
  }, 0);

  return (
    <BoutiqueContext.Provider
      value={{
        activeView,
        setActiveView,
        navigateTo,
        selectedCategory,
        setSelectedCategory,
        selectedGender,
        setSelectedGender,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        currency,
        setCurrency,
        formatPrice,
        selectedProduct,
        openProductDetail,
        closeProductDetail,
        isConciergeOpen,
        openConcierge,
        closeConcierge,
        conciergePrompt,
        isTailoringModalOpen,
        openTailoringModal,
        closeTailoringModal,
        tailoringPrefillGarment,
        isSizeGuideOpen,
        openSizeGuide,
        closeSizeGuide,
        isInquiryDrawerOpen,
        toggleInquiryDrawer,
        inquiryItems,
        addToInquiry,
        removeFromInquiry,
        updateInquiryQuantity,
        clearInquiry,
        totalInquiryPriceUSD,
        wishlist,
        toggleWishlist,
        isWishlisted,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </BoutiqueContext.Provider>
  );
};

export const useBoutique = (): BoutiqueContextType => {
  const context = useContext(BoutiqueContext);
  if (!context) {
    throw new Error('useBoutique must be used within a BoutiqueProvider');
  }
  return context;
};
