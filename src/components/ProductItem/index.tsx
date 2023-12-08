import React, { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import LikeButton from '@/shared/LikeButton'
import IconButton from '@/shared/IconButton'
import ImagePlaceholder from '@/shared/ImagePlaceholder'
import TrashIcon from '../../../public/assets/icons/trash.svg'
import { formatPrice } from '@/utils/helper'
import { useTranslation } from 'next-i18next'
import { getProductMainTagColor } from '@/utils/styling'
import { routeNames, generateProductLink } from '@/utils/navigation'
import { FavoriteMutations } from '@/apollo/cache/mutations'

import styles from './ProductItem.module.scss'

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

  function genTagView(tag: string): React.ReactElement | null {
    switch (tag) {
      case 'new':
        return <span>{t(`productTag.${mainTag}`)}</span>
      case 'top':
        return <Image width={25} height={25} src="/assets/icons/fire.png" alt="смайлик - огонь" />
      case 'stock':
        return <span>-{Math.round(((basePrice - price) * 100) / basePrice)}%</span>
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <div className={clsx(styles.imageWrapper, !inStock && styles.outStock)}>
        <Link href={generateProductLink(routeNames.product, id, slug)}>
          <ImagePlaceholder src={url} altText={title} />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.priceBox}>
          <div
            className={clsx({
              [styles.price]: true,
              [styles.discount]: basePrice !== price,
              [styles.outStock]: !inStock
            })}
          >
            {basePrice !== price && (
              <p className={styles['discount-price']}>{formatPrice(basePrice)}&nbsp;₴</p>
            )}
            <span>{formatPrice(price)}&nbsp;₴</span>
          </div>
          <div className={styles.buttonWrapper}>
            {withDelete ? (
              <IconButton onClick={handleActionClick}>
                <div className={clsx('svg-icon', styles.trashIcon)}>
                  <TrashIcon />
                </div>
              </IconButton>
            ) : (
              <LikeButton liked={isLiked} onClick={handleActionClick} />
            )}
          </div>
        </div>
        <Link
          className={clsx(styles.title, !inStock && styles.outStock)}
          title={title}
          href={generateProductLink(routeNames.product, id, slug)}
        >
          {title}
        </Link>
      </div>
      {mainTag && (
        <div
          className={styles.tag}
          style={{
            backgroundColor: getProductMainTagColor(mainTag)
          }}
        >
          {genTagView(mainTag)}
        </div>
      )}
    </div>
  )
}

export default ProductItem
