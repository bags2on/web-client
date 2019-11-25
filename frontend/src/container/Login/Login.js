import React from "react"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/core/styles"
import {fontSize} from "@material-ui/system"

const useStyles = makeStyles(() => ({
  button: {
    backgroundImage: "linear-gradient(to right, #1DA1F2, #4A00E0)",
    color: "#fff",
    maxWidth: "300px"
  }
}))

const Login = props => {
  const classes = useStyles()

  return (
    <main>
      <h1>Form</h1>
      <Button fullWidth className={classes.button}>
        Sign in
      </Button>
    </main>
  )
}

export default Login
