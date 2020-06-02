import React from 'react'
import ScaleLoader from './loaders/ScaleLoader'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const Fallback: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ScaleLoader fallback />
    </div>
  )
}

export default Fallback
