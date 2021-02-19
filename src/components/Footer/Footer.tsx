import React from 'react'
import NightToggle from '../../shared/NightToggle/NightToggle'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
import { ReactComponent as PhoneIcon } from '../../assets/svg/phone-call.svg'
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg'
import { ReactComponent as TelegramIcon } from '../../assets/svg/telegram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg'
import { makeStyles } from '@material-ui/core'

interface FooterProps {
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#333',
    position: 'relative',
    padding: '30px 5% 15px 5%',
    flexWrap: 'wrap',
    [theme.breakpoints.up('xl')]: {
      padding: '30px 10% 15px 10%'
    }
  },
  contact: {
    color: '#fff',
    textAlign: 'center',
    '& h5': {
      fontSize: 15,
      marginBottom: 25
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 420,
      textAlign: 'start',
      flexBasis: '50%'
    },
    [theme.breakpoints.up('xl')]: {
      marginRight: 50
    },
    [theme.breakpoints.up('laptop')]: {
      flexBasis: 'auto'
    }
  },
  contactMessage: {
    color: '#a29e9e',
    fontSize: 12,
    margin: 0,
    marginBottom: 14
  },
  contactDetails: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    '& li': {
      flexBasis: '50%',
      marginBottom: 15
    },
    '& p': {
      fontSize: 15,
      color: '#a29e9e'
    },
    '& span': {
      fontSize: 14
    }
  },
  information: {
    width: '100%',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
    '& h5': {
      fontSize: 15,
      marginBottom: 25
    },
    '& a': {
      textDecoration: 'none'
    },
    '& p': {
      fontSize: 15,
      color: '#a29e9e',
      marginBottom: 5,
      transition: 'color 0.2s',
      '&:hover': {
        color: '#ff9900'
      }
    },
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      flexBasis: '50%',
      margin: 0,
      textAlign: 'end'
    },
    [theme.breakpoints.up('laptop')]: {
      textAlign: 'start',
      flexBasis: 'auto'
    }
  },
  theme: {
    position: 'absolute',
    top: -10,
    right: -35,
    [theme.breakpoints.up('laptop')]: {
      top: 5,
      right: -30
    }
  },
  brandSection: {
    position: 'relative',
    margin: '0 auto',
    '& > a': {
      textDecoration: 'none'
    },
    [theme.breakpoints.up('laptop')]: {
      margin: 0,
      marginLeft: 'auto',
      paddingTop: 20
    }
  },
  logo: {
    fontSize: 47,
    fontWeight: 500,
    color: 'transparent',
    background: 'linear-gradient(to right, #fc4a1a, #FFDD00, #f7b733)',
    userSelect: 'none',
    '-webkit-background-clip': 'text'
  },
  logoBox: {
    display: 'flex',
    paddingLeft: 4
  },
  icon: {
    paddingTop: 4,
    marginRight: 14,
    height: 42,
    fontSize: 20,
    fill: '#a29e9e'
  },
  bigNumber: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 20
  },
  subFooter: {
    backgroundColor: '#252121',
    padding: '10px 10%',
    color: '#a29e9e',
    textAlign: 'center',
    '& > span': {
      fontSize: 12
    }
  },
  socialMedia: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
    [theme.breakpoints.up('desktop')]: {
      paddingLeft: 5,
      justifyContent: 'flex-start'
    }
  },
  socialMediaIcon: {
    fontSize: '15px',
    fill: '#A0A0A0',
    marginRight: 8,
    transition: 'fill 0.2s',
    '&:hover': {
      fill: '#ff9900'
    },
    '& svg': {
      width: 20,
      height: 20
    }
  }
}))

const Footer: React.FC<FooterProps> = ({ themeChanger }) => {
  const classes = useStyles()

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
        <div className={classes.information}>
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
        <div className={classes.brandSection}>
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
            <Typography component="p" className={classes.bigNumber}>
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
