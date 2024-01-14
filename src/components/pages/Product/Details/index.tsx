import React from 'react'
import clsx from 'clsx'
import Button from '@/shared/Button'
import Tags from './Tags'
import Rating from '@/components/Rating'
import ExclamationIcon from '../../../../../public/assets/icons/exclamation-circle.svg'
import CheckIcon from '../../../../../public/assets/icons/check-circle.svg'
import HeaderCartIcon from '../../../../../public/assets/icons/header_cart.svg'
import Delivery from './Delivery'
import { SizeGuide } from './SizeGuide'
import SubControls from './SubControls'
import { useCartStore } from '@/store/cart'
import { useRouter } from 'next/navigation'
import { routeNames } from '@/utils/navigation'
import { formatPrice } from '@/utils/helper'

import styles from './Details.module.scss'

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

  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (): void => {
    if (inStock) {
      addItem({
        productId: id,
        amount: 1
      })

      return
    }
  }

  const handleOrderNow = (): void => {
    addItem({
      productId: id,
      amount: 1
    })

    router.push(routeNames.checkout)
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.availability}>
        <div className={clsx(styles.availabilityPlug, !inStock && styles.availabilityOutStock)}>
          <div
            className={clsx({
              ['svg-icon']: true,
              [styles.availabilityIcon]: true,
              [styles.availabilityIconInStock]: inStock
            })}
          >
            {inStock ? <CheckIcon /> : <ExclamationIcon />}
          </div>
          <span>{inStock ? 'В наличии' : 'Нет в наличии'}</span>
        </div>
        <div className={styles.inner}>
          <Rating starRating={rating} />
          <p className={styles.skuCode}>
            <span>Код:</span>&nbsp;{sku}
          </p>
        </div>
      </div>
      {/*  */}
      {basePrice !== currentPrice && (
        <div className={styles.discountPriceBox}>
          <span className={styles.discountPrice}>{formatPrice(basePrice)}&nbsp;₴</span>
          <span className={styles.percentage}>
            -{Math.round(((basePrice - currentPrice) * 100) / basePrice)}%
          </span>
        </div>
      )}
      <p className={styles.currentPrice}>
        {formatPrice(currentPrice)}&nbsp;<span>₴</span>
      </p>
      {/*  */}
      <SizeGuide current="L" available={['M', '2XL', 'L']} />
      <div className={styles.buttonsWrapper}>
        <Button
          fullWidth
          color="secondary"
          disabled={!inStock}
          onClick={handleOrderNow}
          className={styles.orderNowButton}
        >
          Купить сейчас
        </Button>
        <Button
          fullWidth
          color="secondary"
          onClick={handleAddToCart}
          className={styles.orderButton}
          startIcon={
            <div className={clsx('svg-icon', styles.orderButtonIcon)}>
              <HeaderCartIcon />
            </div>
          }
        >
          {inStock ? 'Добавить в корзину' : 'Сообщить когда появиться'}
        </Button>
      </div>
      <SubControls productId={id} />

      {tags && tags.length > 1 && <Tags tags={tags} />}
      <Delivery free={delivery === 'free'} />
    </section>
  )
}

export default Details
