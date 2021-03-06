import React from 'react'
import Badge from '@material-ui/core/Badge'
import DrawerUI from '@material-ui/core/Drawer'
import DrawerHeader from './DrawerHeader/DrawerHeader'
import List from '@material-ui/core/List'
import SvgIcon from '@material-ui/core/SvgIcon'
import ListItem from '@material-ui/core/ListItem'
import LangSwitcher from '../../components/LangSwitcher/LangSwitcher'
import Typography from '@material-ui/core/Typography'
import history from '../../utils/history'
import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core'
import { GET_FAVORITE_AMOUNT } from '../../apollo/cache/queries/favorite'
import { SharedMutations } from '../../apollo/cache/mutations'
import { useTranslation } from 'react-i18next'
import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg'
import { ReactComponent as UserIcon } from '../../assets/svg/user.svg'
// import { ReactComponent as SaleIcon } from '../../assets/svg/sale.svg'
import { ReactComponent as HeartIcon } from '../../assets/svg/heart_2.svg'
import { ReactComponent as ListIcon } from '../../assets/svg/list.svg'
import { ReactComponent as EyeIcon } from '../../assets/svg/eye.svg'
import routes from '../../utils/routes'

interface DrawerProps {
  isOpen: boolean
  onClose(): void
  themeChanger(checked: boolean): void
}

interface DrawerItem {
  icon: React.ElementType
  to: string
  i18n: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.type === 'dark' ? '#fff' : '#000'
  },
  drawer: {
    width: '100%',
    height: '100vh',
    maxWidth: 300,
    backgroundColor: theme.palette.background.default
  },
  drawerItem: {
    margin: '5px 0',
    paddingLeft: 19
  },
  listItemIcon: {
    display: 'inline'
  },
  icon: {
    fill: theme.palette.type === 'light' ? '#343434' : theme.palette.secondary.main,
    fontSize: 33
  },
  text: {
    fontSize: 18,
    lineHeight: '18px',
    fontWeight: 500
  },
  languageBox: {
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      fontWeight: 500,
      fontSize: 18,
      marginLeft: 20,
      marginRight: 5
    }
  }
}))

const drawerItems: DrawerItem[] = [
  {
    icon: HomeIcon,
    to: routes.root,
    i18n: 'home'
  },
  // {
  //   icon: SaleIcon,
  //   to: '/discounts',
  //   i18n: 'sales'
  // },
  {
    icon: UserIcon,
    to: routes.profile,
    i18n: 'profile'
  },
  {
    icon: HeartIcon,
    to: routes.favorite,
    i18n: 'favorite'
  },

  {
    icon: ListIcon,
    to: routes.catalog,
    i18n: 'catalog'
  },
  {
    icon: EyeIcon,
    to: '#',
    i18n: 'history'
  }
]

interface FavoriteAmountQuery {
  favoriteAmount: number
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, themeChanger }) => {
  const classes = useStyles()
  const { data } = useQuery<FavoriteAmountQuery>(GET_FAVORITE_AMOUNT)
  const favoriteAmount = data?.favoriteAmount

  const { t } = useTranslation()

  const goTo = (path: string): void => {
    onClose()

    if (path === '/profile') {
      const isAuth = SharedMutations.checkAuthentication()
      if (!isAuth) return
    }

    setTimeout(() => {
      history.push(path)
    }, 250)
  }

  return (
    <DrawerUI
      anchor="left"
      onClose={onClose}
      open={isOpen}
      classes={{
        root: classes.root,
        paper: classes.drawer
      }}
    >
      <div className={classes.root}>
        <DrawerHeader themeChanger={themeChanger} />
        <List component="ul" aria-label="Навигация по магазину">
          {drawerItems.map((item) => (
            <ListItem
              key={item.to}
              onClick={(): void => goTo(item.to)}
              className={classes.drawerItem}
              button
              component="li"
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {item.i18n === 'favorite' ? (
                  <Badge badgeContent={favoriteAmount} max={999} color="error">
                    <SvgIcon component="span" className={classes.icon}>
                      <item.icon />
                    </SvgIcon>
                  </Badge>
                ) : (
                  <SvgIcon component="span" className={classes.icon}>
                    <item.icon />
                  </SvgIcon>
                )}
                <div style={{ marginLeft: 25 }}>
                  <Typography className={classes.text}>{t(`drawer.${item.i18n}`)}</Typography>
                </div>
              </div>
            </ListItem>
          ))}
        </List>
        <div className={classes.languageBox}>
          <Typography component="span">{t('drawer.lang')}:</Typography>
          <LangSwitcher />
        </div>
      </div>
    </DrawerUI>
  )
}

export default Drawer
