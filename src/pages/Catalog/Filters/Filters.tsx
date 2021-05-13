/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/core'
import RadioGroup from '../../../shared/FormFields/RadioGroup'
import CheckBoxGroup from '../../../shared/FormFields/CheckBoxGroup'
import PriceRange from '../../../shared/FormFields/PriceRange/PriceRange'
import fieldProps from './fields-data'
import AutoSave from '../../../shared/AutoSave'

interface FiltersProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit(values: any): void
}

const useStyles = makeStyles(() => ({
  root: {},
  generalWrapper: {
    padding: '8px 10px'
  }
}))

const Filters: React.FC<FiltersProps> = ({ onSubmit }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const { gender, availability, radioGroup, categories } = fieldProps

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any): void => {
    onSubmit(values)
    console.log('submit')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSave = (values: any) => {
    console.log('save')
    onSubmit(values)
  }

  return (
    <aside className={classes.root}>
      <Typography component="p">{t('catalog.filters.title')}</Typography>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          gender: []
          // availability: '',
          // general: ''
        }}
      >
        {(): React.ReactElement => (
          <Form>
            <AutoSave onSave={handleSave} />
            <CheckBoxGroup title={t('catalog.filters.names.type')} name="gender" options={gender.options} />
            {/* <CheckBoxGroup
              title={t('catalog.filters.names.availability')}
              name="availability"
              options={availability.options}
            />
            <div className={classes.generalWrapper}>
              <RadioGroup name="general" size="medium" options={radioGroup.options} />
            </div>
            <PriceRange
              title={t('catalog.filters.names.price')}
              min={1500}
              max={4500}
              step={1}
              defaultValue={[2250, 3350]}
            />
            <CheckBoxGroup title={t('catalog.filters.names.category')} name="category" options={categories.options} /> */}
          </Form>
        )}
      </Formik>
    </aside>
  )
}

export default Filters
