import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CatalogItem from '../../../components/CatalogItem/CatalogItem'
import { makeStyles } from '@material-ui/core'

interface Product {
  id: string
  price: number
  title: string
  preview: string
}

interface FeaturedProps {
  products: Product[]
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

  const TEMPgenerator = (m: number, n: number): number => {
    return m + Math.floor((n - m + 1) * Math.random())
  }

  return (
    <section>
      <Typography className={classes.title} component="h2">
        Рекомендуемые
      </Typography>
      <Grid container component="ul" className={classes.list}>
        {products.map((product: Product) => (
          <Grid key={product.id} component="li" className={classes.item} item xs={6} md={4} lg={3}>
            <CatalogItem
              url={product.preview}
              title={product.title}
              price={product.price}
              id={product.id}
              discountPrice={Math.round(Math.random() * 10) === 7 ? TEMPgenerator(350, 550) : 0}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default Featured
