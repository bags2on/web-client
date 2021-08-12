import React from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core'

interface LikeButtonProps {
  liked: boolean
  onClick: (e: React.MouseEvent) => void
  width?: number
  height?: number
  disableRipple?: boolean
}

interface styleProps {
  width?: number
  height?: number
}

const useStyles = makeStyles(() => ({
  boxSvg: {
    width: (props: styleProps) => props.width,
    height: (props: styleProps) => props.height,
    fill: 'transparent',
    stroke: '#f44336',
    overflow: 'visible!important',
    strokeWidth: 1.5,
    transition: 'all 0.33s ease',
    '& use:last-child': {
      fill: '#f44336',
      stroke: '#f44336',
      opacity: 0,
      transform: 'scale(.33)',
      transformOrigin: 'center'
    }
  },
  liked: {
    stroke: '#transparent',
    '& use:last-child': {
      opacity: 1,
      transform: 'none',
      transition: 'all 0.5s cubic-bezier(.19,2.41,.45,.94)'
    }
  },
  ripleDisabled: {
    '&:hover': {
      background: 'none'
    }
  },
  hide: {
    display: 'none'
  }
}))

const LikeButton: React.FC<LikeButtonProps> = ({ liked, disableRipple, width = 20, height = 20, ...restProps }) => {
  const classes = useStyles({
    width,
    height
  })

  return (
    <IconButton
      className={clsx({
        [classes.ripleDisabled]: disableRipple
      })}
      disableRipple={disableRipple}
      {...restProps}
    >
      <svg
        className={clsx({
          [classes.boxSvg]: true,
          [classes.liked]: liked
        })}
        viewBox="0 0 24 24"
      >
        <use xlinkHref="#heart" />
        <use xlinkHref="#heart" />
      </svg>
      <svg className={clsx(classes.boxSvg, classes.hide)} viewBox="0 0 24 24">
        <defs>
          <path
            id="heart"
            d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
          />
        </defs>
      </svg>
    </IconButton>
  )
}

export default LikeButton
