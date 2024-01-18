import React from 'react'
import { useSwiper } from 'swiper/react'

interface NavButtonsProps {
  prevClassName: string
  nextClassName: string
}

export function NavButtons({ prevClassName, nextClassName }: NavButtonsProps) {
  const swiper = useSwiper()

  const handlePrevClick = () => {
    swiper.slidePrev()
  }

  const handleNextClick = () => {
    swiper.slideNext()
  }

  return (
    <>
      <div onClick={handlePrevClick} className={prevClassName} />
      <div onClick={handleNextClick} className={nextClassName} />
    </>
  )
}
