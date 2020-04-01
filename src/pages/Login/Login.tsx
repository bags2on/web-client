import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 20px 10px 20px'
  }
}))

const Login: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <LoginForm />
    </div>
  )
}

export default Login
