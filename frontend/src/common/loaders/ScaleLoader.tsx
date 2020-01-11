import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    '& > div': {
      display: 'inline-block',
      animationFillMode: 'both',
      backgroundColor: theme.palette.primary.main,
      width: 3,
      margin: '0 2px',
      height: 20,
      borderRadius: 4
    },
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

const ScaleLoader: React.FC = () => {
  const classes = useStyles()
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
