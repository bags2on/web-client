import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { useTranslation } from 'react-i18next'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/core'
import RadioGroup from '../../../shared/FormFields/RadioGroup'
import CheckBoxGroup from '../../../shared/FormFields/CheckboxGroup'
import PriceRange from '../../../shared/FormFields/PriceRange/PriceRange'
import fieldProps from './fields-data'
import Button from '../../../shared/Button/Button'
import AutoSave from '../../../shared/AutoSave'

type PriceRange = {
  lt: number
  gt: number
}

type InitValues = {
  gender: Array<string>
  availability: Array<string>
  mainTag: string
  priceRange: Array<number>
  category: Array<string>
}

interface FiltersProps {
  formRef: React.RefObject<HTMLFormElement>
  priceRange: [number, number]
  initValues: InitValues
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit(values: any): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 10px 20px 10px'
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    position: 'relative',
    fontWeight: 500,
    [theme.breakpoints.up('lg')]: {
      textAlign: 'start'
    }
  },
  divider: {
    backgroundColor: '#d8bbbb80',
    marginBottom: '10px',
    height: 2
  },
  clearButton: {
    fontSize: 11,
    padding: 3,
    background: '#f44336',
    '&:hover': {
      background: '#ff5346'
    }
  },
  generalWrapper: {
    padding: '8px 10px'
  }
}))

const Filters: React.FC<FiltersProps> = ({ priceRange, initValues, formRef, onSubmit }) => {
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
      <Formik
        enableReinitialize
        onReset={(_, { setValues }) => {
          setValues({
            gender: [],
            availability: [],
            mainTag: '',
            priceRange: [],
            category: []
          })
        }}
        onSubmit={handleSubmit}
        initialValues={initValues}
      >
        {({ dirty, resetForm }): React.ReactElement => (
          <Form ref={formRef}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
              <Typography component="p" className={classes.title}>
                {t('catalog.filters.title')}
              </Typography>
              {dirty && (
                <Button onClick={() => resetForm()} className={classes.clearButton} disableShadow>
                  очистить
                </Button>
              )}
            </div>
            <Divider
              classes={{
                root: classes.divider
              }}
            />
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
