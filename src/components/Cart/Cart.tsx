import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import CartItems from './CartItems/CartItems'
// import Checkout from './Checkout/Checkout'
// import OrderSuccess from './OrderSuccess/OrderSuccess'
import { useQuery } from '@apollo/client'
import { GET_CART_ITEMS } from '../../apollo/cache/queries/cart'
import { CartMutations } from '../../apollo/cache/mutations'
import { GET_PRODUCTS_BY_IDS } from '../../graphql/product'
import { CartItemType } from './CartItem/CartItem'
import { productsByID, productsByIDVariables } from '../../graphql/product/_types_/productsByID'
import Fallback from '../../shared/Fallback'
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
  const cart = useQuery(GET_CART_ITEMS)
  const isCartEmpty = cart.data.cartItems.length === 0

  const { data, loading } = useQuery<productsByID, productsByIDVariables>(GET_PRODUCTS_BY_IDS, {
    variables: {
      input: cart.data.cartItems
    },
    fetchPolicy: 'network-only',
    skip: !isOpen || isCartEmpty,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data) {
        const totalSumm = data.productsByID.reduce((previousValue: number, item: CartItemType) => {
          return previousValue + item.price * item.amount
        }, 0)

        console.log('ts', totalSumm)

        CartMutations.updateCartPrice(totalSumm)
      }
    }
  })

  // if (loading) {
  //   return <p>Loading</p> // TODO: better UI
  // }

  // if (error) {
  //   return <p>Error</p> // TODO: better UI
  // }

  const mutatedData = React.useMemo(() => data?.productsByID, [data]) as CartItemType[]

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
        {/* <CartItems data={res} isEmpty={isCartEmpty} onClose={onClose} /> */}
        {/* <Checkout /> */}
        {/* <OrderSuccess onClose={onClose} /> */}
        {loading ? <Fallback /> : <CartItems data={mutatedData} isEmpty={isCartEmpty} onClose={onClose} />}
      </div>
    </Drawer>
  )
}

export default React.memo(Cart)
