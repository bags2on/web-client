import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import styles from './Thumbs.module.scss'

interface ThumbsProps {
  activeIndex: number
  images: string[]
  onChange(index: number): void
}

const Thumbs: React.FC<ThumbsProps> = ({ activeIndex, images, onChange }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {images.map((url, index) => (
          <li key={index} onClick={() => onChange(index)} className={styles.listItem}>
            <Image
              src={url}
              width={100}
              height={100}
              alt={`навигационное фото продукта №${index + 1}`}
              className={clsx(styles.image, index === activeIndex && styles.active)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Thumbs
