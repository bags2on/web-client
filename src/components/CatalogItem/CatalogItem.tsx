import React, { useState } from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import LikeButton from '../../shared/LikeButton/LikeButton'
import ImagePlaceholder from '../../shared/ImagePlaceholder'
import DeleteIcon from '@material-ui/icons/Delete'
import Tooltip from '@material-ui/core/Tooltip'
import { Link } from 'react-router-dom'
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
    <div className={classes.root}>
      <div
        className={clsx({
          [classes.image]: true,
          [classes.outStock]: !inStock
        })}
      >
        <Link to={generateLink(routes.product, id)}>
          <ImagePlaceholder src={url} altText={title} />
        </Link>
      </div>
      <div className={classes.info}>
        <div className={classes.priceBox}>
          <div
            className={clsx({
              [classes.price]: true,
              [classes.outStock]: !inStock,
              [classes.price_discount]: basePrice !== price
            })}
          >
            {basePrice !== price && <p className={classes.discount}>{formatPrice(basePrice)}&nbsp;₴</p>}
            <span>{formatPrice(price)}&nbsp;₴</span>
          </div>
          <div className={classes.actionButton}>
            {withDelete ? (
              <IconButton onClick={handleActionClick}>
                <Tooltip title="Удалить из избранного">
                  <DeleteIcon className={classes.deleteIcon} />
                </Tooltip>
              </IconButton>
            ) : (
              <LikeButton liked={isLiked} onClick={handleActionClick} disableRipple />
            )}
          </div>
        </div>
        <Link
          className={clsx({
            [classes.title]: true,
            [classes.outStock]: !inStock
          })}
          title={title}
          to={generateLink(routes.product, id)}
        >
          {title}
        </Link>
      </div>
      {mainTag !== 'REGULAR' && (
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
