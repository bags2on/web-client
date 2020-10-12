import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CartItem, { CartItemType } from '../CartItem/CartItem'
import { ReactComponent as EmptyCartIcon } from '../../../assets/svg/emptycart.svg'
import { makeStyles } from '@material-ui/core'
import Summary from '../Summary/Summary'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

interface CartItemsProps {}

const GET_CART_IDS = gql`
  {
    cartItems @client
  }
`

const GET_ALL_PRODUCTS_BY_ID = gql`
  query productsByID($ids: [String!]) {
    productsByID(ids: $ids) {
      id
      title
      price
      amount
      preview
    }
  }
`

const useStyles = makeStyles(() => ({
  root: {},
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    paddingTop: '20px'
  },
  emptyContainer: {
    height: 'calc(100vh - 142px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  imageBox: {
    padding: '0 15px',
    '& > svg': {
      width: '100%',
      height: 'auto',
      fill: 'gray'
    },
    '& > p': {
      fontSize: 20,
      fontWeight: 500,
      textAlign: 'center'
    }
  }
}))

const CartItems: React.FC<CartItemsProps> = () => {
  const classes = useStyles()
  const savedIDS = useQuery(GET_CART_IDS)

  const isCartEmpty = savedIDS.data.cartItems.length === 0

  const { data, loading } = useQuery(GET_ALL_PRODUCTS_BY_ID, {
    variables: {
      ids: savedIDS.data.cartItems
    },
    fetchPolicy: 'network-only',
    skip: isCartEmpty
  })

  if (loading) {
    return <p>Loading</p>
  }

  const totalSumm = data?.productsByID.reduce((previousValue: number, currentValue: CartItemType) => {
    return previousValue + currentValue.price * currentValue.amount
  }, 0)

  console.log(totalSumm)

  return (
    <Box>
      {isCartEmpty ? (
        <Box className={classes.emptyContainer}>
          <div className={classes.imageBox}>
            <EmptyCartIcon />
            <Typography component="p">Корзина пуста</Typography>
          </div>
        </Box>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Summary totalSum={totalSumm} />
          </Grid>
          <Grid item>
            <Grid container component="ul" className={classes.list}>
              {data?.productsByID.map((product: CartItemType, ind: number) => (
                <Grid key={ind} component="li" item xs={12}>
                  <CartItem item={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  )
}

export default CartItems
