import React from 'react'
import Typography from '@material-ui/core/Typography'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { useField } from 'formik'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles'

interface PhoneInputProps {
  name: string
  error?: boolean
}

interface StyleProps {
  error: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 214,
    padding: 13,
    fontWeight: 500,
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#3c4144',
    borderRadius: 4,
    border: '1px solid',
    fontSize: '1rem',
    borderColor: (props: StyleProps) => (props.error ? 'red' : 'rgba(0, 0, 0, 0.23)'),
    outline: 'none',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
    color: theme.palette.type === 'light' ? '#3c4144' : '#fff',
    '&:hover': {
      borderColor: '#343434'
    },
    '&:focus': {
      border: '2px solid #343434'
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

const PhoneInput: React.FC<PhoneInputProps> = ({ name, error = false }) => {
  const classes = useStyles({ error })

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
        allowEmptyFormatting
        onValueChange={handleValueChange}
      />
      <animated.div style={fadeStyles}>
        <Typography component="p" className={classes.message}>
          {meta.touched && meta.error}
        </Typography>
      </animated.div>
    </div>
  )
}

export default PhoneInput
