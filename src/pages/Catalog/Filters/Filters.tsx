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

type PriceRange = {
  lt: number
  gt: number
}

interface FiltersProps {
  priceRange: [number, number]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit(values: any): void
}

const useStyles = makeStyles(() => ({
  root: {},
  generalWrapper: {
    padding: '8px 10px'
  }
}))

const Filters: React.FC<FiltersProps> = ({ priceRange, onSubmit }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const { gender, availability, radioGroup, categories } = fieldProps
  const [minPrice, maxPrice] = priceRange

  const handleSubmit = (): void => {
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSave = (values: any) => {
    onSubmit(values)
  }

  return (
    <aside className={classes.root}>
      <Typography component="p">{t('catalog.filters.title')}</Typography>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          gender: [],
          availability: [],
          mainTag: '',
          priceRange: [],
          category: []
        }}
      >
        {(): React.ReactElement => (
          <Form>
            <AutoSave onSave={handleSave} />
            <CheckBoxGroup title={t('catalog.filters.names.type')} name="gender" options={gender.options} />
            <CheckBoxGroup
              name="availability"
              title={t('catalog.filters.names.availability')}
              options={availability.options}
            />
            <div className={classes.generalWrapper}>
              <RadioGroup name="mainTag" size="medium" options={radioGroup.options} />
            </div>
            <PriceRange name="priceRange" min={minPrice} max={maxPrice} title={t('catalog.filters.names.price')} />
            <CheckBoxGroup title={t('catalog.filters.names.category')} name="category" options={categories.options} />
          </Form>
        )}
      </Formik>
    </aside>
  )
}

export default Filters
