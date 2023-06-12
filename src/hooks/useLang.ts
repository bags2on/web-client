import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'next-i18next'

export const useLang = (): [string, (lang: string) => void] => {
  const { i18n } = useTranslation()

  const [lang, setLang] = useState<string>('')

  const langHandler = (lang: string): void => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }

  const setDefaultLang = useCallback((): void => {
    langHandler('ru')
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!i18n.language) {
      setDefaultLang()
      return
    }

    setLang(i18n.language)
  }, [i18n.language, setDefaultLang])

  return [lang, langHandler]
}
