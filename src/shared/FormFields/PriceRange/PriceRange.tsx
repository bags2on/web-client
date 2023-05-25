import React, { useState, useLayoutEffect } from 'react'
import { useFormikContext } from 'formik'
import type { SliderProps } from 'rc-slider'

import Collapse, { CollapseHead } from '../../../shared/Collapse'

import 'rc-slider/assets/index.css'
import { Container, Slider, SliderMark, Controls, PriceInput, SetButton } from './PriceRange.styled'

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

const PriceRange: React.FC<PriceRangeProps> = ({ title, name, min, max, step = 1 }) => {
  const { values, setFieldValue } = useFormikContext<FormFields>()

  const [minPrice, maxPrice] = values.priceRange || [0, 0]
  const [isCollapsed, setCollapsed] = useState<boolean>(true)

  const [minInputValue, setMinInputValue] = useState<number>(minPrice)
  const [maxInputValue, setMaxInputValue] = useState<number>(maxPrice)

  const [sliderMin, setSliderMin] = useState<number>(minInputValue)
  const [sliderMax, setSliderMax] = useState<number>(maxInputValue)

  useLayoutEffect(() => {
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
      label: <SliderMark>{min}</SliderMark>
    },
    [max]: {
      label: <SliderMark>{max}</SliderMark>
    }
  }

  return (
    <div>
      <CollapseHead title={title} collapsed={isCollapsed} onCollapse={handleCollapse} />
      <Collapse open={isCollapsed}>
        <Container>
          <Controls>
            <PriceInput type="number" value={minInputValue} onChange={onMinChange} />
            <PriceInput type="number" value={maxInputValue} onChange={onMaxChange} />
            <SetButton onClick={handlePriceSubmit}>ok</SetButton>
          </Controls>
          <Slider
            range
            min={min}
            max={max}
            step={step}
            value={[sliderMin, sliderMax]}
            onChange={onSliderChange}
            marks={marks}
          />
        </Container>
      </Collapse>
    </div>
  )
}

export default PriceRange
