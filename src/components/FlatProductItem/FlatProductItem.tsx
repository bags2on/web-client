import React, { useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import ImagePlaceholder from '../../shared/ImagePlaceholder'
import LikeButton from '../../shared/LikeButton/LikeButton'
import routes from '../../utils/routes'
import { formatPrice } from '../../utils/helpers'
import { generateLink } from '../../utils/links'
import { makeStyles } from '@material-ui/core'

interface FlatProductItemProps {
  id: string
  price: number
  title: string
  imageURL: string
  discountPrice?: number
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    height: 120,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    paddingLeft: 4,
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px'
    }
  },
  textContainer: {
    paddingTop: 20,
    position: 'relative',
    [theme.breakpoints.up('laptop')]: {
      position: 'static'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginRight: 15
  },
  linkWrapper: {
    width: '100%',
    maxWidth: 117
  },
  title: {
    fontSize: 16,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 115,
    '& > a': {
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color .2s',
      '&:hover, &:focus': {
        outline: 'none',
        color: '#909090'
      }
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: 170
    }
  },
  price: {
    color: '#ff9900',
    '& > span': {
      fontSize: 18,
      fontWeight: 500
    }
  },
  priceWithDiscount: {
    textDecoration: 'line-through',
    color: '#909090',
    '& > span': {
      fontSize: 14
    }
  },
  discountPrice: {
    color: '#d81e1e',
    paddingLeft: 10,
    '& > span': {
      fontSize: 18,
      fontWeight: 500
    }
  },
  likeButton: {
    '& > button': {
      padding: 0
    },
    [theme.breakpoints.up('xl')]: {
      position: 'absolute',
      top: 43,
      right: 14,
      left: 'initial',
      '& > button': {
        padding: 5
      }
    },
    [theme.breakpoints.up('desktop')]: {
      top: 15
    }
  }
}))

const FlatProductItem: React.FC<FlatProductItemProps> = ({ id, price, title, imageURL, discountPrice }) => {
  const classes = useStyles()

  const [isLiked, setLiked] = useState<boolean>(false)

  const handleLikeClick = (): void => {
    setLiked(!isLiked)
  }

  return (
    <div className={classes.root}>
      <div className={classes.linkWrapper}>
        <Link to={generateLink(routes.product, id)} className={classes.link}>
          <ImagePlaceholder previewImage={imageURL} altText={title} />
        </Link>
      </div>
      <div className={classes.textContainer}>
        <Typography component="p" className={classes.title}>
          <Link to={generateLink(routes.product, id)} className={classes.link}>
            {title}
          </Link>
        </Typography>
        <Typography component="p">
          <Typography
            component="span"
            className={clsx({
              [classes.price]: true,
              [classes.priceWithDiscount]: Boolean(discountPrice)
            })}
          >
            <Typography component="span">{formatPrice(price)}</Typography>
            <Typography component="span">&nbsp;₴</Typography>
          </Typography>
          {!!discountPrice && (
            <>
              <Typography component="span" className={classes.discountPrice}>
                <Typography component="span">{formatPrice(discountPrice)}</Typography>
                <Typography component="span">&nbsp;₴</Typography>
              </Typography>
            </>
          )}
        </Typography>
        <div className={classes.likeButton}>
          <LikeButton liked={isLiked} onClick={handleLikeClick} disableRipple />
        </div>
      </div>
    </div>
  )
}

export default FlatProductItem
