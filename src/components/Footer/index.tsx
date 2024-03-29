import { memo } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import PhoneIcon from '../../../public/assets/icons/phone.svg'
import TelegramIcon from '../../../public/assets/icons/telegram.svg'

import styles from './styles.module.scss'

export const Footer = memo(function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.root}>
        <div className={styles.brand}>
          <Link href="#">
            <div className={styles.logo}>
              <Image src="/assets/logo.svg" alt="логотип" width={190} height={41} />
            </div>
          </Link>
          <div className={styles.logoBox}>
            <a className={styles.phone} href={'tel:' + process.env.NEXT_PUBLIC_CONTACT_PHONE}>
              {process.env.NEXT_PUBLIC_CONTACT_PHONE}
            </a>
            <a
              className={styles.makeCallPlug}
              href={'tel:' + process.env.NEXT_PUBLIC_CONTACT_PHONE}
            >
              <div className={clsx('svg-icon', styles.phoneIcon)}>
                <PhoneIcon />
              </div>
              <span>Позвонить</span>
            </a>
          </div>
          <a
            href={'https://t.me/' + process.env.NEXT_PUBLIC_TELEGRAM_USERNAME}
            className={styles.telegramConnect}
          >
            <div className={clsx('svg-icon', styles.telegramIcon)}>
              <TelegramIcon />
            </div>
            <span>@{process.env.NEXT_PUBLIC_TELEGRAM_USERNAME}</span>
          </a>
        </div>
        <div className={clsx(styles.column, styles.category)}>
          <h5>Категории</h5>
          <ul>
            <li>
              <Link href="#">
                <p>Сумки</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Кошельки</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Чемоданы</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Женские</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Мужские</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.column, styles.info)}>
          <h5>Информация</h5>
          <ul>
            <li>
              <Link href="/terms/payment-and-delivery">
                <p>Доставка</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Обратная связь</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Возврат</p>
              </Link>
            </li>
            <li>
              <Link href="/terms/terms-of-site-use">
                <p>Условия использования сайта</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h5>Связь с нами</h5>
          <p className={styles.contactMessage}>
            Привет, мы всегда открыты для сотрудничества и предложений, свяжитесь с нами одним из
            способов ниже
          </p>
          <ul className={styles.contactDetails}>
            <li>
              <p>Телефон:</p>
              <span>{process.env.NEXT_PUBLIC_CONTACT_PHONE}</span>
            </li>
            <li>
              <p>Эл. почта:</p>
              <span>test-mail@some.com</span>
            </li>
            <li>
              <p>Рабочие часы:</p>
              <span>Пн-Вс, 9:00-20:00</span>
            </li>
            <li>
              <p>Мы находимся:</p>
              <span>г. Харьков</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.subFooter}>
        <span>{process.env.NEXT_PUBLIC_APP_NAME} © 2024</span>
      </div>
    </footer>
  )
})
