import React, { useState } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { X, Ruler, Scissors, Sparkles } from 'lucide-react';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, closeSizeGuide, openTailoringModal } = useBoutique();
  const [unit, setUnit] = useState<'cm' | 'inches'>('inches');
  const [activeTab, setActiveTab] = useState<'women' | 'men' | 'traditional' | 'shoes'>('women');

  if (!isSizeGuideOpen) return null;

  return (
    <div 
      id="size-guide-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={closeSizeGuide}
    >
      <div 
        id="size-guide-card"
        className="bg-[#FAF8F5] border border-[#D4AF37]/50 rounded-3xl w-full max-w-3xl shadow-2xl text-stone-900 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#D4AF37] flex items-center justify-center text-[#8C6D23]">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-medium text-stone-900">
                Atelier Sizing & Measurement Guide
              </h3>
              <p className="text-xs text-stone-500">
                Precision measurements for Qween Fecy ready-to-wear & couture
              </p>
            </div>
          </div>

          <button
            onClick={closeSizeGuide}
            className="p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab switcher & unit toggle */}
        <div className="p-4 sm:px-6 bg-white/70 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs">
            <button
              onClick={() => setActiveTab('women')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeTab === 'women' ? 'bg-[#111111] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Women's Gowns & Suits
            </button>
            <button
              onClick={() => setActiveTab('men')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeTab === 'men' ? 'bg-[#111111] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Men's Sartorial Suits
            </button>
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeTab === 'traditional' ? 'bg-[#111111] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Traditional Agbada & Aso-Ebi
            </button>
            <button
              onClick={() => setActiveTab('shoes')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeTab === 'shoes' ? 'bg-[#111111] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Footwear
            </button>
          </div>

          <div className="flex items-center gap-2 bg-stone-100 px-3 py-1 rounded-xl border border-stone-200 text-xs">
            <span className="text-stone-500 font-medium">Unit:</span>
            <button
              onClick={() => setUnit('inches')}
              className={`px-2 py-0.5 rounded font-bold cursor-pointer ${unit === 'inches' ? 'bg-white text-[#8C6D23] shadow-sm' : 'text-stone-600'}`}
            >
              Inches (in)
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-2 py-0.5 rounded font-bold cursor-pointer ${unit === 'cm' ? 'bg-white text-[#8C6D23] shadow-sm' : 'text-stone-600'}`}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        {/* Content Table */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {activeTab === 'women' && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                <thead className="bg-stone-100 text-stone-700 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3">UK / US Size</th>
                    <th className="p-3">Bust</th>
                    <th className="p-3">Waist</th>
                    <th className="p-3">Hip</th>
                    <th className="p-3">Standard Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="p-3 font-semibold">UK 6 / US 2 (XS)</td>
                    <td className="p-3">{unit === 'inches' ? '32"' : '81 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '25"' : '63.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '35"' : '89 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '58"' : '147 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">UK 8 / US 4 (S)</td>
                    <td className="p-3">{unit === 'inches' ? '34"' : '86 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '27"' : '68.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '37"' : '94 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '58.5"' : '148 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">UK 10 / US 6 (M)</td>
                    <td className="p-3">{unit === 'inches' ? '36"' : '91.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '29"' : '73.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '39"' : '99 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '59"' : '150 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">UK 12 / US 8 (L)</td>
                    <td className="p-3">{unit === 'inches' ? '38"' : '96.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '31"' : '78.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '41"' : '104 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '59.5"' : '151 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">UK 14 / US 10 (XL)</td>
                    <td className="p-3">{unit === 'inches' ? '40"' : '101.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '33"' : '84 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '43"' : '109 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '60"' : '152 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">UK 16 / US 12 (XXL)</td>
                    <td className="p-3">{unit === 'inches' ? '42"' : '106.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '35"' : '89 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '45"' : '114 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '60.5"' : '153 cm'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'men' && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                <thead className="bg-stone-100 text-stone-700 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3">Jacket Size</th>
                    <th className="p-3">Chest Circumference</th>
                    <th className="p-3">Shoulder Span</th>
                    <th className="p-3">Trouser Waist</th>
                    <th className="p-3">Sleeve Inseam</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="p-3 font-semibold">38 Regular</td>
                    <td className="p-3">{unit === 'inches' ? '38"' : '96.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '17.5"' : '44.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '32"' : '81 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '25"' : '63.5 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">40 Regular</td>
                    <td className="p-3">{unit === 'inches' ? '40"' : '101.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '18"' : '45.7 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '34"' : '86 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '25.5"' : '64.8 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">42 Regular / Long</td>
                    <td className="p-3">{unit === 'inches' ? '42"' : '106.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '18.5"' : '47 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '36"' : '91.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '26"' : '66 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">44 Regular / Long</td>
                    <td className="p-3">{unit === 'inches' ? '44"' : '111.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '19.2"' : '48.8 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '38"' : '96.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '26.5"' : '67.3 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">46 Regular</td>
                    <td className="p-3">{unit === 'inches' ? '46"' : '117 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '20"' : '50.8 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '40"' : '101.5 cm'}</td>
                    <td className="p-3">{unit === 'inches' ? '27"' : '68.5 cm'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'traditional' && (
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-4 text-xs text-stone-700 leading-relaxed">
              <h4 className="font-serif-luxury text-base font-semibold text-stone-900">
                Nigerian Traditional Agbada & Aso-Ebi Fitting Notes
              </h4>
              <p>
                Our <strong>Grand Agbada Sets</strong> are designed with sovereign drape spanning from 56 inches to 64 inches wingspan. The internal <em>Buba</em> (inner tunic) and <em>Sokoto</em> (tailored trousers) are custom-fitted to your exact chest, waist, and inseam.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block mb-1">Standard Agbada Sizing:</strong>
                  <p>Medium (Chest 38-41") • Large (Chest 42-45") • XL (Chest 46-50")</p>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block mb-1">Bespoke Fit Recommended:</strong>
                  <p>We provide full made-to-measure tailoring for all traditional wedding & ceremonial garments.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shoes' && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                <thead className="bg-stone-100 text-stone-700 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3">EU Size</th>
                    <th className="p-3">UK Men</th>
                    <th className="p-3">US Men</th>
                    <th className="p-3">US Women</th>
                    <th className="p-3">Foot Length ({unit})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr><td className="p-3 font-semibold">EU 37</td><td className="p-3">4</td><td className="p-3">5</td><td className="p-3">6.5</td><td className="p-3">{unit === 'inches' ? '9.3"' : '23.5 cm'}</td></tr>
                  <tr><td className="p-3 font-semibold">EU 38</td><td className="p-3">5</td><td className="p-3">6</td><td className="p-3">7.5</td><td className="p-3">{unit === 'inches' ? '9.6"' : '24.4 cm'}</td></tr>
                  <tr><td className="p-3 font-semibold">EU 39</td><td className="p-3">6</td><td className="p-3">7</td><td className="p-3">8.5</td><td className="p-3">{unit === 'inches' ? '9.9"' : '25.1 cm'}</td></tr>
                  <tr><td className="p-3 font-semibold">EU 40</td><td className="p-3">6.5</td><td className="p-3">7.5</td><td className="p-3">9.5</td><td className="p-3">{unit === 'inches' ? '10.2"' : '25.9 cm'}</td></tr>
                  <tr><td className="p-3 font-semibold">EU 41</td><td className="p-3">7.5</td><td className="p-3">8.5</td><td className="p-3">10.5</td><td className="p-3">{unit === 'inches' ? '10.5"' : '26.7 cm'}</td></tr>
                  <tr><td className="p-3 font-semibold">EU 42</td><td className="p-3">8.5</td><td className="p-3">9.5</td><td className="p-3">11.5</td><td className="p-3">{unit === 'inches' ? '10.8"' : '27.5 cm'}</td></tr>
                  <tr><td className="p-3 font-semibold">EU 43</td><td className="p-3">9.5</td><td className="p-3">10.5</td><td className="p-3">-</td><td className="p-3">{unit === 'inches' ? '11.1"' : '28.3 cm'}</td></tr>
                  <tr><td className="p-3 font-semibold">EU 44</td><td className="p-3">10.5</td><td className="p-3">11.5</td><td className="p-3">-</td><td className="p-3">{unit === 'inches' ? '11.4"' : '29.0 cm'}</td></tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Need Custom Measurements Banner */}
          <div className="bg-[#141414] text-white p-5 rounded-2xl border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Scissors className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-white">Need Bespoke Made-to-Measure?</h4>
                <p className="text-xs text-stone-400">Our tailors will draft a custom digital pattern for your exact physique.</p>
              </div>
            </div>
            <button
              onClick={() => {
                closeSizeGuide();
                openTailoringModal();
              }}
              className="bg-[#D4AF37] hover:bg-[#B38E22] text-[#111111] text-xs uppercase tracking-widest font-bold px-5 py-2.5 rounded-full transition-colors cursor-pointer shrink-0"
            >
              Book Custom Fitting
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
