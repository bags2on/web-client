import React from 'react'
import NightToggle from '@/shared/NightToggle'
import Image from 'next/image'

import { Container, LogoWrapper, ThemeWrapper } from './SidebarHead.styled'

interface SidebarHeadProps {
  themeChanger(checked: boolean): void
}

const SidebarHead: React.FC<SidebarHeadProps> = ({ themeChanger }) => {
  return (
    <Container>
      <LogoWrapper>
        <Image width={150} height={40} priority src="/assets/logo.svg" alt="логотип" />
      </LogoWrapper>

      <ThemeWrapper>
        <NightToggle themeChanger={themeChanger} />
      </ThemeWrapper>
    </Container>
  )
}

export default SidebarHead
