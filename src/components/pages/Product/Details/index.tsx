import React from 'react'
import Tags from './Tags'
import Rating from '@/components/Rating'
import { CartMutations } from '@/apollo/cache/mutations'
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
  ButtonsWrapper,
  OrderNowButton,
  OrderButton,
  TheOrderButtonIcon
} from './Details.styled'
import Delivery from './Delivery'
import SizeGuide from './SizeGuide'
import SubControls from './SubControls'

interface DetailsProps {
  id: string
  sku: string
  title: string
  currentPrice: number
  tags?: string[]
  basePrice: number
  inStock: boolean
  rating?: number
}

const Details: React.FC<DetailsProps> = ({
  id,
  sku,
  title,
  currentPrice,
  tags,
  inStock,
  basePrice,
  rating
}) => {
  const handleAddToCart = (): void => {
    CartMutations.addProduct({
      productId: id,
      amount: 1
    })
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Box>
        <Availability $inStock={inStock}>
          <TheAvailabilityIcon $inStock={inStock}>
            {inStock ? <CheckIcon /> : <ExclamationIcon />}
          </TheAvailabilityIcon>
          <span>{inStock ? 'В наличии' : 'Нет в наличии'}</span>
        </Availability>
        <Rating starRating={rating} />
        <Code>Код:&nbsp;{sku}</Code>
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
      <SizeGuide current="L" available={['M', '2XL', 'L']} />
      <ButtonsWrapper>
        <OrderNowButton fullWidth color="secondary">
          Купить сейчас
        </OrderNowButton>
        <OrderButton
          fullWidth
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
      </ButtonsWrapper>
      <SubControls productId={id} />

      {tags && tags.length > 1 && <Tags tags={tags} />}
      <Delivery free={false} />
    </Container>
  )
}

export default Details
