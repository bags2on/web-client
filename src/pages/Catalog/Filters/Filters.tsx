import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/core'
import CheckBoxGroup from '../../../shared/FormFields/CheckBoxGroup'
import { gender, availability } from './temp'

interface FiltersProps {}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white'
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
          availability: ''
        }}
      >
        {() => (
          <Form>
            <CheckBoxGroup title="Тип" name="gender" options={gender.options} />
            <CheckBoxGroup title="Наличие" name="availability" options={availability.options} />
          </Form>
        )}
      </Formik>
    </aside>
  )
}

export default Filters
