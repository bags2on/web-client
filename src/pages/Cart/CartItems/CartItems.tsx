import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CartItem, { CartItemType } from '../CartItem/CartItem'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

interface CartItemsProps {}

interface CartTotals {
  cartItems: string[]
}

const GET_CART_IDS = gql`
  {
    cartItems @client
  }
`

const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart @client
  }
`

const GET_ALL_PRODUCTS_BY_ID = gql`
  query productsByID($ids: [String!]) {
    productsByID(ids: $ids) {
      title
      price
      amount
      preview
    }
  }
`

const useStyles = makeStyles(() => ({
  root: {},
  list: {}
}))

const CartItems: React.FC<CartItemsProps> = () => {
  const classes = useStyles()
  const savedIDS = useQuery<CartTotals>(GET_CART_IDS)
  const { data, loading } = useQuery(GET_ALL_PRODUCTS_BY_ID, {
    variables: {
      ids: savedIDS.data?.cartItems
    },
    fetchPolicy: 'network-only'
  })

  console.log(data)

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
      {loading ? (
        <p>Loading</p>
      ) : (
        <Grid container component="ul" className={classes.list}>
          {data?.productsByID.map((product: CartItemType, ind: number) => (
            <Grid key={ind} component="li" item xs={12}>
              <CartItem item={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default CartItems
