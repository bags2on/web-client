import React from 'react'
import clsx from 'clsx'
import styles from './Badge.module.scss'

interface BadgeProps {
  max?: number
  color?: string
  children: React.ReactNode
  content?: string | number
}

export function Badge({ children, content, color = '#f44336', max = 100 }: BadgeProps) {
  let show = ''

  if (typeof content === 'number') {
    show = String(content)
    if (content > max) {
      show = max + '+'
    }
  } else {
    show = content || ''
    if (show.length > max) {
      show = max + '+'
    }
  }

  return (
    <span className={styles.container}>
      {children}
      <span
        className={clsx(styles.dot, content ? styles.visibleIn : styles.visibleOut)}
        style={{
          backgroundColor: color
        }}
      >
        {show}
      </span>
    </span>
  )
}
