import React from 'react'
import { makeStyles, Theme } from '@material-ui/core'

interface styleProps {
  fallback?: boolean
  dark?: boolean
}

const useStyles = makeStyles<Theme, styleProps>((theme) => ({
  loader: {
    width: ({ fallback }) => (fallback ? 34 : 24),
    height: ({ fallback }) => (fallback ? 40 : 24),
    '& > rect': {
      fill: (props: styleProps) => (props.dark ? '#343434' : theme.palette.secondary.main)
    }
  }
}))

interface LoaderProps {
  fallback?: boolean
  dark?: boolean
}

const ScaleLoader: React.FC<LoaderProps> = ({ fallback = false, dark }) => {
  const classes = useStyles({ fallback, dark })
  return (
    <svg className={classes.loader} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 30">
      <rect x="0" y="13" width="4" height="5" fill="#333">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="13" width="4" height="5" fill="#333">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="13" width="4" height="5" fill="#333">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  )
}

export default ScaleLoader
