import React from 'react'
import { Drawer } from '@/shared/Drawer'
import { SidebarHead } from './SidebarHead'
import { Navigation } from './Navigation'
import { Promo } from './Promo'
import { LangSwitcher } from '@/components/LangSwitcher'
import { useTranslation } from 'next-i18next'

import styles from './Sidebar.module.scss'

interface SidebarProps {
  isOpen: boolean
  onClose(): void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
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
          <Promo />
        </div>
      </div>
    </Drawer>
  )
}
