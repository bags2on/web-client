import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

//  &:hover:not($disabled):not($cssFocused):not($error) $notchedOutline

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#383838',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, .3)',
    color: '#fff',
    '& .MuiOutlinedInput-input': {
      fontWeight: '600',
      padding: '14px 10px'
    }
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#424242'
  }
}))

interface TextInputProps {
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
  disabled?: boolean
  label?: string
  placeholder?: string
  type?: string
}

const TextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
  const classes = useStyles()

  return (
    <TextField
      {...otherProps}
      variant="outlined"
      InputProps={{
        classes: {
          root: classes.root,
          notchedOutline: classes.notchedOutline
        }
      }}
      InputLabelProps={{
        shrink: true
      }}
    />
  )
}

export default TextInput
