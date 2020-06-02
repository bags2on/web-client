import React from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Tags from './Tags'

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
  }
}))

interface SummaryProps {
  title: string
  price: number
  tags?: string[]
}

const Summary: React.FC<SummaryProps> = ({ title, price, tags }) => {
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
            Lorem ipsum dolor sit amet
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography component="p" className={classes.price}>
            {price}
            <Typography component="span">&nbsp;₴</Typography>
          </Typography>
        </Grid>
      </Grid>
    </section>
  )
}

export default Summary
