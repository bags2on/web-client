import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CartItem from '../CartItem/CartItem'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

interface CartItemsProps {}

interface CartTotals {
  cartItems: string[]
}

const GET_CART_TOTALS = gql`
  {
    cartItems @client
  }
`

const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart @client
  }
`

const useStyles = makeStyles(() => ({
  root: {},
  list: {}
}))

const CartItems: React.FC<CartItemsProps> = () => {
  const classes = useStyles()
  const { data } = useQuery<CartTotals>(GET_CART_TOTALS)
  const [onClearCart] = useMutation(CLEAR_CART)

  const handleClearAllClick = (): void => {
    onClearCart()
  }

  return (
    <Box component="section">
      <p>Cart Items</p>
      {/* temp solution  */}
      <Button onClick={handleClearAllClick}>Clear all</Button>
      {/*  */}
      <Grid container component="ul" className={classes.list}>
        {data?.cartItems.map((product, ind) => (
          <Grid key={ind} component="li" item xs={12} md={4} lg={3} xl={2}>
            <CartItem />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CartItems
