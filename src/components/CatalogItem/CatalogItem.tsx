import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

interface CatalogItemProps {
  url: string
  title: string
  price: number
}

const useStyles = makeStyles(() => ({
  root: {
    background: '#fff',
    margin: '8px 3px',
    borderRadius: '8px',
    boxShadow: '0px 1px 9px -1px rgba(0,0,0,0.1)',
    '&:hover': {
      // boxShadow: '0px 1px 9px 1px rgba(0,0,0,0.1)'
    }
  },
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
