import React from 'react'
import ProductItem from '@/components/ProductItem'
import { useTranslation } from 'next-i18next'

import { Title, List, ListItem } from './Featured.styled'

interface ProductType {
  id: string
  slug: string
  currentPrice: number
  title: string
  preview: string
  basePrice: number
  mainTag: 'NEW' | 'TOP' | 'STOCK' | 'REGULAR'
}

interface FeaturedProps {
  products: Array<ProductType>
}

const Featured: React.FC<FeaturedProps> = ({ products }) => {
  const { t } = useTranslation()

  return (
    <section>
      <Title>{t('home:headers.advise')}</Title>
      <List>
        {products.map((product: ProductType) => (
          <ListItem key={product.id}>
            <ProductItem
              inStock
              id={product.id}
              slug={product.slug}
              url={product.preview}
              title={product.title}
              price={product.currentPrice}
              mainTag={product.mainTag}
              basePrice={product.basePrice}
              isFavorite={false} // TODO: get data form ac3
            />
          </ListItem>
        ))}
      </List>
    </section>
  )
}

export default Featured
