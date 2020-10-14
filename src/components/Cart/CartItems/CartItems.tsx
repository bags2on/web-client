import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppButton from '../../../shared/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import CartItem, { CartItemType } from '../CartItem/CartItem'
import { ReactComponent as EmptyCartIcon } from '../../../assets/svg/emptycart.svg'
import { makeStyles } from '@material-ui/core'
import Summary from '../Summary/Summary'
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

interface CartItemsProps {
  onClose(): void
}

const GET_CART_IDS = gql`
  {
    cartIDs @client
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

const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart @client
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    paddingTop: '20px'
  },
  clearCartButton: {
    display: 'block',
    fontSize: 16,
    padding: 10,
    fontWeight: 400,
    textTransform: 'none',
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline'
      }
    }
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

const CartItems: React.FC<CartItemsProps> = ({ onClose }) => {
  const classes = useStyles()
  const client = useApolloClient()
  const savedIDS = useQuery(GET_CART_IDS)
  const [onClearCart] = useMutation(CLEAR_CART)

  const isCartEmpty = savedIDS.data.cartIDs.length === 0

  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS_BY_ID, {
    variables: {
      ids: savedIDS.data.cartIDs
    },
    fetchPolicy: 'network-only',
    skip: isCartEmpty,
    onCompleted: (data) => {
      if (data) {
        const totalSumm = data.productsByID.reduce((previousValue: number, item: CartItemType) => {
          return previousValue + item.price * item.amount
        }, 0)

        client.writeData({ data: { cartTotalPrice: totalSumm } })
      }
    }
  })

  const handleClearAllClick = (): void => {
    onClearCart()
  }

  if (loading) {
    return <p>Loading</p> // ui
  }

  if (error) {
    return <p>Error</p> // ui
  }

  return (
    <Box>
      {isCartEmpty ? (
        <Box className={classes.emptyContainer}>
          <div className={classes.imageBox}>
            <EmptyCartIcon />
            <Typography component="p">Корзина пуста</Typography>
          </div>
          <Box margin="0 auto" width="130px" marginTop="50px">
            <AppButton fullWidth onClick={onClose} color="secondary" startIcon={<ArrowBackIosIcon />}>
              Назад
            </AppButton>
          </Box>
        </Box>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Summary onClose={onClose} />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleClearAllClick} className={classes.clearCartButton}>
              Очистить корзину
            </Button>
          </Grid>
          <Grid item xs={12}>
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
