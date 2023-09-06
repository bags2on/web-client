import React from 'react'
import Preview from './Preview/Preview'
import Details from './Details'
import Info from './Info'
import Recommended from './Recommended/Recommended'

import { Container, Inner, PreviewWrapper, DetailsWrapper } from './Product.styled'

// type featuresType = {
//   material: string
//   color: string
//   gender: string
//   category: string
// }

interface ProductPageProps {
  id: string
  title: string
  preview: string
  currentPrice: number
  tags?: string[]
  images: string[]
  description?: string
  basePrice: number
  instock: boolean
  // features: featuresType
}

interface TodoProps {
  rating: number
}

interface Iprops {
  product: ProductPageProps
  todo: TodoProps
}

const plug =
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1626712628/bags2on/no_image_wqwwvv.jpg'

const ProductDetails: React.FC<Iprops> = ({ product, todo }) => {
  const previewImages = [product.preview, plug, plug, plug, plug]

  return (
    <Container>
      <Inner>
        <PreviewWrapper>
          <Preview images={previewImages} />
        </PreviewWrapper>
        <DetailsWrapper>
          <Details
            id={product.id}
            title={product.title}
            tags={product.tags}
            inStock={product.instock}
            basePrice={product.basePrice}
            currentPrice={product.currentPrice}
            rating={todo.rating}
          />
        </DetailsWrapper>
      </Inner>
      <Info description={product.description} />
      <Recommended />
    </Container>
  )
}

export default ProductDetails
