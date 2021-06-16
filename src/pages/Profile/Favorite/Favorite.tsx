import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {}
}))

const Favorite: React.FC = () => {
  const classes = useStyles()

  return <div className={classes.root}>Favorite</div>
}

export default Favorite
