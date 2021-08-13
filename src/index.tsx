import React from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper'
import { ApolloProvider } from '@apollo/client'
import { Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { darkTheme, lightTheme } from './utils/theme'
import App from './App'
import { useTheme } from './hooks'
import history from './utils/history'
import client from './apollo/apollo'

import './locales/i18n'
import './utils/shared.scss'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs])

const Application: React.FC = () => {
  const [theme, changeTheme] = useTheme('light')

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
