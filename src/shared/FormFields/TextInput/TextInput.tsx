import React from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import { useField } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { useSpring, animated } from 'react-spring'

interface TextInputProps {
  name: string
  select?: boolean
  type?: string
  rows?: number
  label?: string
  disabled?: boolean
  multiline?: boolean
  maxLength?: number
  fullWidth?: boolean
  placeholder?: string
  autoComplete?: string
  options?: Array<{
    label: string
    value: string
  }>
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#3c4144',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
    color: theme.palette.type === 'light' ? '#3c4144' : '#fff',
    '& .MuiOutlinedInput-input': {
      padding: 14,
      fontWeight: 500
    }
  },
  message: {
    height: 24,
    fontSize: 14,
    color: '#ff182e',
    paddingLeft: 10,
    transition: 'all 0.33s linear'
  },
  notchedOutline: {
    borderWidth: '1px'
  }
}))

const TextInput: React.FC<TextInputProps> = ({ autoComplete = 'off', maxLength = 50, options, ...restProps }) => {
  const classes = useStyles()
  const [field, meta] = useField(restProps)

  const fadeStyles = useSpring({
    config: { duration: 250 },
    from: { opacity: 0 },
    to: {
      opacity: meta.touched && !!meta.error ? 1 : 0
    }
  })

  return (
    <div>
      <TextField
        {...field}
        {...restProps}
        variant="outlined"
        autoComplete={autoComplete}
        error={meta.touched && !!meta.error}
        InputProps={{
          classes: {
            root: classes.root,
            notchedOutline: classes.notchedOutline
          }
        }}
        inputProps={{
          maxLength
        }}
      >
        {options &&
          options.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
      </TextField>
      <animated.div style={fadeStyles}>
        <Typography component="p" className={classes.message}>
          {meta.touched && meta.error}
        </Typography>
      </animated.div>
    </div>
  )
}

export default TextInput
