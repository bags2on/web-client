import { createMuiTheme } from '@material-ui/core/styles'

const appColors = {
  main: '#ffa800',
  lightBackground: '#fefefe',
  appBackground: '#303030'
}

export default createMuiTheme({
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
