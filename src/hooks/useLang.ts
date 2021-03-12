import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

export const useLang = (): [string, (lang: string) => void] => {
  const { i18n } = useTranslation()

  const [lang, setLang] = useState<string>('') // TODO: probably without it?

  const langHandler = (lang: string): void => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }

  const cbLangHandler = useCallback((): void => {
    langHandler('ru')
  }, [])

  useEffect(() => {
    if (!i18n.language) {
      cbLangHandler()
      return
    }

    setLang(i18n.language)
  }, [i18n.language, cbLangHandler])

  return [lang, langHandler]
}
