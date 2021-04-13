import { createMuiTheme } from '@material-ui/core/styles'
import { BreakpointOverrides } from '@material-ui/core/styles/createBreakpoints'

declare module '@material-ui/core/styles/createBreakpoints' {
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

const FONTS = [
  'Montserrat',
  'Roboto',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
].join(',')

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
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: 7
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: '#e8e8e8'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          outline: '1px solid slategrey'
        }
      }
    }
  },
  typography: {
    fontFamily: FONTS
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
      main: '#ff9900'
    },
    background: {
      default: '#fff'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: 7
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: '#e8e8e8'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          outline: '1px solid slategrey'
        }
      }
    }
  },
  typography: {
    fontFamily: FONTS
  }
})
