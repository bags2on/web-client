import React from 'react'
import { useField } from 'formik'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/core/styles'

interface PhoneInputProps {
  name: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 13,
    fontWeight: 500,
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#3c4144',
    borderRadius: 4,
    border: '1px solid rgba(0, 0, 0, 0.23)',
    fontSize: '1rem',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
    color: theme.palette.type === 'light' ? '#3c4144' : '#fff',
    '&:hover': {
      borderColor: '#343434'
    }
  },
  message: {
    height: 24,
    fontSize: 14,
    color: '#ff182e',
    paddingLeft: 10,
    opacity: 0,
    transition: 'all 0.33s linear'
  },
  notchedOutline: {
    borderWidth: '1px'
  }
}))

const PhoneInput: React.FC<PhoneInputProps> = ({ name }) => {
  const [field, meta] = useField({ name })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onChange, ...fieldOther } = field

  const classes = useStyles()

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //     console.log(event.target.value)
  //   }

  const handleValueChange = (values: NumberFormatValues): void => {
    console.log(values)
    field.onChange(name)(values.value)
  }

  return (
    <div>
      <NumberFormat
        {...fieldOther}
        className={classes.root}
        format="+38 (###) ###-####"
        mask="_"
        allowEmptyFormatting
        // onChange={handleChange}
        onValueChange={handleValueChange}
      />
      <Fade in={meta.touched && !!meta.error}>
        <Typography component="p" className={classes.message}>
          {meta.touched && meta.error}
        </Typography>
      </Fade>
    </div>
  )
}

export default PhoneInput
