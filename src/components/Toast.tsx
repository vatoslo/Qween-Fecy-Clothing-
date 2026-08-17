import React from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { CheckCircle2, AlertCircle, Info, Sparkles, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toasts, removeToast } = useBoutique();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div 
      id="boutique-toast-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          id={`toast-${toast.id}`}
          className="bg-[#111111] text-white border border-[#D4AF37] rounded-2xl p-4 shadow-[0_15px_40px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-5 duration-300 flex items-start gap-3.5 pointer-events-auto"
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            {toast.type === 'gold' && <Sparkles className="w-5 h-5 text-[#D4AF37]" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-amber-300" />}
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h4 className="font-serif-luxury text-sm font-semibold text-white">
                {toast.title}
              </h4>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-stone-400 hover:text-white p-0.5 ml-2 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-stone-300 font-light mt-0.5 leading-relaxed">
              {toast.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
