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
import ExpandedGrid from '../../../shared/ExpandedGrid'
import CatalogItem from '../../../components/CatalogItem/CatalogItem'

const useStyles = makeStyles(() => ({
  root: {},
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }
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

  if (loading) {
    return <div>Loading</div>
  }

  console.log(data)

  if (!data) {
    return <div>No data</div>
  }

  const products = data.productsByID

  return (
    <div className={classes.root}>
      <ExpandedGrid container component="ul" className={classes.list}>
        {products.map((product) => {
          const isFavorite = favoriteIds?.includes(product.id)
          return (
            <ExpandedGrid key={product.id} component="li" item xs={6} md={4} xl={3} desktop={2}>
              <CatalogItem
                id={product.id}
                url={product.preview}
                title={product.title}
                price={product.currentPrice}
                inStock={product.instock}
                mainTag={product.mainTag}
                basePrice={product.basePrice}
                isFavorite={isFavorite}
              />
            </ExpandedGrid>
          )
        })}
      </ExpandedGrid>
    </div>
  )
}

export default Favorite
