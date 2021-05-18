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
  withDiscount: boolean
  basePrice: number
  mainTag: 'new' | 'top' | 'stock' | ''
}

interface PopularProps {
  products: Array<ProductType>
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 10px',
    marginBottom: 15,
    [theme.breakpoints.up('laptop')]: {
      padding: '0 30px 0 10px'
    }
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
            withDiscount={product.withDiscount}
          />
        ))}
      </ProductsSlider>
    </section>
  )
}

export default Popular
