import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        homeTitle: 'Welcome to React and react-i18next',
      },
    },
    es: {
      translation: {
        homeTitle: 'Bienvenido a React',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export { i18n }
