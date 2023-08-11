import React from 'react'
import Preview from './Preview/Preview'
import Details from './Details'
import Recommended from './Recommended/Recommended'

import { Container, Loader, Inner, PreviewWrapper, DetailsWrapper } from './Product.styled'

type featuresType = {
  material: string
  color: string
  gender: string
  category: string
}

type productRating = {
  rating: number
}

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
  // rating: productRating
}

interface Iprops {
  product: ProductPageProps
}

const plug =
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1626712628/bags2on/no_image_wqwwvv.jpg'

const ProductDetails: React.FC<Iprops> = ({ product }) => {
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
            description={product.description}
            tags={product.tags}
            inStock={product.instock}
            basePrice={product.basePrice}
            currentPrice={product.currentPrice}
            // features={product.features}
            // rating={product.rating}
          />
        </DetailsWrapper>
      </Inner>
      <Recommended />
    </Container>
  )
}

export default ProductDetails
