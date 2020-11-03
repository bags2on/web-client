import React, { useState } from 'react'
import { SideBySideMagnifier } from 'react-image-magnifiers'

import './styles.scss'

interface PreviewProps {
  images: string[]
}

const Preview: React.FC<PreviewProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<string>(images[0])

  const switchSides = false
  const overlayOpacity = 0.3
  const alwaysInPlace = false

  const handleImageChange = (url: string): void => {
    setCurrentImage(url)
  }

  return (
    <div className="container">
      <div className="magnifier-container">
        <SideBySideMagnifier
          className="side-magnifier"
          style={{ order: switchSides ? 1 : 0 }}
          imageSrc={currentImage}
          alwaysInPlace={alwaysInPlace}
          overlayOpacity={overlayOpacity}
          switchSides={switchSides}
          // largeImageSrc={largeImage} ???
          // zoomPosition="left"
          inPlaceMinBreakpoint={900}
          fillAvailableSpace={true}
          fillAlignTop={true}
          fillGapTop={10}
          fillGapRight={10}
          fillGapBottom={10}
          fillGapLeft={10}
          zoomContainerBorder="none"
          zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
        />
      </div>
      <ul className="side-list">
        {images.map((url: string, index: number) => (
          <li key={index} onClick={() => handleImageChange(url)}>
            <img src={url} alt={`фото продукта №${index + 1}`} className="side-list--image" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Preview
