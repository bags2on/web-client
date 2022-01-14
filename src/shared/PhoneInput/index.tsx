import React from 'react'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { useField } from 'formik'
import { useSpring, animated } from 'react-spring'
import { makeStyles, Theme } from '@material-ui/core/styles'

interface PhoneInputProps {
  name: string
  error?: boolean
}

interface styleProps {
  withError: boolean
}

const useStyles = makeStyles<Theme, styleProps>((theme) => ({
  root: {
    width: '100%',
    padding: 13,
    fontWeight: 400,
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#3c4144',
    borderRadius: 8,
    border: '1px solid',
    fontSize: '1rem',
    borderColor: ({ withError }) => (withError ? 'red' : 'rgba(0, 0, 0, 0.23)'),
    outline: 'none',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
    color: theme.palette.type === 'light' ? '#3c4144' : '#fff',
    '&:hover': {
      borderColor: '#838383'
    },
    '&:focus': {
      border: '1px solid #838383'
    },
    '&::before,&::after': {
      boxSizing: 'border-box'
    }
  },
  message: {
    height: 24,
    fontSize: 14,
    color: '#ff182e',
    margin: 0,
    paddingLeft: 10,
    transition: 'all 0.33s linear'
  }
}))

const PhoneInput: React.FC<PhoneInputProps> = ({ name, error = false }) => {
  const classes = useStyles({ withError: error })

  const [field, meta] = useField({ name })

  const { onChange, ...fieldOther } = field

  const handleValueChange = (values: NumberFormatValues): void => {
    field.onChange(name)(values.value)
  }

  const fadeStyles = useSpring({
    config: { duration: 250 },
    from: { opacity: 0 },
    to: {
      opacity: meta.touched && !!meta.error ? 1 : 0
    }
  })

  return (
    <div>
      <NumberFormat
        {...fieldOther}
        className={classes.root}
        format="+38 (###) ###-####"
        mask="_"
        autoComplete="off"
        allowEmptyFormatting
        onValueChange={handleValueChange}
      />
      <animated.div style={fadeStyles}>
        <p className={classes.message}>{meta.touched && meta.error}</p>
      </animated.div>
    </div>
  )
}

export default PhoneInput
