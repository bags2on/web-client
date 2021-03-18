import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/core'

import './Carousel.scss'

export type CarouselItem = {
  url: string
  text: string
  imageUrl: string
}
interface CarouselProps {
  items: CarouselItem[]
}

const useStyles = makeStyles(() => ({
  bullet: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    display: 'inline-block',
    borderRadius: '50%',
    margin: '0 4px',
    opacity: 0.2
  },
  bulletActive: {
    opacity: 1,
    backgroundColor: '#efefef'
  }
}))

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const classes = useStyles()

  return (
    <Swiper
      loop
      navigation
      effect="fade"
      tag="section"
      wrapperTag="ul"
      slidesPerView={1}
      speed={1300}
      pagination={{
        clickable: true,
        bulletClass: classes.bullet,
        bulletActiveClass: classes.bulletActive
      }}
      autoplay={{
        disableOnInteraction: false
      }}
    >
      {items.map((slide, index) => (
        <SwiperSlide tag="li" key={slide.text} virtualIndex={index}>
          <div
            aria-label={slide.text}
            style={{
              backgroundImage: `url(${slide.imageUrl})`
            }}
            className="slide-image-box"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
