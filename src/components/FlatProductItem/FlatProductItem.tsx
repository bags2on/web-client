import React, { useState } from 'react'
import ImagePlaceholder from '../../shared/ImagePlaceholder'
import LikeButton from '../../shared/LikeButton'
import routes from '../../utils/routes'
import { formatPrice } from '../../utils/helpers'
import { generateLink } from '../../utils/links'

import {
  Container,
  ImageBox,
  InfoBox,
  PriceWrapper,
  LinkWrapper,
  Title,
  Price,
  DiscountPrice,
  LikeButtonWrapper
} from './FlatProductItem.styled'

interface FlatProductItemProps {
  id: string
  price: number
  title: string
  imageURL: string
  discountPrice?: number
}

const FlatProductItem: React.FC<FlatProductItemProps> = ({ id, price, title, imageURL, discountPrice }) => {
  const [isLiked, setLiked] = useState<boolean>(false)

  const handleLikeClick = (): void => {
    setLiked(!isLiked)
  }

  return (
    <Container>
      <ImageBox>
        <LinkWrapper to={generateLink(routes.product, id)}>
          <ImagePlaceholder src={imageURL} altText={title} />
        </LinkWrapper>
      </ImageBox>
      <InfoBox>
        <Title>
          <LinkWrapper to={generateLink(routes.product, id)}>{title}</LinkWrapper>
        </Title>
        <PriceWrapper>
          <Price $discount={Boolean(discountPrice)}>
            <span>{formatPrice(price)}</span>
            <span>&nbsp;₴</span>
          </Price>
          {!!discountPrice && (
            <>
              <DiscountPrice>
                <span>{formatPrice(discountPrice)}</span>
                <span>&nbsp;₴</span>
              </DiscountPrice>
            </>
          )}
        </PriceWrapper>
        <LikeButtonWrapper>
          <LikeButton liked={isLiked} onClick={handleLikeClick} />
        </LikeButtonWrapper>
      </InfoBox>
    </Container>
  )
}

export default FlatProductItem
