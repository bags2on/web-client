import React from 'react'
import Tags from './Tags'
import Rating from '@/components/Rating'
import ExclamationIcon from '../../../../../public/assets/icons/exclamation-circle.svg'
import CheckIcon from '../../../../../public/assets/icons/check-circle.svg'
import HeaderCartIcon from '../../../../../public/assets/icons/header_cart.svg'
import Delivery from './Delivery'
import SizeGuide from './SizeGuide'
import SubControls from './SubControls'
import { useRouter } from 'next/navigation'
import { routeNames } from '@/utils/navigation'
import { formatPrice } from '@/utils/helper'
import { CartMutations } from '@/apollo/cache/mutations'

import {
  Container,
  Title,
  Code,
  Box,
  BoxInner,
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

interface DetailsProps {
  id: string
  sku: string
  title: string
  currentPrice: number
  tags?: string[]
  basePrice: number
  inStock: boolean
  rating?: number
  delivery: string
}

const Details: React.FC<DetailsProps> = ({
  id,
  sku,
  title,
  currentPrice,
  tags,
  inStock,
  basePrice,
  rating,
  delivery
}) => {
  const router = useRouter()

  const handleAddToCart = (): void => {
    if (inStock) {
      CartMutations.addProduct({
        productId: id,
        amount: 1
      })

      return
    }
  }

  const handleOrderNow = (): void => {
    CartMutations.addProduct({
      productId: id,
      amount: 1
    })

    router.push(routeNames.checkout)
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
        <BoxInner>
          <Rating starRating={rating} />
          <Code>
            <span>Код:</span>&nbsp;{sku}
          </Code>
        </BoxInner>
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
        <OrderNowButton fullWidth color="secondary" disabled={!inStock} onClick={handleOrderNow}>
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
      <Delivery free={delivery === 'free'} />
    </Container>
  )
}

export default Details
