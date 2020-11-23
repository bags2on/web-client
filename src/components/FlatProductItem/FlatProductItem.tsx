import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

interface FlatProductItemProps {
  id: string
  price: number
  title: string
  imageURL: string
  discountPrice?: number
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: 120,
    border: '1px solid #dcdcdc'
  }
}))

const FlatProductItem: React.FC<FlatProductItemProps> = ({ price, title, imageURL }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div style={{ width: 120, height: 106 }}>
        <img style={{ width: '100%', height: 'auto' }} src={imageURL} alt="sdsd" />
      </div>
      <div>
        <Typography component="p">{title}</Typography>
        <Typography component="span">{price}</Typography>
      </div>
    </div>
  )
}

export default FlatProductItem
