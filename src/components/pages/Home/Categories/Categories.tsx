import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SvgIcon from '@/shared/SvgIcon'
import FlashIcon from '../../../../../public/assets/icons/flash.svg'
import { routeNames } from '@/utils/navigation'
import { useTranslation } from 'next-i18next'

import styles from './Categories.module.scss'

type categoryItemType = {
  img: string
  to: string
  i18n: string
  backgroundColor: string
  borderColor: string
}

const categoriesValues: categoryItemType[] = [
  {
    img: '/assets/rastr/suitcase.png',
    to: routeNames.catalog,
    i18n: 'suitcases',
    backgroundColor: '#edfdf1',
    borderColor: '#c0e7ca'
  },
  {
    img: '/assets/rastr/wallet.png',
    to: routeNames.catalog,
    i18n: 'wallets',
    backgroundColor: '#fdfddc',
    borderColor: '#dee0af'
  },
  {
    img: '/assets/rastr/bag.png',
    to: routeNames.catalog,
    i18n: 'bags',
    backgroundColor: '#f4f4ff',
    borderColor: '#dbdbfa'
  },
  {
    img: '/assets/rastr/backpack.png',
    to: routeNames.catalog,
    i18n: 'backpacks',
    backgroundColor: '#e4fffa',
    borderColor: '#c2ebe3'
  }
]

const Categories: React.FC = () => {
  const { t } = useTranslation('home')

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <SvgIcon>
          <FlashIcon />
        </SvgIcon>
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
                    <div
                      className={styles.fallback}
                      style={{
                        backgroundColor: category.backgroundColor,
                        borderColor: category.borderColor
                      }}
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

export default Categories
