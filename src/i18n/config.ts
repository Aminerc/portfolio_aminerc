import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslations from '../locales/fr.json';
import enTranslations from '../locales/en.json';
import itTranslations from '../locales/it.json';
import arTranslations from '../locales/ar.json';

const resources = {
  fr: {
    translation: frTranslations,
  },
  en: {
    translation: enTranslations,
  },
  it: {
    translation: itTranslations,
  },
  ar: {
    translation: arTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // React échappe déjà les valeurs
    },
    react: {
      useSuspense: false,
    },
  });

// Fonction pour changer la langue et mettre à jour la direction du document
export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  
  // Gérer la direction RTL pour l'arabe
  if (lng === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lng);
  }
  
  // Sauvegarder la préférence
  localStorage.setItem('language', lng);
};

// Initialiser la langue depuis le localStorage ou la langue du navigateur
const savedLanguage = localStorage.getItem('language') || 'fr';
// Initialiser la direction au chargement
if (savedLanguage === 'ar') {
  document.documentElement.setAttribute('dir', 'rtl');
  document.documentElement.setAttribute('lang', 'ar');
} else {
  document.documentElement.setAttribute('dir', 'ltr');
  document.documentElement.setAttribute('lang', savedLanguage);
}

export default i18n;
