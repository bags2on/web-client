import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon from '@material-ui/icons/Remove'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'

interface AddSubInput {
  value: number
  min: number
  startValue: number
  onChange(n: number): void
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
    // background: 'orange',
    '& button': {
      //   background: 'red'
    }
  },
  button: {},
  input: {
    width: 30,
    '& .MuiInput-input': {
      paddingTop: 13,
      textAlign: 'center'
    }
  },
  inputRoot: {
    '& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]': {
      '-moz-appearance': 'textfield'
    }
  }
}))

const AddSubInput: React.FC<AddSubInput> = ({ startValue, min, value, onChange }) => {
  const classes = useStyles()

  const handleInputChange = (event: any): void => {
    const value = Number(event.target.value)
    if (value < min) {
      onChange(startValue)
    } else {
      onChange(value)
    }
  }

  const handleAddClick = (): void => {
    onChange(value + 1)
  }

  const handleSubClick = (): void => {
    if (value <= 1) return
    onChange(value - 1)
  }

  return (
    <div className={classes.root}>
      <IconButton onClick={handleSubClick} disabled={value <= 1} aria-label="remove one product">
        <RemoveIcon />
      </IconButton>
      <TextField
        type="number"
        value={value}
        inputProps={{ min: 1 }}
        onChange={handleInputChange}
        className={classes.input}
        classes={{
          root: classes.inputRoot
        }}
      />
      <IconButton onClick={handleAddClick} aria-label="add the same product">
        <AddIcon />
      </IconButton>
    </div>
  )
}

export default AddSubInput
