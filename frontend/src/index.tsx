import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './utils/theme'
import history from './utils/history'

const application = (
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Router>
)

ReactDOM.render(application, document.getElementById('root'))
