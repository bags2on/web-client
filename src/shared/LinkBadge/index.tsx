import React from 'react'
import Image from 'next/image'
import styles from './LinkBadge.module.scss'

export interface LinkBadgeProps {
  top?: number
  right?: number
  children: React.ReactNode
}

export function LinkBadge({ top = 10, right = 13, children }: LinkBadgeProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.mark}
        style={{
          top,
          right
        }}
      >
        <Image
          width={25}
          height={25}
          src="/assets/icons/expand-arrow.svg"
          alt="icon"
          className={styles.icon}
        />
      </div>
      {children}
    </div>
  )
}
