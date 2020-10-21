import React from 'react'
import { makeStyles } from '@material-ui/core'

interface HeaderUnderlineProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      flexBasis: '100%',
      width: '100%',
      height: 1.5,
      background: '#dcbcbc',
      marginTop: 15
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: 20
    }
  }
}))

const HeaderUnderline: React.FC<HeaderUnderlineProps> = () => {
  const classes = useStyles()

  return <div className={classes.root} />
}

export default HeaderUnderline
