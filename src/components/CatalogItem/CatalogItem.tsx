import React, { useState } from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ImagePlaceholder from '../../shared/ImagePlaceholder/ImagePlaceholder'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ReactComponent as HeartIcon } from '../../assets/svg/heart.svg'
import { generateLink } from '../../utils/links'
import routes from '../../utils/routes'

interface CatalogItemProps {
  id: string
  url: string
  title: string
  price: number
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    background: '#fff',
    margin: '8px 3px',
    padding: '5px',
    borderRadius: '8px',
    boxShadow: '0px 1px 9px -1px rgba(0,0,0,0.1)',
    transition: 'all .3s',
    [theme.breakpoints.up('md')]: {
      margin: '8px 4px',
      '&:hover': {
        boxShadow: '0 5px 15px 1px rgba(0,0,0,0.15)'
      }
    }
  },
  title: {
    fontSize: '14px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '& > a': {
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color .2s',
      '&:hover, &:focus': {
        color: 'orange',
        outline: 'none'
      }
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px'
    }
  },
  price: {
    textAlign: 'center',
    color: '#ff9900',
    '& > span': {
      fontWeight: 500
    }
  },
  likeButton: {
    color: '#f44336',
    position: 'absolute',
    top: 4,
    right: 4
  },
  cartButton: {
    position: 'absolute',
    right: 0,
    top: 37
  },
  heartIcon: {
    stroke: '#f44336',
    fill: 'none'
  },
  liked: {
    fill: '#f44336'
  },
  box: {
    position: 'relative',
    marginBottom: 10
  },
  linkWrapper: {
    outline: 'none'
  }
}))

const CatalogItem: React.FC<CatalogItemProps> = ({ id, url, title, price }) => {
  const classes = useStyles()

  const [isLiked, setLiked] = useState<boolean>(false)

  const handleLikeClick = (): void => {
    setLiked(!isLiked)
  }

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Link className={classes.linkWrapper} to={generateLink(routes.product, id)}>
          <ImagePlaceholder previewImage={url} altText={title} />
        </Link>
      </div>
      <Typography component="p" className={classes.title}>
        <Link to={generateLink(routes.product, id)}>{title}</Link>
      </Typography>
      <Typography component="p" className={classes.price}>
        <Typography component="span">{price}</Typography>
        <Typography component="span">&nbsp;₴</Typography>
      </Typography>
      <IconButton onClick={handleLikeClick} className={classes.likeButton}>
        <Icon
          fontSize="small"
          classes={{
            root: clsx({
              [classes.heartIcon]: true,
              [classes.liked]: isLiked
            })
          }}
        >
          <HeartIcon />
        </Icon>
      </IconButton>
    </div>
  )
}

export default CatalogItem
