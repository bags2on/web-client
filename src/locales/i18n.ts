import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const isDebugMode = process.env.NODE_ENV === 'development'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    initImmediate: false,
    fallbackLng: 'ru', // can affect which language will be downloaded first from the server
    debug: isDebugMode,
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true
    },
    backend: {
      allowMultiLoading: false,
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage']
    }
  })

i18n.languages = ['ru', 'ua']

export default i18n
