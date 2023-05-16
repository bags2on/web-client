import React from 'react'
import NightToggle from '../../../shared/NightToggle/NightToggle'
import logoImage from '../../../assets/svg/logo.svg'

import { Container, LogoWrapper, ThemeWrapper } from './SidebarHead.styled'

interface SidebarHeadProps {
  themeChanger(checked: boolean): void
}

const SidebarHead: React.FC<SidebarHeadProps> = ({ themeChanger }) => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logoImage} alt="логотип" />
      </LogoWrapper>

      <ThemeWrapper>
        <NightToggle themeChanger={themeChanger} />
      </ThemeWrapper>
    </Container>
  )
}

export default SidebarHead
