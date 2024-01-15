import React from 'react'
import clsx from 'clsx'
import TelegramIcon from '../../../../public/assets/icons/telegram.svg'

import styles from './SocialLink.module.scss'

export function SocialLink() {
  return (
    <a href={'https://t.me/' + process.env.NEXT_PUBLIC_TELEGRAM_USERNAME} className={styles.link}>
      <p className={styles.title}>
        Мы в <b>Telegram</b>
      </p>
      <div className={styles.iconWrapper}>
        <div className={clsx('svg-icon', styles.telegramIcon)}>
          <TelegramIcon />
        </div>
      </div>
    </a>
  )
}
