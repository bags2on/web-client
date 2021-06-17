import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Summary from '../Summary/Summary'
import Button from '../../../shared/Button/Button'
import Fallback from '../../../shared/Fallback'
import ResponsePlug from './ResponsePlug'
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
  fallbackBox: {
    width: '100%',
    height: 340,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
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
          <div className={classes.fallbackBox}>
            <Fallback />
          </div>
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
