import { DefaultTheme, createGlobalStyle } from 'styled-components'

export enum ThemeType {
  light = 'light',
  dark = 'dark'
}

interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  tablet: number
  laptop: number
  desktop: number
}

export type ITheme = {
  type: ThemeType
  background: string
  colors: {
    primary: string
    main: string
    light: string
    dark: string
  }
  media: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    tablet: string
    laptop: string
    desktop: string
  }
}

// **********************************

const BRAND_COLOR = '#F2E30C'

const breakpoints: Breakpoints = {
  xs: 0,
  sm: 450,
  md: 600,
  lg: 900,
  xl: 1200,
  tablet: 800,
  laptop: 1000,
  desktop: 1400
}

const media = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`
}

export const lightTheme: DefaultTheme = {
  type: ThemeType.light,
  background: '#fff',
  colors: {
    primary: BRAND_COLOR,
    main: '#383838',
    light: '#fff',
    dark: '#303030' // TODO: Same?
  },
  media
}

export const darkTheme: DefaultTheme = {
  type: ThemeType.dark,
  colors: {
    primary: BRAND_COLOR,
    main: '#ff9900',
    light: '#fff',
    dark: '#303030'
  },
  background: '#1e1e1e',
  media
}

export const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Montserrat,Roboto,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
 
  /* ul {
    margin: 0;
    padding: 0;
    list-style: none;
  } */
`
