import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { NavButtons } from '@/shared/NavButtons'
import { useKeenSlider } from 'keen-slider/react'
import { autoSwitchPlugin } from '@/utils/keen-slider'

import styles from './Carousel.module.scss'

export type Slide = {
  actionURL: string
  imageURL: string
  color: string
}

interface CarouselProps {
  slides: Slide[]
}

export function MainCarousel({ slides }: CarouselProps) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slides: {
        spacing: 0,
        perView: 1,
        number: slides.length
      }
    },
    [autoSwitchPlugin(4500)]
  )

  const handlePrevClick = () => {
    instanceRef.current?.prev()
  }

  const handleNextClick = () => {
    instanceRef.current?.next()
  }

  return (
    <div className={styles.container}>
      <ul ref={sliderRef} className={clsx('keen-slider', styles.slider)}>
        {slides.map((slide, index) => (
          <li key={index} className="keen-slider__slide">
            <Link href={slide.actionURL}>
              <span className={styles.underLink}>
                <Image
                  fill
                  src={slide.imageURL}
                  alt="TODO"
                  style={{
                    objectFit: 'cover'
                  }}
                />
                <span>
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className={styles.fallback}
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271300%27%20height=%27500%27/%3e"
                  />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <NavButtons onPrev={handlePrevClick} onNext={handleNextClick} />
    </div>
  )
}
