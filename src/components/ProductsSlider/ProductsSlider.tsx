import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '100% !important',
    borderRadius: '0 !important',
    padding: '0 !important',
    '& > ul': {
      padding: 0
    }
  }
}))

const ProductsSlider: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Swiper
      loop
      tag="div"
      wrapperTag="ul"
      grabCursor
      speed={1000}
      slidesPerView={1}
      className={classes.root}
      spaceBetween={15}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      breakpoints={{
        550: {
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
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide tag="li" key={index} virtualIndex={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProductsSlider
