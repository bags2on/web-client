import React from 'react'
import NightToggle from '../../shared/NightToggle/NightToggle'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
import { ReactComponent as PhoneIcon } from '../../assets/svg/phone-call.svg'
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg'
import { ReactComponent as TelegramIcon } from '../../assets/svg/telegram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg'
import classes from './Footer.module.scss'

interface FooterProps {
  themeChanger(checked: boolean): void
}

const Footer: React.FC<FooterProps> = ({ themeChanger }) => {
  return (
    <div>
      <footer className={classes.root}>
        <div className={classes.contact}>
          <Typography component="h5">Связь с нами</Typography>
          <p className={classes.contactMessage}>
            Привет, мы всегда открыты для сотрудничества и предложений, свяжитесь с нами одним из способов ниже
          </p>
          <ul className={classes.contactDetails}>
            <li>
              <Typography component="p">Телефон</Typography>
              <Typography component="span">380 ** *** ****</Typography>
            </li>
            <li>
              <Typography component="p">Эл. почта</Typography>
              <Typography component="span">test-mail@some.com</Typography>
            </li>
            <li>
              <Typography component="p">Рабочие часы</Typography>
              <Typography component="span">Пн-Вс, 9:00-20:00</Typography>
            </li>
            <li>
              <Typography component="p">Мы находимся</Typography>
              <Typography component="span">г. Харьков</Typography>
            </li>
          </ul>
        </div>
        <div className={classes.info}>
          <Typography component="h5">Информация</Typography>
          <Link to="#">
            <Typography component="p">Доставка</Typography>
          </Link>
          <Link to="#">
            <Typography component="p">Обратная связь</Typography>
          </Link>
          <Link to="#">
            <Typography component="p">Возврат</Typography>
          </Link>
          <Link to="#">
            <Typography component="p">Политика конфиденциальности</Typography>
          </Link>
        </div>
        <div className={classes.brand}>
          <Link to="#">
            <Typography className={classes.logo} component="h1">
              Bags
              <sup>2</sup>
              on
            </Typography>
          </Link>
          <div className={classes.logoBox}>
            <Icon className={classes.icon}>
              <PhoneIcon />
            </Icon>
            <Typography component="p" className={classes.phone}>
              38(099)-111-1111
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
                  <TelegramIcon />
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
          </ul>
          <div className={classes.theme}>
            <NightToggle themeChanger={themeChanger} />
          </div>
        </div>
      </footer>
      <div className={classes.subFooter}>
        <Typography component="span">Bags2on © 2021</Typography>
      </div>
    </div>
  )
}

export default Footer
