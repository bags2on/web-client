/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { makeStyles } from '@material-ui/core'

interface StyleProps {
  fallback?: boolean
  dark?: boolean
}

const useStyles = makeStyles(() => ({
  root: {
    '& div:nth-child(1)': {
      animation: '$scale-loader 1s -.4s infinite cubic-bezier(.2, .68, .18, 1.08)'
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
  },
  dot: {
    display: 'inline-block',
    animationFillMode: 'both',
    backgroundColor: (props: StyleProps) => (props.dark ? '#fff' : '#ff9900'),
    width: (props: StyleProps) => (props.fallback ? 5 : 3),
    height: (props: StyleProps) => (props.fallback ? 70 : 20),
    margin: (props: StyleProps) => (props.fallback ? '0 3px' : '0 2px'),
    borderRadius: 4
  },
  '@keyframes scale-loader': {
    '0%': {
      transform: 'scaley(1)'
    },
    '50%': {
      transform: 'scaley(.4)'
    },
    '100%': {
      transform: 'scaley(1)'
    }
  }
}))

interface LoaderProps {
  fallback?: boolean
  dark?: boolean
}

const ScaleLoader: React.FC<LoaderProps> = ({ fallback, dark }) => {
  const classes = useStyles({ fallback, dark })
  return (
    <div className={classes.root}>
      <div className={classes.dot} />
      <div className={classes.dot} />
      <div className={classes.dot} />
      <div className={classes.dot} />
      <div className={classes.dot} />
    </div>
  )
}

export default ScaleLoader
