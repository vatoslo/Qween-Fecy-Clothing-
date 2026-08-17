import React, { useState } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { SAMPLE_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Scissors, 
  Mic, 
  ShoppingBag, 
  Check, 
  Crown, 
  Gem, 
  Shirt, 
  Layers
} from 'lucide-react';

interface QuestionOption {
  id: string;
  title: string;
  subtitle: string;
  tag?: string;
  icon?: React.ReactNode;
}

export const StyleDiscovery: React.FC = () => {
  const { 
    openProductDetail, 
    openConcierge, 
    openTailoringModal, 
    formatPrice, 
    addToInquiry,
    navigateTo 
  } = useBoutique();

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedOccasion, setSelectedOccasion] = useState<string>('gala');
  const [selectedPersona, setSelectedPersona] = useState<string>('regal');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPalette, setSelectedPalette] = useState<string>('gold-emerald');
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  // Question 1: Occasion
  const occasions: QuestionOption[] = [
    {
      id: 'gala',
      title: 'Black-Tie Gala & Red Carpet',
      subtitle: 'Opulent floor-sweeping silhouettes, crystal embroidery & dramatic trains',
      tag: 'Grand Evening',
      icon: <Crown className="w-5 h-5 text-[#D4AF37]" />,
    },
    {
      id: 'traditional',
      title: 'Nigerian Wedding & Coronation Gala',
      subtitle: 'Swiss Damask Agbadas, beaded French lace Aso-Ebi & sovereign African majesty',
      tag: 'Cultural Heritage',
      icon: <Gem className="w-5 h-5 text-[#D4AF37]" />,
    },
    {
      id: 'executive',
      title: 'Sovereign Executive & Boardroom',
      subtitle: 'Savile-grade floating canvas suits, hourglass statement blazers & sharp tailoring',
      tag: 'Sartorial Power',
      icon: <Shirt className="w-5 h-5 text-[#D4AF37]" />,
    },
    {
      id: 'resort-soiree',
      title: 'Intimate Luxury Soiree & Lounge',
      subtitle: 'Pure Italian silk two-piece sets, relaxed tailored drape & fluid separates',
      tag: 'Leisure & Soiree',
      icon: <Layers className="w-5 h-5 text-[#D4AF37]" />,
    },
  ];

  // Question 2: Persona & Mood
  const personas: QuestionOption[] = [
    {
      id: 'regal',
      title: 'Regal & Sovereign Majesty',
      subtitle: 'Commanding volume, hand-threaded 24k gold accents, structured posture',
      tag: 'Statuesque & Iconic',
    },
    {
      id: 'architectural',
      title: 'Architectural & Sartorial Precision',
      subtitle: 'Razor-sharp lapels, floating horsehair canvas, refined minimal lines',
      tag: 'Tailored Cleanliness',
    },
    {
      id: 'fluid-sensual',
      title: 'Fluid Silk & Ethereal Elegance',
      subtitle: 'Bias-cut drape, cowl necklines, liquid movements in pure Grade 6A silk',
      tag: 'Sensual & Timeless',
    },
    {
      id: 'cultural-modern',
      title: 'Ancestral Royalty Reimagined',
      subtitle: 'Intricate bullion cord embroidery, heavy Guinea brocades, modern haute cut',
      tag: 'African Haute Couture',
    },
  ];

  // Question 3: Wardrobe Category
  const categories: QuestionOption[] = [
    {
      id: 'women-gowns',
      title: "Women's Haute Gowns & Silhouettes",
      subtitle: 'Sculpted evening gowns, cowl silk dresses & tailored blazers',
      tag: "Women's Atelier",
    },
    {
      id: 'men-tailoring',
      title: "Men's Sartorial Suits & Tuxedos",
      subtitle: 'Double-breasted Super 160s suits, velvet tuxedos & Italian loafers',
      tag: "Men's Sartorial",
    },
    {
      id: 'traditional-attire',
      title: 'Nigerian Traditional Agbada & Aso-Ebi',
      subtitle: 'Grand 3-piece Damask Agbadas & crystal-beaded lace ensembles',
      tag: 'Traditional Couture',
    },
    {
      id: 'complete-ensemble',
      title: 'Head-to-Toe Coordinated Wardrobe',
      subtitle: 'Complete bespoke styling with matching leather bags, shoes & jewelry',
      tag: 'Total Ensemble',
    },
  ];

  // Question 4: Curated Palette
  const palettes = [
    {
      id: 'gold-emerald',
      title: 'Imperial Emerald & 24k Champagne Gold',
      subtitle: 'Deep botanical emerald with radiant metallic filament embroidery',
      colors: ['#0B3B24', '#D4AF37', '#FAF8F5'],
    },
    {
      id: 'noir-charcoal',
      title: 'Midnight Obsidian & Jet Noir',
      subtitle: 'Monochromatic architectural shadows, velvet matte & polished gold hardware',
      colors: ['#111111', '#262626', '#D4AF37'],
    },
    {
      id: 'ivory-sand',
      title: 'Warm Ivory, Sand & Soft Champagne',
      subtitle: 'Warm sunlit neutrals, delicate silk sheen and butter-soft leather tones',
      colors: ['#F7F3E8', '#D2C2A4', '#FAF8F5'],
    },
    {
      id: 'burgundy-sapphire',
      title: 'Royal Amethyst, Burgundy & Sapphire',
      subtitle: 'Lush jewel tones, deep silk velvet refraction and regal presence',
      colors: ['#58111A', '#0F2C59', '#D4AF37'],
    },
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate results
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setShowResults(true);
      }, 700);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setShowResults(false);
    setSelectedOccasion('gala');
    setSelectedPersona('regal');
    setSelectedCategory('all');
    setSelectedPalette('gold-emerald');
  };

  // Determine Curated Recommendations based on selection
  const getCuratedMatches = (): { profileTitle: string; personaDesc: string; stylistNotes: string; products: Product[] } => {
    let matchedProducts: Product[] = [];
    let profileTitle = 'The Sovereign Sovereign';
    let personaDesc = 'You gravitate toward commanding silhouettes that balance ceremonial heritage with pristine modern architecture.';
    let stylistNotes = 'Our master tailors recommend prioritizing heavy silk chiffon with hand-laid metallic embroidery, structured shoulder construction, and 24k brushed gold accents.';

    if (selectedOccasion === 'traditional' || selectedCategory === 'traditional-attire') {
      profileTitle = 'The Sovereign Royalty';
      personaDesc = 'A champion of sovereign African luxury, celebrating landmark cultural milestones with ancestral grandeur and contemporary haute polish.';
      stylistNotes = 'We curate 3-piece Swiss Damask Agbadas and French beaded lace Aso-Ebi gowns crafted to your exact anatomical measurements.';
      matchedProducts = SAMPLE_PRODUCTS.filter(
        (p) => p.category === 'nigerian-traditional' || p.id === 'qf-amara-evening-gown' || p.id === 'qf-royal-classic-suit'
      );
    } else if (selectedCategory === 'men-tailoring' || selectedOccasion === 'executive') {
      profileTitle = 'The Sartorial Architect';
      personaDesc = 'Defined by discipline, proportion, and Savile-grade sartorial refinement. You value floating horsehair canvas and hand-burnished Florentine leathers.';
      stylistNotes = 'Opt for Super 160s virgin wool two-piece suits paired with velvet evening tuxedoes and Blake-stitched calfskin footwear.';
      matchedProducts = SAMPLE_PRODUCTS.filter(
        (p) => p.gender === 'men' || p.category === 'suits-tailoring' || p.category === 'shoes'
      );
    } else if (selectedPersona === 'fluid-sensual' || selectedOccasion === 'resort-soiree') {
      profileTitle = 'The Fluid Silk Connoisseur';
      personaDesc = 'You appreciate understated sensuality, prioritizing natural silk drape, effortless movement, and tactile softness above all.';
      stylistNotes = 'Pair double-faced Italian Silk Charmeuse cowl gowns with fluid palazzo lounge sets and organic South Sea baroque pearls.';
      matchedProducts = SAMPLE_PRODUCTS.filter(
        (p) => p.id === 'qf-zara-silk-dress' || p.id === 'qf-casablanca-silk-set' || p.id === 'qf-pearl-essence-jewelry-set' || p.id === 'qf-aurora-stiletto-mule'
      );
    } else {
      // Default / Gala Sovereign
      profileTitle = 'The Haute Gala Sovereign';
      personaDesc = 'Your presence is statuary and magnetic. You seek iconic statement pieces with internal corsetry, trailing hems, and immaculate finishing.';
      stylistNotes = 'The Amara Evening Gown and Fecy Signature Blazer offer flawless red-carpet poise with complimentary bespoke length adjustments.';
      matchedProducts = SAMPLE_PRODUCTS.filter(
        (p) => p.isFeatured || p.category === 'dresses-gowns' || p.category === 'suits-tailoring'
      );
    }

    // Ensure we always have top 3-4 pieces
    if (matchedProducts.length < 3) {
      matchedProducts = SAMPLE_PRODUCTS.slice(0, 4);
    }

    return {
      profileTitle,
      personaDesc,
      stylistNotes,
      products: matchedProducts.slice(0, 4),
    };
  };

  const curation = getCuratedMatches();

  return (
    <section id="find-your-style-section" className="bg-[#FAF8F5] py-20 lg:py-28 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-stone-100 border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full text-[10.5px] uppercase tracking-[0.28em] text-[#8C6D23] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Atelier Experience</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#111111]">
            Find Your Qween Fecy Style
          </h2>

          <p className="text-stone-600 text-xs sm:text-base font-light leading-relaxed">
            Answer four curated styling questions to discover your personalized fashion archetype and handpicked couture recommendations.
          </p>

          {/* Stepper Progress Bar */}
          {!showResults && (
            <div className="pt-6 flex flex-col items-center">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] font-semibold text-stone-600 mb-2">
                <span>STYLE DISCOVERY</span>
                <span className="text-[#D4AF37]">
                  {currentStep === 0 && '● ━━ ○ ━━ ○ ━━ ○'}
                  {currentStep === 1 && '● ━━ ● ━━ ○ ━━ ○'}
                  {currentStep === 2 && '● ━━ ● ━━ ● ━━ ○'}
                  {currentStep === 3 && '● ━━ ● ━━ ● ━━ ●'}
                </span>
                <span className="text-stone-400">Step {currentStep + 1} of 4</span>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Interactive Questionnaire Card */}
        {!showResults ? (
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(0,0,0,0.04)] relative">
            
            {isCalculating ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin mx-auto"></div>
                <h3 className="font-serif-luxury text-2xl text-stone-900 font-light">
                  Synthesizing Your Haute Style Profile...
                </h3>
                <p className="text-stone-500 text-xs tracking-wider uppercase font-light">
                  Analyzing silhouette drape, occasion harmony & color chemistry
                </p>
              </div>
            ) : (
              <div>
                
                {/* STEP 1: OCCASION */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div className="border-b border-stone-100 pb-4">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#8C6D23] font-bold block mb-1">
                        Question 01 • The Setting
                      </span>
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#111111]">
                        What landmark occasion are you curating for?
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {occasions.map((occ) => {
                        const isSelected = selectedOccasion === occ.id;
                        return (
                          <div
                            key={occ.id}
                            id={`style-occ-${occ.id}`}
                            onClick={() => setSelectedOccasion(occ.id)}
                            className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                              isSelected
                                ? 'bg-[#FAF8F5] border-[#D4AF37] ring-1 ring-[#D4AF37] shadow-sm'
                                : 'bg-white border-stone-200/80 hover:border-stone-400'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-[9.5px] uppercase tracking-[0.2em] font-semibold text-[#8C6D23] bg-white px-2.5 py-1 rounded-md border border-stone-200">
                                  {occ.tag}
                                </span>
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-[#D4AF37] bg-[#D4AF37] text-white' : 'border-stone-300'
                                }`}>
                                  {isSelected && <Check className="w-3 h-3 text-[#111111]" />}
                                </div>
                              </div>
                              <h4 className="font-serif-luxury text-lg font-medium text-[#111111] mb-1.5">
                                {occ.title}
                              </h4>
                              <p className="text-stone-500 text-xs font-light leading-relaxed">
                                {occ.subtitle}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: PERSONA & MOOD */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="border-b border-stone-100 pb-4">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#8C6D23] font-bold block mb-1">
                        Question 02 • Aesthetic Persona
                      </span>
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#111111]">
                        What aesthetic posture defines your individuality?
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {personas.map((persona) => {
                        const isSelected = selectedPersona === persona.id;
                        return (
                          <div
                            key={persona.id}
                            id={`style-persona-${persona.id}`}
                            onClick={() => setSelectedPersona(persona.id)}
                            className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                              isSelected
                                ? 'bg-[#FAF8F5] border-[#D4AF37] ring-1 ring-[#D4AF37] shadow-sm'
                                : 'bg-white border-stone-200/80 hover:border-stone-400'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-[9.5px] uppercase tracking-[0.2em] font-semibold text-[#8C6D23] bg-white px-2.5 py-1 rounded-md border border-stone-200">
                                  {persona.tag}
                                </span>
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-[#D4AF37] bg-[#D4AF37] text-white' : 'border-stone-300'
                                }`}>
                                  {isSelected && <Check className="w-3 h-3 text-[#111111]" />}
                                </div>
                              </div>
                              <h4 className="font-serif-luxury text-lg font-medium text-[#111111] mb-1.5">
                                {persona.title}
                              </h4>
                              <p className="text-stone-500 text-xs font-light leading-relaxed">
                                {persona.subtitle}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3: CATEGORY FOCUS */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="border-b border-stone-100 pb-4">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#8C6D23] font-bold block mb-1">
                        Question 03 • Wardrobe Focus
                      </span>
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#111111]">
                        Which wardrobe investment are you seeking?
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {categories.map((cat) => {
                        const isSelected = selectedCategory === cat.id;
                        return (
                          <div
                            key={cat.id}
                            id={`style-cat-${cat.id}`}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                              isSelected
                                ? 'bg-[#FAF8F5] border-[#D4AF37] ring-1 ring-[#D4AF37] shadow-sm'
                                : 'bg-white border-stone-200/80 hover:border-stone-400'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-[9.5px] uppercase tracking-[0.2em] font-semibold text-[#8C6D23] bg-white px-2.5 py-1 rounded-md border border-stone-200">
                                  {cat.tag}
                                </span>
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-[#D4AF37] bg-[#D4AF37] text-white' : 'border-stone-300'
                                }`}>
                                  {isSelected && <Check className="w-3 h-3 text-[#111111]" />}
                                </div>
                              </div>
                              <h4 className="font-serif-luxury text-lg font-medium text-[#111111] mb-1.5">
                                {cat.title}
                              </h4>
                              <p className="text-stone-500 text-xs font-light leading-relaxed">
                                {cat.subtitle}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4: PALETTE & TEXTILE */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="border-b border-stone-100 pb-4">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#8C6D23] font-bold block mb-1">
                        Question 04 • Textile & Palette Atmosphere
                      </span>
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#111111]">
                        Select the color universe that resonates with your vision:
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {palettes.map((pal) => {
                        const isSelected = selectedPalette === pal.id;
                        return (
                          <div
                            key={pal.id}
                            id={`style-palette-${pal.id}`}
                            onClick={() => setSelectedPalette(pal.id)}
                            className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                              isSelected
                                ? 'bg-[#FAF8F5] border-[#D4AF37] ring-1 ring-[#D4AF37] shadow-sm'
                                : 'bg-white border-stone-200/80 hover:border-stone-400'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-1.5">
                                  {pal.colors.map((hex, i) => (
                                    <span
                                      key={i}
                                      className="w-4 h-4 rounded-full border border-stone-300 shadow-xs"
                                      style={{ backgroundColor: hex }}
                                    />
                                  ))}
                                </div>
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-[#D4AF37] bg-[#D4AF37] text-white' : 'border-stone-300'
                                }`}>
                                  {isSelected && <Check className="w-3 h-3 text-[#111111]" />}
                                </div>
                              </div>
                              <h4 className="font-serif-luxury text-lg font-medium text-[#111111] mb-1.5">
                                {pal.title}
                              </h4>
                              <p className="text-stone-500 text-xs font-light leading-relaxed">
                                {pal.subtitle}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Bottom Step Actions */}
                <div className="mt-10 pt-6 border-t border-stone-100 flex items-center justify-between">
                  <button
                    id="style-prev-btn"
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className={`inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full transition-colors ${
                      currentStep === 0 ? 'text-stone-300 cursor-not-allowed' : 'text-stone-700 hover:text-stone-900 cursor-pointer'
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <button
                    id="style-next-btn"
                    onClick={handleNext}
                    className="bg-[#111111] hover:bg-[#262626] text-white border border-[#D4AF37]/60 hover:border-[#D4AF37] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] shadow-md transition-all flex items-center gap-2.5 cursor-pointer"
                  >
                    <span>{currentStep === 3 ? 'Reveal My Qween Fecy Profile' : 'Continue'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                </div>

              </div>
            )}

          </div>
        ) : (
          /* ========================================================== */
          /* REVEALED STYLE PROFILE & CURATED PIECES RESULTS CARD      */
          /* ========================================================== */
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-3 duration-500">
            
            {/* Persona Reveal Header Card */}
            <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 border-b border-[#D4AF37]/60 pb-1 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-medium">
                    <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Your Curated Haute Profile</span>
                  </div>

                  <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-white">
                    {curation.profileTitle}
                  </h3>

                  <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
                    {curation.personaDesc}
                  </p>

                  <div className="bg-[#1A1A1A] border border-[#D4AF37]/25 p-4 rounded-xl text-xs text-[#E8DCC4] font-light leading-relaxed">
                    <strong className="text-[#D4AF37] font-medium block uppercase tracking-wider text-[10px] mb-1">
                      Atelier Stylist Advisory:
                    </strong>
                    {curation.stylistNotes}
                  </div>
                </div>

                {/* Right Action buttons */}
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <button
                    id="style-concierge-discuss-btn"
                    onClick={() =>
                      openConcierge(
                        `Hello! I just completed the Qween Fecy Style Discovery and my archetype is "${curation.profileTitle}". Can you recommend styling tips and fabric choices for my upcoming event?`
                      )
                    }
                    className="w-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#111111] font-semibold text-xs uppercase tracking-[0.2em] py-3.5 px-5 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                  >
                    <Mic className="w-4 h-4 text-[#111111]" />
                    <span>Consult Concierge on this Look</span>
                  </button>

                  <button
                    id="style-book-fitting-btn"
                    onClick={() => openTailoringModal(curation.profileTitle)}
                    className="w-full bg-transparent hover:bg-white/10 text-white border border-stone-600 hover:border-white text-xs font-medium uppercase tracking-[0.2em] py-3.5 px-5 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Scissors className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Book Bespoke Fitting</span>
                  </button>

                  <button
                    id="style-retake-quiz-btn"
                    onClick={handleRestart}
                    className="w-full text-stone-400 hover:text-white text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 py-2 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Retake Style Discovery</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Curated Product Matches Grid */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-4 gap-2">
                <div>
                  <span className="text-[10.5px] uppercase tracking-[0.26em] text-[#8C6D23] font-bold">
                    Hand-Selected Matches
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#111111] font-light">
                    Pieces Tailored For Your Archetype
                  </h3>
                </div>
                <button
                  id="style-view-all-shop-btn"
                  onClick={() => navigateTo('shop')}
                  className="text-xs font-semibold uppercase tracking-wider text-[#8C6D23] hover:underline"
                >
                  Explore Full Archive →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {curation.products.map((product, idx) => (
                  <div
                    key={product.id}
                    className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden hover:border-[#D4AF37]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div 
                      className="relative aspect-[3/4] bg-stone-100 cursor-pointer overflow-hidden"
                      onClick={() => openProductDetail(product)}
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#111111]/90 backdrop-blur-xs text-[#D4AF37] text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-sm border border-[#D4AF37]/30">
                        {idx === 0 ? '99% Match' : idx === 1 ? '96% Match' : 'Recommended'}
                      </div>
                    </div>

                    <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[9.5px] uppercase tracking-wider text-stone-500 mb-1">
                          <span>{product.gender === 'women' ? "Women's" : product.gender === 'men' ? "Men's" : 'Unisex'}</span>
                          <span>{formatPrice(product.priceUSD)}</span>
                        </div>
                        <h4 
                          onClick={() => openProductDetail(product)}
                          className="font-serif-luxury text-base font-medium text-[#111111] hover:text-[#8C6D23] transition-colors cursor-pointer line-clamp-1"
                        >
                          {product.name}
                        </h4>
                        <p className="text-stone-500 text-[11px] font-light mt-0.5 line-clamp-1">
                          {product.subtitle}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                        <button
                          id={`style-explore-${product.id}`}
                          onClick={() => openProductDetail(product)}
                          className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-900 text-[10.5px] uppercase tracking-wider font-semibold py-2 px-3 rounded-lg transition-colors cursor-pointer text-center"
                        >
                          View Piece
                        </button>
                        <button
                          id={`style-inquire-${product.id}`}
                          onClick={() => addToInquiry(product, product.colors[0], product.sizes[0], 1)}
                          className="p-2 bg-[#111111] hover:bg-[#252525] text-white rounded-lg transition-colors cursor-pointer"
                          title="Save to Bespoke Inquiry"
                        >
                          <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
