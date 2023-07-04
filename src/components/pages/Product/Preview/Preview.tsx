import React, { useState, useRef } from 'react'
import clsx from 'clsx'
import Thumbs from './Thumbs/Thumbs'
import { Swiper, SwiperSlide } from 'swiper/react'
import classes from './styles.module.scss'

interface PreviewProps {
  images: string[]
}

const Preview: React.FC<PreviewProps> = ({ images }) => {
  const [activePaginationIndex, setPaginationIndex] = useState<number>(0)
  const [swiper, setSwiper] = useState(null)

  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  const hadnlePaginationClick = (index: number): void => {
    if (swiper) {
      // @ts-ignore
      swiper.slideTo(index)
    }
  }

  return (
    <div className={classes.root}>
      <Thumbs activeIndex={activePaginationIndex} images={images} onChange={hadnlePaginationClick} />
      <Swiper
        loop
        grabCursor
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.update()
          // @ts-ignore
          setSwiper(swiper)
        }}
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
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined
        }}
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
        <div ref={prevRef} className={classes.buttonPrev} />
        <div ref={nextRef} className={classes.buttonNext} />
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
