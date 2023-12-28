import { useContext } from 'react'
import { ThemeContext } from '@/providers/theme'
import type { ThemeType, ThemeContextType } from '@/providers/theme'

export const useTheme = (): [ThemeType, (checked: boolean) => void] => {
  const context = useContext(ThemeContext) as ThemeContextType

  const { theme, setTheme } = context

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? 'light' : 'dark')
  }

  return [theme, toggleTheme]
}
