import React from 'react'
import Drag from '../Drag'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core'
import { ReactComponent as AddToCartIcon } from '../../../assets/svg/cart_add.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  tmp: {
    margin: 10,
    border: `5px solid ${theme.palette.primary.main}`,
    height: 300
  },
  icon: {
    position: 'absolute',
    bottom: '-27px',
    right: '40px',
    zIndex: 100,
    background: '#00a347', // '#2F69F8'
    padding: 20,
    boxShadow: '0px 4px 11px 6px rgba(0,0,0,0.1)',
    '&:hover': {
      background: '#00a347'
    }
  },
  cartIcon: {
    fontSize: 30,
    fill: '#fff'
  }
}))

interface PreviewBoxProps {
  images: string[]
}

const PreviewBox: React.FC<PreviewBoxProps> = ({ images }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Drag images={images} />
      <IconButton className={classes.icon}>
        <Icon className={classes.cartIcon}>
          <AddToCartIcon />
        </Icon>
      </IconButton>
    </div>
  )
}

export default PreviewBox
