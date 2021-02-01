import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {}
}))

const Japer: React.FC = () => {
  const classes = useStyles()

  return <div className={classes.root}></div>
}

export default Japer
