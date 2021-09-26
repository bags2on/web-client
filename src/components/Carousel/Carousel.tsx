import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import classes from './Carousel.module.scss'

export type CarouselItem = {
  url: string
  text: string
  imageUrl: string
}
interface CarouselProps {
  items: CarouselItem[]
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [_, setSwiper] = useState(null)
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  return (
    <Swiper
      onInit={(swiper) => {
        // @ts-ignore
        swiper.params.navigation.prevEl = prevRef.current
        // @ts-ignore
        swiper.params.navigation.nextEl = nextRef.current
        swiper.navigation.update()
        // @ts-ignore
        setSwiper(swiper)
      }}
      loop
      effect="fade"
      tag="section"
      wrapperTag="ul"
      slidesPerView={1}
      speed={1500}
      navigation={{
        prevEl: prevRef.current ? prevRef.current : undefined,
        nextEl: nextRef.current ? nextRef.current : undefined
      }}
      pagination={{
        clickable: true,
        bulletClass: classes.bullet,
        bulletActiveClass: classes.bulletActive
      }}
      autoplay={{
        disableOnInteraction: false
      }}
      className={classes.swiperContainer}
    >
      {items.map((slide, index) => (
        <SwiperSlide tag="li" key={slide.text} virtualIndex={index}>
          <div
            aria-label={slide.text}
            style={{
              backgroundImage: `url(${slide.imageUrl})`
            }}
            className={classes.slideImageBox}
          />
        </SwiperSlide>
      ))}
      <div ref={prevRef} className={classes.buttonPrev} />
      <div ref={nextRef} className={classes.buttonNext} />
    </Swiper>
  )
}

export default Carousel
