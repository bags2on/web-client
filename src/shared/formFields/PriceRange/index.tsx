import React, { useState, useEffect } from 'react'
import Slider from 'rc-slider'
import { Button } from '@/components/ui/Button'
import { Collapse, CollapseHead } from '@/shared/Collapse'
import { useFormikContext } from 'formik'
import type { SliderProps } from 'rc-slider'

import styles from './PriceRange.module.scss'
import 'rc-slider/assets/index.css'

interface PriceRangeProps {
  title: string
  name: string
  min: number
  max: number
  step?: number
}

interface FormFields {
  priceRange: Array<number>
}

export function PriceRange({ title, name, min, max, step = 1 }: PriceRangeProps) {
  const { values, setFieldValue } = useFormikContext<FormFields>()

  const [minPrice, maxPrice] = values.priceRange || [0, 0]
  const [isCollapsed, setCollapsed] = useState<boolean>(true)

  const [minInputValue, setMinInputValue] = useState<number>(minPrice)
  const [maxInputValue, setMaxInputValue] = useState<number>(maxPrice)

  const [sliderMin, setSliderMin] = useState<number>(minInputValue)
  const [sliderMax, setSliderMax] = useState<number>(maxInputValue)

  useEffect(() => {
    setMinInputValue(minPrice)
    setMaxInputValue(maxPrice)

    setSliderMin(minPrice)
    setSliderMax(maxPrice)
  }, [minPrice, maxPrice])

  const handleCollapse = (): void => {
    setCollapsed(!isCollapsed)
  }

  const onSliderChange = (values: number | number[]): void => {
    const [min, max] = values as number[]

    setMinInputValue(min)
    setMaxInputValue(max)

    setSliderMin(min)
    setSliderMax(max)
  }

  const onMinChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const min = +event.target.value
    setMinInputValue(min)
  }

  const onMaxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const max = +event.target.value
    setMaxInputValue(max)
  }

  const handlePriceSubmit = (): void => {
    setSliderMin(minInputValue)
    setSliderMax(maxInputValue)

    setFieldValue(name, [minInputValue, maxInputValue])
  }

  const marks: SliderProps['marks'] = {
    [min]: {
      label: <span className={styles.sliderMark}>{min}</span>
    },
    [max]: {
      label: <span className={styles.sliderMark}>{max}</span>
    }
  }

  return (
    <div>
      <CollapseHead title={title} collapsed={isCollapsed} onCollapse={handleCollapse} />
      <Collapse open={isCollapsed}>
        <div className={styles.container}>
          <div className={styles.controls}>
            <input
              type="number"
              value={minInputValue}
              onChange={onMinChange}
              className={styles.priceInput}
            />
            <input
              type="number"
              value={maxInputValue}
              onChange={onMaxChange}
              className={styles.priceInput}
            />
            <Button color="secondary" onClick={handlePriceSubmit} className={styles.setButton}>
              ok
            </Button>
          </div>
          <div className={styles.sliderWrapper}>
            <Slider
              range
              min={min}
              max={max}
              step={step}
              value={[sliderMin, sliderMax]}
              marks={marks}
              onChange={onSliderChange}
              className={styles.slider}
            />
          </div>
        </div>
      </Collapse>
    </div>
  )
}
