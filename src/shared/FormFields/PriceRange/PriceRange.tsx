import React, { useState, useLayoutEffect } from 'react'
import clsx from 'clsx'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import Button from '@material-ui/core/Button'
import { useFormikContext } from 'formik'
import { Range } from 'rc-slider'
import { makeStyles } from '@material-ui/core'

import 'rc-slider/assets/index.css'
import './PriceRange.scss'

interface PriceRangeProps {
  title: string
  name: string
  min: number
  max: number
  step?: number
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
    border: '1px solid',
    color: theme.palette.type === 'light' ? '#343434' : '#fff',
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#3c4144',
    borderColor: theme.palette.type === 'light' ? '#c4c4c4' : '#3c4144'
  },
  submitButton: {
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#3c4144',
    color: theme.palette.type === 'light' ? '#343434' : '#fff',
    '&:hover': {
      backgroundColor: theme.palette.type === 'dark' ? '#ff9900' : '#f8f8f8',
      borderColor: theme.palette.type === 'dark' ? '#343434' : '#c0c0c0'
    }
  }
}))

const PriceRange: React.FC<PriceRangeProps> = ({ title, name, min, max, step = 1 }) => {
  const classes = useStyles()
  const { setFieldValue } = useFormikContext()

  const [isCollapsed, setCollapsed] = useState<boolean>(true)

  const [minInputValue, setMinInputValue] = useState<number>(min)
  const [maxInputValue, setMaxInputValue] = useState<number>(max)

  useLayoutEffect(() => {
    setMinInputValue(min)
    setMaxInputValue(max)
  }, [min, max])

  const handleCollapse = (): void => {
    setCollapsed(!isCollapsed)
  }

  const onSliderChange = (values: number[]): void => {
    const [min, max] = values

    setMinInputValue(min)
    setMaxInputValue(max)
  }

  const onMinChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = +event.target.value
    setMinInputValue(value)
  }

  const onMaxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = +event.target.value
    setMaxInputValue(value)
  }

  const handlePriceSubmit = (): void => {
    setFieldValue(name, [minInputValue, maxInputValue])
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
            value={minInputValue}
            onChange={onMinChange}
            className={clsx(classes.input, 'price-input')}
          />
          <input
            type="number"
            value={maxInputValue}
            onChange={onMaxChange}
            className={clsx(classes.input, 'price-input')}
          />
          <Button className={clsx(classes.submitButton, 'price-submit')} onClick={handlePriceSubmit}>
            ok
          </Button>
        </div>
        <Range
          min={min}
          max={max}
          step={step}
          value={[minInputValue, maxInputValue]}
          onChange={onSliderChange}
          marks={marks}
        />
      </Collapse>
    </div>
  )
}

export default PriceRange
