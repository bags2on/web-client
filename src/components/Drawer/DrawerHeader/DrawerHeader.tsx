import React from 'react'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'
import NightToggle from '../../../shared/NightToggle/NightToggle'
import logoImage from '../../../assets/svg/logo.svg'

import { makeStyles } from '@material-ui/core'

interface DrawerHeaderProps {
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: '60px 0 25px 20px'
  },
  logo: {
    width: 190,
    backgroundColor: theme.palette.type === 'light' ? 'transparent' : theme.palette.secondary.main,
    '& > img': {
      width: '100%',
      height: '100%'
    }
  },
  close: {
    padding: 0,
    position: 'absolute',
    top: 15,
    right: 18
  },
  dline: {
    padding: '0 10px'
  },
  divider: {
    backgroundColor: '#d8bbbb80',
    marginBottom: '10px'
  }
}))

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ themeChanger }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <Link color="inherit">
          <div className={classes.logo}>
            <img src={logoImage} alt="логотип" />
          </div>
        </Link>
        <div className={classes.close}>
          <NightToggle themeChanger={themeChanger} />
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
