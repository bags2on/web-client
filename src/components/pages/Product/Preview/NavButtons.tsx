import React from 'react'
import clsx from 'clsx'
import IconButton from '@/shared/IconButton'
import ArrowIcon from '../../../../../public/assets/icons/expand-arrow.svg'
import { useSwiper } from 'swiper/react'

import styles from './Preview.module.scss'

const NavButtons: React.FC = () => {
  const swiper = useSwiper()

  const handlePrevClick = () => {
    swiper.slidePrev()
  }

  const handleNextClick = () => {
    swiper.slideNext()
  }

  return (
    <>
      <IconButton
        onClick={handlePrevClick}
        className={clsx(styles.navigationButton, styles.prevButton)}
      >
        <div className={clsx('svg-icon', styles.prevButtonIcon)}>
          <ArrowIcon />
        </div>
      </IconButton>
      <IconButton
        onClick={handleNextClick}
        className={clsx(styles.navigationButton, styles.nextButton)}
      >
        <div className={clsx('svg-icon', styles.nextButtonIcon)}>
          <ArrowIcon />
        </div>
      </IconButton>
    </>
  )
}

export default NavButtons
