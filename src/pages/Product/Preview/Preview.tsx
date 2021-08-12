import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import classes from './styles.module.scss'

interface PreviewProps {
  images: string[]
}

const Preview: React.FC<PreviewProps> = ({ images }) => {
  return (
    <div className={classes.root}>
      <Swiper loop navigation tag="div" wrapperTag="ul" slidesPerView={1} className={classes.swiperContainer}>
        {images.map((image, index) => (
          <SwiperSlide tag="li" key={index} virtualIndex={index}>
            <img src={image} className={classes.slideImage} alt={`фото продукта №${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Preview
