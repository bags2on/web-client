import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import logo from '../../assets/rastr/small-logo.png'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'
import Search from '../../components/Search/Search'
import NightToggleSwith from '../../common/NightToggleSwith/NightToggleSwith'
import { makeStyles } from '@material-ui/core'

interface HeaderProps {
  onDrawerOpen(): void
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 80px'
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
    paddingRight: 0,
    [theme.breakpoints.up('lg')]: {
      paddingRight: '12px'
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
      <div>
        <NightToggleSwith />
      </div>
      <Search />
      <IconButton color="primary" disableRipple className={clsx(classes.btns, classes.cart)}>
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
      <IconButton color="primary" disableRipple className={classes.btns}>
        <PersonIcon fontSize="large" />
      </IconButton>
    </header>
  )
}

export default Header
