import React from 'react'
import Button from '../../../shared/Button/Button'
import CatalogItem from '../../../components/CatalogItem/CatalogItem'
import Pagination from '../../../components/Pagination/Pagination'
import ExpandedGrid from '../../../shared/ExpandedGrid'
import routes from '../../../utils/routes'
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
    position: 'relative',
    height: '100%',
    paddingBottom: 47,
    [theme.breakpoints.up('lg')]: {
      paddingBottom: 67
    }
  },
  list: {
    margin: 0,
    padding: 5,
    listStyle: 'none',
    [theme.breakpoints.up('lg')]: {
      padding: '10px 10px 0 10px'
    },
    [theme.breakpoints.up('xl')]: {
      padding: '10px 20px 0 20px'
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
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    [theme.breakpoints.up('lg')]: {
      bottom: 15
    }
  }
}))

interface FavoriteIdsQuery {
  favoriteIds: string[]
}

const Products: React.FC<ProductsProps> = ({ totalPages, currentPage, products, onActionButtonClick }) => {
  const classes = useStyles()
  const { data } = useQuery<FavoriteIdsQuery>(GET_FAVORITE_IDS)
  const favoriteIds = data?.favoriteIds || []

  if (products === undefined) return null

  if (!products.length) {
    return (
      <div className={classes.notFoundBox}>
        <div>
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
      <div className={classes.paginationWrapper}>
        <Pagination route={routes.catalog} total={totalPages} currentPage={currentPage} />
      </div>
    </div>
  )
}

export default Products
