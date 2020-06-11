import React from 'react'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import NightToggleSwith from '../../../shared/NightToggleSwith/NightToggleSwith'

import { makeStyles } from '@material-ui/core'

interface DrawerHeaderProps {
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    padding: '40px 0 30px 20px'
  },
  logo: {
    fontSize: '40px',
    fontWeight: 500,
    color: 'transparent',
    background: 'linear-gradient(to right, #fc4a1a, #FFDD00, #f7b733)',
    userSelect: 'none',
    '-webkit-background-clip': 'text'
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
        <Typography className={classes.logo} component="h1">
          <Link color="inherit">
            Bags
            <sup>2</sup>
            on
          </Link>
        </Typography>
        <div className={classes.close}>
          <NightToggleSwith themeChanger={themeChanger} />
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
