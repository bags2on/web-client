import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

export type CartItemType = {
  title: string
  price: number
  amount: number
  preview: string
}

interface CartItemProps {
  item: CartItemType
}

const useStyles = makeStyles(() => ({
  root: {}
}))

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const classes = useStyles()

  return (
    <Box>
      <p>{item.title}</p>
      <p>price: {item.price}</p>
      <p>amount: {item.amount}</p>
    </Box>
  )
}

export default CartItem
