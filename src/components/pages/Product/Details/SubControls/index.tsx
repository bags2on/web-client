import React, { useState } from 'react'
import clsx from 'clsx'
import Button from '@/shared/Button'
import LikeButton from '@/shared/LikeButton'
import { useReactiveVar } from '@apollo/client'
import { FavoriteMutations } from '@/apollo/cache/mutations'
import { favoriteProductsVar } from '@/apollo/cache/variables'
import CommentIcon from '../../../../../../public/assets/icons/comment.svg'
import ShareIcon from '../../../../../../public/assets/icons/share.svg'

import styles from './SubControls.module.scss'

interface SubControlsProps {
  productId: string
}

const SubControls: React.FC<SubControlsProps> = ({ productId }) => {
  const favoriteProducts = useReactiveVar(favoriteProductsVar)

  const [isLiked, setLiked] = useState<boolean>(favoriteProducts.includes(productId))

  const handleLikeClick = (): void => {
    if (isLiked) {
      FavoriteMutations.deleteFavorite(productId)
    } else {
      FavoriteMutations.addToFavorite(productId)
    }
    setLiked(!isLiked)
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

export default SubControls
