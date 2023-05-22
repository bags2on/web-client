import React from 'react'
import ProductsSlider from '../../../shared/ProductsSlider'
import CatalogItem from '../../../components/CatalogItem/CatalogItem'

import { Container, Title } from './Recommended.styled'

import TEMP_RECOMENDED from './temp'

const Recommended: React.FC = () => {
  return (
    <Container>
      <Title>Рекомендуемые</Title>
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
    </Container>
  )
}

export default Recommended
