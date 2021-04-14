import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'
import Button from '../../../shared/Button/Button'
import { Link } from 'react-router-dom'
import { ReactComponent as LetterCheckImage } from '../../../assets/svg/letter-check.svg'
import { ReactComponent as MailImage } from '../../../assets/svg/mail.svg'
import { ReactComponent as PinImage } from '../../../assets/svg/pin.svg'
import { makeStyles } from '@material-ui/core'

interface OrderSuccessProps {
  onClose(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    position: 'relative',
    backgroundColor: '#fafafa'
  },
  imageBox: {
    width: 133,
    paddingTop: 120,
    margin: '0 auto'
  },
  title: {
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
      lineHeight: '15px',
      color: '#676767',
      fontSize: 13
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
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

const OrderSuccess: React.FC<OrderSuccessProps> = ({ onClose }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.imageBox}>
        <LetterCheckImage />
      </div>
      <div className={classes.orderInfoBox}>
        <Typography component="h3" className={classes.title}>
          Вы успешно создали заказ!
        </Typography>
        <div className={classes.subTitle}>
          <Typography component="p">Мы свяжемся с вами в ближайшее время для подтверждения</Typography>
        </div>
        <ul className={classes.detailsList}>
          <li className={classes.orderInfo}>
            <SvgIcon fontSize="large" component="span">
              <MailImage />
            </SvgIcon>
            <Typography component="p">Проверьте свой почтовый ящик для уточнения деталей</Typography>
          </li>
          <li className={classes.orderInfo}>
            <SvgIcon fontSize="large" component="span">
              <PinImage />
            </SvgIcon>
            <Typography component="p">
              Вы можете отследить статус покупки в&nbsp;
              <Link to="#" className={classes.profileLink}>
                личном кабинете
              </Link>
            </Typography>
          </li>
        </ul>
        <div className={classes.buttonWrapper}>
          <Button fullWidth color="secondary" onClick={onClose}>
            Готово
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess
