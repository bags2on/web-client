import React, { useState } from 'react'
import Image from 'next/image'
import { Container, Shine, Placeholder } from './ImagePlaceholder.styled'

export interface ImagePlaceholderProps {
  src: string
  altText: string
  plain?: boolean
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ src, altText, plain = false }) => {
  const [loading, setLoading] = useState(true)

  const plug = (
    <Placeholder>
      <Shine />
    </Placeholder>
  )

  const handleImageLoad = () => {
    setLoading(false)
  }

  return (
    <Container $plain={plain}>
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
    </Container>
  )
}

export default ImagePlaceholder
