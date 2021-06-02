import React from 'react'
import Button from '../../../shared/Button/Button'
import CatalogItem from '../../../components/CatalogItem/CatalogItem'
import Pagination from '../../../components/Pagination/Pagination'
import ExpandedGrid from '../../../shared/ExpandedGrid'
import { useQuery } from '@apollo/client'
import { GET_FAVORITE_IDS } from '../../../apollo/cache/queries/favorite'
import { makeStyles } from '@material-ui/core'

interface ProductsProps {
  totalPages: number
  currentPage: number
  products:
    | Array<{
        id: string
        title: string
        instock: boolean
        currentPrice: number
        basePrice: number
        mainTag: string
        preview: string
      }>
    | undefined
  onActionButtonClick(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 5,
    listStyle: 'none',
    [theme.breakpoints.up('lg')]: {
      padding: '10px 7px 10px 7px'
    }
  },
  notFoundBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100 * var(--vh))',
    [theme.breakpoints.up('lg')]: {
      height: '100%'
    }
  },
  wrapper: {},
  text: {
    fontSize: 17,
    fontWeight: 500,
    textAlign: 'center',
    width: 270,
    margin: 0,
    marginBottom: 10
  },
  smile: {
    fontSize: 35,
    fontWeight: 500,
    textAlign: 'center',
    margin: 0
  },
  actionButton: {
    display: 'block',
    width: 200,
    padding: '15px 10px',
    margin: '0 auto',
    backgroundColor: 'var(--green)',
    '&:hover': {
      backgroundColor: 'var(--green-light)'
    }
  }
}))

interface FavoriteIdsQuery {
  favoriteIds: string[]
}

const Products: React.FC<ProductsProps> = ({ totalPages, currentPage, products, onActionButtonClick }) => {
  const classes = useStyles()
  const { data } = useQuery<FavoriteIdsQuery>(GET_FAVORITE_IDS)
  const favoriteIds = data?.favoriteIds

  if (products === undefined) {
    return <div>data error</div>
  }

  if (!products.length) {
    return (
      <div className={classes.notFoundBox}>
        <div className={classes.wrapper}>
          <p className={classes.smile}>:(</p>
          <p className={classes.text}>Извините, но по вашему запросу ничего не найдено</p>
          <Button fullWidth onClick={onActionButtonClick} className={classes.actionButton}>
            посмотреть все
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <ExpandedGrid container component="ul" className={classes.root}>
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
      <Pagination total={totalPages} currentPage={currentPage} />
    </>
  )
}

export default Products
