/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { GET_FAVORITE_IDS } from '../../../apollo/cache/queries/favorite'
import {
  ProductsByIdDocument,
  ProductsByIdQuery,
  ProductsByIdVariables
} from '../../../graphql/product/_gen_/productsByIds.query'

const useStyles = makeStyles(() => ({
  root: {}
}))

interface FavoriteIdsQuery {
  favoriteIds: string[]
}

const Favorite: React.FC = () => {
  const classes = useStyles()

  const favoriteResp = useQuery<FavoriteIdsQuery>(GET_FAVORITE_IDS)

  const favoriteIds = favoriteResp.data?.favoriteIds || []

  console.log(favoriteIds)

  const { data, loading, error } = useQuery<ProductsByIdQuery, ProductsByIdVariables>(ProductsByIdDocument, {
    variables: {
      input: favoriteIds
    },
    fetchPolicy: 'network-only',
    skip: favoriteIds.length === 0,
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // if (data) {
      //   const totalSumm = data.productsByID.reduce(
      //     (previousValue: number, item: CartItemType) => previousValue + item.currentPrice * item.amount,
      //     0
      //   )
      //   CartMutations.updateCartPrice(totalSumm)
      // }
    }
  })

  console.log(data)

  return (
    <div className={classes.root}>
      <h1>Favorite</h1>
    </div>
  )
}

export default Favorite
