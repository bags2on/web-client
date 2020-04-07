import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { I18nextProvider } from 'react-i18next'
import i18n from './locales/i18n'
import { darkTheme, lightTheme } from './utils/theme'
import history from './utils/history'

const useTheme = (): [string, (checked: boolean) => void] => {
  const defaultTheme = localStorage.getItem('theme') || 'dark'

  const [theme, setTheme] = useState<string>(defaultTheme)

  const toggleThemeMode = (checked: boolean): void => {
    setTheme(checked ? 'light' : 'dark')
    localStorage.setItem('theme', checked ? 'light' : 'dark')
  }

  return [theme, toggleThemeMode]
}

const Application: React.FC = () => {
  const [theme, changeTheme] = useTheme()

  return (
    <Router history={history}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <I18nextProvider i18n={i18n}>
          <CssBaseline />
          <App themeChanger={changeTheme} />
        </I18nextProvider>
      </ThemeProvider>
    </Router>
  )
}

ReactDOM.render(<Application />, document.querySelector('#root'))
