import React from 'react'
import Drawer from '@/shared/Drawer'
import { SidebarHead } from './SidebarHead/SidebarHead'
import Navigation from './Navigation'
import SocialLink from './SocialLink/SocialLink'
import { LangSwitcher } from '@/components/LangSwitcher'
import { useTranslation } from 'next-i18next'

import styles from './Sidebar.module.scss'

interface SidebarProps {
  isOpen: boolean
  onClose(): void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation()

  return (
    <Drawer open={isOpen} position="left" onClose={onClose}>
      <div className={styles.container}>
        <SidebarHead />
        <Navigation onClose={onClose} />
        <div className={styles.langSwitch}>
          <span>{t('drawer.lang')}</span>
          <LangSwitcher />
        </div>
        <div className={styles.social}>
          <SocialLink />
        </div>
      </div>
    </Drawer>
  )
}

export default Sidebar
