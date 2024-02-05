import React, { Children } from 'react'
import clsx from 'clsx'
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react'

import styles from './ProductsSlider.module.scss'

interface ProductsSliderProps {
  children?: React.ReactNode
}

const autoSwitchPlugin: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout>
  let mouseOver = false
  function clearNextTimeout() {
    clearTimeout(timeout)
  }
  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => {
      slider.next()
    }, 3000)
  }
  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true
      clearNextTimeout()
    })
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })
  slider.on('dragStarted', clearNextTimeout)
  slider.on('animationEnded', nextTimeout)
  slider.on('updated', nextTimeout)
}

export function ProductsSlider({ children }: ProductsSliderProps) {
  const [sliderRef, instanceRef] = useKeenSlider(
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
    [autoSwitchPlugin]
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
