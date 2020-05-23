import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import gift from '../../../assets/svg/gift.svg'
import truck from '../../../assets/svg/truck.svg'
import money from '../../../assets/svg/money.svg'
import clock from '../../../assets/svg/clock.svg'

const items = [
  {
    heading: 'Акции',
    description: 'Наличие товаров по акции',
    to: '',
    icon: gift
  },
  {
    heading: 'Доставка по Украине',
    description: 'В любой город наложенным платежом',
    to: '',
    icon: truck
  },

  {
    heading: 'Работаем всю неделю',
    description: '9.00 - 18.00',
    to: '',
    icon: clock
  },
  {
    heading: 'Оплата При Получении',
    description: 'Курьеру или в отделении Новой Почты',
    to: '',
    icon: money
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    // background: '#232121',
    background: '#f8fafa',
    padding: '20px 0',
    color: theme.palette.primary.main
  },
  list: {
    maxWidth: 1500,
    margin: '0 auto',
    padding: 0,
    listStyle: 'none',
    '& li': {
      padding: 1,
      margin: '18px 0'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
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
  heading: {
    marginTop: '17px',
    marginBottom: '10px',
    textAlign: 'center',
    fontWeight: 600
  },
  description: {
    textAlign: 'center',
    margin: 0
  }
}))

const Advantages: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <ul className={classes.list}>
        {items.map((item, ind) => {
          return (
            <li key={ind}>
              <div className={classes.iconWrap}>
                <img src={item.icon} alt={item.heading} />
              </div>
              <div>
                <Typography component="h3" className={classes.heading}>
                  {item.heading}
                </Typography>
                <Typography component="p" className={classes.description}>
                  {item.description}
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
