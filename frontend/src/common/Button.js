import React from "react"
import { Button as ButtonUI } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 0%, #8E54E9  51%, #4776E6  100%)`,
    boxShadow: "0px 8px 17px rgba(0, 0, 0, .3)",
    color: "#fff",
    fontWeight: 700,
    borderRadius: "22px",
    padding: "12px 0",
    fontSize: "30px"
  }
}))

const Button = props => {
  const classes = useStyles()

  const { children, ...restProps } = props
  console.log(restProps)

  return (
    <ButtonUI className={classes.root} {...restProps}>
      <Typography color="inherit" variant="button">
        {children}
      </Typography>
    </ButtonUI>
  )
}

export default Button
