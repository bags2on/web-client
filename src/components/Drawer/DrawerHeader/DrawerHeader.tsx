import React from 'react'
import NightToggle from '../../../shared/NightToggle/NightToggle'
import logoImage from '../../../assets/svg/logo.svg'

import { Container, LogoWrapper, ThemeWrapper } from './DrawerHeader.styled'

interface DrawerHeaderProps {
  themeChanger(checked: boolean): void
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ themeChanger }) => {
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

export default DrawerHeader
