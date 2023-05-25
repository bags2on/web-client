import React from 'react'
import { createRoot } from 'react-dom/client'
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper'
import { ApolloProvider } from '@apollo/client'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, GlobalStyles } from './utils/theme'
import App from './App'
import { useTheme } from './hooks'
import history from './utils/history'
import client from './apollo/apollo'
import { ModalProvider } from 'styled-react-modal'

import './locales/i18n'

import './utils/shared.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs])

const Application: React.FC = () => {
  const [theme, changeTheme] = useTheme('light')

  return (
    <Router history={history}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <ModalProvider>
          <ApolloProvider client={client}>
            <GlobalStyles />
            <App themeChanger={changeTheme} />
          </ApolloProvider>
        </ModalProvider>
      </ThemeProvider>
    </Router>
  )
}

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<Application />)
