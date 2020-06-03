import React from 'react'
import DrawerUI from '@material-ui/core/Drawer'
import DrawerHeader from './DrawerHeader/DrawerHeader'
import List from '@material-ui/core/List'
import SvgIcon from '@material-ui/core/SvgIcon'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import history from '../../utils/history'
import { makeStyles } from '@material-ui/core'
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
  text: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    // background: '#303030'
    color: '#fff'
  },
  drawer: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: '#303030'
  },
  drawerItem: {
    margin: '5px 0',
    paddingLeft: '19px'
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
      fontSize: '18px'
    }
  }
}))

const drawerItems: DrawerItem[] = [
  {
    icon: HomeIcon,
    to: '/',
    text: 'Home'
  },
  {
    icon: PercentIcon,
    to: '/discounts',
    text: 'Sales'
  },
  {
    icon: ListIcon,
    to: '/catalog',
    text: 'Catalog'
  },
  {
    icon: LookIcon,
    to: '/history',
    text: 'Watch history'
  }
]

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, themeChanger }) => {
  const classes = useStyles()

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
        <List component="ul" aria-label="shop's content">
          {drawerItems.map((item) => (
            <ListItem
              key={item.text}
              onClick={() => goTo(item.to)}
              className={classes.drawerItem}
              button
              component="li"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <SvgIcon fontSize="large" className={classes.icon}>
                  <item.icon />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary={item.text} className={classes.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </DrawerUI>
  )
}

export default Drawer
