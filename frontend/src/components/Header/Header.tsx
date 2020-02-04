import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {},
  burger: {
    '&:hover': {
      background: 'none'
    }
  }
}))

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <header>
      <IconButton color="primary" className={classes.burger}>
        <MenuIcon fontSize="large" />
      </IconButton>
    </header>
  )
}

export default Header
