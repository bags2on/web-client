import React, { useState, useEffect } from 'react'

const themes = {
  light: 'light',
  dark: 'dark'
} as const

export type ThemeType = keyof typeof themes

const DEFAULT_THEME = 'light'
const STORAGE_KEY = 'theme'

export type ThemeContextType = {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme2] = useState<ThemeType>(DEFAULT_THEME)

  useEffect(() => {
    let localTheme = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME

    if (!themes[localTheme as ThemeType]) localTheme = DEFAULT_THEME

    setTheme(localTheme as ThemeType)
  }, [])

  const setTheme = (theme: ThemeType) => {
    localStorage.setItem(STORAGE_KEY, theme)
    document.body.setAttribute('data-theme', theme)
    setTheme2(theme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
