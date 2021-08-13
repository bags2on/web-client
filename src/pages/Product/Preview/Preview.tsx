import React, { useState } from 'react'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'

import classes from './styles.module.scss'

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
    <div className={classes.root}>
      <Swiper
        loop
        // @ts-ignore
        onInit={setSwiper}
        onSlideChange={(swiper) => {
          const index = swiper.activeIndex

          if (index === images.length + 1) {
            setPaginationIndex(0)
          } else {
            setPaginationIndex(index - 1)
          }
        }}
        navigation
        tag="div"
        wrapperTag="ul"
        slidesPerView={1}
        className={classes.swiperContainer}
      >
        {images.map((image, index) => (
          <SwiperSlide tag="li" key={index} virtualIndex={index}>
            <img src={image} className={classes.slideImage} alt={`фото продукта №${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ul className={classes.pagination}>
        {images.map((_, index) => (
          <li
            key={index}
            className={clsx({
              [classes.item]: true,
              [classes.active]: index === activePaginationIndex
            })}
            onClick={() => hadnlePaginationClick(index + 1)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Preview
