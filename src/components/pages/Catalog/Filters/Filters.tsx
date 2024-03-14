import React from 'react'
import { Button } from '@/components/ui/Button'
import { RadioGroup } from '@/shared/formFields/RadioGroup'
import { CheckBoxGroup } from '@/shared/formFields/CheckboxGroup'
import { PriceRange } from '@/shared/formFields/PriceRange'
import fieldProps, { FilterItem } from './data'
// import { AutoSave } from '@/shared/AutoSave'
import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'
import type { Gender, MainTag, Category } from '@/types'

import styles from './Filters.module.scss'

type PriceRange = {
  lt: number
  gt: number
}

type FormValues = {
  gender: Gender[]
  availability: string
  mainTag?: MainTag
  priceRange?: [number, number]
  category?: Category
}

interface FiltersProps {
  priceRange: number[]
}

export function Filters({ priceRange }: FiltersProps) {
  const { t } = useTranslation(['common', 'catalog'])

  const { gender, availability, tags, categories } = fieldProps

  const [minPrice, maxPrice] = priceRange

  const {
    reset,
    formState: { isDirty }
  } = useFormContext<FormValues>()

  const handleSubmit = (): void => {
    return
  }

  const addI18 = (option: FilterItem) => ({
    ...option,
    label: t(option.label)
  })

  const genderOptions = gender.options.map(addI18)
  const availabilityOptions = availability.options.map(addI18)
  const tagsOptions = tags.options.map(addI18)
  const categoriesOptions = categories.options.map(addI18)

  // console.log(genderOptions)

  return (
    <aside className={styles.container}>
      <form>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{t('catalog:filters.title')}</p>
          {isDirty && (
            <Button color="danger" onClick={() => reset()} className={styles.clearButton}>
              {t('catalog:filters.clear')}
            </Button>
          )}
        </div>
        <div className={styles.divider} />
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
        <div className={styles.tagSectionWrapper}>
          <RadioGroup name="mainTag" options={tagsOptions} />
        </div>
        {/* <PriceRange
          name="priceRange"
          min={minPrice}
          max={maxPrice}
          title={t('catalog:filters.name.price')}
        /> */}
        <CheckBoxGroup
          title={t('catalog:filters.name.category')}
          name="category"
          options={categoriesOptions}
        />
      </form>
    </aside>
  )
}
