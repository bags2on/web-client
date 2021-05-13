import {} from 'react-i18next'
import i18n from '../../../../locales/i18n'

interface FilterItem {
  options: Array<{
    label: string
    value: string
  }>
}

const gender: FilterItem = {
  options: []
}

const availability: FilterItem = {
  options: []
}

const radioGroup: {
  options: Array<{
    label: string
    value: string
    disabled: boolean
  }>
} = {
  options: []
}

const categories: FilterItem = {
  options: []
}

function fillUpValues(): void {
  gender.options = [
    {
      label: i18n.t('catalog.filters.gender.female'),
      value: 'Female'
    },
    {
      label: i18n.t('catalog.filters.gender.male'),
      value: 'Male'
    },
    {
      label: i18n.t('catalog.filters.gender.unisex'),
      value: 'Unisex'
    }
  ]

  availability.options = [
    {
      label: i18n.t('catalog.filters.availability.inStock'),
      value: 'inStock'
    },
    {
      label: i18n.t('catalog.filters.availability.byOrder'),
      value: 'byOrder'
    }
  ]

  radioGroup.options = [
    {
      label: i18n.t('catalog.filters.radioGroup.all'),
      value: 'all',
      disabled: false
    },
    {
      label: i18n.t('catalog.filters.radioGroup.new'),
      value: 'new',
      disabled: false
    },
    {
      label: i18n.t('catalog.filters.radioGroup.discounts'),
      value: 'discounts',
      disabled: false
    }
  ]

  categories.options = [
    {
      label: i18n.t('categories.all'),
      value: 'all'
    },
    {
      label: i18n.t('categories.suitcases'),
      value: 'suitcases'
    },
    {
      label: i18n.t('categories.bags'),
      value: 'bags'
    },
    {
      label: i18n.t('categories.wallets'),
      value: 'wallets'
    }
  ]
}

fillUpValues()

i18n.on('languageChanged', (): void => {
  fillUpValues()
})

export default { gender, availability, radioGroup, categories }
