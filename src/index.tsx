import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import App from './App'
import { ApolloProvider } from '@apollo/react-hooks'
import { Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import './locales/i18n'
import { darkTheme, lightTheme } from './utils/theme'
import history from './utils/history'
import client from './apollo/apollo'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade])

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
        <ApolloProvider client={client}>
          <CssBaseline />
          <App themeChanger={changeTheme} />
        </ApolloProvider>
      </ThemeProvider>
    </Router>
  )
}

ReactDOM.render(<Application />, document.querySelector('#root'))
