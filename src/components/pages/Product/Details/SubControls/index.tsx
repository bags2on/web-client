import React, { useState } from 'react'
import { useReactiveVar } from '@apollo/client'
import { FavoriteMutations } from '@/apollo/cache/mutations'
import { favoriteProductsVar } from '@/apollo/cache/variables'
import CommentIcon from '../../../../../../public/assets/icons/comment.svg'
import ShareIcon from '../../../../../../public/assets/icons/share.svg'

import {
  Container,
  ControlButton,
  ButtonIcon,
  ButtonSharedIcon,
  LikeButton
} from './SubControls.styled'

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
    <Container>
      <ControlButton
        color="secondary"
        startIcon={
          <ButtonIcon>
            <CommentIcon />
          </ButtonIcon>
        }
      >
        Комментарии
      </ControlButton>
      {/*  */}
      <LikeButton
        text={isLiked ? 'Избранное' : 'В избранное'}
        disableRipple
        width={18}
        height={18}
        liked={isLiked}
        onClick={handleLikeClick}
      />
      {/*  */}
      <ControlButton
        color="secondary"
        startIcon={
          <ButtonSharedIcon>
            <ShareIcon />
          </ButtonSharedIcon>
        }
      >
        Поделиться
      </ControlButton>
    </Container>
  )
}

export default SubControls
