import React from 'react'
import Skeleton from './Skeleton'
import Button from '@/shared/Button'
import { useTranslation } from 'next-i18next'
import { useReactiveVar } from '@apollo/client'
import { cartPriceVar } from '../../../apollo/cache/variables'
import { formatPrice } from '@/utils/helper'

import styles from './Summary.module.scss'

interface SummaryProps {
  isLoading: boolean
  onCheckout(): void
}

const Summary: React.FC<SummaryProps> = ({ isLoading, onCheckout }) => {
  const { t } = useTranslation()
  const cartPrice = useReactiveVar(cartPriceVar)

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

export default Summary
