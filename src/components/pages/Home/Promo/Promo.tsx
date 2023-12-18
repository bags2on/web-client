import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import LinkBadge from '@/shared/LinkBadge'
import { routeNames } from '@/utils/navigation'
import { useTranslation } from 'next-i18next'

import styles from './Promo.module.scss'

const Promo: React.FC = () => {
  const { t } = useTranslation('home')

  return (
    <section className={styles.container}>
      <Link href={routeNames.catalog} className={styles.linkWrapper}>
        <LinkBadge>
          <div className={styles.imageBox}>
            <Image
              src="/assets/rastr/promo-1.jpeg"
              alt={`банер: '${t('promo.firstTitle')}'`}
              width={1000}
              height={500}
            />
          </div>
          <div className={clsx(styles.content, styles.leftContent)}>
            <p className={styles.title}>{t('promo.firstTitle')}</p>
            <div className={styles.buttonWrapper}>
              <div className={styles.plug}>{t('promo.action')}</div>
            </div>
          </div>
        </LinkBadge>
      </Link>
      <Link href={routeNames.catalog} className={styles.linkWrapper}>
        <LinkBadge>
          <div className={styles.imageBox}>
            <Image
              src="/assets/rastr/promo-2.jpeg"
              alt={`банер: '${t('promo.secondTitle')}'`}
              width={1000}
              height={500}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{t('promo.secondTitle')}</p>
            <div className={styles.buttonWrapper}>
              <div className={styles.plug}>{t('promo.action')}</div>
            </div>
          </div>
        </LinkBadge>
      </Link>
    </section>
  )
}

export default Promo
