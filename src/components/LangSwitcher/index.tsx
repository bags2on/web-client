import React from 'react'
import { useLang } from '@/hooks'
import { Container, Lang } from './LangSwitcher.styled'

const LangSwitcher: React.FC = () => {
  const [currentLang, changeLang] = useLang()

  const langs = ['ru', 'ua']

  return (
    <Container>
      {langs.map((lang) => (
        <Lang key={lang} $active={lang === currentLang} onClick={() => changeLang(lang)}>
          {lang}
        </Lang>
      ))}
    </Container>
  )
}

export default LangSwitcher
