import React from 'react'
import clsx from 'clsx'
import logo from '../../assets/svg/small-logo.svg'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'
import Search from '../../components/Search/Search'
import { makeStyles } from '@material-ui/core'

interface HeaderProps {
  onDrawerOpen(): void
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    width: 180,
    margin: '8px 20px 0 20px',
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
      <div className={classes.logo}>
        <img src={logo} alt="Bags2on" />
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
