import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px 20px'
  },
  productTitle: {
    fontSize: 27,
    fontWeight: 600
  }
}))

interface SummaryProps {
  title: string
}

const Summary: React.FC<SummaryProps> = ({ title }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.productTitle}>{title}</Typography>
    </div>
  )
}

export default Summary
