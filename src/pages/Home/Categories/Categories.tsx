import React from 'react'
import Icon from '@material-ui/core/SvgIcon'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { ReactComponent as BaggageIcon } from '../../../assets/svg/baggage.svg'
import { ReactComponent as WalletIcon } from '../../../assets/svg/wallet.svg'
import { ReactComponent as BagIcon } from '../../../assets/svg/shopping-bag.svg'
import { ReactComponent as OtherIcon } from '../../../assets/svg/other.svg'
import { makeStyles } from '@material-ui/core'
// import routes from '../../../utils/routes'

interface CategoriesProps {}

type CategoryItemType = {
  icon: React.ElementType
  to: string
  text: string
}

const categoriesValues: {
  group: CategoryItemType[]
}[] = [
  {
    group: [
      {
        icon: BagIcon,
        to: '#',
        text: 'Сумки' // Bags
      },
      {
        icon: BaggageIcon,
        to: '#',
        text: 'Чемоданы' // Suitcases
      }
    ]
  },
  {
    group: [
      {
        icon: WalletIcon,
        to: '#',
        text: 'Кошельки' // Wallets
      },
      {
        icon: OtherIcon,
        to: '/catalog',
        text: 'Все'
      }
    ]
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 15,
    '& ul': {
      listStyle: 'none',
      display: 'flex',
      margin: 0,
      padding: 0
    }
  },
  title: {
    fontSize: '23px',
    fontWeight: 600,
    marginLeft: '10px',
    marginBottom: '15px'
  },
  item: {
    margin: 5
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  icon: {
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 75,
    boxShadow: '0 2px 10px -1px rgba(0, 0, 0, 0.15)',
    '-webkit-tap-highlight-color': 'transparent',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    '&:hover': {
      boxShadow: '0 2px 10px 1px rgba(0, 0, 0, 0.15)'
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: 8
    }
  },
  itemIcon: {
    color: 'inherit',
    minWidth: 'auto',
    marginRight: 8
  },
  itemText: {
    margin: 0,
    '& > span': {
      paddingTop: 3,
      fontWeight: 500
    }
  },
  groupBox: {
    [theme.breakpoints.up('lg')]: {
      flexWrap: 'nowrap'
    }
  }
}))

const Categories: React.FC<CategoriesProps> = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Typography className={classes.title} component="h2">
        Категории
      </Typography>
      <div>
        <Grid component="ul" container>
          {categoriesValues.map((category, ind) => (
            <Grid container item key={ind} xs={6} lg={6} component="li" className={classes.groupBox}>
              {category.group.map((group, ind) => (
                <Grid key={ind} item xs={12} lg={6} className={classes.item}>
                  <Link className={classes.link} to={group.to}>
                    <ListItem component="div" className={classes.icon}>
                      <ListItemIcon className={classes.itemIcon}>
                        <Icon>
                          <group.icon />
                        </Icon>
                      </ListItemIcon>
                      <ListItemText className={classes.itemText} primary={group.text} />
                    </ListItem>
                  </Link>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default Categories
