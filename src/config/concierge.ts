/**
 * QWEEN FECY FASHION - CENTRAL CONFIGURATION
 * 
 * This file centralizes all business information, contact details,
 * physical boutique address placeholders, and the Vapi Voice Concierge assistant configuration.
 * The boutique owner can easily edit these values in one place.
 */

export interface ConciergeConfig {
  assistantName: string;
  brandTitle: string;
  designerName: string;
  vapiAssistantId: string;
  vapiPublicKey: string;
  conciergePhoneNumber: string;
  conciergeWhatsApp: string;
  conciergeEmail: string;
  isVoiceAssistantEnabled: boolean;
  defaultPromptVoice: string;
}

export interface BoutiqueInfo {
  name: string;
  brandFormal: string;
  designer: string;
  tagline: string;
  heritageTag: string;
  foundingEthos: string;
  hubs: {
    toronto: {
      city: string;
      region: string;
      country: string;
      notes: string;
      contact: string;
    };
    lagos: {
      city: string;
      region: string;
      country: string;
      notes: string;
      contact: string;
    };
  };
  openingHours: {
    toronto: string;
    lagos: string;
    virtual: string;
  };
  phones: {
    primary: string;
    directWhatsApp: string;
    torontoStudio: string;
    lagosAtelier: string;
  };
  emails: {
    general: string;
    concierge: string;
    bespoke: string;
    press: string;
  };
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}

export const QWEEN_FECY_CONFIG: {
  boutique: BoutiqueInfo;
  concierge: ConciergeConfig;
} = {
  boutique: {
    name: 'Qween Fecy',
    brandFormal: 'Qweenfecy Clothing',
    designer: 'Omobolanle Adesiyan',
    tagline: 'African Heritage. Contemporary Elegance.',
    heritageTag: 'Toronto × Lagos',
    foundingEthos: 'Fashion shaped by African creativity, Lagos craftsmanship and contemporary Canadian style. Celebrating individuality, cultural authenticity, custom bespoke design, and inclusive styling for every body shape.',
    hubs: {
      toronto: {
        city: 'Toronto',
        region: 'Ontario',
        country: 'Canada',
        notes: 'Private Bespoke & Fitting Studio (By Appointment)',
        contact: '+1 (416) 555-0198',
      },
      lagos: {
        city: 'Lagos',
        region: 'Lagos State',
        country: 'Nigeria',
        notes: 'Master Artisan Tailoring & Textile Atelier',
        contact: '+234 810 000 7329',
      },
    },
    openingHours: {
      toronto: 'Tuesday – Saturday: 11:00 AM – 6:00 PM (EST)',
      lagos: 'Monday – Friday: 9:00 AM – 6:00 PM (WAT)',
      virtual: 'Global Virtual Atelier Consultations 7 Days a Week',
    },
    phones: {
      primary: '+1 (416) 555-0198',
      directWhatsApp: '+14165550198',
      torontoStudio: '+1 (416) 555-0198',
      lagosAtelier: '+234 810 000 7329',
    },
    emails: {
      general: 'info@qweenfecy.com',
      concierge: 'concierge@qweenfecy.com',
      bespoke: 'custom@qweenfecy.com',
      press: 'press@qweenfecy.com',
    },
    socials: {
      instagram: 'https://instagram.com/qweenfecyclothing',
      facebook: 'https://facebook.com/qweenfecyclothing',
      tiktok: 'https://tiktok.com/@qweenfecyclothing',
    },
  },
  
  // Voice Assistant Configuration for Vapi integration
  concierge: {
    assistantName: 'Qween Fecy Fashion Concierge',
    brandTitle: 'Qween Fecy AI Fashion Concierge',
    designerName: 'Omobolanle Adesiyan',
    vapiAssistantId: 'vapi_assistant_qween_fecy_live_demo',
    vapiPublicKey: 'pk_live_qween_fecy_sample',
    conciergePhoneNumber: '+1 (416) 555-0198',
    conciergeWhatsApp: 'https://wa.me/14165550198?text=Hello%20Qween%20Fecy%20Concierge,%20I%20would%20like%20to%20enquire%20about%20a%20custom%20design%20or%20collection%20piece.',
    conciergeEmail: 'concierge@qweenfecy.com',
    isVoiceAssistantEnabled: true,
    defaultPromptVoice: 'Warm, refined African-Canadian luxury fashion advisor',
  },
};
