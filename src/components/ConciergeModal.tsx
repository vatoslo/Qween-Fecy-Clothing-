import React, { useState, useEffect, useRef } from 'react';
import { useBoutique } from '../context/BoutiqueContext';
import { QWEEN_FECY_CONFIG } from '../config/concierge';
import { SAMPLE_PRODUCTS } from '../data/products';
import { 
  X, 
  Mic, 
  MicOff, 
  Sparkles, 
  PhoneCall, 
  Send, 
  Settings, 
  ExternalLink,
  Bot,
  User,
  ArrowRight
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'concierge' | 'user';
  text: string;
  recommendationProductIds?: string[];
  timestamp: string;
}

export const ConciergeModal: React.FC = () => {
  const { 
    isConciergeOpen, 
    closeConcierge, 
    conciergePrompt, 
    openProductDetail,
    openTailoringModal,
    showToast
  } = useBoutique();

  const [isListening, setIsListening] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showConfigSettings, setShowConfigSettings] = useState(false);
  const [audioLevel, setAudioLevel] = useState<number[]>([15, 30, 45, 25, 60, 40, 20]);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'concierge',
      text: 'Good day. Welcome to Qween Fecy Fashion. I am your personal fashion concierge. How may I assist your style journey today? I can help you select pieces for weddings, galas, book a private atelier fitting, or discuss custom fabrics.',
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isConciergeOpen && conciergePrompt) {
      handleUserQuery(conciergePrompt);
    }
  }, [isConciergeOpen, conciergePrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSpeaking]);

  // Simulated audio levels during speaking/listening
  useEffect(() => {
    let interval: any;
    if (isListening || isSpeaking) {
      interval = setInterval(() => {
        setAudioLevel([
          Math.floor(Math.random() * 60) + 15,
          Math.floor(Math.random() * 85) + 20,
          Math.floor(Math.random() * 95) + 30,
          Math.floor(Math.random() * 70) + 20,
          Math.floor(Math.random() * 90) + 35,
          Math.floor(Math.random() * 75) + 25,
          Math.floor(Math.random() * 50) + 15,
        ]);
      }, 100);
    } else {
      setAudioLevel([15, 25, 35, 20, 40, 25, 15]);
    }
    return () => clearInterval(interval);
  }, [isListening, isSpeaking]);

  if (!isConciergeOpen) return null;

  const handleUserQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsSpeaking(true);

    // AI Concierge Response generator based on luxury boutique styling logic
    setTimeout(() => {
      const lower = queryText.toLowerCase();
      let responseText = '';
      let recommendedIds: string[] = [];

      if (lower.includes('wedding') || lower.includes('aso-ebi') || lower.includes('ceremony') || lower.includes('traditional') || lower.includes('agbada')) {
        responseText = 'For weddings and sovereign occasions, I highly recommend our Nigerian Traditional Couture line. For gentlemen, "The Oba Regal Agbada Set" in Swiss Damask with hand-stitched gold cord is unparalleled. For ladies, "The Queen Amina Silk Aso-Ebi Gown" with French corded lace and organza flounces creates an unforgettable entrance.';
        recommendedIds = ['qf-oba-regal-agbada', 'qf-queen-amina-asoebi'];
      } else if (lower.includes('gala') || lower.includes('black tie') || lower.includes('evening') || lower.includes('dress') || lower.includes('gown')) {
        responseText = 'For a black-tie evening gala, "The Amara Evening Gown" in emerald silk chiffon or "The Zara Silk Dress" in ivory Charmeuse offer effortless regal posture. For gentlemen, our "Royal Classic Suit" in Super 160s virgin wool or the "Monaco Velvet Tuxedo" will command the room.';
        recommendedIds = ['qf-amara-evening-gown', 'qf-zara-silk-dress', 'qf-royal-classic-suit'];
      } else if (lower.includes('suit') || lower.includes('blazer') || lower.includes('men') || lower.includes('work') || lower.includes('power')) {
        responseText = 'Our tailoring represents the height of modern architectural power dressing. "The Fecy Signature Blazer" with 24k gold heraldic buttons is our women\'s crown piece, while "The Royal Classic Suit" offers Savile-grade floating horsehair canvas construction.';
        recommendedIds = ['qf-fecy-signature-blazer', 'qf-royal-classic-suit'];
      } else if (lower.includes('bag') || lower.includes('shoe') || lower.includes('pearl') || lower.includes('jewelry') || lower.includes('accessor')) {
        responseText = 'To elevate your ensemble, explore "The Luxe Noir Handbag" handcrafted in Florence calfskin, our "Pearl Essence Jewelry Set" in South Sea pearls & 18k gold vermeil, or "The Imperial Loafer".';
        recommendedIds = ['qf-luxe-noir-handbag', 'qf-pearl-essence-jewelry-set', 'qf-imperial-loafer'];
      } else if (lower.includes('tailor') || lower.includes('custom') || lower.includes('fitting') || lower.includes('measure')) {
        responseText = 'We would be delighted to craft a bespoke creation tailored to your exact measurements. We offer private consultations at our Lekki flagship salon or virtual consultations with fabric swatches mailed directly to you. Shall we book your fitting?';
      } else {
        responseText = `Thank you for asking. At Qween Fecy, every piece is curated to express confidence, individuality, and timeless elegance. You can explore our new 2026 collection or let me know if you are styling for a specific event.`;
        recommendedIds = ['qf-amara-evening-gown', 'qf-fecy-signature-blazer'];
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'concierge',
        text: responseText,
        recommendationProductIds: recommendedIds.length > 0 ? recommendedIds : undefined,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsSpeaking(false);
    }, 1000);
  };

  const toggleSpeechRecognition = () => {
    if (!isListening) {
      setIsListening(true);
      showToast('Concierge Listening', 'Please speak clearly into your microphone...', 'gold');
      
      setTimeout(() => {
        setIsListening(false);
        const sampleVoiceQueries = [
          'Recommend a luxury gown for a red carpet gala',
          'Tell me about custom Agbada tailoring and fabrics',
          'What are the best accessories for The Amara Gown?',
        ];
        const randomQuery = sampleVoiceQueries[Math.floor(Math.random() * sampleVoiceQueries.length)];
        handleUserQuery(randomQuery);
      }, 3500);
    } else {
      setIsListening(false);
    }
  };

  return (
    <div 
      id="concierge-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={closeConcierge}
    >
      <div 
        id="concierge-modal-card"
        className="bg-[#141414] border border-[#D4AF37]/40 rounded-3xl w-full max-w-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] text-white overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#161616] border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#111111] flex items-center justify-center font-bold shadow-sm">
              <Sparkles className="w-5 h-5 text-[#111111]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif-luxury text-lg sm:text-xl font-light text-white">
                  {QWEEN_FECY_CONFIG.concierge.brandTitle}
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <p className="text-[10px] text-[#D4AF37] font-medium tracking-[0.2em] uppercase">
                {QWEEN_FECY_CONFIG.concierge.assistantName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="concierge-config-toggle-btn"
              onClick={() => setShowConfigSettings(!showConfigSettings)}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                showConfigSettings ? 'bg-[#D4AF37] text-[#111111] border-[#D4AF37]' : 'text-stone-400 border-stone-800 hover:text-white'
              }`}
              title="Concierge Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              id="concierge-close-btn"
              onClick={closeConcierge}
              className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Optional Vapi Config Info Bar */}
        {showConfigSettings && (
          <div className="bg-[#0E0E0E] border-b border-[#D4AF37]/30 p-4 text-xs space-y-2 text-stone-300">
            <div className="flex items-center justify-between text-[#D4AF37] font-medium text-[11px] tracking-wider uppercase">
              <span>Voice Concierge Integration Config</span>
              <span className="text-[9.5px] bg-stone-800 px-2 py-0.5 rounded text-stone-400">src/config/concierge.ts</span>
            </div>
            <p className="text-stone-400 text-[11px] font-light">
              The voice assistant button connects to your configured Vapi Assistant ID. Update the configuration below in <code className="text-[#D4AF37]">src/config/concierge.ts</code>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono bg-[#161616] p-2.5 rounded-lg border border-stone-800">
              <div><strong className="text-stone-400 font-sans">Vapi Assistant ID:</strong> <span className="text-emerald-400 ml-1">{QWEEN_FECY_CONFIG.concierge.vapiAssistantId}</span></div>
              <div><strong className="text-stone-400 font-sans">Boutique Phone:</strong> <span className="text-emerald-400 ml-1">{QWEEN_FECY_CONFIG.concierge.conciergePhoneNumber}</span></div>
            </div>
          </div>
        )}

        {/* Live Audio Visualizer Banner */}
        <div className="bg-[#111111] px-6 py-3 border-b border-stone-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 h-4">
              {audioLevel.map((h, i) => (
                <span
                  key={i}
                  className="w-1 bg-[#D4AF37] rounded-full transition-all duration-100"
                  style={{ height: `${isListening || isSpeaking ? h : 20}%` }}
                />
              ))}
            </div>
            <span className="text-xs text-stone-400 font-light">
              {isListening ? 'Listening to your voice...' : isSpeaking ? 'Qween Fecy Concierge speaking...' : 'Voice Assistant Ready'}
            </span>
          </div>

          <a
            id="modal-direct-phone-call-btn"
            href={`tel:${QWEEN_FECY_CONFIG.concierge.conciergePhoneNumber}`}
            className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call {QWEEN_FECY_CONFIG.boutique.phones.primary}</span>
          </a>
        </div>

        {/* Chat / Transcript Stream */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4 bg-[#121212] min-h-[260px] max-h-[360px]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'concierge' && (
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/60 text-[#D4AF37] flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#D4AF37] text-[#111111] font-medium rounded-tr-none'
                    : 'bg-[#1C1C1C] border border-stone-800 text-stone-200 rounded-tl-none space-y-3 font-light'
                }`}
              >
                <p>{msg.text}</p>

                {/* Product Recommendations Card Attachments */}
                {msg.recommendationProductIds && msg.recommendationProductIds.length > 0 && (
                  <div className="pt-2 border-t border-stone-800 space-y-2">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
                      Curated Creations for You:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {msg.recommendationProductIds.map((pid) => {
                        const product = SAMPLE_PRODUCTS.find((p) => p.id === pid);
                        if (!product) return null;
                        return (
                          <div
                            key={pid}
                            onClick={() => {
                              closeConcierge();
                              openProductDetail(product);
                            }}
                            className="bg-[#161616] hover:bg-[#202020] border border-stone-800 hover:border-[#D4AF37]/60 rounded-xl p-2 flex items-center gap-2 cursor-pointer transition-colors group"
                          >
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-12 h-12 rounded-lg object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="overflow-hidden">
                              <h4 className="text-xs font-normal text-white group-hover:text-[#D4AF37] truncate">
                                {product.name}
                              </h4>
                              <p className="text-[10px] text-stone-400 font-light">{product.tag || 'Luxury Piece'}</p>
                              <span className="text-[10px] text-[#D4AF37] font-medium flex items-center gap-0.5 mt-0.5">
                                View Piece <ArrowRight className="w-2.5 h-2.5" />
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <span className="block text-[10px] text-stone-400 text-right mt-1 opacity-70">
                  {msg.timestamp}
                </span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar & Voice Controls */}
        <div className="p-4 sm:p-5 bg-[#161616] border-t border-stone-800 space-y-3">
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUserQuery(inputText);
            }}
            className="flex items-center gap-2"
          >
            {/* Mic Toggle Button */}
            <button
              type="button"
              id="concierge-mic-btn"
              onClick={toggleSpeechRecognition}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                isListening
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-[#222222] hover:bg-[#2c2c2c] text-[#D4AF37] border border-[#D4AF37]/40'
              }`}
              title={isListening ? 'Listening (click to stop)' : 'Click to Speak'}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Text Input */}
            <input
              id="concierge-text-input"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about styling, fabrics, sizing, or occasions..."
              className="flex-1 bg-[#101010] border border-stone-700/80 focus:border-[#D4AF37] rounded-full px-4 py-2.5 text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none"
            />

            {/* Send Button */}
            <button
              type="submit"
              id="concierge-send-query-btn"
              disabled={!inputText.trim()}
              className="w-11 h-11 rounded-full bg-[#D4AF37] hover:bg-[#C29B27] disabled:opacity-40 text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Action Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => handleUserQuery('What is the best outfit for a black tie gala?')}
                className="text-[11px] bg-[#1E1E1E] hover:bg-[#282828] text-stone-300 px-3 py-1 rounded-full border border-stone-800 cursor-pointer font-light"
              >
                Black-tie Gala
              </button>
              <button
                type="button"
                onClick={() => handleUserQuery('Tell me about your custom Nigerian Agbada and Aso-Ebi')}
                className="text-[11px] bg-[#1E1E1E] hover:bg-[#282828] text-stone-300 px-3 py-1 rounded-full border border-stone-800 cursor-pointer font-light"
              >
                Traditional Couture
              </button>
              <button
                type="button"
                onClick={() => {
                  closeConcierge();
                  openTailoringModal();
                }}
                className="text-[11px] bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#D4AF37] px-3 py-1 rounded-full border border-[#D4AF37]/40 cursor-pointer font-medium"
              >
                Book Atelier Fitting
              </button>
            </div>

            <a
              id="concierge-whatsapp-direct-link"
              href={QWEEN_FECY_CONFIG.concierge.conciergeWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium"
            >
              <span>WhatsApp Stylist</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

