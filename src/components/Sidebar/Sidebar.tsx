import React from 'react'
import Drawer from '@/shared/Drawer'
import SidebarHead from './SidebarHead/SidebarHead'
import SidebarNavList from './SidebarNavList/SidebarNavList'
import SocialLink from './SocialLink/SocialLink'
import LangSwitcher from '@/components/LangSwitcher'
import { useTranslation } from 'next-i18next'

import { Container, LanguageBox, SocialBox } from './Sidebar.styled'

interface SidebarProps {
  isOpen: boolean
  theme: 'light' | 'dark'
  onClose(): void
  themeChanger(checked: boolean): void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, theme, onClose, themeChanger }) => {
  const { t } = useTranslation()

  return (
    <Drawer open={isOpen} position="left" onClose={onClose}>
      <Container>
        <SidebarHead theme={theme} themeChanger={themeChanger} />
        <SidebarNavList onClose={onClose} />
        <LanguageBox>
          <span>{t('drawer.lang')}</span>
          <LangSwitcher />
        </LanguageBox>
        <SocialBox>
          <SocialLink />
        </SocialBox>
      </Container>
    </Drawer>
  )
}

export default Sidebar
