import React from 'react'
import { Container, Lang } from './LangSwitcher.styled'
import { useRouter } from 'next/router'

const locales = {
  ua: 'Ua',
  ru: 'Ru'
}

const LangSwitcher: React.FC = () => {
  const router = useRouter()
  const { locale = 'ua', pathname, asPath, query } = router

  const handleLangSelect = (lang: string) => {
    router.push({ pathname, query }, asPath, { locale: lang })
  }

  return (
    <Container>
      {Object.keys(locales).map((lang) => (
        <Lang key={lang} $active={lang === locale} onClick={() => handleLangSelect(lang)}>
          {locales[lang as keyof typeof locales]}
        </Lang>
      ))}
    </Container>
  )
}

export default LangSwitcher
