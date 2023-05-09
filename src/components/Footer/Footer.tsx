import React from 'react'
import clsx from 'clsx'
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
import { ReactComponent as PhoneIcon } from '../../assets/svg/icons/phone.svg'
import { ReactComponent as InstagramIcon } from '../../assets/svg/icons/instagram.svg'
import { ReactComponent as TelegramIcon } from '../../assets/svg/icons/telegram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/svg/icons/facebook.svg'
import logoImage from '../../assets/svg/logo.svg'
import classes from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <footer className={classes.root}>
        <div className={classes.brand}>
          <Link to="#">
            <div className={classes.logo}>
              <img src={logoImage} alt="логотип" />
            </div>
          </Link>
          <div className={classes.logoBox}>
            <Icon className={classes.icon}>
              <PhoneIcon />
            </Icon>
            <p className={classes.phone}>099&nbsp;123&nbsp;45&nbsp;67</p>
          </div>
          <ul className={classes.socialMedia}>
            <li>
              <Link to="#">
                <Icon className={classes.socialMediaIcon}>
                  <InstagramIcon />
                </Icon>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Icon className={classes.socialMediaIcon}>
                  <FacebookIcon />
                </Icon>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Icon className={classes.socialMediaIcon}>
                  <TelegramIcon />
                </Icon>
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx(classes.column, classes.category)}>
          <h5>Категории</h5>
          <ul>
            <li>
              <Link to="#">
                <p>Сумки</p>
              </Link>
            </li>
            <li>
              <Link to="#">
                <p>Кошельки</p>
              </Link>
            </li>
            <li>
              <Link to="#">
                <p>Чемоданы</p>
              </Link>
            </li>
            <li>
              <Link to="#">
                <p>Женские</p>
              </Link>
            </li>
            <li>
              <Link to="#">
                <p>Мужские</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx(classes.column, classes.info)}>
          <h5>Информация</h5>
          <ul>
            <li>
              <Link to="/terms/payment-and-delivery">
                <p>Доставка</p>
              </Link>
            </li>
            <li>
              <Link to="#">
                <p>Обратная связь</p>
              </Link>
            </li>
            <li>
              <Link to="#">
                <p>Возврат</p>
              </Link>
            </li>
            <li>
              <Link to="/terms/terms-of-site-use">
                <p>Условия использования сайта</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.contact}>
          <h5>Связь с нами</h5>
          <p className={classes.contactMessage}>
            Привет, мы всегда открыты для сотрудничества и предложений, свяжитесь с нами одним из способов ниже
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
