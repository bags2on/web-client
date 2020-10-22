import React from 'react'
import SwiperCore, { Autoplay, Scrollbar, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/core'

import 'swiper/swiper.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

interface MainSliderProps {}

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    maxWidth: 940,
    width: '100%',
    maxHeight: 400
  },
  slide: {
    // height: 500,
    '& > img': {
      borderRadius: 6,
      width: '100%',
      height: 'auto'
      //   maxWidth: 940,
      //   height: 'auto',
    }
  }
}))

const images: string[] = [
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1584278178/bags2on/zveri_pattern_z3blcb.jpg',
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1584278178/bags2on/list_lazmfm.jpg',
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1603389661/bags2on/third_vspxox.jpg'
]

SwiperCore.use([Autoplay, Scrollbar, EffectFade])

const MainSlider: React.FC<MainSliderProps> = () => {
  const classes = useStyles()

  return (
    <div style={{ padding: '10px 15px' }}>
      <Swiper
        autoplay
        speed={1300}
        scrollbar
        effect="fade"
        style={{ margin: 0 }}
        className={classes.root}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={imageUrl} virtualIndex={index}>
            <div className={classes.slide}>
              <img src={imageUrl} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MainSlider
