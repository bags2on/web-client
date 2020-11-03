import React from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import SvgIcon from '@material-ui/core/SvgIcon'
import { makeStyles } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Tags from './Tags'
import Rating from '../../../shared/Rating'
import Features from './Features/Features'
import ProductBuy from './ProductBuy/ProductBuy'
import { ReactComponent as CheckIcon } from '../../../assets/svg/check_mark.svg'

const useStyles = makeStyles(() => ({
  root: {
    // padding: '10px 20px'
    padding: '10px 10px 15px 10px'
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  productTitle: {
    fontSize: 25,
    fontWeight: 500,
    lineHeight: 1.6
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: '#6A6A6A',
    paddingLeft: 1
  },
  price: {
    textAlign: 'end',
    fontSize: 25,
    fontWeight: 500,
    '& > span': {
      fontSize: 20
    }
  },
  description: {
    marginTop: '20px',
    fontWeight: 500,
    '& .title': {
      paddingBottom: 6,
      fontWeight: 600
    }
  },

  subSection: {
    marginTop: 20
  },

  stock: {
    display: 'inline-flex',
    borderRadius: 10,
    width: 'auto',
    padding: '7px 8px',
    color: '#fff',
    '& > span': {
      fontSize: 13,
      fontWeight: 600
    }
  },
  inStock: {
    background: '#32CD32'
  },
  outOfStock: {
    background: '#c0c0c0'
  },
  stockIcon: {
    fill: '#fff',
    fontSize: 20,
    marginRight: 3
  },
  ratingBox: {
    display: 'flex',
    alignItems: 'center'
  }
}))

interface SummaryProps {
  id: string
  title: string
  price: number
  tags?: string[]
  description?: string
  inStock: boolean
}

const Details: React.FC<SummaryProps> = ({ id, title, price, tags, description, inStock }) => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      {tags && <Tags tags={tags} />}
      <Grid container>
        <Grid item xs={8}>
          <Typography component="h1" className={clsx(classes.productTitle, classes.title)}>
            {title}
          </Typography>
          <Typography component="h1" className={clsx(classes.subTitle, classes.title)}>
            Yellow Bag Women 2020
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography component="p" className={classes.price}>
            {price}
            <Typography component="span">&nbsp;₴</Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.subSection}>
          <Grid container>
            <Grid item xs={6}>
              <div className={clsx(classes.stock, inStock ? classes.inStock : classes.outOfStock)}>
                <SvgIcon className={classes.stockIcon}>{inStock ? <CheckIcon /> : <ErrorOutlineIcon />}</SvgIcon>
                <Typography component="span">{inStock ? 'in stock' : 'out of stock'}</Typography>
              </div>
            </Grid>
            <Grid item xs={6} className={classes.ratingBox}>
              <Rating starsAmount={5} /> (10)
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.description}>
        <Typography component="p" className="title">
          Description:
        </Typography>
        <Typography component="span">{description}</Typography>
      </div>
      <ProductBuy id={id} />
      <Features />
    </section>
  )
}

export default Details
