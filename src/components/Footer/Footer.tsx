import React from 'react'
import NightToggleSwith from '../../shared/NightToggleSwith/NightToggleSwith'
import Typography from '@material-ui/core/Typography'
import Japer from './Japer/Japer'
import { makeStyles } from '@material-ui/core'

interface FooterProps {
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles(() => ({
  root: {
    // color: '#fff',
    background: '#333',
    // textAlign: 'center',
    padding: '30px 10% 20px 10%'
  },
  // logo: {
  //   color: 'transparent',
  //   background: 'linear-gradient(to right, #fc4a1a, #FFDD00, #f7b733)',
  //   '-webkit-background-clip': 'text'
  // }
  contact: {
    width: 450,
    color: '#fff',
    '& h5': {
      fontSize: 14,
      marginBottom: 25
    }
  },
  contactMessage: {
    color: '#a29e9e',
    fontSize: 12,
    margin: 0
  }
}))

const Footer: React.FC<FooterProps> = ({ themeChanger }) => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      {/* <Japer />
      <Typography component="p" className={classes.logo}>
        bags2on
      </Typography> */}
      {/* <Typography component="p">2020</Typography> */}
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NightToggleSwith themeChanger={themeChanger} />
      </div> */}
      <div className={classes.contact}>
        <Typography component="h5">Связь с нами</Typography>
        <p className={classes.contactMessage}>
          Привет, мы всегда открыты для сотрудничества и предложений, свяжитесь с нами одним из способов ниже
        </p>
      </div>
    </footer>
  )
}

export default Footer
