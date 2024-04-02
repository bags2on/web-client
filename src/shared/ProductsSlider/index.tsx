import React, { Children } from 'react'
import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'
import { autoSwitchPlugin } from '@/utils/keen-slider'

import styles from './ProductsSlider.module.scss'

interface ProductsSliderProps {
  children?: React.ReactNode
}

export function ProductsSlider({ children }: ProductsSliderProps) {
  const [sliderRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slides: {
        spacing: 15,
        perView: 2,
        number: Children.count(children)
      },
      breakpoints: {
        '(min-width: 900px)': {
          slides: { perView: 4 }
        },
        '(min-width: 1000px)': {
          slides: { perView: 5 }
        }
      }
    },
    [autoSwitchPlugin(3000)]
  )

  return (
    <ul ref={sliderRef} className={clsx('keen-slider', styles.slider)}>
      {Children.map(children, (child, index) => (
        <li key={index} className="keen-slider__slide">
          {child}
        </li>
      ))}
    </ul>
  )
}
