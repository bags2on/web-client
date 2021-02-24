import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/core'
import RadioGroup from '../../../shared/FormFields/RadioGroup'
import CheckBoxGroup from '../../../shared/FormFields/CheckBoxGroup'
import PriceRange from '../../../shared/FormFields/PriceRange/PriceRange'
import fieldProps from './fields-data'

const useStyles = makeStyles(() => ({
  root: {},
  generalWrapper: {
    padding: '8px 10px'
  }
}))

const Filters: React.FC = () => {
  const classes = useStyles()

  const { t } = useTranslation()

  const { gender, availability, radioGroup, categories } = fieldProps

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleSubmit = (): void => {}

  return (
    <aside className={classes.root}>
      <Typography component="p">{t('filters:title')}</Typography>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          gender: '',
          availability: '',
          general: ''
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */}
        {() => (
          <Form>
            <CheckBoxGroup title={t('filters:names.type')} name="gender" options={gender.options} />
            <CheckBoxGroup title={t('filters:names.availability')} name="availability" options={availability.options} />
            <div className={classes.generalWrapper}>
              <RadioGroup name="general" size="medium" options={radioGroup.options} />
            </div>
            <PriceRange title={t('filters:names.price')} min={1500} max={4500} step={1} defaultValue={[2250, 3350]} />
            <CheckBoxGroup title={t('filters:names.category')} name="category" options={categories.options} />
          </Form>
        )}
      </Formik>
    </aside>
  )
}

export default Filters
