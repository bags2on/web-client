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
    font: string
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
  breakpoints: Breakpoints
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
  background: '#fefefe',
  colors: {
    primary: BRAND_COLOR,
    font: '#343434'
  },
  media,
  breakpoints
}

export const darkTheme: DefaultTheme = {
  type: ThemeType.dark,
  colors: {
    primary: BRAND_COLOR,
    font: '#fff'
  },
  background: '#0f0f0f',
  media,
  breakpoints
}

export const GlobalStyles = createGlobalStyle`

  body {
    font-family: Montserrat, Roboto, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    line-height: 1.5;
    background-color: ${({ theme }) => theme.background};
    color:  ${({ theme }) => theme.colors.font};
    -webkit-font-smoothing: antialiased;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
 
 
  ul {
    list-style: none;
  }
`
