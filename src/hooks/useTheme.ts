import { useState } from 'react'

export const useTheme = (defaultTheme: 'light' | 'dark'): [string, (checked: boolean) => void] => {
  const current = localStorage.getItem('theme') || defaultTheme

  document.body.className = current

  const [theme, setTheme] = useState<string>(current)

  const toggleThemeMode = (checked: boolean): void => {
    setTheme(checked ? 'dark' : 'light')
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  return [theme, toggleThemeMode]
}
