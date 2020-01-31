import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from '@apollo/react-hooks'
import { Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { I18nextProvider } from 'react-i18next'
import client from './utils/apollo'
import i18n from './locales/i18n'
import theme from './utils/theme'
import history from './utils/history'

const application = (
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <I18nextProvider i18n={i18n}>
          <CssBaseline />
          <App />
        </I18nextProvider>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

ReactDOM.render(application, document.querySelector('#astro-bank'))
