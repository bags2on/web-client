import React, { useState } from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ReactComponent as HeartIcon } from '../../assets/svg/heart.svg'
import routes from '../../utils/routes'
import { generateLink } from '../../utils/links'

interface CatalogItemProps {
  id: string
  url: string
  title: string
  price: number
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
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
  },
  likeButton: {
    color: '#f44336',
    position: 'absolute',
    top: 4,
    right: 4
  },
  heartIcon: {
    stroke: '#f44336',
    fill: 'none'
  },
  liked: {
    fill: '#f44336'
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
      <Link to={generateLink(routes.product, id)}>
        <div className={classes.image}>
          <img src={url} alt={title} />
        </div>
      </Link>
      <Typography component="p" className={classes.title}>
        {title}
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
