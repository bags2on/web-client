import React from 'react'
import SwiperCore, { Autoplay, Scrollbar, EffectFade, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/core'

import 'swiper/swiper.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/components/navigation/navigation.scss'
import './MainSlider.scss'

interface MainSliderProps {}

const useStyles = makeStyles(() => ({
  root: {}
}))

const images: {
  url: string
  text: string
  imageUrl: string
}[] = [
  {
    url: '#',
    text: 'first slide',
    imageUrl: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1584278178/bags2on/zveri_pattern_z3blcb.jpg'
  },
  {
    url: '#',
    text: 'second slide',
    imageUrl: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1584278178/bags2on/list_lazmfm.jpg'
  },
  {
    url: '#',
    text: 'third slide',
    imageUrl: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1603389661/bags2on/third_vspxox.jpg'
  }
]

SwiperCore.use([Navigation, Autoplay, Scrollbar, EffectFade])

const MainSlider: React.FC<MainSliderProps> = () => {
  const classes = useStyles()

  return (
    <div className="root-container">
      <Swiper
        autoplay
        navigation
        speed={1300}
        loop
        scrollbar={{ draggable: true }}
        effect="fade"
        // className={classes.root}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((slide, index) => {
          const image = {
            backgroundImage: `url(${slide.imageUrl})`
          }

          return (
            <SwiperSlide key={slide.text} virtualIndex={index}>
              <div style={image} className="slide-image__box" />
              {/* <img src={slide.imageUrl} alt={slide.text} className="slide-image" /> */}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default MainSlider
