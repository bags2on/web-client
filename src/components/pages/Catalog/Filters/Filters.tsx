import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { RadioGroup } from '@/shared/formFields/RadioGroup'
import { CheckBoxGroup } from '@/shared/formFields/CheckboxGroup'
import { PriceRange } from '@/shared/formFields/price-range'
import fieldProps, { FilterItem } from './data'
import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'
import type { FormValues } from '../index'

import styles from './Filters.module.scss'

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

  const [currentRange, setCurrentRange] = useState(priceRange)

  useEffect(() => {
    setCurrentRange(priceRange)
  }, [priceRange])

  const addI18 = (option: FilterItem) => ({
    ...option,
    label: t(option.label)
  })

  const handleReset = () => {
    setCurrentRange([0, 0]) // rhf field to undefined
    reset()
  }

  const handlePriceRange = (newRange: [number, number]) => {
    if (newRange[0] === currentRange[0] && newRange[1] === currentRange[1]) return
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
        <div style={{ backgroundColor: 'limegreen' }}>
          <div className={styles.tagSectionWrapper}>
            <RadioGroup name="tag" options={tagsOptions} />
          </div>
        </div>
        <PriceRange
          min={currentRange[0]}
          max={currentRange[1]}
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
