import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import CartItems from './CartItems/CartItems'
import { makeStyles } from '@material-ui/core'
import history from '../../utils/history'
import routes from '../../utils/routes'

interface CartProps {
  isOpen: boolean
  onClose(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.type === 'dark' ? '#fff' : '#000',
    height: '100%'
  },
  drawer: {
    width: '100%',
    height: '100vh',
    overflowX: 'hidden',
    backgroundColor: '#fff',
    [theme.breakpoints.up('md')]: {
      maxWidth: 400 // 363
    }
  }
}))

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const classes = useStyles()

  const handleCheckout = (): void => {
    onClose()
    history.push(routes.checkout)
  }

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
        {isOpen && <CartItems key={1} onClose={onClose} onCheckout={handleCheckout} />}
      </div>
    </Drawer>
  )
}

export default Cart
