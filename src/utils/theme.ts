import { createMuiTheme } from '@material-ui/core/styles'

const appColors = {
  main: '#ffa800',
  lightBackground: '#fefefe',
  appBackground: '#303030'
}

export default createMuiTheme({
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
    primary: {
      main: appColors.main,
      dark: appColors.appBackground
    },
    background: {
      default: appColors.appBackground
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
