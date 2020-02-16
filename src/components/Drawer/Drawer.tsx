import React from 'react'
import DrawerUI from '@material-ui/core/Drawer'
import DrawerHeader from './DrawerHeader/DrawerHeader'
import { makeStyles } from '@material-ui/core'

interface DrawerProps {
  isOpen: boolean
  onClose(): void
}

const useStyles = makeStyles(theme => ({
  root: {},
  drawer: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.primary.dark
  }
}))

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const classes = useStyles()

  return (
    <DrawerUI
      anchor="left"
      onClose={onClose}
      open={isOpen}
      classes={{
        paper: classes.drawer
      }}
    >
      <div className={classes.root}>
        <DrawerHeader onClose={onClose} />
      </div>
    </DrawerUI>
  )
}

export default Drawer
