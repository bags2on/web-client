import React from 'react'
import NavButtons from './NavButtons'
import { Swiper, SwiperSlide } from 'swiper/react'
import classes from './Carousel.module.scss'

export type CarouselItem = {
  url: string
  text: string
  color: string
  imageUrl: string
}
interface CarouselProps {
  items: CarouselItem[]
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Swiper
      loop
      effect="fade"
      tag="section"
      wrapperTag="ul"
      slidesPerView={1}
      speed={500}
      pagination={{
        clickable: true,
        bulletClass: classes.bullet,
        bulletActiveClass: classes.bulletActive
      }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false
      }}
      className={classes.swiperContainer}
    >
      {items.map((slide, index) => (
        <SwiperSlide tag="li" key={slide.text} virtualIndex={index}>
          <div
            aria-label={slide.text}
            className={classes.slideImageBox}
            style={{
              backgroundColor: slide.color,
              backgroundImage: `url(${slide.imageUrl})`
            }}
          />
        </SwiperSlide>
      ))}
      <NavButtons prevClassName={classes.buttonPrev} nextClassName={classes.buttonNext} />
    </Swiper>
  )
}

export default Carousel
