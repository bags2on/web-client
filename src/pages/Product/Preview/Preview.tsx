import React, { useState } from 'react'
import clsx from 'clsx'
import Thumbs from './Thumbs/Thumbs'
import { Swiper, SwiperSlide } from 'swiper/react'

import './styles.scss'

interface PreviewProps {
  images: string[]
}

const Preview: React.FC<PreviewProps> = ({ images }) => {
  const [activePaginationIndex, setPaginationIndex] = useState<number>(0)

  const [swiper, setSwiper] = useState(null)

  const hadnlePaginationClick = (index: number): void => {
    if (swiper) {
      // @ts-ignore
      swiper.slideTo(index)
    }
  }

  return (
    <div className="root">
      <Thumbs activeIndex={activePaginationIndex} images={images} onChange={hadnlePaginationClick} />
      <Swiper
        loop
        // @ts-ignore
        onInit={setSwiper}
        onSlideChange={({ activeIndex }) => {
          console.log(activeIndex)
          if (activeIndex === images.length + 1) {
            setPaginationIndex(0)
          } else if (activeIndex === 0) {
            // because swiper adds virual index for its loop
            setPaginationIndex(images.length - 1)
            return
          } else {
            setPaginationIndex(activeIndex - 1)
          }
        }}
        navigation
        tag="div"
        wrapperTag="ul"
        slidesPerView={1}
        className="swiperContainer"
      >
        {images.map((image, index) => (
          <SwiperSlide tag="li" key={index} virtualIndex={index}>
            <img src={image} className="slide-image" alt={`фото продукта №${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ul className="pagination">
        {images.map((_, index) => (
          <li
            key={index}
            className={clsx({
              item: true,
              active: index === activePaginationIndex
            })}
            onClick={() => hadnlePaginationClick(index + 1)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Preview
