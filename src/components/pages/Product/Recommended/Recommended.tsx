import React from 'react'
import ProductsSlider from '@/components/ProductsSlider'
import ProductItem from '@/components/ProductItem'

import { Container, Title } from './Recommended.styled'

import TEMP_RECOMENDED from './temp'

const Recommended: React.FC = () => {
  return (
    <Container>
      <Title>Рекомендуемые</Title>
      <ProductsSlider speed={500}>
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
    </Container>
  )
}

export default Recommended
