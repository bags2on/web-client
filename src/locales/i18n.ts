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
    // fallbackLng - can affect which language will be downloaded first from the server
    fallbackLng: false,
    debug: isDebugMode,

    // common namespace used around the full app
    ns: ['filters'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true,
      useSuspense: true
    },
    backend: {
      //   allowMultiLoading: false,
      loadPath: './locales/{{lng}}/{{ns}}.json'
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage', 'cookie'],
      cookieMinutes: 80
    }
  })

export default i18n
