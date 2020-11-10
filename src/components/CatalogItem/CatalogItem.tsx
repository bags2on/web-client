import React, { useState } from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ImagePlaceholder from '../../shared/ImagePlaceholder'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ReactComponent as HeartIcon } from '../../assets/svg/heart.svg'
import { generateLink } from '../../utils/links'
import { formatPrice } from '../../utils/helpers'
import routes from '../../utils/routes'

interface CatalogItemProps {
  id: string
  url: string
  title: string
  price: number
  discountPrice?: number
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    background: '#fff',
    margin: '8px 3px',
    padding: '5px',
    borderRadius: 8,
    boxShadow: '0px 1px 9px -1px rgba(0,0,0,0.1)',
    transition: 'all .3s',
    [theme.breakpoints.up('md')]: {
      margin: '8px 4px',
      '&:hover': {
        boxShadow: '0 5px 15px 1px rgba(0,0,0,0.15)'
      }
    }
  },
  title: {
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '& > a': {
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color .2s',
      '&:hover, &:focus': {
        color: 'orange',
        outline: 'none'
      }
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px'
    }
  },
  infoContainer: {
    marginLeft: 10
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
    color: '#f44336',
    position: 'absolute',
    top: 4,
    right: 4
  },
  saleBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#d81e1e',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: '7px',
    userSelect: 'none',
    '& > span': {
      color: '#fff',
      fontWeight: 500,
      fontSize: 14
    }
  },
  heartIcon: {
    stroke: '#f44336',
    fill: 'none'
  },
  liked: {
    fill: '#f44336'
  },
  box: {
    position: 'relative',
    marginBottom: 10
  },
  linkWrapper: {
    outline: 'none'
  }
}))

const CatalogItem: React.FC<CatalogItemProps> = ({ id, url, title, price, discountPrice }) => {
  const classes = useStyles()

  const [isLiked, setLiked] = useState<boolean>(false)

  const handleLikeClick = (): void => {
    setLiked(!isLiked)
  }

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Link className={classes.linkWrapper} to={generateLink(routes.product, id)}>
          <ImagePlaceholder previewImage={url} altText={title} />
        </Link>
      </div>
      <div className={classes.infoContainer}>
        <Typography component="p" className={classes.title}>
          <Link to={generateLink(routes.product, id)}>{title}</Link>
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
      </div>
      <IconButton onClick={handleLikeClick} className={classes.likeButton}>
        <Icon
          fontSize="small"
          classes={{
            root: clsx({
              [classes.heartIcon]: true,
              [classes.liked]: isLiked
            })
          }}
        >
          <HeartIcon />
        </Icon>
      </IconButton>
      {!!discountPrice && (
        <div className={classes.saleBox}>
          <Typography component="span">Акция</Typography>
        </div>
      )}
    </div>
  )
}

export default CatalogItem
