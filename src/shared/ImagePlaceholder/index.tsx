import React, { useState } from 'react'
import Image from 'next/image'

import styles from './ImagePlaceholder.module.scss'

export interface ImagePlaceholderProps {
  src: string
  altText: string
}

export function ImagePlaceholder({ src, altText }: ImagePlaceholderProps) {
  const [loading, setLoading] = useState(true)

  const plug = (
    <div className={styles.placeholder}>
      <div className={styles.shine} />
    </div>
  )

  const handleImageLoad = () => {
    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <Image
        fill
        sizes="(max-width: 600px) 150px, 100vw"
        src={src}
        alt={altText}
        quality={100}
        onLoad={handleImageLoad}
        style={{
          opacity: loading ? '0' : '100'
        }}
      />
      {loading && plug}
    </div>
  )
}
