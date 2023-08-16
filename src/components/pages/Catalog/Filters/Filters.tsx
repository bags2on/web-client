import React from 'react'
import RadioGroup from '@/shared/formFields/RadioGroup'
import CheckBoxGroup from '@/shared/formFields/CheckboxGroup'
import PriceRange from '@/shared/formFields/PriceRange'
import fieldProps, { IFilterItem } from './fields-data'
import AutoSave from '@/shared/AutoSave'
import { useTranslation } from 'next-i18next'

import { Formik, Form } from 'formik'

import { Aside, TitleWrapper, Title, Divider, ClearButton, RadioWrapper } from './Filters.styled'

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
  priceRange: number[]
  initValues: InitValues
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit(values: any): void
}

const Filters: React.FC<FiltersProps> = ({ priceRange, initValues, formRef, onSubmit }) => {
  const { t } = useTranslation(['common', 'catalog'])

  const { gender, availability, tags, categories } = fieldProps

  const [minPrice, maxPrice] = priceRange

  const handleSubmit = (): void => {
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSave = (values: any) => {
    onSubmit(values)
  }

  const addI18 = (option: IFilterItem) => ({
    ...option,
    label: t(option.label)
  })

  const genderOptions = gender.options.map(addI18)
  const availabilityOptions = availability.options.map(addI18)
  const tagsOptions = tags.options.map(addI18)
  const categoriesOptions = categories.options.map(addI18)

  return (
    <Aside>
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
            <TitleWrapper>
              <Title>{t('catalog:filters.title')}</Title>
              {dirty && (
                <ClearButton color="danger" onClick={() => resetForm()}>
                  {t('catalog:filters.clear')}
                </ClearButton>
              )}
            </TitleWrapper>
            <Divider />
            <AutoSave onSave={handleSave} />
            <CheckBoxGroup
              title={t('catalog:filters.name.type')}
              name="gender"
              options={genderOptions}
            />
            <CheckBoxGroup
              name="availability"
              title={t('catalog:filters.name.availability')}
              options={availabilityOptions}
            />
            <RadioWrapper>
              <RadioGroup name="mainTag" options={tagsOptions} />
            </RadioWrapper>
            <PriceRange
              name="priceRange"
              min={minPrice}
              max={maxPrice}
              title={t('catalog:filters.name.price')}
            />
            <CheckBoxGroup
              title={t('catalog:filters.name.category')}
              name="category"
              options={categoriesOptions}
            />
          </Form>
        )}
      </Formik>
    </Aside>
  )
}

export default Filters
