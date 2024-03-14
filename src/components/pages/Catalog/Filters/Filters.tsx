import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { RadioGroup } from '@/shared/formFields/RadioGroup'
import { CheckBoxGroup } from '@/shared/formFields/CheckboxGroup'
import { PriceRange } from '@/shared/formFields/PriceRange'
import fieldProps, { FilterItem } from './data'
import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'
import type { FormValues } from '../index'

import styles from './Filters.module.scss'

type PriceRange = {
  lt: number
  gt: number
}

interface FiltersProps {
  priceRange: [number, number]
}

export function Filters({ priceRange }: FiltersProps) {
  const { t } = useTranslation(['common', 'catalog'])

  const { gender, availability, tags, categories } = fieldProps

  const {
    reset,
    getValues,
    formState: { isDirty },
    setValue
  } = useFormContext<FormValues>()

  const [range, setRange] = useState<[number, number]>(priceRange)

  const [defaultRange, setDefaultRange] = useState<[number, number]>(priceRange)

  const [minPrice, maxPrice] = getValues('priceRange') || defaultRange

  React.useEffect(() => {
    // setRange(priceRange)
    setDefaultRange(priceRange)
  }, [priceRange])

  const addI18 = (option: FilterItem) => ({
    ...option,
    label: t(option.label)
  })

  const handleReset = () => {
    console.log('reset to:', defaultRange)
    // setRange([...defaultRange])
    reset()
  }

  const handlePriceRange = (newRange: [number, number]) => {
    console.log('SET', newRange)
    setValue('priceRange', newRange, { shouldDirty: true })
  }

  // React.useEffect(() => {
  //   const t = setTimeout(() => {
  //     console.log('sybcth')

  //     setRange([899, 1000])
  //   }, 7_000)

  //   return () => {
  //     clearTimeout(t)
  //   }
  // }, [defaultRange])

  const genderOptions = gender.options.map(addI18)
  const availabilityOptions = availability.options.map(addI18)
  const tagsOptions = tags.options.map(addI18)
  const categoriesOptions = categories.options.map(addI18)

  return (
    <aside className={styles.container}>
      <form>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{t('catalog:filters.title')}</p>
          {isDirty && (
            <Button color="danger" onClick={handleReset} className={styles.clearButton}>
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
        <PriceRange
          min={minPrice}
          max={maxPrice}
          defaultMin={defaultRange[0]}
          defaultMax={defaultRange[1]}
          onSet={handlePriceRange}
          title={t('catalog:filters.name.price')}
        />
        <CheckBoxGroup
          title={t('catalog:filters.name.category')}
          name="category"
          options={categoriesOptions}
        />
      </form>
    </aside>
  )
}
