import React from 'react'
import Asset_2 from '../../assets/svg/Asset_2.svg'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 'calc(95 * var(--vh))',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  imageWrapper: {
    padding: '0 10px',
    maxWidth: 230,
    margin: '0 auto',
    width: '100%',
    '& > img': {
      width: '100%'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 300
    }
  },
  title: {
    fontSize: 21,
    marginTop: 50,
    [theme.breakpoints.up('md')]: {
      fontSize: 27
    }
  },
  subTitle: {
    fontSize: 16,
    color: 'var(--sub-title-color)',
    [theme.breakpoints.up('md')]: {
      fontSize: 20
    }
  }
}))

interface ErrorPlugProps {
  message?: string
}

const ErrorPlug: React.FC<ErrorPlugProps> = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div style={{ textAlign: 'center' }}>
        <div className={classes.imageWrapper}>
          <img src={Asset_2} alt="asset 2" />
        </div>
        <h1 className={classes.title}>Не удалось получить данные с сервера</h1>
        <p className={classes.subTitle}>попробуйте перезагрузить страницу</p>
      </div>
    </div>
  )
}

export default ErrorPlug
