import React, { useState } from 'react'
import clsx from 'clsx'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import Button from '@material-ui/core/Button'
import { Range } from 'rc-slider'
import { makeStyles } from '@material-ui/core'

import 'rc-slider/assets/index.css'
import './PriceRange.scss'

interface PriceRangeProps {
  title: string
  min: number
  max: number
  step: number
  defaultValue: [number, number]
}

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    padding: '8px 10px'
  },
  collapseBox: {
    width: '100%',
    padding: '20px 15px 35px 13px'
  },
  controlsBox: {
    marginBottom: 20
  },
  input: {
    color: theme.palette.type === 'light' ? '#343434' : '#aeaeae',
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#353340',
    borderColor: '#a0a0a0'
  },
  submitButton: {
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#353340',
    color: theme.palette.type === 'light' ? '#343434' : '#fff',
    '&:hover': {
      backgroundColor: theme.palette.type === 'dark' ? '#ff9900' : '#f8f8f8',
      borderColor: theme.palette.type === 'dark' ? '#343434' : '#c0c0c0'
    }
  }
}))

const PriceRange: React.FC<PriceRangeProps> = ({ title, min, max, step, defaultValue }) => {
  const classes = useStyles()

  const [isCollapsed, setCollapsed] = useState<boolean>(true)

  // const [globalValues, setGlobalValues] = useState<[number, number]>(defaultValue)

  const [minInput, setMinInput] = useState<number>(defaultValue[0])
  const [maxInput, setmMaxInput] = useState<number>(defaultValue[1])

  const [minInput_1, setMinInput_1] = useState<number>(defaultValue[0])
  const [maxInput_1, setmMaxInput_1] = useState<number>(defaultValue[1])

  const handleCollapse = (): void => {
    setCollapsed(!isCollapsed)
  }

  const onSliderChange = (values: number[]): void => {
    console.log(values)
    setMinInput(values[0])
    setMinInput_1(values[0])
    setmMaxInput(values[1])
    setmMaxInput_1(values[1])
  }

  const onMinChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = +event.target.value

    setMinInput_1(value)
  }
  const onMaxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = +event.target.value

    setmMaxInput_1(value)
  }

  const handlePriceSubmit = (): void => {
    setMinInput(minInput_1)
    setmMaxInput(maxInput_1)
  }

  const marks = {
    [String(min)]: {
      label: min
    },
    [String(max)]: {
      label: max
    }
  }

  return (
    <div>
      <ListItem button onClick={handleCollapse} className={classes.title}>
        <ListItemText primary={title} />
        {isCollapsed ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={isCollapsed} timeout="auto" unmountOnExit className={classes.collapseBox}>
        <div className={classes.controlsBox}>
          <input
            type="number"
            className={clsx(classes.input, 'price-input')}
            value={minInput_1}
            onChange={onMinChange}
          />
          <input
            type="number"
            className={clsx(classes.input, 'price-input')}
            value={maxInput_1}
            onChange={onMaxChange}
          />
          <Button className={clsx(classes.submitButton, 'price-submit')} onClick={handlePriceSubmit}>
            ok
          </Button>
        </div>
        <Range
          min={min}
          max={max}
          step={step}
          value={[minInput, maxInput]}
          defaultValue={defaultValue}
          onChange={onSliderChange}
          marks={marks}
        />
      </Collapse>
    </div>
  )
}

export default PriceRange
