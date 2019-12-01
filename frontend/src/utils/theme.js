import { createMuiTheme } from "@material-ui/core/styles"

const appColors = {
  primary: "#4776E6",
  black: "#111111",
  lightBackground: "rgb(254, 254, 254)"
}

export default createMuiTheme({
  palette: {
    primary: {
      main: appColors.primary
    }
  },
  typography: {
    fontFamily: [
      "IBM Plex Sans",
      "Roboto",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
})
