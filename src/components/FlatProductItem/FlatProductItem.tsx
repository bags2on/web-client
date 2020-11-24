import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import ImagePlaceholder from '../../shared/ImagePlaceholder'
import LikeButton from '../../shared/LikeButton/LikeButton'
import { makeStyles } from '@material-ui/core'

interface FlatProductItemProps {
  id: string
  price: number
  title: string
  imageURL: string
  discountPrice?: number
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    display: 'flex',
    height: 120,
    border: '1px solid #dcdcdc'
  },
  likeButton: {
    position: 'absolute',
    top: 4,
    right: 4
  }
}))

const FlatProductItem: React.FC<FlatProductItemProps> = ({ price, title, imageURL }) => {
  const classes = useStyles()

  const [isLiked, setLiked] = useState<boolean>(false)

  const handleLikeClick = (): void => {
    setLiked(!isLiked)
  }

  return (
    <div className={classes.root}>
      <div style={{ width: 120, height: 106 }}>
        <ImagePlaceholder previewImage={imageURL} altText={title} />
      </div>
      <div>
        <Typography component="p">{title}</Typography>
        <Typography component="span">{price}</Typography>
      </div>
      <div className={classes.likeButton}>
        <LikeButton liked={isLiked} onClick={handleLikeClick} />
      </div>
    </div>
  )
}

export default FlatProductItem
