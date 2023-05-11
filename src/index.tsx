import React from 'react'
import { createRoot } from 'react-dom/client'
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper'
import { ApolloProvider } from '@apollo/client'
import { Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { ThemeProvider as StyThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './utils/theme'
import { darkTheme as StDark, lightTheme as StLight } from './utils/st_theme'
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
        <StyThemeProvider theme={theme === 'light' ? StLight : StDark}>
          <ModalProvider>
            <ApolloProvider client={client}>
              <CssBaseline />
              <App themeChanger={changeTheme} />
            </ApolloProvider>
          </ModalProvider>
        </StyThemeProvider>
      </ThemeProvider>
    </Router>
  )
}

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<Application />)
