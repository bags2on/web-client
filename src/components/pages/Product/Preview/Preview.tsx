import React, { useState } from 'react'
import classes from './styles.module.scss'
import Thumbs from './Thumbs/Thumbs'
import NavButtons from './NavButtons'
import Pagination from './Pagination'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'

interface PreviewProps {
  images: string[]
}

const Preview: React.FC<PreviewProps> = ({ images }) => {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handlePaginationChange = (index: number): void => {
    if (swiper) {
      // only for realIndex
      swiper.slideToLoop(index)
    }
  }

  return (
    <div className={classes.root}>
      <Thumbs activeIndex={currentIndex} images={images} onChange={handlePaginationChange} />
      <Swiper
        loop
        grabCursor
        tag="div"
        wrapperTag="ul"
        slidesPerView={1}
        className={classes.swiperContainer}
        onSwiper={(swiper) => {
          setSwiper(swiper)
        }}
        onSlideChange={({ realIndex }) => {
          setCurrentIndex(realIndex)
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide tag="li" key={index} virtualIndex={index}>
            <img src={image} className={classes.slideImage} alt={`фото №${index + 1}`} />
          </SwiperSlide>
        ))}
        <NavButtons />
      </Swiper>
      <Pagination
        len={images.length}
        current={currentIndex}
        onPaginationChange={handlePaginationChange}
      />
    </div>
  )
}

export default Preview
