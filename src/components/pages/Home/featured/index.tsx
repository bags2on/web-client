import React from 'react'
import { ProductItem } from '@/components/ProductItem'
import { useTranslation } from 'next-i18next'
import type { ProductTag } from '@/types'

import styles from './styles.module.scss'

interface Product {
  id: string
  title: string
  tag?: keyof typeof ProductTag | null
  slug: string
  currentPrice: number
  basePrice: number
  preview: string
}

interface FeaturedProps {
  products: Product[]
}

export function Featured({ products }: FeaturedProps) {
  const { t } = useTranslation()

  return (
    <section>
      <h2 className={styles.title}>{t('home:headers.advise')}</h2>
      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id} className={styles.listItem}>
            <ProductItem
              inStock
              id={product.id}
              slug={product.slug}
              url={product.preview}
              title={product.title}
              price={product.currentPrice}
              tag={product.tag}
              basePrice={product.basePrice}
              isFavorite={false} // TODO: get data form ac3
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
