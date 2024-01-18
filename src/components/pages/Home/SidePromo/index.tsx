import React from 'react'
import Link from 'next/link'
import { LinkBadge } from '@/shared/LinkBadge'
import { useTranslation } from 'next-i18next'
import { routeNames } from '@/utils/navigation'

import styles from './SidePromo.module.scss'

export function SidePromo() {
  const { t } = useTranslation('home')

  return (
    <Link href={routeNames.catalog} className={styles.wrapper}>
      <LinkBadge>
        <div className={styles.inner}>
          <div className={styles.info}>
            <p className={styles.title}>Скидки</p>
            <div className={styles.plugWrapper}>
              <div className={styles.plug}>{t('promo.action')}</div>
            </div>
          </div>
          <div className={styles.promoPattern} />
        </div>
      </LinkBadge>
    </Link>
  )
}
