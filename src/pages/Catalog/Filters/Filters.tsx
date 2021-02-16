import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/core'
import RadioGroup from '../../../shared/FormFields/RadioGroup'
import CheckBoxGroup from '../../../shared/FormFields/CheckBoxGroup'
import PriceRange from '../../../shared/FormFields/PriceRange/PriceRange'
import fieldProps from './fields-data'

const useStyles = makeStyles(() => ({
  root: {}
}))

const Filters: React.FC = () => {
  const classes = useStyles()

  const { t } = useTranslation()

  const { gender, availability, radioGroup, categories } = fieldProps

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleSubmit = (): void => {}

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
            <CheckBoxGroup title={t('filters:names.type')} name="gender" options={gender.options} />
            <CheckBoxGroup title={t('filters:names.availability')} name="availability" options={availability.options} />
            <Box padding="8px 10px">
              <RadioGroup name="general" size="medium" options={radioGroup.options} />
            </Box>
            {/* TODO: input background color */}
            <PriceRange title="Цена" min={1500} max={4500} step={1} defaultValue={[2250, 3350]} />
            <CheckBoxGroup title="Категории" name="category" options={categories.options} />
          </Form>
        )}
      </Formik>
    </aside>
  )
}

export default Filters
