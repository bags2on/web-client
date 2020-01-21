import React from 'react'
import { makeStyles } from '@material-ui/core'

interface StyleProps {
  fallback?: boolean
}

const useStyles = makeStyles(theme => ({
  root: (props: StyleProps) => ({
    '& > div': {
      display: 'inline-block',
      animationFillMode: 'both',
      backgroundColor: theme.palette.primary.main,
      width: props.fallback ? 5 : 3,
      height: props.fallback ? 70 : 20,
      margin: props.fallback ? '0 3px' : '0 2px',
      borderRadius: 4
    },
    '& div:nth-child(1)': {
      animation: '$scale-loade 1s -.4s infinite cubic-bezier(.2, .68, .18, 1.08)'
    },
    '& div:nth-child(2)': {
      animation: '$scale-loader 1s -.3s infinite cubic-bezier(.2, .68, .18, 1.08)'
    },
    '& div:nth-child(3)': {
      animation: '$scale-loader 1s -.3s infinite cubic-bezier(.2, .68, .18, 1.08)'
    },
    '& div:nth-child(4)': {
      animation: '$scale-loader 1s -.2s infinite cubic-bezier(.2, .68, .18, 1.08)'
    },
    '& div:nth-child(5)': {
      animation: '$scale-loader 1s 0s infinite cubic-bezier(.2, .68, .18, 1.08)'
    }
  })
}))

interface LoaderProps {
  fallback?: boolean
}

const ScaleLoader: React.FC<LoaderProps> = ({ fallback }) => {
  const classes = useStyles({ fallback })
  return (
    <div className={classes.root}>
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default ScaleLoader
