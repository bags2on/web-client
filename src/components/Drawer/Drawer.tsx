import React from 'react'
import DrawerUI from '@material-ui/core/Drawer'
import DrawerHeader from './DrawerHeader/DrawerHeader'
import List from '@material-ui/core/List'
import SvgIcon from '@material-ui/core/SvgIcon'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import LangSwitcher from '../../components/LangSwitcher/LangSwitcher'
import Typography from '@material-ui/core/Typography'
import history from '../../utils/history'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg'
import { ReactComponent as PercentIcon } from '../../assets/svg/sale.svg'
import { ReactComponent as ListIcon } from '../../assets/svg/list.svg'
import { ReactComponent as LookIcon } from '../../assets/svg/look.svg'

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
    // background: '#303030'
    color: theme.palette.type === 'dark' ? '#fff' : '#000'
  },
  drawer: {
    width: '100%',
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
    height: 'auto',
    fill: '#ff9900'
  },
  text: {
    '& > span': {
      fontSize: 18,
      fontWeight: 500
    }
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
    to: '/',
    i18n: 'home'
  },
  {
    icon: PercentIcon,
    to: '/discounts',
    i18n: 'sales'
  },
  {
    icon: ListIcon,
    to: '/catalog',
    i18n: 'catalog'
  },
  {
    icon: LookIcon,
    to: '/history',
    i18n: 'history'
  }
]

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, themeChanger }) => {
  const classes = useStyles()

  const { t } = useTranslation()

  const goTo = (path: string): void => {
    onClose()
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
              <ListItemIcon className={classes.listItemIcon}>
                <SvgIcon fontSize="large" className={classes.icon}>
                  <item.icon />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary={t(`drawer.${item.i18n}`)} className={classes.text} />
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
