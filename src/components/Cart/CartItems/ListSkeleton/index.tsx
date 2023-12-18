import React from 'react'
import CartItemSkeleton from '../../CartItem/Skeleton'
import styles from '../CartItems.module.scss'

interface ListSkeletonProps {
  itemsAmount: number
  max?: number
}

const ListSkeleton: React.FC<ListSkeletonProps> = ({ itemsAmount, max = 4 }) => {
  const itemsLength = itemsAmount > max ? max : itemsAmount

  return (
    <ul className={styles.skeletonList}>
      {[...Array(itemsLength)].map((_, index: number) => (
        <CartItemSkeleton key={index} />
      ))}
    </ul>
  )
}

export default ListSkeleton
