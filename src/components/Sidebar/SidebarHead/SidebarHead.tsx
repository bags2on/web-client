import React from 'react'
import ThemeToggle from '@/shared/ThemeToggle'
import Image from 'next/image'

import styles from './SidebarHead.module.scss'

interface SidebarHeadProps {
  theme: 'light' | 'dark'
  themeChanger(checked: boolean): void
}

const SidebarHead: React.FC<SidebarHeadProps> = ({ theme, themeChanger }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Image priority={true} width={150} height={40} src="/assets/logo.svg" alt="логотип" />
      </div>

      <div className={styles.themeSwitcher}>
        <ThemeToggle theme={theme} themeChanger={themeChanger} />
      </div>
    </div>
  )
}

export default SidebarHead
