import { useState, useEffect } from 'react'

type ThemeType = 'light' | 'dark'

export const useTheme = (): [ThemeType, (checked: boolean) => void] => {
  const [theme, setTheme] = useState<ThemeType>('light')

  useEffect(() => {
    let localTheme = localStorage.getItem('theme') || 'light'

    if (localTheme !== 'light' && localTheme !== 'dark') {
      localTheme = theme
    }

    setTheme(localTheme as ThemeType)
    document.body.setAttribute('data-theme', localTheme)
  }, [theme])

  const toggleThemeMode = (checked: boolean): void => {
    setTheme(checked ? 'dark' : 'light')
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  return [theme, toggleThemeMode]
}