import React, { useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
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
    lineHeight: '1.5',
    position: 'relative',
    display: 'flex',
    height: 120,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    backgroundColor: theme.palette.type === 'dark' ? '#282828' : 'transparent',
    borderRadius: 10,
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px'
    }
  },
  imageBox: {
    width: '100%',
    maxWidth: 117,
    padding: '0 5px'
  },
  infoBox: {
    maxWidth: 190,
    flex: '1 1 100%',
    minWidth: 0,
    padding: '20px 10px 0 10px',
    position: 'relative',
    [theme.breakpoints.up('laptop')]: {
      position: 'static'
    }
  },
  textWrapper: {
    margin: 0
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  title: {
    margin: 0,
    fontSize: 16,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '& > a': {
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color .2s',
      '&:hover, &:focus': {
        outline: 'none',
        color: '#909090'
      }
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
      <div className={classes.imageBox}>
        <Link to={generateLink(routes.product, id)} className={classes.link}>
          <ImagePlaceholder src={imageURL} altText={title} />
        </Link>
      </div>
      <div className={classes.infoBox}>
        <p className={classes.title}>
          <Link to={generateLink(routes.product, id)} className={classes.link}>
            {title}
          </Link>
        </p>
        <p className={classes.textWrapper}>
          <span
            className={clsx({
              [classes.price]: true,
              [classes.priceWithDiscount]: Boolean(discountPrice)
            })}
          >
            <span>{formatPrice(price)}</span>
            <span>&nbsp;₴</span>
          </span>
          {!!discountPrice && (
            <>
              <span className={classes.discountPrice}>
                <span>{formatPrice(discountPrice)}</span>
                <span>&nbsp;₴</span>
              </span>
            </>
          )}
        </p>
        <div className={classes.likeButton}>
          <LikeButton liked={isLiked} onClick={handleLikeClick} disableRipple />
        </div>
      </div>
    </div>
  )
}

export default FlatProductItem
