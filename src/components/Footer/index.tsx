import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import PhoneIcon from '../../../public/assets/phone.svg'
import InstagramIcon from '../../../public/assets/instagram.svg'
import TelegramIcon from '../../../public/assets/telegram.svg'
import FacebookIcon from '../../../public/assets/facebook.svg'
import classes from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <footer className={classes.root}>
        <div className={classes.brand}>
          <Link href="#">
            <div className={classes.logo}>
              <Image src="/assets/logo.svg" alt="логотип" width={190} height={41} />
            </div>
          </Link>
          <div className={classes.logoBox}>
            <div className={clsx(classes.socialMediaIcon, classes.icon)}>
              <PhoneIcon />
            </div>
            <p className={classes.phone}>099&nbsp;123&nbsp;45&nbsp;67</p>
          </div>
          <ul className={classes.socialMedia}>
            <li>
              <Link href="#">
                <div className={classes.socialMediaIcon}>
                  <InstagramIcon />
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className={classes.socialMediaIcon}>
                  <FacebookIcon />
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className={classes.socialMediaIcon}>
                  <TelegramIcon />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx(classes.column, classes.category)}>
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
        <div className={clsx(classes.column, classes.info)}>
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
        <div className={classes.contact}>
          <h5>Связь с нами</h5>
          <p className={classes.contactMessage}>
            Привет, мы всегда открыты для сотрудничества и предложений, свяжитесь с нами одним из
            способов ниже
          </p>
          <ul className={classes.contactDetails}>
            <li>
              <p>Телефон:</p>
              <span>099 123 45 67</span>
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
      </footer>
      <div className={classes.subFooter}>
        <span>{process.env.REACT_APP_NAME} © 2023</span>
      </div>
    </div>
  )
}

export default Footer
