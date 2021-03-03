import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import CartItems from './CartItems/CartItems'
import Checkout from './Checkout/Checkout'
import { makeStyles } from '@material-ui/core'

interface CartProps {
  isOpen: boolean
  onClose(): void
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

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const classes = useStyles()

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={isOpen}
      // open
      classes={{
        root: classes.root,
        paper: classes.drawer
      }}
    >
      <div className={classes.root}>
        <CartItems onClose={onClose} />
        <Checkout />
      </div>
    </Drawer>
  )
}

export default Cart
