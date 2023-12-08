import React, { useState, useEffect } from 'react'

const themes = {
  light: 'light',
  dark: 'dark'
}

const storageKey = 'theme'
type ThemeType = keyof typeof themes

export type ThemeContextType = {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('light')

  useEffect(() => {
    let localTheme = localStorage.getItem(storageKey) || 'light'

    if (!themes[localTheme as ThemeType]) localTheme = theme

    setTheme(localTheme as ThemeType)
    localStorage.setItem(storageKey, localTheme)
    document.body.setAttribute('data-theme', localTheme)
  }, [theme])

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
