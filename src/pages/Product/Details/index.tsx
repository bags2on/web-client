import React, { useState } from 'react'
import Tags from './Tags'
import Rating from '../../../shared/Rating'
import Features from './Features/Features'
import { useReactiveVar } from '@apollo/client'
import { favoriteProductsVar } from '../../../apollo/cache/variables'
import { CartMutations, FavoriteMutations } from '../../../apollo/cache/mutations'
import { formatPrice } from '../../../utils/helpers'
import { ReactComponent as ExclamationIcon } from '../../../assets/svg/icons/exclamation-circle.svg'
import { ReactComponent as CheckIcon } from '../../../assets/svg/icons/check_mark.svg'
import { ReactComponent as HeaderCartIcon } from '../../../assets/svg/icons/header_cart.svg'

import {
  Container,
  Title,
  Code,
  Box,
  Availability,
  TheAvailabilityIcon,
  CurrentPrice,
  DiscountPriceBox,
  Discount,
  Percentage,
  Description,
  ActionWrapper,
  ActionButton,
  LikeButton
} from './Details.styled'
import SvgIcon from '../../../shared/SvgIcon'

type featuresType = {
  material: string
  color: string
  gender: string
  category: string
}

type productRating = {
  rating: number
}

interface SummaryProps {
  id: string
  title: string
  currentPrice: number
  tags?: string[]
  description?: string
  basePrice: number
  inStock: boolean
  features: featuresType
  rating: productRating
}

const Details: React.FC<SummaryProps> = ({
  id,
  title,
  currentPrice,
  tags,
  description,
  inStock,
  basePrice,
  features,
  rating
}) => {
  const favoriteProducts = useReactiveVar(favoriteProductsVar)
  // const [getProducts, { loading, data, error }] = useLazyQuery<AllProductsQuery, AllProductsVariables>(
  //   AllProductsDocument,
  //   {
  //     onCompleted: (data) => {
  //       if (data?.allProducts.priceRange) {
  //         const { gt, lt } = data.allProducts.priceRange
  //         setPriceRange([gt, lt])
  //       }
  //     }
  //   }
  // )

  const [isLiked, setLiked] = useState<boolean>(favoriteProducts.includes(id))

  const handleAddToCart = (): void => {
    CartMutations.addProduct({
      id,
      amount: 1
    })
  }

  const handleLikeClick = (): void => {
    if (isLiked) {
      FavoriteMutations.deleteFavorite(id)
    } else {
      FavoriteMutations.addToFavorite(id)
    }
    setLiked(!isLiked)
  }

  // const handleRatingVote = (rating: number): void => {}

  return (
    <Container>
      {tags && <Tags tags={tags} />}
      <Title>{title}</Title>
      <Code>Код:&nbsp;{id}</Code>
      <Box>
        <Availability $inStock={inStock}>
          <TheAvailabilityIcon>{inStock ? <CheckIcon /> : <ExclamationIcon />}</TheAvailabilityIcon>
          <span>{inStock ? 'В наличии' : 'Нет в наличии'}</span>
        </Availability>
        <div>
          <Rating starRating={rating.rating} />
        </div>
      </Box>
      {basePrice !== currentPrice && (
        <DiscountPriceBox>
          <Discount>{formatPrice(basePrice)}&nbsp;₴</Discount>
          <Percentage>-{Math.round(((basePrice - currentPrice) * 100) / basePrice)}%</Percentage>
        </DiscountPriceBox>
      )}
      <CurrentPrice>{formatPrice(currentPrice)}&nbsp;₴</CurrentPrice>
      <Description>
        <p>Описание:</p>
        <span>{description}</span>
      </Description>
      <ActionWrapper>
        <ActionButton
          onClick={handleAddToCart}
          fullWidth
          disableShadow
          startIcon={
            <SvgIcon style={{ fontSize: 30, fill: '#fff' }}>
              <HeaderCartIcon />
            </SvgIcon>
          }
        >
          {inStock ? 'Купить' : 'Сообщить когда появиться'}
        </ActionButton>
        <LikeButton width={25} height={25} liked={isLiked} onClick={handleLikeClick} />
      </ActionWrapper>
      <Features
        color={features.color}
        material={features.material}
        type={features.gender}
        category={features.category}
      />
    </Container>
  )
}

export default Details
