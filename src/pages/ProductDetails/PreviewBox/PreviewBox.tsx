import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {},
  tmp: {
    margin: 10,
    border: `5px solid ${theme.palette.primary.main}`,
    height: 300
  }
}))

const PreviewBox: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.tmp} />
    </div>
  )
}

export default PreviewBox
