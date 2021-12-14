import React from 'react'
import ProductsSlider from '../../../shared/ProductsSlider'
import CatalogItem from '../../../components/CatalogItem/CatalogItem'
import { makeStyles } from '@material-ui/core'

import TEMP_RECOMENDED from './temp'

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 10px',
    marginBottom: 15
  },
  title: {
    fontSize: '23px',
    fontWeight: 600
  }
}))

const Recommended: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <h2 className={classes.title}>Рекомендуемые</h2>
      <ProductsSlider speed={500}>
        {TEMP_RECOMENDED.map((product) => (
          <CatalogItem
            inStock
            key={product.id}
            id={product.id}
            url={product.preview}
            title={product.title}
            price={product.currentPrice}
            mainTag={product.mainTag}
            basePrice={product.basePrice}
            isFavorite={false} // TODO: get data form ac3
          />
        ))}
      </ProductsSlider>
    </section>
  )
}

export default Recommended
