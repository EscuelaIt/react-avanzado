import { useTranslation } from 'react-i18next'
import translations from './en.json'

type Keys = keyof typeof translations

export function useI18n() {
  const translation = useTranslation()
  return {
    ...translation,
    t: translation.t as (key: Keys, options?: Record<string, string | number>) => string,
  }
}
