import React from 'react'
import { Button } from '@/shared/Button'
import { Skeleton } from './Skeleton'
import { formatPrice } from '@/utils/helper'
import { useCartStore } from '@/store/cart'
import { useTranslation } from 'next-i18next'

import styles from './Summary.module.scss'

interface SummaryProps {
  isLoading: boolean
  onCheckout(): void
}

export function Summary({ isLoading, onCheckout }: SummaryProps) {
  const cartPrice = useCartStore((state) => state.cartPrice)
  const { t } = useTranslation()

  const handleButtonClick = (): void => {
    onCheckout()
  }

  if (isLoading) {
    return <Skeleton />
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <p className={styles.cartPrice}>
          <span>{t('cart.total')}:</span>
          <b>{formatPrice(cartPrice)}&nbsp;грн.</b>
        </p>
        <Button
          fullWidth
          color="secondary"
          onClick={handleButtonClick}
          className={styles.orderButton}
        >
          {t('cart.makeOrder')}
        </Button>
      </div>
    </div>
  )
}
