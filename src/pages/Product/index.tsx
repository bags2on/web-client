import React, { useEffect } from 'react'
import routes from '../../utils/routes'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import ErrorPlug from '../../shared/ErrorPlug'
import Preview from './Preview/Preview'
import Details from './Details'
import Recommended from './Recommended/Recommended'
import { Redirect } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import {
  GetProductByIdDocument,
  GetProductByIdQuery,
  GetProductByIdVariables
} from '../../graphql/product/_gen_/productByID.query'
import { Container, Loader, Inner, PreviewWrapper, DetailsWrapper } from './Product.styled'

interface ProductID {
  id: string
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<ProductID>()

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])

  const { loading, data } = useQuery<GetProductByIdQuery, GetProductByIdVariables>(GetProductByIdDocument, {
    variables: { id },
    fetchPolicy: 'network-only'
  })

  if (loading) {
    return (
      <Loader>
        <ScaleLoader fallback />
      </Loader>
    )
  }

  if (data?.product?.__typename === 'NotFound') {
    return <Redirect to={routes.notFound} />
  }

  const product = data?.product

  if (!product) {
    return <ErrorPlug />
  }

  return (
    <Container>
      <Inner>
        <PreviewWrapper>
          <Preview images={product.images} />
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
            features={product.features}
            rating={product.rating}
          />
        </DetailsWrapper>
      </Inner>
      <Recommended />
    </Container>
  )
}

export default ProductDetails
