import React from 'react'
import clsx from 'clsx'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import { ReactComponent as HeartIcon } from '../../assets/svg/heart.svg'
import { makeStyles } from '@material-ui/core'

interface LikeButtonProps {
  liked: boolean
  onClick: (e: React.MouseEvent) => void
  disableRipple?: boolean
}

const useStyles = makeStyles(() => ({
  root: {
    color: '#f44336'
  },
  heartIcon: {
    stroke: '#f44336',
    fill: 'none'
  },
  liked: {
    fill: '#f44336'
  },
  ripleDisabled: {
    '&:hover': {
      background: 'none'
    }
  }
}))

const LikeButton: React.FC<LikeButtonProps> = ({ liked, disableRipple, ...restProps }) => {
  const classes = useStyles()

  return (
    <IconButton
      className={clsx({
        [classes.root]: true,
        [classes.ripleDisabled]: disableRipple
      })}
      disableRipple={disableRipple}
      {...restProps}
    >
      <Icon
        fontSize="small"
        classes={{
          root: clsx({
            [classes.heartIcon]: true,
            [classes.liked]: liked
          })
        }}
      >
        <HeartIcon />
      </Icon>
    </IconButton>
  )
}

export default LikeButton
