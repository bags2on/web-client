import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Summary from '../Summary/Summary'
import Button from '../../../shared/Button/Button'
import ResponsePlug from './ResponsePlug'
import ContentLoader from 'react-content-loader'
import CartItem, { CartItemType } from '../CartItem/CartItem'
import { useQuery } from '@apollo/client'
import { GET_CART_ITEMS } from '../../../apollo/cache/queries/cart'
import { CartMutations } from '../../../apollo/cache/mutations'
import {
  CartProductsDocument,
  CartProductsQuery,
  CartProductsVariables
} from '../../../graphql/product/_gen_/cartProducts.query'
import { makeStyles } from '@material-ui/core'

interface CartItemsProps {
  onClose(): void
  onCheckout(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  list: {
    margin: 0,
    padding: '20px 10px 0 10px',
    listStyle: 'none'
  },
  clearButton: {
    display: 'block',
    fontSize: 16,
    padding: 10,
    fontWeight: 400,
    textTransform: 'none',
    background: 'none',
    color: '#343434',
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline'
      }
    }
  },
  fallbackList: {
    margin: 0,
    padding: 0,
    paddingTop: 30,
    listStyle: 'none',
    width: '100%',
    '& li': {
      width: '100%'
    }
  }
}))

const CartItems: React.FC<CartItemsProps> = ({ onClose, onCheckout }) => {
  const classes = useStyles()
  const cart = useQuery(GET_CART_ITEMS)
  const isCartEmpty = cart.data.cartItems.length === 0

  const { data, loading, error } = useQuery<CartProductsQuery, CartProductsVariables>(CartProductsDocument, {
    variables: {
      input: cart.data.cartItems
    },
    fetchPolicy: 'network-only',
    skip: isCartEmpty,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data) {
        const totalSumm = data.cartProducts.reduce(
          (previousValue: number, item: CartItemType) => previousValue + item.currentPrice * item.amount,
          0
        )

        CartMutations.updateCartPrice(totalSumm)
      }
    }
  })

  console.log('data: ', data)

  if (isCartEmpty) {
    return <ResponsePlug text="Корзина пуста" onClose={onClose} />
  }

  if (error) {
    return <ResponsePlug text="Не удалось получить данные" onClose={onClose} />
  }

  const handleClearAllClick = (): void => {
    /*  Attention useEffect hook will invoke error: «Rendered fewer hooks than expected»
        because render and re-render depends on AC cart state and useSpring()...
    */
    CartMutations.clearCart()
  }

  const handleProductRemove = (id: string): void => {
    /*  Attention useEffect hook will invoke error: «Rendered fewer hooks than expected»
        because render and re-render depends on AC cart state and useSpring()...
    */
    CartMutations.removeProduct(id)
  }

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Summary isLoading={loading} onClose={onClose} onCheckout={onCheckout} />
        </Grid>
        {loading ? (
          <ul className={classes.fallbackList}>
            {cart.data.cartItems.map((_: unknown, index: number) => (
              <li key={index}>
                <ContentLoader
                  backgroundColor="#F2E30C"
                  foregroundColor="#ffd9a3"
                  width="100%"
                  height="210"
                  viewBox="0 0 400 210"
                >
                  <rect x="20" y="5" rx="6" ry="6" width="130" height="155" />
                  <rect x="190" y="10" rx="0" ry="0" width="190" height="21" />
                  <rect x="190" y="47" rx="0" ry="0" width="130" height="20" />
                  <rect x="190" y="79" rx="0" ry="0" width="85" height="20" />
                </ContentLoader>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <Grid item xs={12}>
              <Button onClick={handleClearAllClick} disableShadow className={classes.clearButton}>
                Очистить корзину
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Grid container component="ul" className={classes.list}>
                {data?.cartProducts.map((product: CartItemType, index) => (
                  <Grid key={index} component="li" item xs={12}>
                    <CartItem product={product} onRemove={handleProductRemove} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  )
}

export default React.memo(CartItems)
