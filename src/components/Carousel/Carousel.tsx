import React from 'react'
import NavButtons from './NavButtons'
import { Swiper, SwiperSlide } from 'swiper/react'
import classes from './Carousel.module.scss'

export type Slide = {
  actionURL: string
  imageURL: string
  color: string
}
interface CarouselProps {
  slides: Slide[]
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
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
      {slides.map((slide, index) => (
        <SwiperSlide tag="li" key={slide.color} virtualIndex={index}>
          <div
            aria-label={slide.color}
            className={classes.slideImageBox}
            style={{
              backgroundColor: slide.color,
              backgroundImage: `url(${slide.imageURL})`
            }}
          />
        </SwiperSlide>
      ))}
      <NavButtons prevClassName={classes.buttonPrev} nextClassName={classes.buttonNext} />
    </Swiper>
  )
}

export default Carousel
