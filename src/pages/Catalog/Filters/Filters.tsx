import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/core'
import RadioGroup from '../../../shared/FormFields/RadioGroup'
import CheckBoxGroup from '../../../shared/FormFields/CheckBoxGroup'
import PriceRange from '../../../shared/FormFields/PriceRange/PriceRange'
import { gender, availability, radioGroup, categories } from './temp'

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
            <PriceRange title="Цена" min={1500} max={4500} step={1} defaultValue={[2250, 3350]} />
            <CheckBoxGroup title="Категории" name="category" options={categories.options} />
          </Form>
        )}
      </Formik>
    </aside>
  )
}

export default Filters
