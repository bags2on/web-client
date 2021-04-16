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
import { getColorForMainTagName } from '../../utils/styling'
import { useTranslation } from 'react-i18next'
import routes from '../../utils/routes'

interface CatalogItemProps {
  id: string
  url: string
  title: string
  price: number
  discountPrice?: number
  mainTag: 'new' | 'top' | 'stock' | ''
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
        boxShadow: 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px'
      }
    }
  },
  title: {
    height: 40,
    display: 'block',
    lineHeight: '18px',
    color: '#343434',
    fontSize: 14,
    overflow: 'hidden',
    textDecoration: 'none',
    transition: 'color .2s',
    marginBottom: 5,
    '&:hover, &:focus': {
      color: 'orange',
      outline: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 15
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
  mainTag: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 75,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    textAlign: 'center',
    padding: '7px 4px',
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

const CatalogItem: React.FC<CatalogItemProps> = ({ id, url, title, price, mainTag, discountPrice }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const [isLiked, setLiked] = useState<boolean>(false)

  const handleLikeClick = (): void => {
    setLiked(!isLiked)
  }

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Link className={classes.linkWrapper} to={generateLink(routes.product, id)}>
          <ImagePlaceholder src={url} altText={title} />
        </Link>
      </div>
      <div className={classes.infoContainer}>
        <Link className={classes.title} title={title} to={generateLink(routes.product, id)}>
          {title}
        </Link>
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
      {!!mainTag && (
        <div
          className={classes.mainTag}
          style={{
            backgroundColor: getColorForMainTagName(mainTag)
          }}
        >
          <Typography component="span">{t(`product.mainTag.${mainTag}`)}</Typography>
        </div>
      )}
    </div>
  )
}

export default CatalogItem
