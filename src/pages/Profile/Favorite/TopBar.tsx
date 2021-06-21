/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import { makeStyles } from '@material-ui/core'

interface TopBarProps {}

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between'
  },
  total: {},
  controls: {
    backgroundColor: 'limegreen',
    padding: '3px 10px'
  }
}))

const TopBar: React.FC<TopBarProps> = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.total}>Товаров на сумму: -----</div>
      <div className={classes.controls}>Bar</div>
    </div>
  )
}

export default TopBar
