import React from 'react'
import NightToggleSwith from '../../shared/NightToggleSwith/NightToggleSwith'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

interface FooterProps {
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles(() => ({
  root: {
    color: '#fff',
    background: '#262626',
    textAlign: 'center',
    padding: '15px 0'
  },
  logo: {
    color: 'transparent',
    background: 'linear-gradient(to right, #fc4a1a, #FFDD00, #f7b733)',
    '-webkit-background-clip': 'text'
  }
}))

const Footer: React.FC<FooterProps> = ({ themeChanger }) => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Typography component="p" className={classes.logo}>
        bags2on
      </Typography>
      <Typography component="p">2020</Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NightToggleSwith themeChanger={themeChanger} />
      </div>
    </footer>
  )
}

export default Footer
