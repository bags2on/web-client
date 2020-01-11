import { createMuiTheme } from '@material-ui/core/styles'

const appColors = {
  primary: '#ffa800',
  black: '#111111',
  lightBackground: '#fefefe',
}

export default createMuiTheme({
  palette: {
    primary: {
      main: appColors.primary,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})
