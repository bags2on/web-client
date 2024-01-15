import React, { Children } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import classes from './ProductsSlider.module.scss'

interface ProductsSliderProps {
  speed?: number
  children?: React.ReactNode
}

export function ProductsSlider({ speed = 1000, children }: ProductsSliderProps) {
  return (
    <Swiper
      loop
      wrapperTag="ul"
      grabCursor
      speed={speed}
      slidesPerView={1}
      runCallbacksOnInit
      className={classes.swiperContainer}
      spaceBetween={15}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      breakpoints={{
        0: {
          slidesPerView: 2
        },
        600: {
          slidesPerView: 3
        },
        900: {
          slidesPerView: 4
        },
        1000: {
          slidesPerView: 5
        }
      }}
      /*
        TODO: check issue
        1. https://github.com/nolimits4web/swiper/issues/5635
        2. https://github.com/nolimits4web/swiper/issues/5613
      */
      onSwiper={(swiper) => {
        const el = swiper.el
        el.addEventListener('mouseenter', () => {
          swiper.autoplay.stop()
        })

        el.addEventListener('mouseleave', () => {
          swiper.autoplay.start()
        })
      }}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide tag="li" key={index} virtualIndex={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
