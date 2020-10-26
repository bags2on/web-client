import React from 'react'
import SwiperCore, { Autoplay, Scrollbar, EffectFade, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/components/navigation/navigation.scss'
import './MainSlider.scss'

interface MainSliderProps {}

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
  return (
    <div className="root-container">
      <Swiper
        loop
        navigation
        effect="fade"
        tag="section"
        speed={1300}
        scrollbar={{ draggable: true }}
        autoplay={{
          disableOnInteraction: false
        }}
        wrapperTag="ul"
        // onSwiper={(swiper) => console.dir(swiper)}
      >
        {images.map((slide, index) => (
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
    </div>
  )
}

export default MainSlider
