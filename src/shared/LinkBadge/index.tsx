import React from 'react'
import Image from 'next/image'
import styles from './LinkBadge.module.scss'

interface LinkBadgeProps {
  top?: number
  right?: number
}

// TODO: delete after MIGRATION
// make as wrapper with iconClassname animation
export const iconClassname = styles.icon

const LinkBadge: React.FC<LinkBadgeProps> = ({ top = 10, right = 13 }) => {
  return (
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
        alt="TODO"
        className={styles.icon}
      />
    </div>
  )
}

export default LinkBadge
