import React from 'react'

import LoginForm from './LoginForm/LoginForm'
import LangSwitcher from '../../components/LangSwitcher/LangSwitcher'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0 20px 10px 20px'
  }
}))

const Login: React.FC = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <LangSwitcher />
      <LoginForm />
    </main>
  )
}

export default Login
