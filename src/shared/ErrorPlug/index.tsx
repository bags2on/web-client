import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 'calc(100 * var(--vh))',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  title: {
    fontSize: 21,
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
        <h1 className={classes.title}>Не удалось получить данные с сервера</h1>
        <p className={classes.subTitle}>попробуйте перезагрузить страницу</p>
      </div>
    </div>
  )
}

export default ErrorPlug
