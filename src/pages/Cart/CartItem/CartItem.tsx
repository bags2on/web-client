import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

interface CartItemProps {}

const useStyles = makeStyles(() => ({
  root: {}
}))

const CartItem: React.FC<CartItemProps> = () => {
  const classes = useStyles()

  return (
    <Box>
      <p>Cart Item</p>
    </Box>
  )
}

export default CartItem
