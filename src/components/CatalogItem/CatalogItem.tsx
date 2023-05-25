import React, { useState } from 'react'
import routes from '../../utils/routes'
import LikeButton from '../../shared/LikeButton'
import ImagePlaceholder from '../../shared/ImagePlaceholder'
import { Link } from 'react-router-dom'
import { generateLink } from '../../utils/links'
import { formatPrice } from '../../utils/helpers'
import { getColorForMainTagName } from '../../utils/styling'
import { useTranslation } from 'react-i18next'
import { FavoriteMutations } from '../../apollo/cache/mutations'
import { ReactComponent as TrashIcon } from '../../assets/svg/icons/trash.svg'

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
} from './CatalogItem.styled'
import IconButton from '../../shared/IconButton'

interface CatalogItemProps {
  id: string
  url: string
  title: string
  price: number
  inStock: boolean
  basePrice: number
  mainTag: string
  isFavorite: boolean
  withDelete?: boolean
}

const CatalogItem: React.FC<CatalogItemProps> = ({
  id,
  url,
  title,
  price,
  inStock,
  mainTag,
  basePrice,
  isFavorite,
  withDelete = false
}) => {
  const { t } = useTranslation()

  const [isLiked, setLiked] = useState<boolean>(isFavorite)

  const handleActionClick = (): void => {
    if (isLiked) {
      FavoriteMutations.deleteFavorite(id)
    } else {
      FavoriteMutations.addToFavorite(id)
    }

    setLiked(!isLiked)
  }

  return (
    <Container>
      <ImageWrapper $outStock={!inStock}>
        <Link to={generateLink(routes.product, id)}>
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
        <Title $outStock={!inStock} title={title} to={generateLink(routes.product, id)}>
          {title}
        </Title>
      </Info>
      {mainTag !== 'REGULAR' && (
        <Tag $backgroundColor={getColorForMainTagName(mainTag)}>
          <span>{t(`product.mainTag.${mainTag}`)}</span>
        </Tag>
      )}
    </Container>
  )
}

export default CatalogItem
