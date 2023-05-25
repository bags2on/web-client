import React from 'react'
import { ReactComponent as Placeholder } from '../../assets/svg/image_placeholder.svg'
import ProgressiveImage from 'react-progressive-graceful-image'

import { Picture, Shine, PlaceholderContainer, PlaceholderBox, Image } from './ImagePlaceholder.styled'

export interface ImagePlaceholderProps {
  src: string
  altText: string
  plain?: boolean
}

interface styleProps {
  plain: boolean
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ src, altText, plain = false }) => {
  const placeholderPlug = (
    <PlaceholderContainer>
      <Shine $plain={plain} />
      <PlaceholderBox>
        <Placeholder height={50} width={50} />
      </PlaceholderBox>
    </PlaceholderContainer>
  )

  const plainPlug = <Shine $plain={plain} />

  const plug = plain ? plainPlug : placeholderPlug

  return (
    <Picture $plain={plain}>
      <ProgressiveImage src={src} placeholder="">
        {(src, loading) => {
          return loading ? plug : <Image src={src} alt={altText} />
        }}
      </ProgressiveImage>
    </Picture>
  )
}

export default ImagePlaceholder
