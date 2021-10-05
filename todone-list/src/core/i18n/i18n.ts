import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import globalEn from './i18n/en.json'
import globalEs from './i18n/es.json'
import achievementsEn from '../../features/achievements/delivery/i18n/en.json'
import achievementsEs from '../../features/achievements/delivery/i18n/es.json'

const resources = {
  en: {
    global: globalEn,
    achievements: achievementsEn,
  },
  es: {
    global: globalEs,
    achievements: achievementsEs,
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  ns: ['global', 'achievements'],
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export { i18n }
