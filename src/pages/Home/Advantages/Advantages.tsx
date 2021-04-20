import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import gift from '../../../assets/svg/gift.svg'
import truck from '../../../assets/svg/truck.svg'
import money from '../../../assets/svg/money.svg'
import clock from '../../../assets/svg/clock.svg'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: theme.palette.type === 'light' ? '#f8fafa' : '#282828',
    padding: '20px 0'
  },
  list: {
    maxWidth: 1400,
    margin: '0 auto',
    padding: 0,
    listStyle: 'none',
    '& li': {
      padding: 1,
      margin: '18px 0'
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'baseline',
      '& li': {
        flexGrow: 1,
        flexBasis: '25%',
        margin: 0,
        padding: '0 15px'
      }
    }
  },
  iconWrap: {
    height: '45px',
    margin: '0 auto',
    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  title: {
    marginTop: '17px',
    marginBottom: '10px',
    textAlign: 'center',
    fontWeight: 600,
    color: theme.palette.primary.main
  },
  info: {
    textAlign: 'center',
    margin: 0
  }
}))

const Advantages: React.FC = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const items = [
    {
      title: t('home.advantages.discounts.title'),
      info: t('home.advantages.discounts.info'),
      icon: gift
    },
    {
      title: t('home.advantages.delivery.title'),
      info: t('home.advantages.delivery.info'),
      icon: truck
    },

    {
      title: t('home.advantages.workTime.title'),
      info: t('home.advantages.workTime.info'),
      icon: clock
    },
    {
      title: t('home.advantages.payment.title'),
      info: t('home.advantages.payment.info'),
      icon: money
    }
  ]

  return (
    <section className={classes.root}>
      <ul className={classes.list}>
        {items.map((item, ind) => {
          return (
            <li key={ind}>
              <div className={classes.iconWrap}>
                <img src={item.icon} alt={item.title} />
              </div>
              <div>
                <Typography component="h3" className={classes.title}>
                  {item.title}
                </Typography>
                <Typography component="p" className={classes.info}>
                  {item.info}
                </Typography>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Advantages
