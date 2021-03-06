import React from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
import { ReactComponent as PhoneIcon } from '../../assets/svg/phone.svg'
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg'
import { ReactComponent as TelegramIcon } from '../../assets/svg/telegram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg'
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
            <Typography component="p" className={classes.phone}>
              099&nbsp;123&nbsp;45&nbsp;67
            </Typography>
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
        <div className={clsx([classes.column, classes.category])}>
          <Typography component="h5">Категории</Typography>
          <ul>
            <li>
              <Link to="#">
                <Typography component="p">Сумки</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography component="p">Кошельки</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography component="p">Чемоданы</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography component="p">Женские</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography component="p">Мужские</Typography>
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx([classes.column, classes.info])}>
          <Typography component="h5">Информация</Typography>
          <ul>
            <li>
              <Link to="#">
                <Typography component="p">Доставка</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography component="p">Обратная связь</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography component="p">Возврат</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography component="p">Политика конфиденциальности</Typography>
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.contact}>
          <Typography component="h5">Связь с нами</Typography>
          <p className={classes.contactMessage}>
            Привет, мы всегда открыты для сотрудничества и предложений, свяжитесь с нами одним из способов ниже
          </p>
          <ul className={classes.contactDetails}>
            <li>
              <Typography component="p">Телефон:</Typography>
              <Typography component="span">099 123 45 67</Typography>
            </li>
            <li>
              <Typography component="p">Эл. почта:</Typography>
              <Typography component="span">test-mail@some.com</Typography>
            </li>
            <li>
              <Typography component="p">Рабочие часы:</Typography>
              <Typography component="span">Пн-Вс, 9:00-20:00</Typography>
            </li>
            <li>
              <Typography component="p">Мы находимся:</Typography>
              <Typography component="span">г. Харьков</Typography>
            </li>
          </ul>
        </div>
      </footer>
      <div className={classes.subFooter}>
        <Typography component="span">{process.env.REACT_APP_NAME} © 2021</Typography>
      </div>
    </div>
  )
}

export default Footer
