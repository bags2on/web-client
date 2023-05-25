import React from 'react'
import CatalogItem from '../../../components/CatalogItem/CatalogItem'
import { useTranslation } from 'react-i18next'

import { Title, List, ListItem } from './Featured.styled'

interface ProductType {
  id: string
  price: number
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
      <Title>{t('home.featured')}</Title>
      <List>
        {products.map((product: ProductType) => (
          <ListItem key={product.id}>
            <CatalogItem
              inStock
              id={product.id}
              url={product.preview}
              title={product.title}
              price={product.price}
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
