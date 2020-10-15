import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import CartItems from './CartItems/CartItems'
import { makeStyles } from '@material-ui/core'

interface CartProps {
  isOpen: boolean
  onClose(): void
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.type === 'dark' ? '#fff' : '#000'
  },
  drawer: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
      maxWidth: 400 // 363
    }
  }
}))

const Cart: React.FC<CartProps> = ({ isOpen, onClose, themeChanger }) => {
  const classes = useStyles()

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={isOpen}
      classes={{
        root: classes.root,
        paper: classes.drawer
      }}
    >
      <div className={classes.root}>
        <CartItems onClose={onClose} />
      </div>
    </Drawer>
  )
}

export default Cart
