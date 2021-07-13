import React, { useState } from 'react'
import clsx from 'clsx'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Button from '../../../shared/Button/Button'
import Tags from './Tags'
import Rating from '../../../shared/Rating'
import Features from './Features/Features'
import { useQuery } from '@apollo/client'
import { GET_FAVORITE_IDS } from '../../../apollo/cache/queries/favorite'
import { formatPrice } from '../../../utils/helpers'
import { CartMutations, FavoriteMutations } from '../../../apollo/cache/mutations'
import { ReactComponent as CheckIcon } from '../../../assets/svg/check_mark.svg'
import { ReactComponent as HeartIcon } from '../../../assets/svg/heart.svg'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 10px 15px 10px'
  },
  title: {
    fontSize: 29,
    fontWeight: 500,
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  code: {
    color: '#939191',
    margin: 0,
    fontWeight: 500,
    fontSize: 15,
    marginBottom: 17
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 25
  },
  stock: {
    display: 'inline-flex',
    marginRight: 80,
    borderRadius: 10,
    width: 'auto',
    padding: '7px 8px',
    color: '#fff',
    '& > span': {
      fontSize: 13,
      marginLeft: 5,
      fontWeight: 600
    }
  },
  stockIcon: {
    fill: '#fff',
    fontSize: 20,
    marginRight: 3
  },
  inStock: {
    background: '#32CD32'
  },
  outOfStock: {
    background: '#c0c0c0'
  },
  currentPrice: {
    margin: 0,
    fontSize: 29,
    lineHeight: '29px',
    fontWeight: 500
  },
  priceDiscount: {
    color: '#f44336'
  },
  discount: {
    color: '#999999',
    margin: 0,
    fontSize: 17,
    fontWeight: 500,
    textDecoration: 'line-through'
  },
  description: {
    marginTop: '20px',
    fontWeight: 500,
    '& > p': {
      paddingBottom: 6,
      fontWeight: 600
    }
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start'
    }
  },
  cartButton: {
    maxWidth: 300,
    backgroundColor: 'var(--green-light)',
    border: '2px solid',
    borderColor: theme.palette.type === 'light' ? '#343434' : '#32CD32',
    fontWeight: 600,
    color: '#fff',
    transition: 'all .1s',
    '&:hover': {
      backgroundColor: '#4bea4b'
    }
  },
  likeButton: {
    border: '2px solid',
    borderColor: theme.palette.type === 'light' ? '#343434' : '#fff',
    marginLeft: 15,
    '&:hover': {
      background: 'none',
      borderColor: '#f44336'
    }
  },
  heartIcon: {
    fontSize: 24,
    fill: 'none',
    stroke: '#f44336'
  },
  heartIconLiked: {
    fill: '#f44336'
  },
  requestButton: {
    fontSize: 17,
    textTransform: 'none'
  }
}))

interface SummaryProps {
  id: string
  title: string
  currentPrice: number
  tags?: string[]
  description?: string
  basePrice: number
  inStock: boolean
}

interface FavoriteIdsQuery {
  favoriteIds: string[]
}

const Details: React.FC<SummaryProps> = ({ id, title, currentPrice, tags, description, inStock, basePrice }) => {
  const classes = useStyles()
  const { data } = useQuery<FavoriteIdsQuery>(GET_FAVORITE_IDS)

  const favoriteIds = data?.favoriteIds

  const isFavorite = favoriteIds?.includes(id)

  const [isLiked, setLiked] = useState<boolean>(isFavorite || false)

  console.log(isFavorite)

  const handleAddToCart = (): void => {
    CartMutations.addProduct({
      id,
      amount: 1
    })
  }

  const handleEnchantmentClick = (): void => {
    console.log('tell us something')
  }

  const handleLikeClick = (): void => {
    if (isLiked) {
      FavoriteMutations.deleteFavorite(id)
    } else {
      FavoriteMutations.addToFavorite(id)
    }
    setLiked(!isLiked)
  }

  return (
    <section className={classes.root}>
      {tags && <Tags tags={tags} />}
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.code}>код:&nbsp;{id}</p>
      <div className={classes.box}>
        <div className={clsx(classes.stock, inStock ? classes.inStock : classes.outOfStock)}>
          <SvgIcon className={classes.stockIcon}>{inStock ? <CheckIcon /> : <ErrorOutlineIcon />}</SvgIcon>
          <Typography component="span">{inStock ? 'В наличии' : 'Нет в наличии'}</Typography>
        </div>
        <Rating votesAmount={0} />
      </div>
      <div
        className={clsx({
          [classes.priceDiscount]: basePrice !== currentPrice
        })}
      >
        {basePrice !== currentPrice && <span className={classes.discount}>{formatPrice(basePrice)}&nbsp;₴</span>}
        <p className={classes.currentPrice}>{formatPrice(currentPrice)}&nbsp;₴</p>
      </div>
      <div className={classes.description}>
        <Typography component="p">Описание:</Typography>
        <Typography component="span">{description}</Typography>
      </div>
      <div className={classes.buttonsWrapper}>
        {inStock ? (
          <Button onClick={handleAddToCart} className={classes.cartButton} fullWidth disableShadow>
            Добавить в корзину
          </Button>
        ) : (
          <Button
            fullWidth
            disableShadow
            onClick={handleEnchantmentClick}
            className={clsx(classes.cartButton, classes.requestButton)}
          >
            Сообщить когда появиться
          </Button>
        )}
        <IconButton onClick={handleLikeClick} className={classes.likeButton}>
          <Icon
            classes={{
              root: clsx({
                [classes.heartIcon]: true,
                [classes.heartIconLiked]: isLiked
              })
            }}
          >
            <HeartIcon />
          </Icon>
        </IconButton>
      </div>

      <Features color="желтый" material="кожа" type="женский" category="сумки" />
    </section>
  )
}

export default Details
