import React, { useState } from 'react'
import clsx from 'clsx'
import SvgIcon from '@material-ui/core/SvgIcon'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Button from '../../../shared/Button/Button'
import Tags from './Tags'
import Rating from '../../../shared/Rating'
import Features from './Features/Features'
import LikeButton from '../../../shared/LikeButton/LikeButton'
import { useReactiveVar } from '@apollo/client'
import { favoriteProductsVar } from '../../../apollo/cache/variables'
import { CartMutations, FavoriteMutations } from '../../../apollo/cache/mutations'
import { formatPrice } from '../../../utils/helpers'
import { ReactComponent as CheckIcon } from '../../../assets/svg/icons/check_mark.svg'
import { ReactComponent as HeaderCartIcon } from '../../../assets/svg/icons/header_cart.svg'
import { makeStyles } from '@material-ui/core'

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
    marginRight: 30,
    marginBottom: 25,
    borderRadius: 15,
    width: 'auto',
    padding: '7px 8px',
    color: '#fff',
    '& > span': {
      fontSize: 13,
      marginLeft: 5,
      fontWeight: 600
    },
    [theme.breakpoints.up('md')]: {
      marginRight: 80
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
  percentage: {
    color: '#fff',
    marginLeft: 7,
    fontWeight: 600,
    borderRadius: 8,
    padding: '2px 3px',
    backgroundColor: '#f44336'
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
    fontSize: 19,
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

type featuresType = {
  material: string
  color: string
  gender: string
  category: string
}

type productRating = {
  rating: number
}

interface SummaryProps {
  id: string
  title: string
  currentPrice: number
  tags?: string[]
  description?: string
  basePrice: number
  inStock: boolean
  features: featuresType
  rating: productRating
}

const Details: React.FC<SummaryProps> = ({
  id,
  title,
  currentPrice,
  tags,
  description,
  inStock,
  basePrice,
  features,
  rating
}) => {
  const classes = useStyles()
  const favoriteProducts = useReactiveVar(favoriteProductsVar)
  // const [getProducts, { loading, data, error }] = useLazyQuery<AllProductsQuery, AllProductsVariables>(
  //   AllProductsDocument,
  //   {
  //     onCompleted: (data) => {
  //       if (data?.allProducts.priceRange) {
  //         const { gt, lt } = data.allProducts.priceRange
  //         setPriceRange([gt, lt])
  //       }
  //     }
  //   }
  // )

  const [isLiked, setLiked] = useState<boolean>(favoriteProducts.includes(id))

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

  // const handleRatingVote = (rating: number): void => {}

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
          <Rating starRating={rating.rating} />
        </div>
      </div>
      <div
        className={clsx({
          [classes.priceDiscount]: basePrice !== currentPrice
        })}
      >
        {basePrice !== currentPrice && (
          <>
            <span className={classes.discount}>{formatPrice(basePrice)}&nbsp;₴</span>
            <span className={classes.percentage}>-{Math.round(((basePrice - currentPrice) * 100) / basePrice)}%</span>
          </>
        )}
        <p className={classes.currentPrice}>{formatPrice(currentPrice)}&nbsp;₴</p>
      </div>
      <div className={classes.description}>
        <p>Описание:</p>
        <span>{description}</span>
      </div>
      <div className={classes.buttonsWrapper}>
        {inStock ? (
          <Button
            onClick={handleAddToCart}
            className={classes.cartButton}
            fullWidth
            disableShadow
            startIcon={
              <SvgIcon component="span" style={{ fontSize: 30 }}>
                <HeaderCartIcon />
              </SvgIcon>
            }
          >
            Купить
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
      <Features
        color={features.color}
        material={features.material}
        type={features.gender}
        category={features.category}
      />
    </section>
  )
}

export default Details
