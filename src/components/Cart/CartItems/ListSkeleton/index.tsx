import React from 'react'
import { CartItemSkeleton } from '@/components/CartItem/Skeleton'
import styles from '../CartItems.module.scss'

interface ListSkeletonProps {
  itemsAmount: number
  max?: number
}

export function ListSkeleton({ itemsAmount, max = 4 }: ListSkeletonProps) {
  const itemsLength = itemsAmount > max ? max : itemsAmount

  return (
    <ul className={styles.skeletonList}>
      {[...Array(itemsLength)].map((_, index: number) => (
        <CartItemSkeleton key={index} />
      ))}
    </ul>
  )
}
