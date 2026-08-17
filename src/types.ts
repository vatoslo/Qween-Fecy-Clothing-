export type CategoryType = 
  | 'all'
  | 'women'
  | 'men'
  | 'kids'
  | 'african-inspired'
  | 'runway'
  | 'dresses-gowns'
  | 'suits-tailoring'
  | 'nigerian-traditional'
  | 'custom-design'
  | 'two-piece'
  | 'tops-trousers'
  | 'accessories'
  | 'bags'
  | 'shoes'
  | 'jewelry';

export type GenderType = 'women' | 'men' | 'kids' | 'unisex';

export interface ProductColor {
  name: string;
  hex: string;
  bgClass?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: CategoryType;
  gender: GenderType;
  priceUSD: number;
  images: string[];
  description: string;
  details: string[];
  fabricCare: string[];
  colors: ProductColor[];
  sizes: string[];
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isBespokeAvailable?: boolean;
  isRunway?: boolean;
  tag?: string;
  rating?: number;
}

export interface InquiryItem {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
  customNotes?: string;
}

export interface TailoringInquiry {
  fullName: string;
  email: string;
  phone: string;
  garmentType: string;
  occasion: string;
  gender?: string;
  preferredColor: string;
  preferredDate: string;
  consultationLocation?: 'toronto' | 'lagos' | 'virtual';
  measurementsKnown: 'yes' | 'need_consultation' | 'provide_custom';
  additionalNotes: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  inquiryType: 'general' | 'private_fitting' | 'styling_advice' | 'press' | 'runway_collaboration';
}

export type CurrencyCode = 'USD' | 'CAD' | 'NGN' | 'GBP' | 'EUR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number; // rate against USD
  name: string;
}
