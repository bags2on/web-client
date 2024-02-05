import React from 'react'
import { ProductsSlider } from '@/shared/ProductsSlider'
import { ProductItem } from '@/components/ProductItem'

import styles from './Recommended.module.scss'

import TEMP_RECOMENDED from './temp'

export function Recommended() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Рекомендуемые</h2>
      <ProductsSlider>
        {TEMP_RECOMENDED.map((product) => (
          <ProductItem
            inStock
            slug="TODO_SLUG"
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
