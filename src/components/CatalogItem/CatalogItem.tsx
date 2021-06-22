import React, { useState } from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import ImagePlaceholder from '../../shared/ImagePlaceholder'
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
import { ReactComponent as HeartIcon } from '../../assets/svg/heart.svg'
import { generateLink } from '../../utils/links'
import { formatPrice } from '../../utils/helpers'
import { getColorForMainTagName } from '../../utils/styling'
import { useTranslation } from 'react-i18next'
import { FavoriteMutations } from '../../apollo/cache/mutations'
import routes from '../../utils/routes'
import classes from './styles.module.scss'

interface CatalogItemProps {
  id: string
  url: string
  title: string
  price: number
  inStock: boolean
  basePrice: number
  mainTag: string
  isFavorite: boolean // TODO: set value on whole project
}

const CatalogItem: React.FC<CatalogItemProps> = ({
  id,
  url,
  title,
  price,
  inStock,
  mainTag,
  basePrice,
  isFavorite = false
}) => {
  const { t } = useTranslation()

  const [isLiked, setLiked] = useState<boolean>(isFavorite)

  const handleLikeClick = (): void => {
    if (isLiked) {
      FavoriteMutations.deleteFavorite(id)
    } else {
      FavoriteMutations.addToFavorite(id)
    }

    setLiked(!isLiked)
  }

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.outStock]: !inStock
      })}
    >
      <div className={classes.image}>
        <Link to={generateLink(routes.product, id)}>
          <ImagePlaceholder src={url} altText={title} />
        </Link>
      </div>
      <div className={classes.info}>
        <div className={classes.priceBox}>
          <div
            className={clsx({
              [classes.price]: true,
              [classes.price_discount]: basePrice !== price
            })}
          >
            {basePrice !== price && <p className={classes.discount}>{formatPrice(basePrice)}&nbsp;₴</p>}
            <span>{formatPrice(price)}&nbsp;₴</span>
          </div>
          <div className={classes.likeButton}>
            <IconButton onClick={handleLikeClick}>
              <Icon
                classes={{
                  root: clsx({
                    [classes.heartIcon]: true,
                    [classes.heartIcon_liked]: isLiked
                  })
                }}
              >
                <HeartIcon />
              </Icon>
            </IconButton>
          </div>
        </div>
        <Link className={classes.title} title={title} to={generateLink(routes.product, id)}>
          {title}
        </Link>
      </div>
      {!!mainTag && (
        <div
          className={classes.tag}
          style={{
            backgroundColor: getColorForMainTagName(mainTag)
          }}
        >
          <span>{t(`product.mainTag.${mainTag}`)}</span>
        </div>
      )}
    </div>
  )
}

export default CatalogItem
