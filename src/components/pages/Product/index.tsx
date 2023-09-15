import React from 'react'
import Preview from './Preview/Preview'
import Details from './Details'
import Info from './Info'
import Recommended from './Recommended/Recommended'
import type { GetProductQuery } from '@/graphql/product/_gen_/product.query'

import { Container, Inner, PreviewWrapper, DetailsWrapper } from './Product.styled'

interface TodoProps {
  rating: number
}

interface Iprops {
  product: Extract<GetProductQuery['product'], { __typename: 'Product' }>
  todo: TodoProps
}

const ProductDetails: React.FC<Iprops> = ({ product, todo }) => {
  const TODO_TAGS: string[] = []

  return (
    <Container>
      <Inner>
        <PreviewWrapper>
          <Preview images={product.details.images} />
        </PreviewWrapper>
        <DetailsWrapper>
          <Details
            id={product.id}
            title={product.title}
            tags={TODO_TAGS}
            inStock={product.instock}
            basePrice={product.basePrice}
            currentPrice={product.currentPrice}
            rating={todo.rating}
          />
        </DetailsWrapper>
      </Inner>
      <Info description={product.details.description} />
      <Recommended />
    </Container>
  )
}

export default ProductDetails
