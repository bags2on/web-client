import React from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'
import Search from '../../components/Search/Search'
import { makeStyles } from '@material-ui/core'

interface HeaderProps {
  onDrawerOpen(): void
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  btns: {
    '&:hover': {
      background: 'none'
    }
  },
  midBtn: {
    paddingRight: 0
  }
}))

const Header: React.FC<HeaderProps> = ({ onDrawerOpen }) => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <IconButton onClick={onDrawerOpen} disableRipple color="primary" className={classes.btns}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Search />
      <IconButton color="primary" disableRipple className={clsx(classes.btns, classes.midBtn)}>
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
      <IconButton color="primary" disableRipple className={classes.btns}>
        <PersonIcon fontSize="large" />
      </IconButton>
    </header>
  )
}

export default Header
