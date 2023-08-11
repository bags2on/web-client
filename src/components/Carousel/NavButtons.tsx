import React from 'react'
import { useSwiper } from 'swiper/react'

interface NavButtonsProps {
  prevClassName: string
  nextClassName: string
}

const NavButtons: React.FC<NavButtonsProps> = ({ prevClassName, nextClassName }) => {
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

export default NavButtons
