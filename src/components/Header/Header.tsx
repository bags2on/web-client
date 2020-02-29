import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'
import logo from '../../assets/rastr/small-logo.png'
import Search from '../../components/Search/Search'
import NightToggleSwith from '../../common/NightToggleSwith/NightToggleSwith'
import routes from '../../utils/routes'

interface HeaderProps {
  onDrawerOpen(): void
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#282828',
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

const Header: React.FC<HeaderProps> = ({ onDrawerOpen }) => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <IconButton onClick={onDrawerOpen} disableRipple color="primary" className={clsx(classes.btns, classes.menuBtn)}>
        <MenuIcon fontSize="large" />
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
        <NightToggleSwith />
      </div>
    </header>
  )
}

export default Header
