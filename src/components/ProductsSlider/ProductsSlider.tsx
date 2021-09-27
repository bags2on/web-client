import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/core'

interface ProductsSliderProps {
  speed?: number
}

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '100% !important',
    borderRadius: '0 !important',
    padding: '5px 0 20px 0 !important',
    '& > ul': {
      padding: 0,
      margin: 0,
      listStyle: 'none'
    }
  }
}))

const ProductsSlider: React.FC<ProductsSliderProps> = ({ speed = 1000, children }) => {
  const classes = useStyles()

  return (
    <Swiper
      loop
      wrapperTag="ul"
      grabCursor
      speed={speed}
      slidesPerView={1}
      runCallbacksOnInit
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
      onSwiper={(swiper) => {
        const el = swiper.$el[0]
        el.addEventListener('mouseenter', () => {
          swiper.autoplay.stop()
        })

        el.addEventListener('mouseleave', () => {
          swiper.autoplay.start()
        })
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
