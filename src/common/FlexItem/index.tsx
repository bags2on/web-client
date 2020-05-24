import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ff9900',
    height: 300,
    marginRight: 10,
    fontSize: 30,
    fontWeight: 2,
    color: '#fff'
  }
}))

interface FlexItemProps {
  width: number
  children: React.ReactNode
}

const FlexItem: React.FC<FlexItemProps> = ({ width, children }) => {
  const classes = useStyles()

  return (
    <div style={{ width: `${width}px` }} className={classes.root}>
      {children}
    </div>
  )
}

export default FlexItem
