import { useState, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/Button'
import { RadioGroup } from '@/shared/formFields/RadioGroup'
import { CheckBoxGroup } from '@/shared/formFields/CheckboxGroup'
import { PriceRange } from '@/shared/formFields/price-range'
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
    formState: { isDirty },
    setValue
  } = useFormContext<FormValues>()

  const [defaultRange, setDefaultRange] = useState<[number, number]>(priceRange)

  const [gt, lt] = defaultRange

  console.log(defaultRange)

  const memoRange: [number, number] = useMemo(() => [gt, lt], [gt, lt])

  useEffect(() => {
    // setRange(priceRange)
    console.log('refresh efaults')

    setDefaultRange(priceRange)
  }, [priceRange])

  const addI18 = (option: FilterItem) => ({
    ...option,
    label: t(option.label)
  })

  const handleReset = () => {
    setDefaultRange([0, 0]) // rhf field to undefined
    reset()
  }

  const handlePriceRange = (newRange: [number, number]) => {
    if (newRange[0] === defaultRange[0] && newRange[1] === defaultRange[1]) return
    setValue('priceRange', newRange, { shouldDirty: true })
  }

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
        <div style={{ backgroundColor: 'limegreen' }}>
          <CheckBoxGroup
            name="availability"
            title={t('catalog:filters.name.availability')}
            options={availabilityOptions}
          />
        </div>
        <div className={styles.tagSectionWrapper}>
          <RadioGroup name="mainTag" options={tagsOptions} />
        </div>
        <PriceRange
          range={memoRange}
          min={defaultRange[0]}
          max={defaultRange[1]}
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
