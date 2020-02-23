import React from 'react'
import logo from '../../../assets/svg/small-logo.svg'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core'

interface DrawerHeaderProps {
  onClose(): void
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    padding: '40px 15px 30px 15px'
  },
  logo: {
    width: 210
  },
  close: {
    padding: 0,
    position: 'absolute',
    top: 10,
    right: 10
  },
  dline: {
    padding: '0 10px'
  },
  divider: {
    backgroundColor: '#d8bbbb80'
  }
}))

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ onClose }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <div className={classes.logo}>
          <img src={logo} alt="Bags2on" />
        </div>
        <div>
          <IconButton className={classes.close} disableRipple color="primary" onClick={onClose}>
            <Close fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className={classes.dline}>
        <Divider
          classes={{
            root: classes.divider
          }}
        />
      </div>
    </>
  )
}

export default DrawerHeader
