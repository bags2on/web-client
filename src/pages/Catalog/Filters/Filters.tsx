import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/core'
import CheckBoxGroup from '../../../shared/FormFields/CheckBoxGroup'
import GenderFilter from './Filters/GenderFilter'

interface FiltersProps {}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white'
  }
}))

const Filters: React.FC<FiltersProps> = () => {
  const classes = useStyles()

  const handleSubmit = () => {}

  const x1 = [
    {
      label: 'Женский',
      value: 'female'
    },
    {
      label: 'Мужской',
      value: 'male'
    },
    {
      label: 'Унисекс',
      value: 'unisex'
    }
  ]

  return (
    <aside className={classes.root}>
      <Typography component="p">Параметры</Typography>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          gender: ''
        }}
      >
        {() => (
          <Form>
            <GenderFilter title="Тип" name="gender" options={x1} />
          </Form>
        )}
      </Formik>
    </aside>
  )
}

export default Filters
