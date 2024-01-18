import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import TelegramIcon from '../../../../public/assets/icons/telegram.svg'

import styles from './Promo.module.scss'

export function Promo() {
  return (
    <div className={styles.container}>
      <a
        href={'https://t.me/' + process.env.NEXT_PUBLIC_TELEGRAM_USERNAME}
        className={styles.inner}
      >
        <div className={clsx('svg-icon', styles.telegramIcon)}>
          <TelegramIcon />
        </div>
        <span className={styles.title}>
          Наш чат в <b>Telegram</b>
        </span>
      </a>
      <Image
        priority={true}
        width={270}
        height={180}
        src="/assets/sidebar-telegram-promo.png"
        alt="фото чата telegram для связи с магазином"
        className={styles.image}
      />
    </div>
  )
}
