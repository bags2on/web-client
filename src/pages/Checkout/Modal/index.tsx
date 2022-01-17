import React from 'react'
import Button from '../../../shared/Button/Button'
import AppModal from '../../../shared/Modal'
import SvgIcon from '@material-ui/core/SvgIcon'
import { Link } from 'react-router-dom'
import { ReactComponent as LetterCheckImage } from '../../../assets/svg/letter-check.svg'
import { ReactComponent as MailImage } from '../../../assets/svg/icons/mail.svg'
import { ReactComponent as PinImage } from '../../../assets/svg/icons/pin.svg'
import { makeStyles } from '@material-ui/core'

interface ModalProps {
  open: boolean
  onClose(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    height: '100vh',

    [theme.breakpoints.up('md')]: {
      padding: '0 50px',
      height: '570px'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center'
    },
    [theme.breakpoints.up('laptop')]: {
      width: 900,
      padding: 0
    }
  },
  imageBox: {
    paddingTop: 75,
    [theme.breakpoints.up('lg')]: {
      paddingTop: 0,
      marginRight: 50
    },
    [theme.breakpoints.up('laptop')]: {
      marginRight: 0,
      flexBasis: '50%'
    }
  },
  image: {
    width: 133,
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      width: 175
    }
  },
  title: {
    margin: 0,
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 5,
    textAlign: 'center'
  },
  subTitle: {
    width: 240,
    margin: '0 auto',
    textAlign: 'center',
    '& p': {
      margin: 0,
      fontSize: 13,
      lineHeight: '15px',
      color: theme.palette.type === 'light' ? '#676767' : '#e7e7e7'
    }
  },
  orderInfoBox: {
    padding: '30px 10px 0 10px'
  },
  orderInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    '& p': {
      margin: 0,
      fontSize: 14,
      lineHeight: '20px',
      marginLeft: 20,
      maxWidth: 275
    }
  },
  detailsList: {
    margin: 0,
    padding: 0,
    paddingTop: 30,
    listStyle: 'none'
  },
  buttonWrapper: {
    width: 130,
    margin: '0 auto',
    paddingTop: 21
  },
  profileLink: {
    fontWeight: 500,
    color: theme.palette.type === 'light' ? 'var(--green-light)' : theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  const classes = useStyles()

  return (
    <AppModal open={open} onClose={onClose}>
      <div className={classes.root}>
        <div className={classes.imageBox}>
          <div className={classes.image}>
            <LetterCheckImage />
          </div>
        </div>
        <div className={classes.orderInfoBox}>
          <h3 className={classes.title}>Вы успешно создали заказ!</h3>
          <div className={classes.subTitle}>
            <p>Мы свяжемся с вами в ближайшее время для подтверждения</p>
          </div>
          <ul className={classes.detailsList}>
            <li className={classes.orderInfo}>
              <SvgIcon fontSize="large" component="span">
                <MailImage />
              </SvgIcon>
              <p>Проверьте свой почтовый ящик для уточнения деталей</p>
            </li>
            <li className={classes.orderInfo}>
              <SvgIcon fontSize="large" component="span">
                <PinImage />
              </SvgIcon>
              <p>
                Вы можете отследить статус покупки в&nbsp;
                <Link to="#" className={classes.profileLink}>
                  личном кабинете
                </Link>
              </p>
            </li>
          </ul>
          <div className={classes.buttonWrapper}>
            <Button fullWidth color="secondary" onClick={onClose}>
              ok
            </Button>
          </div>
        </div>
      </div>
    </AppModal>
  )
}

export default Modal
