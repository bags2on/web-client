import React from 'react'
import ThemeToggle from '@/shared/ThemeToggle'
import Image from 'next/image'

import { Container, LogoWrapper, ThemeWrapper } from './SidebarHead.styled'

interface SidebarHeadProps {
  theme: 'light' | 'dark'
  themeChanger(checked: boolean): void
}

const SidebarHead: React.FC<SidebarHeadProps> = ({ theme, themeChanger }) => {
  return (
    <Container>
      <LogoWrapper>
        <Image priority={true} width={150} height={40} src="/assets/logo.svg" alt="логотип" />
      </LogoWrapper>

      <ThemeWrapper>
        <ThemeToggle theme={theme} themeChanger={themeChanger} />
      </ThemeWrapper>
    </Container>
  )
}

export default SidebarHead
