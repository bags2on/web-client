import React from "react"
import ReactDOM from "react-dom"
import { Router } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import App from "./App"
import history from "./utils/history"
import theme from "./utils/theme"

const application = (
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Router>
)

ReactDOM.render(application, document.querySelector("#root"))
