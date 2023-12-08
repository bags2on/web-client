import { useCallback, useContext } from 'react'
import { ThemeContext } from '@/providers/theme'
import type { ThemeContextType } from '@/providers/theme'

type ThemeType = 'light' | 'dark'

export const useNewTheme = (): [ThemeType, (checked: boolean) => void] => {
  const context = useContext(ThemeContext) as ThemeContextType

  const { theme, setTheme } = context

  const toggleTheme = useCallback((checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
  }, [])

  return [theme, toggleTheme]
}
