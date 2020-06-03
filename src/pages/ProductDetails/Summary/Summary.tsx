import React from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import SvgIcon from '@material-ui/core/SvgIcon'
import { makeStyles } from '@material-ui/core'
import { ReactComponent as CheckIcon } from '../../../assets/svg/check_mark.svg'
import Tags from './Tags'
import Rating from '../../../components/Rating/Rating'

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
    fontWeight: 500
  },
  stock: {
    display: 'inline-flex',
    borderRadius: 10,
    width: 'auto',
    padding: '8px',
    background: '#32CD32',
    color: '#fff',
    '& > span': {
      fontWeight: 600
    }
  },
  stockIcon: {
    fill: '#fff',
    marginRight: 3
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

const Summary: React.FC<SummaryProps> = ({ title, price, tags, description, inStock }) => {
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
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <div className={classes.stock}>
                {/* <div> */}
                <SvgIcon className={classes.stockIcon}>
                  <CheckIcon />
                </SvgIcon>
                {inStock ? (
                  <Typography component="span">in stock</Typography>
                ) : (
                  <Typography component="span">not in stock</Typography>
                )}
                {/* </div> */}
              </div>
            </Grid>
            <Grid item xs={6}>
              <Rating />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.description}>
        <Typography component="p">{description}</Typography>
      </div>
    </section>
  )
}

export default Summary
