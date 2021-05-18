import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CatalogItem from '../../../components/CatalogItem/CatalogItem'
import { makeStyles } from '@material-ui/core'

interface ProductType {
  id: string
  price: number
  title: string
  preview: string
  basePrice: number
  mainTag: 'new' | 'top' | 'stock' | ''
}

interface FeaturedProps {
  products: Array<ProductType>
}

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    fontSize: 20,
    fontWeight: 500,
    margin: '15px 0 5px 10px'
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  item: {
    padding: 1
  }
}))

const Featured: React.FC<FeaturedProps> = ({ products }) => {
  const classes = useStyles()

  return (
    <section>
      <Typography className={classes.title} component="h2">
        Рекомендуемые
      </Typography>
      <Grid container component="ul" className={classes.list}>
        {products.map((product: ProductType) => (
          <Grid key={product.id} component="li" className={classes.item} item xs={6} md={4} lg={3}>
            <CatalogItem
              inStock
              id={product.id}
              url={product.preview}
              title={product.title}
              price={product.price}
              mainTag={product.mainTag}
              basePrice={product.basePrice}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default Featured
