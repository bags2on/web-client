import React from 'react'
import Drawer from '@/shared/Drawer'
import SidebarHead from './SidebarHead/SidebarHead'
import SidebarNavList from './SidebarNavList/SidebarNavList'
import LangSwitcher from '../../components/LangSwitcher/LangSwitcher'
import { useTranslation } from 'next-i18next'

import { Container, LanguageBox } from './Sidebar.styled'

interface SidebarProps {
  isOpen: boolean
  onClose(): void
  themeChanger(checked: boolean): void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, themeChanger }) => {
  const { t } = useTranslation()

  return (
    <Drawer open={isOpen} position="left" onClose={onClose}>
      <Container>
        <SidebarHead themeChanger={themeChanger} />
        <SidebarNavList onClose={onClose} />
        <LanguageBox>
          <span>{t('drawer.lang')}:</span>
          <LangSwitcher />
        </LanguageBox>
      </Container>
    </Drawer>
  )
}

export default Sidebar
