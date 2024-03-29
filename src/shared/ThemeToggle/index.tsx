import React from 'react'
import clsx from 'clsx'
import { useTheme } from '@/hooks'

import styles from './style.module.scss'

export function ThemeToggle() {
  const [theme, setTheme] = useTheme()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTheme(event.target.checked)
  }

  return (
    <div className={styles.root}>
      <label className={styles.container}>
        <input
          className={clsx('hide', styles.toggleInput)}
          type="checkbox"
          autoComplete="off"
          onChange={handleChange}
          checked={theme === 'light'}
        />
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 83 70"
        >
          <defs>
            <clipPath id="moonmask" className={styles.moonmask}>
              <circle cx="48" cy="35" r="15" />
            </clipPath>
            <clipPath id="sunmask" className={styles.sunmask}>
              <path
                d="M43,5c-12.4,0-23.1,7.5-27.6,18.3
	c0.8-0.2,1.7-0.3,2.6-0.3c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12c-0.9,0-1.8-0.1-2.6-0.3C19.9,57.5,30.6,65,43,65
	c16.6,0,30-13.4,30-30S59.6,5,43,5z"
              />
            </clipPath>
          </defs>
          <circle className={styles.sun} cx="48" cy="35" r="15" clipPath="url(#sunmask)" />
          <circle className={styles.moon} cx="18" cy="35" r="15" clipPath="url(#moonmask)" />
          <g className={styles.beams}>
            <line x2="48" y2="0" x1="48" y1="10" />
            <line x1="48" y1="60" x2="48" y2="70" />
            <line x2="72.7" y2="10.3" x1="65.7" y1="17.3" />
            <line x1="30.3" y1="52.7" x2="23.3" y2="59.7" />
            <line x2="83" y2="35" x1="73" y1="35" />
            <line x1="23" y1="35" x2="13" y2="35" />
            <line x2="72.7" y2="59.7" x1="65.7" y1="52.7" />
            <line x1="30.3" y1="17.3" x2="23.3" y2="10.3" />
          </g>
        </svg>
      </label>
    </div>
  )
}
