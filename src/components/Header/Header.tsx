import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'
import logo from '../../assets/rastr/small-logo.png'
import Search from '../../components/Search/Search'
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'
import NightToggleSwith from '../../common/NightToggleSwith/NightToggleSwith'
import routes from '../../utils/routes'

interface HeaderProps {
  onDrawerOpen(): void
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#282828',
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
  menuIcon: {
    fill: '#ff9900'
  },
  cart: {
    paddingRight: 0
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
      <IconButton color="primary" disableRipple className={clsx(classes.btns, classes.cart)}>
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
      <IconButton to={routes.login} color="primary" disableRipple className={classes.btns} component={Link}>
        <PersonIcon fontSize="large" />
      </IconButton>
      <div className={classes.toggl}>
        <NightToggleSwith themeChanger={themeChanger} />
      </div>
    </header>
  )
}

export default Header
