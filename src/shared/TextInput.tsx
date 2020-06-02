import React from 'react'
import { useField } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'

//  &:hover:not($disabled):not($cssFocused):not($error) $notchedOutline

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#383838',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, .3)',
    color: '#fff',
    '& .MuiOutlinedInput-input': {
      fontWeight: '600',
      padding: '14px 10px'
    },
    '& label.Mui-focused': {
      color: 'green'
    }
  },
  box: {
    height: 24
  },
  message: {
    height: 24,
    color: '#ff182e',
    opacity: 0,
    transition: 'all 0.33s linear'
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
  name: string
}

const TextInput: React.FC<TextInputProps> = props => {
  const [field, meta] = useField(props)

  const classes = useStyles()

  return (
    <>
      <TextField
        {...field}
        {...props}
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
      <Fade in={meta.touched && !!meta.error}>
        <Typography component="p" className={classes.message}>
          {meta.touched && meta.error}
        </Typography>
      </Fade>
    </>
  )
}

export default TextInput
