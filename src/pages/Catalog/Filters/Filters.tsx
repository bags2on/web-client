import React from 'react'
import RadioGroup from '../../../shared/FormFields/RadioGroup/RadioGroup'
import CheckBoxGroup from '../../../shared/FormFields/CheckboxGroup'
import PriceRange from '../../../shared/FormFields/PriceRange/PriceRange'
import fieldProps from './fields-data'
import AutoSave from '../../../shared/AutoSave'
import { useTranslation } from 'react-i18next'
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
              <Title>{t('catalog.filters.title')}</Title>
              {dirty && (
                <ClearButton onClick={() => resetForm()} disableShadow>
                  очистить
                </ClearButton>
              )}
            </TitleWrapper>
            <Divider />
            <AutoSave onSave={handleSave} />
            <CheckBoxGroup title={t('catalog.filters.names.type')} name="gender" options={gender.options} />
            <CheckBoxGroup
              name="availability"
              title={t('catalog.filters.names.availability')}
              options={availability.options}
            />
            <RadioWrapper>
              <RadioGroup name="mainTag" options={radioGroup.options} />
            </RadioWrapper>
            <PriceRange name="priceRange" min={minPrice} max={maxPrice} title={t('catalog.filters.names.price')} />
            <CheckBoxGroup title={t('catalog.filters.names.category')} name="category" options={categories.options} />
          </Form>
        )}
      </Formik>
    </Aside>
  )
}

export default Filters
