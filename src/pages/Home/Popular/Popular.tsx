import React from 'react'
import ProductsSlider from '@/shared/ProductsSlider'
import CatalogItem from '@/components/CatalogItem'
import { useTranslation } from 'react-i18next'

import { Container, Title } from './Popular.styled'

interface ProductType {
  id: string
  price: number
  title: string
  preview: string
  basePrice: number
  mainTag: 'NEW' | 'TOP' | 'STOCK' | 'REGULAR'
}

interface PopularProps {
  products: Array<ProductType>
}

const Popular: React.FC<PopularProps> = ({ products }) => {
  const { t } = useTranslation()

  return (
    <Container>
      <Title>{t('home.popular')}</Title>
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
    </Container>
  )
}

export default Popular
