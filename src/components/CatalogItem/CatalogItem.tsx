import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

interface CatalogItemProps {
  url: string
  title: string
  price: number
}

const useStyles = makeStyles(() => ({
  root: {},
  image: {
    padding: 10,
    '& > img': {
      width: '100%',
      height: '100%'
    }
  },
  title: {
    textAlign: 'center'
  },
  price: {
    textAlign: 'center',
    color: '#ff9900',
    '& > span': {
      fontWeight: 500
    }
  }
}))

const CatalogItem: React.FC<CatalogItemProps> = ({ url, title, price }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <img src={url} alt={title} />
      </div>
      <Typography component="p" className={classes.title}>
        {title}
      </Typography>

      <Typography component="p" className={classes.price}>
        <Typography component="span">{price}</Typography>
        <Typography component="span">&nbsp;₴</Typography>
      </Typography>
    </div>
  )
}

export default CatalogItem
