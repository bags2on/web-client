/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Asset_1 from '../../../assets/svg/Asset_1.svg'
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
import TopBar from './TopBar'
import Button from '../../../shared/Button/Button'

const useStyles = makeStyles(() => ({
  root: {},
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  noData: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(80 * var(--vh))'
  },
  container: {},
  title: {
    fontSize: 17,
    fontWeight: 500,
    marginBottom: 21
  },
  image: {
    display: 'block',
    margin: '0 auto',
    marginBottom: 47,
    width: '100%',
    maxWidth: 187
  },
  actionButton: {
    display: 'block',
    margin: '0 auto',
    textTransform: 'none',
    maxWidth: 230
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
    notifyOnNetworkStatusChange: true
  })

  if (favoriteIds.length === 0) {
    return (
      <div className={classes.noData}>
        <div className={classes.container}>
          <img src={Asset_1} className={classes.image} />
          <p className={classes.title}>Вы еще ничего не добавили в избранное</p>
          <Button fullWidth color="secondary" className={classes.actionButton}>
            Перейти в каталог
          </Button>
        </div>
      </div>
    )
  }

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
      <TopBar />
      <ExpandedGrid container component="ul" className={classes.list}>
        {products.map((product) => {
          const isFavorite = favoriteIds?.includes(product.id)
          return (
            <ExpandedGrid key={product.id} component="li" item xs={6} md={4} xl={3} desktop={2}>
              <CatalogItem
                id={product.id}
                withDelete
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
