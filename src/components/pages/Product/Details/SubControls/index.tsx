import React from 'react'
import clsx from 'clsx'
import CommentIcon from '../../../../../../public/assets/icons/comment.svg'
import ShareIcon from '../../../../../../public/assets/icons/share.svg'
import { Button } from '@/shared/Button'
import { LikeButton } from '@/shared/LikeButton'
import { useFavoriteStore } from '@/store/favorite'

import styles from './SubControls.module.scss'

interface SubControlsProps {
  productId: string
}

export function SubControls({ productId }: SubControlsProps) {
  const favoriteItems = useFavoriteStore((state) => state.favoriteItems)
  const addToFavorite = useFavoriteStore((state) => state.add)
  const removeFavorite = useFavoriteStore((state) => state.remove)

  const isLiked = favoriteItems.includes(productId)

  const handleLikeClick = (): void => {
    if (isLiked) {
      removeFavorite(productId)
    } else {
      addToFavorite(productId)
    }
  }

  return (
    <div className={styles.container}>
      <Button
        color="secondary"
        className={styles.controlButton}
        startIcon={
          <div className={clsx('svg-icon', styles.icon)}>
            <CommentIcon />
          </div>
        }
      >
        Комментарии
      </Button>
      {/*  */}
      <LikeButton
        text={isLiked ? 'Избранное' : 'В избранное'}
        disableRipple
        width={18}
        height={18}
        liked={isLiked}
        onClick={handleLikeClick}
        className={clsx(styles.controlButton, styles.likeButton)}
      />
      {/*  */}
      <Button
        color="secondary"
        className={styles.controlButton}
        startIcon={
          <div className={clsx('svg-icon', styles.icon, styles.shareIcon)}>
            <ShareIcon />
          </div>
        }
      >
        Поделиться
      </Button>
    </div>
  )
}
