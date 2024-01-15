import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import styles from './Advantages.module.scss'

export function Advantages() {
  const { t } = useTranslation('home')

  const items = [
    {
      title: 'advantages.discounts.title',
      info: 'advantages.discounts.info',
      icon: '/assets/icons/gift.svg'
    },
    {
      title: 'advantages.delivery.title',
      info: 'advantages.delivery.info',
      icon: '/assets/icons/truck.svg'
    },

    {
      title: 'advantages.workTime.title',
      info: 'advantages.workTime.info',
      icon: '/assets/icons/clock.svg'
    },
    {
      title: 'advantages.payment.title',
      info: 'advantages.payment.info',
      icon: '/assets/icons/money.svg'
    }
  ]

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {items.map((item, ind) => {
            const title = t(item.title)

            return (
              <li key={ind}>
                <div className={styles.iconWrapper}>
                  <Image src={item.icon} alt={'картинка - ' + title} width={150} height={150} />
                </div>
                <div>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.subTitle}>{t(item.info)}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
      <div className={styles.divider} />
    </>
  )
}
