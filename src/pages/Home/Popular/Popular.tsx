import React from 'react'
import Typography from '@material-ui/core/Typography'
import ProductsSlider from '../../../components/ProductsSlider/ProductsSlider'
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

interface PopularProps {
  products: Array<ProductType>
}

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 10px',
    marginBottom: 15
  },
  title: {
    fontSize: '23px',
    fontWeight: 600,
    marginLeft: '10px',
    marginBottom: '15px'
  }
}))

const Popular: React.FC<PopularProps> = ({ products }) => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Typography className={classes.title} component="h2">
        Популярное
      </Typography>
      <ProductsSlider speed={500}>
        {products.map((product) => (
          <CatalogItem
            inStock
            key={product.id}
            id={product.id}
            url={product.preview}
            title={product.title}
            price={product.price}
            mainTag={product.mainTag}
            basePrice={product.basePrice}
            isFavorite={false} // TODO: get data form ac3
          />
        ))}
      </ProductsSlider>
    </section>
  )
}

export default Popular
