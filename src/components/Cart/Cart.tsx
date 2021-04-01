import React, { useState, useEffect } from 'react'
import Drawer from '@material-ui/core/Drawer'
// import CartItems from './CartItems/CartItems'
import Checkout from './Checkout/Checkout'
import OrderSuccess from './OrderSuccess/OrderSuccess'
import { useQuery, useApolloClient } from '@apollo/react-hooks'
import { GET_CART_ITEMS } from '../../apollo/cache/queries/cart'
import { GET_PRODUCTS_BY_IDS } from '../../graphql/product'
import { CartItemType } from './CartItem/CartItem'
import { productsByID, productsByIDVariables } from '../../graphql/product/_types_/productsByID'
// import Fallback from '../../shared/Fallback'
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
  const client = useApolloClient()
  const savedIDS = useQuery(GET_CART_ITEMS)
  const isCartEmpty = savedIDS.data.cartIDs.length === 0

  const [skip, setSkip] = useState<boolean>(true)

  const { data, loading } = useQuery<productsByID, productsByIDVariables>(GET_PRODUCTS_BY_IDS, {
    variables: {
      ids: savedIDS.data.cartIDs
    },
    fetchPolicy: 'network-only',
    skip,
    onCompleted: (data) => {
      if (data) {
        const totalSumm = data.productsByID.reduce((previousValue: number, item: CartItemType) => {
          return previousValue + item.price * item.amount
        }, 0)

        client.writeData({ data: { cartTotalPrice: totalSumm } })
        setSkip(true)
      }
    }
  })

  useEffect(() => {
    if (isOpen) {
      if (isCartEmpty) {
        setSkip(true)
      } else {
        setSkip(false)
      }
    }

    // eslint-disable-next-line
  }, [isOpen])

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
        <Checkout />
        <OrderSuccess onClose={onClose} />
        {/* {loading ? <Fallback /> : <CartItems data={mutatedData} isEmpty={isCartEmpty} onClose={onClose} />} */}
      </div>
    </Drawer>
  )
}

export default React.memo(Cart)
