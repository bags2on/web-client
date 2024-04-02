import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import FlashIcon from '../../../../../public/assets/icons/flash.svg'
import { routeNames } from '@/utils/navigation'
import { useTranslation } from 'next-i18next'

import styles from './Categories.module.scss'

const categoriesValues: Array<{
  img: string
  to: string
  i18n: string
}> = [
  {
    img: '/assets/rastr/suitcase.png',
    to: routeNames.catalog,
    i18n: 'suitcases'
  },
  {
    img: '/assets/rastr/wallet.png',
    to: routeNames.catalog,
    i18n: 'wallets'
  },
  {
    img: '/assets/rastr/bag.png',
    to: routeNames.catalog,
    i18n: 'bags'
  },
  {
    img: '/assets/rastr/backpack.png',
    to: routeNames.catalog,
    i18n: 'backpacks'
  }
]

export function Categories() {
  const { t } = useTranslation('home')

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <div className={clsx('svg-icon', styles.flashIcon)}>
          <FlashIcon />
        </div>
        {t('headers.categories')}
      </h1>
      <div>
        <ul className={styles.categoryList}>
          {categoriesValues.map((category, ind) => (
            <li key={ind} className={styles.categoryItem}>
              <Link href={category.to} className={styles.linkWrapper}>
                <div className={styles.inner}>
                  <div className={styles.imageWrapper}>
                    <Image
                      priority
                      src={category.img}
                      width={360}
                      height={360}
                      alt={`Изображение категории - ${t(`categories.${category.i18n}`)}`}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.details}>
                    <p>{t(`categories.${category.i18n}`)}</p>
                    <span>{t(`categories.seeAll`)}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
