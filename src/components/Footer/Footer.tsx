import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    color: '#fff',
    background: '#303030',
    textAlign: 'center',
    padding: '20px 0'
  },
  logo: {
    color: 'transparent',
    background: 'linear-gradient(to right, #fc4a1a, #FFDD00, #f7b733)',
    '-webkit-background-clip': 'text'
  }
}))

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Typography component="p">
        <Typography component="span" className={classes.logo}>
          bags2on
        </Typography>
        &nbsp; 2020
      </Typography>
    </footer>
  )
}

export default Footer
