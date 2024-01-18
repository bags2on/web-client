import React from 'react'
import { Preview } from './Preview/Preview'
import { Details } from './Details'
import { Info } from './Info'
import { Recommended } from './Recommended/Recommended'
import type { GetProductQuery } from '@/graphql/product/_gen_/product.query'

import styles from './Product.module.scss'

interface TodoProps {
  rating: number
}

interface ProductIndexProps {
  product: Extract<GetProductQuery['product'], { __typename: 'Product' }>
  todo: TodoProps
}

export function ProductIndex({ product, todo }: ProductIndexProps) {
  const TODO_TAGS: string[] = []

  const { description, dimensions, color, delivery } = product.details

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.previewWrapper}>
          <Preview images={product.details.images} />
        </div>
        <div className={styles.detailsWrapper}>
          <Details
            id={product.id}
            sku={product.sku}
            title={product.title}
            tags={TODO_TAGS}
            inStock={product.instock}
            basePrice={product.basePrice}
            currentPrice={product.currentPrice}
            rating={todo.rating}
            delivery={delivery}
          />
        </div>
      </div>
      <Info
        gender={product.gender}
        description={description}
        dimensions={dimensions}
        color={color}
        category={product.category}
      />
      <Recommended />
    </div>
  )
}
