import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '../../../shared/Button/Button'
import CatalogItem from '../../../components/CatalogItem/CatalogItem'
import Pagination from '../../../components/Pagination/Pagination'
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
}

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    padding: 5,
    listStyle: 'none'
  },
  notFoundBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100 * var(--vh))'
  },
  actionButton: {
    width: 200,
    backgroundColor: '#2bab2b',
    padding: '15px 10px',
    '&:hover': {
      backgroundColor: '#32cd32'
    }
  }
}))

const Products: React.FC<ProductsProps> = ({ totalPages, currentPage, products }) => {
  const classes = useStyles()

  if (products === undefined) {
    return <div>data error</div>
  }

  if (!products.length) {
    return (
      <div className={classes.notFoundBox}>
        <div>
          <Button fullWidth className={classes.actionButton}>
            посмотреть все
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Grid container component="ul" className={classes.root}>
        {products.map((product) => (
          <Grid key={product.id} component="li" item xs={6} md={4} xl={2}>
            <CatalogItem
              id={product.id}
              url={product.preview}
              title={product.title}
              price={product.currentPrice}
              inStock={product.instock}
              mainTag={product.mainTag}
              basePrice={product.basePrice}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination total={totalPages} currentPage={currentPage} />
    </>
  )
}

export default Products
