import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          email: 'email',
          password: 'password',
          send: 'Submit',
          ts: 'TypeScript'
        }
      },
      ru: {
        translations: {
          email: 'эл. почта',
          password: 'пароль',
          send: 'Отправить',
          ts: 'Тайп Скрипт'
        }
      },
      ua: {
        translations: {
          email: 'ел. пошта',
          password: 'пароль',
          send: 'Увійти',
          ts: 'Тайп Скрипт'
        }
      }
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  })

export default i18n
