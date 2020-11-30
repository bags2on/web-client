import { createMuiTheme } from '@material-ui/core/styles'
import { BreakpointOverrides } from '@material-ui/core/styles/createBreakpoints';

// lightBackground: '#fefefe'


declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true 
    sm: true
    md: true
    lg: true
    xl: true
    tablet: true
    laptop: true
    desktop: true
  }
}


declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties['width']
      breakpoint: BreakpointOverrides
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties['width']
      breakpoint?: BreakpointOverrides
    }
  }
}


export const darkTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200,
      tablet: 800,
      laptop: 1000,
      desktop: 1400
    }
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#ff9900',
      // main: appColors.main,
      light: '#fff',
      dark: '#303030'
    },
    secondary: {
      main: '#ff9900'
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
      xl: 1200,
      tablet: 800,
      laptop: 1000,
      desktop: 1400
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: '#383838',
      light: '#fff'
    },
    secondary: {
      // main: '#00a347',
      main: '#ff9900'
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
