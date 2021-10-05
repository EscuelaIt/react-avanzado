import 'react-i18next'
import global from './features/achievements/i18n/en.json'
import achievements from './features/achievements/i18n/en.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      global: typeof global
      achievements: typeof achievements
    }
  }
}
