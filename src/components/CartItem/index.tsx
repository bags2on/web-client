import React, { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import TrashIcon from '../../../public/assets/icons/trash.svg'
import IconButton from '@/shared/IconButton'
import ImagePlaceholder from '@/shared/ImagePlaceholder'
import AmountController from '@/shared/AmountController'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/utils/helper'
import { routeNames, generateProductLink } from '@/utils/navigation'

import styles from './CartItem.module.scss'

export type CartItemType = {
  id: string
  slug: string
  title: string
  currentPrice: number
  preview: string
}

interface CartItemProps {
  amount: number
  product: CartItemType
  onRemove: (id: string) => void
}

export function CartItem({ product, amount, onRemove }: CartItemProps) {
  const [count, setCount] = useState<number>(amount)

  const updateAmount = useCartStore((state) => state.updateAmount)

  const { id, slug, title, preview, currentPrice } = product

  const handleAmountChange = (_: string, n: number): void => {
    updateAmount(id, n)
    setCount(n)
  }

  const handleProductRemove = () => {
    onRemove(id)
  }

  return (
    <li className={styles.container}>
      <div className={styles.imageWrapper}>
        <Link href={generateProductLink(routeNames.product, id, slug)}>
          <ImagePlaceholder src={preview} altText={title} />
        </Link>
      </div>
      <div className={styles.info}>
        <Link
          title={title}
          href={generateProductLink(routeNames.product, id, slug)}
          className={styles.title}
        >
          {title}
        </Link>
        <span className={styles.price}>Цена:&nbsp;&nbsp;{formatPrice(currentPrice)}&nbsp;₴</span>
        <p className={styles.amount}>
          {count}&nbsp;шт:&nbsp;&nbsp;{formatPrice(count * currentPrice)}&nbsp;грн.
        </p>
        <div className={styles.controls}>
          <AmountController min={1} max={100} amount={count} onChange={handleAmountChange} />
          <IconButton
            disableRipple
            onClick={handleProductRemove}
            aria-label={`Удалить "${title}"`}
            className={styles.deleteButton}
          >
            <div className={clsx('svg-icon', styles.trashIcon)}>
              <TrashIcon />
            </div>
          </IconButton>
        </div>
      </div>
    </li>
  )
}
