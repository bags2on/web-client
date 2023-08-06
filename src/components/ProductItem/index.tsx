import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LikeButton from '@/shared/LikeButton'
import ImagePlaceholder from '@/shared/ImagePlaceholder'
import TrashIcon from '../../../public/assets/icons/trash.svg'
import { formatPrice } from '@/utils/helper'
import { useTranslation } from 'next-i18next'
import { getProductMainTagColor } from '@/utils/styling'
import { routeNames, generateProductLink } from '@/utils/navigation'
import { FavoriteMutations } from '@/apollo/cache/mutations'

import {
  Container,
  ImageWrapper,
  Info,
  PriceBox,
  Price,
  Discount,
  Title,
  Tag,
  ActionButtonWrapper,
  TheTrashIcon
} from './ProductItem.styled'
import IconButton from '@/shared/IconButton'

interface ProductItemProps {
  id: string
  slug: string
  url: string
  title: string
  price: number
  inStock: boolean
  basePrice: number
  mainTag: string
  isFavorite: boolean
  withDelete?: boolean
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  slug,
  url,
  title,
  price,
  inStock,
  mainTag,
  basePrice,
  isFavorite,
  withDelete = false
}) => {
  const { t } = useTranslation('common')

  const [isLiked, setLiked] = useState<boolean>(isFavorite)

  const handleActionClick = (): void => {
    if (isLiked) {
      FavoriteMutations.deleteFavorite(id)
    } else {
      FavoriteMutations.addToFavorite(id)
    }

    setLiked(!isLiked)
  }

  function genTagView(tag: string): React.ReactNode | null {
    switch (tag) {
      case 'NEW':
        return <span>{t(`productTag.${mainTag}`)}</span>
      case 'TOP':
        return <Image width={25} height={25} src="/assets/icons/fire.png" alt="смайлик - огонь" />
      case 'STOCK':
        return <span>-{Math.round(((basePrice - price) * 100) / basePrice)}%</span>
      default:
        return null
    }
  }

  return (
    <Container>
      <ImageWrapper $outStock={!inStock}>
        <Link href={generateProductLink(routeNames.product, id, slug)}>
          <ImagePlaceholder src={url} altText={title} />
        </Link>
      </ImageWrapper>
      <Info>
        <PriceBox>
          <Price $outStock={!inStock} $discount={basePrice !== price}>
            {basePrice !== price && <Discount>{formatPrice(basePrice)}&nbsp;₴</Discount>}
            <span>{formatPrice(price)}&nbsp;₴</span>
          </Price>
          <ActionButtonWrapper>
            {withDelete ? (
              <IconButton onClick={handleActionClick}>
                <TheTrashIcon>
                  <TrashIcon />
                </TheTrashIcon>
              </IconButton>
            ) : (
              <LikeButton liked={isLiked} onClick={handleActionClick} />
            )}
          </ActionButtonWrapper>
        </PriceBox>
        <Title
          $outStock={!inStock}
          title={title}
          href={generateProductLink(routeNames.product, id, slug)}
        >
          {title}
        </Title>
      </Info>
      {mainTag !== 'REGULAR' && (
        <Tag $backgroundColor={getProductMainTagColor(mainTag)}>{genTagView(mainTag)}</Tag>
      )}
    </Container>
  )
}

export default ProductItem
