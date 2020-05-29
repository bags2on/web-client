import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import logo from '../../assets/rastr/small-logo.png'
import Search from '../../components/Search/Search'
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'
import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg'
import NightToggleSwith from '../../common/NightToggleSwith/NightToggleSwith'
// import routes from '../../utils/routes'

interface HeaderProps {
  onDrawerOpen(): void
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0',
    // backgroundColor: theme.palette.type === 'light' ? '#ff9900' : '#282828',
    [theme.breakpoints.up('lg')]: {
      padding: '4px 20px'
    }
  },
  logo: {
    width: 180,
    margin: '8px 20px 0 10px',
    '& > img': {
      width: '100%',
      height: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  btns: {
    '&:hover': {
      background: 'none'
    }
  },
  menuBtn: {
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  cartIcon: {
    fontSize: 30,
    fill: '#303030'
  },
  menuIcon: {
    fill: theme.palette.type === 'light' ? '#303030' : '#ff9900'
  },
  cart: {
    // paddingRight: 0
  },
  toggl: {
    marginLeft: 7,
    paddingRight: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

const Header: React.FC<HeaderProps> = ({ onDrawerOpen, themeChanger }) => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <IconButton onClick={onDrawerOpen} disableRipple className={clsx(classes.btns, classes.menuBtn)}>
        <Icon
          classes={{
            root: classes.menuIcon
          }}
        >
          <MenuIcon />
        </Icon>
      </IconButton>
      <Link to="/">
        <div className={classes.logo}>
          <img src={logo} alt="Bags2on" />
        </div>
      </Link>
      <Search />
      <IconButton color="primary" disableRipple className={classes.btns}>
        <Icon className={classes.cartIcon}>
          <CartIcon />
        </Icon>
      </IconButton>
      <div className={classes.toggl}>
        <NightToggleSwith themeChanger={themeChanger} />
      </div>
    </header>
  )
}

export default Header
