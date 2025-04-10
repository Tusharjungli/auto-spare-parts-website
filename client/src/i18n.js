import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Logo": "Logo",
          "Year/Make/Model": "Year/Make/Model",
          "Cart": "Cart",
          "Boss Zone": "Boss Zone",
          "Find Your Parts": "Find Your Parts",
          "Shop Now": "Shop Now",
          "Browse Categories": "Browse Categories",
          "All Categories": "All Categories",
          "Braking System": "Braking System",
          "Engine Components": "Engine Components",
          "Car Body and Main Parts": "Car Body and Main Parts",
          "All Prices": "All Prices",
          "Under ₹1000": "Under ₹1000",
          "₹1000 - ₹2000": "₹1000 - ₹2000",
          "Above ₹2000": "Above ₹2000",
          "Category": "Category",
          "Price": "Price",
          "Add to Cart": "Add to Cart",
          "Hey Boss, Talk to Us!": "Hey Boss, Talk to Us!",
          "Tell Us What You Think": "Tell Us What You Think",
          "Your Name": "Your Name",
          "Your Email": "Your Email",
          "Your Feedback": "Your Feedback",
          "Submit": "Submit",
          "Close": "Close",
          "Thanks, Boss!": "Thanks, Boss!",
          "Use code": "Use code",
          "for 5% off your next order!": "for 5% off your next order!",
          "Your Cart": "Your Cart",
          "Your cart is empty.": "Your cart is empty.",
          "Remove": "Remove",
          "Total": "Total",
          "Checkout": "Checkout",
        },
      },
      hi: {
        translation: {
          "Logo": "लोगो",
          "Year/Make/Model": "वर्ष/निर्माता/मॉडल",
          "Cart": "कार्ट",
          "Boss Zone": "बॉस ज़ोन",
          "Find Your Parts": "अपने पार्ट्स खोजें",
          "Shop Now": "अभी खरीदें",
          "Browse Categories": "श्रेणियाँ ब्राउज़ करें",
          "All Categories": "सभी श्रेणियाँ",
          "Braking System": "ब्रेकिंग सिस्टम",
          "Engine Components": "इंजन के हिस्से",
          "Car Body and Main Parts": "कार बॉडी और मुख्य हिस्से",
          "All Prices": "सभी कीमतें",
          "Under ₹1000": "₹1000 से कम",
          "₹1000 - ₹2000": "₹1000 - ₹2000",
          "Above ₹2000": "₹2000 से ऊपर",
          "Category": "श्रेणी",
          "Price": "कीमत",
          "Add to Cart": "कार्ट में जोड़ें",
          "Hey Boss, Talk to Us!": "हाय बॉस, हमसे बात करें!",
          "Tell Us What You Think": "हमें बताएं आप क्या सोचते हैं",
          "Your Name": "आपका नाम",
          "Your Email": "आपका ईमेल",
          "Your Feedback": "आपकी प्रतिक्रिया",
          "Submit": "जमा करें",
          "Close": "बंद करें",
          "Thanks, Boss!": "धन्यवाद, बॉस!",
          "Use code": "कोड का उपयोग करें",
          "for 5% off your next order!": "अगले ऑर्डर पर 5% छूट के लिए!",
          "Your Cart": "आपका कार्ट",
          "Your cart is empty.": "आपका कार्ट खाली है।",
          "Remove": "हटाएं",
          "Total": "कुल",
          "Checkout": "चेकआउट",
        },
      },
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;