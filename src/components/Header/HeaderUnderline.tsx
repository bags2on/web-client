import React from 'react'
import { makeStyles } from '@material-ui/core'

interface HeaderUnderlineProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      marginTop: 20,
      flexBasis: '100%',
      width: '100%',
      height: 1.5,
      background: '#dcbcbc'
    }
  }
}))

const HeaderUnderline: React.FC<HeaderUnderlineProps> = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div></div>
    </div>
  )
}

export default HeaderUnderline
