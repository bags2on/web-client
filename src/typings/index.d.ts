import { ITheme, ThemeType } from '../utils/st_theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeType
  }
}
