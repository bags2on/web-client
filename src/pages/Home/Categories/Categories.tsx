import React from 'react'
import clsx from 'clsx'
import SvgIcon from '@material-ui/core/SvgIcon'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import routes from '../../../utils/routes'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ReactComponent as BaggageIcon } from '../../../assets/svg/icons/baggage.svg'
import { ReactComponent as WalletIcon } from '../../../assets/svg/icons/wallet.svg'
import { ReactComponent as BagIcon } from '../../../assets/svg/icons/shopping-bag.svg'
import { ReactComponent as OtherIcon } from '../../../assets/svg/icons/other.svg'
import { ReactComponent as FlashIcon } from '../../../assets/svg/flash.svg'
import { makeStyles } from '@material-ui/core'

type CategoryItemType = {
  icon: React.ElementType
  to: string
  i18n: string
  categoryName: string
}

const categoriesValues: {
  group: CategoryItemType[]
}[] = [
  {
    group: [
      {
        icon: BaggageIcon,
        to: routes.catalog,
        i18n: 'suitcases',
        categoryName: 'SUITCASE'
      },
      {
        icon: BagIcon,
        to: routes.catalog,
        i18n: 'bags',
        categoryName: 'BAG'
      }
    ]
  },
  {
    group: [
      {
        icon: WalletIcon,
        to: routes.catalog,
        i18n: 'wallets',
        categoryName: 'WALLET'
      },
      {
        icon: OtherIcon,
        to: routes.catalog,
        i18n: 'all',
        categoryName: ''
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
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '1.5',
    margin: '0 0 5px 10px',
    display: 'flex'
  },
  item: {
    margin: 5
  },
  link: {
    userSelect: 'none',
    textDecoration: 'none',
    color: 'inherit'
  },
  listItem: {
    userSelect: 'none',
    borderRadius: 8,
    height: 75,
    transition: 'all 0.3s',
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#363636',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    '-webkit-tap-highlight-color': 'transparent',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
        '& $icon': {
          transform: 'scale(1.2)'
        }
      }
    }
  },
  itemIcon: {
    color: 'inherit',
    minWidth: 'auto',
    marginRight: 8
  },
  icon: {
    fill: theme.palette.type === 'light' ? '#000' : theme.palette.secondary.main,
    transition: 'all .2s',
    fontSize: 45,
    userSelect: 'none'
  },
  walletSVG: {
    strokeWidth: '1px',
    stroke: theme.palette.type === 'light' ? '#000' : theme.palette.secondary.main
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

const Categories: React.FC = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <section className={classes.root}>
      <h2 className={classes.title}>
        <SvgIcon component="span">
          <FlashIcon />
        </SvgIcon>
        {t('home.categories')}
      </h2>
      <div>
        <Grid component="ul" container>
          {categoriesValues.map((category, ind) => (
            <Grid container item key={ind} xs={6} lg={6} component="li" className={classes.groupBox}>
              {category.group.map((group, ind) => (
                <Grid key={ind} item xs={12} lg={6} className={classes.item}>
                  <Link
                    className={classes.link}
                    to={{
                      pathname: group.to,

                      state: {
                        categoryName: group.categoryName
                      }
                    }}
                  >
                    <ListItem component="div" className={classes.listItem}>
                      <ListItemIcon className={classes.itemIcon}>
                        <SvgIcon
                          component="span"
                          // TODO: dumb decision
                          className={clsx({
                            [classes.icon]: true,
                            [classes.walletSVG]: group.i18n === 'wallets'
                          })}
                        >
                          <group.icon />
                        </SvgIcon>
                      </ListItemIcon>
                      <ListItemText className={classes.itemText} primary={t(`shared.categories.${group.i18n}`)} />
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
