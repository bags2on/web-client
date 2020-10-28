import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/core'
import CheckBoxGroup from '../../../shared/FormFields/CheckBoxGroup'
import RadioGroup from '../../../shared/FormFields/RadioGroup'
import { gender, availability, radioGroup } from './temp'

interface FiltersProps {}

const useStyles = makeStyles(() => ({
  root: {
    // backgroundColor: 'white'
  }
}))

const Filters: React.FC<FiltersProps> = () => {
  const classes = useStyles()

  const handleSubmit = () => {}

  return (
    <aside className={classes.root}>
      <Typography component="p">Параметры</Typography>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          gender: '',
          availability: '',
          general: ''
        }}
      >
        {() => (
          <Form>
            <CheckBoxGroup title="Тип" name="gender" options={gender.options} />
            <CheckBoxGroup title="Наличие" name="availability" options={availability.options} />
            <Box padding="8px 10px">
              <RadioGroup name="general" size="medium" options={radioGroup.options} />
            </Box>
          </Form>
        )}
      </Formik>
    </aside>
  )
}

export default Filters
