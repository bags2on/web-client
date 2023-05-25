import { ITheme, ThemeType } from '../utils/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
