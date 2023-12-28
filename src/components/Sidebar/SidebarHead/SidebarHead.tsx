import React from 'react'
import Image from 'next/image'
import ThemeToggle from '@/shared/ThemeToggle'

import styles from './SidebarHead.module.scss'

const SidebarHead: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Image priority={true} width={150} height={40} src="/assets/logo.svg" alt="логотип" />
      </div>

      <div className={styles.themeSwitcher}>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default SidebarHead
