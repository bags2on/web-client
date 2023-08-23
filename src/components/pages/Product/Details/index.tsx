import React, { useState } from 'react'
import Tags from './Tags'
import Rating from '@/components/Rating'
import Features from './Features/Features'
import Collapse, { CollapseHead } from '@/shared/Collapse'
import { useReactiveVar } from '@apollo/client'
import { favoriteProductsVar } from '@/apollo/cache/variables'
import { CartMutations, FavoriteMutations } from '@/apollo/cache/mutations'
import { formatPrice } from '@/utils/helper'
import ExclamationIcon from '../../../../../public/assets/icons/exclamation-circle.svg'
import CheckIcon from '../../../../../public/assets/icons/check-circle.svg'
import HeaderCartIcon from '../../../../../public/assets/icons/header_cart.svg'

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
  DescriptionWrapper,
  OrderButtonWrapper,
  OrderButton,
  TheOrderButtonIcon,
  Description,
  LikeButton,
  DescriptionTitle
} from './Details.styled'
import Delivery from './Delivery'

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
  features?: featuresType
  rating?: productRating
}

const Details: React.FC<SummaryProps> = ({
  id,
  title,
  currentPrice,
  tags,
  description,
  inStock,
  basePrice
  // features,
  // rating
}) => {
  const favoriteProducts = useReactiveVar(favoriteProductsVar)

  const [isLiked, setLiked] = useState<boolean>(favoriteProducts.includes(id))
  const [descExpand, setDescExpand] = useState(true)

  const handleDescCollapse = () => {
    setDescExpand((prev) => !prev)
  }

  const features = {
    material: 'xxxx',
    color: 'color',
    gender: 'gender',
    category: 'category'
  }

  const rating = 4

  const handleAddToCart = (): void => {
    CartMutations.addProduct({
      productId: id,
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

  return (
    <Container>
      <Title>{title}</Title>
      <Code>Код товара:&nbsp;{id}</Code>
      <Box>
        <Availability $inStock={inStock}>
          <TheAvailabilityIcon $inStock={inStock}>
            {inStock ? <CheckIcon /> : <ExclamationIcon />}
          </TheAvailabilityIcon>
          <span>{inStock ? 'В наличии' : 'Нет в наличии'}</span>
        </Availability>
        <Rating starRating={rating} />
      </Box>
      {/*  */}
      {basePrice !== currentPrice && (
        <DiscountPriceBox>
          <Discount>{formatPrice(basePrice)}&nbsp;₴</Discount>
          <Percentage>-{Math.round(((basePrice - currentPrice) * 100) / basePrice)}%</Percentage>
        </DiscountPriceBox>
      )}
      <CurrentPrice>
        {formatPrice(currentPrice)}&nbsp;<span>₴</span>
      </CurrentPrice>
      {/*  */}
      <OrderButtonWrapper>
        <OrderButton
          color="secondary"
          onClick={handleAddToCart}
          startIcon={
            <TheOrderButtonIcon>
              <HeaderCartIcon />
            </TheOrderButtonIcon>
          }
        >
          {inStock ? 'Добавить в корзину' : 'Сообщить когда появиться'}
        </OrderButton>
        <LikeButton width={25} height={25} liked={isLiked} onClick={handleLikeClick} />
      </OrderButtonWrapper>
      {tags && tags.length > 1 && <Tags tags={tags} />}
      <Delivery free={false} />
      <DescriptionWrapper>
        <CollapseHead
          title={<DescriptionTitle>Описание</DescriptionTitle>}
          collapsed={descExpand}
          onCollapse={handleDescCollapse}
        />
        <Collapse open={descExpand}>
          <Description>{description}</Description>
        </Collapse>
      </DescriptionWrapper>
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
