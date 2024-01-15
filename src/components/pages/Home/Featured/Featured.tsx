import React from 'react'
import { ProductItem } from '@/components/ProductItem'
import { useTranslation } from 'next-i18next'

import styles from './Featured.module.scss'

interface ProductType {
  id: string
  slug: string
  currentPrice: number
  title: string
  preview: string
  basePrice: number
  mainTag?: 'NEW' | 'TOP' | 'STOCK' | 'REGULAR' | null
}

interface FeaturedProps {
  products: Array<ProductType>
}

export function Featured({ products }: FeaturedProps) {
  const { t } = useTranslation()

  return (
    <section>
      <h2 className={styles.title}>{t('home:headers.advise')}</h2>
      <ul className={styles.list}>
        {products.map((product: ProductType) => (
          <li key={product.id} className={styles.listItem}>
            <ProductItem
              inStock
              id={product.id}
              slug={product.slug}
              url={product.preview}
              title={product.title}
              price={product.currentPrice}
              mainTag={product.mainTag || ''}
              basePrice={product.basePrice}
              isFavorite={false} // TODO: get data form ac3
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
