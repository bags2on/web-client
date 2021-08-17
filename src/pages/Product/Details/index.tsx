/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import clsx from 'clsx'
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
import { makeStyles } from '@material-ui/core'
import LikeButton from '../../../shared/LikeButton/LikeButton'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 10px 15px 10px'
  },
  title: {
    fontSize: 29,
    fontWeight: 500,
    lineHeight: '33px',
    margin: 0,
    marginBottom: 10
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
    flexWrap: 'wrap'
  },
  stock: {
    display: 'inline-flex',
    marginRight: 80,
    marginBottom: 25,
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
  ratingWrapper: {
    marginBottom: 25
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
    fontSize: 16,
    lineHeight: '1.5',
    marginTop: '20px',
    '& > p': {
      margin: 0,
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
    marginLeft: 15
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
          <span>{inStock ? 'В наличии' : 'Нет в наличии'}</span>
        </div>
        <div className={classes.ratingWrapper}>
          <Rating votesAmount={0} />
        </div>
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
        <p>Описание:</p>
        <span>{description}</span>
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
        <div className={classes.likeButton}>
          <LikeButton disableRipple width={30} height={30} liked={isLiked} onClick={handleLikeClick} />
        </div>
      </div>
      <Features color="желтый" material="кожа" type="женский" category="сумки" />
    </section>
  )
}

export default Details
