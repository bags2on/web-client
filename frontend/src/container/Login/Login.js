import React from "react"
import { makeStyles } from "@material-ui/core/styles"
// import Typography from "@material-ui/core/Typography"
import Button from "../../common/Button"

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    padding: "0 20px",
    backgroundColor: "#fafafa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}))

const Login = props => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Button fullWidth>Sign in</Button>
    </main>
  )
}

export default Login
