import React, { useState, useEffect } from 'react'
import Slider from 'rc-slider'
import { Button } from '@/components/ui/Button'
import { Collapse, CollapseHead } from '@/shared/Collapse'
import type { SliderProps } from 'rc-slider'

import styles from './PriceRange.module.scss'
import 'rc-slider/assets/index.css'

interface PriceRangeProps {
  title: string
  min: number
  max: number
  defaultMin: number
  defaultMax: number
  step?: number
  onSet(range: [number, number]): void
}

export function PriceRange({
  title,
  // min,
  // max,
  // defaultMin,
  // defaultMax,
  step = 1,
  onSet
}: PriceRangeProps) {
  const [isCollapsed, setCollapsed] = useState(true)

  const [[min, max], setRange] = useState([100, 1000])
  const [[defaultMin, defaultMax], setDefaultRange] = useState([min, max])

  // console.log('defaultMin', defaultMin, defaultMax)
  console.log('cmin/max', min, max)

  const [minInputValue, setMinInputValue] = useState(min)
  const [maxInputValue, setMaxInputValue] = useState(max)

  const [sliderMin, setSliderMin] = useState(min)
  const [sliderMax, setSliderMax] = useState(max)

  useEffect(() => {
    const cmin = min
    const cmax = max

    console.log('OBSERVED', cmin, cmax)

    setMinInputValue(cmin)
    setMaxInputValue(cmax)

    setSliderMin(cmin)
    setSliderMax(cmax)
  }, [min, max])

  // useEffect(() => {
  // setMinInputValue(minPrice)
  // setMaxInputValue(maxPrice)

  // setSliderMin(minPrice)
  // setSliderMax(maxPrice)
  // }, [minPrice, maxPrice])

  const handleCollapse = (): void => {
    setCollapsed(!isCollapsed)
  }

  const onSliderChange = (values: number | number[]): void => {
    if (Array.isArray(values)) {
      const [min, max] = values

      setMinInputValue(min)
      setMaxInputValue(max)

      setSliderMin(min)
      setSliderMax(max)
    }
  }

  const onMinChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const min = +event.target.value
    setMinInputValue(min)
    setSliderMin(min)
  }

  const onMaxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const max = +event.target.value
    setMaxInputValue(max)
    setSliderMax(max)
  }

  const handlePriceSubmit = (): void => {
    console.log('set', [minInputValue, maxInputValue])

    // onSet([minInputValue, maxInputValue])
  }

  const handleSetCustom = () => {
    console.log('c')
    setRange([300, 400])
  }

  const marks: SliderProps['marks'] = {
    [defaultMin]: {
      label: <span className={styles.sliderMark}>{defaultMin}</span>
    },
    [defaultMax]: {
      label: <span className={styles.sliderMark}>{defaultMax}</span>
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
            <Button color="secondary" onClick={handleSetCustom} className={styles.setButton}>
              set custom
            </Button>
          </div>
          <div className={styles.sliderWrapper}>
            <Slider
              step={step}
              range
              min={defaultMin}
              max={defaultMax}
              defaultValue={[defaultMin, defaultMax]}
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
