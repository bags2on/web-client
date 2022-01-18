import React from 'react'
import CartItems from './CartItems'
import Summary from './Summary'
import ScaleLoader from '../../../shared/loaders/ScaleLoader'
import { useQuery } from '@apollo/client'
import { GET_CART_ITEMS } from '../../../apollo/cache/queries/cart'
import { CartMutations } from '../../../apollo/cache/mutations'
import {
  CartProductsDocument,
  CartProductsQuery,
  CartProductsVariables
} from '../../../graphql/product/_gen_/cartProducts.query'
import type { CartItemType } from './CartItem'
import { makeStyles } from '@material-ui/core'

interface PreviewProps {
  submitLoading: boolean
  orderCreationErr: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
    [theme.breakpoints.up('lg')]: {
      padding: 0
    }
  },
  wrapper: {
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#323232',
    borderRadius: 14,
    padding: '7px 10px 15px 10px',
    [theme.breakpoints.up('lg')]: {
      width: 430,
      padding: '20px 40px 20px 30px'
    }
  },
  loaderWrapper: {
    width: '100%',
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#323232',
    borderRadius: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
    [theme.breakpoints.up('lg')]: {
      width: 430
    }
  }
}))

const Preview: React.FC<PreviewProps> = ({ submitLoading, orderCreationErr }) => {
  const classes = useStyles()

  const cart = useQuery(GET_CART_ITEMS)

  const { data, loading, error } = useQuery<CartProductsQuery, CartProductsVariables>(CartProductsDocument, {
    variables: {
      input: cart.data.cartItems
    },
    fetchPolicy: 'network-only',
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

  if (loading) {
    return (
      <div className={classes.loaderWrapper}>
        <ScaleLoader fallback />
      </div>
    )
  }

  if (error) {
    return <h1>Error</h1>
  }

  return (
    <section className={classes.root}>
      <div className={classes.wrapper}>
        <CartItems cartItems={data?.cartProducts || []} />
        <Summary submitLoading={submitLoading} orderCreationErr={orderCreationErr} />
      </div>
    </section>
  )
}

export default Preview
