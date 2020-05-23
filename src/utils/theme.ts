import { createMuiTheme } from '@material-ui/core/styles'

// lightBackground: '#fefefe'

export const darkTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200
    }
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#ff9900',
      // main: appColors.main,
      dark: '#303030'
    },
    background: {
      default: '#303030'
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

export const lightTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: '#383838',
      // main: '#ff9900',

      dark: '#fff'
    },
    background: {
      default: '#fff'
      // default: '#f8fafa'
      // default: '#F8F8F8'
      // default: '#D8D8D8' // maybe search?
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})
