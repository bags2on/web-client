import {} from 'react-i18next'
import i18n from '../../../../locales/i18n'

const gender: {
  options: Array<{
    label: string
    value: string
  }>
} = {
  options: []
}

const availability: {
  options: Array<{
    label: string
    value: string
  }>
} = {
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

const categories: {
  options: Array<{
    label: string
    value: string
  }>
} = {
  options: []
}

function fillUpValues(): void {
  gender.options = [
    {
      label: i18n.t('filters:gender.female'),
      value: 'female'
    },
    {
      label: i18n.t('filters:gender.male'),
      value: 'male'
    },
    {
      label: i18n.t('filters:gender.unisex'),
      value: 'unisex'
    }
  ]

  availability.options = [
    {
      label: i18n.t('filters:availability.inStock'),
      value: 'inStock'
    },
    {
      label: i18n.t('filters:availability.byOrder'),
      value: 'byOrder'
    }
  ]

  radioGroup.options = [
    {
      label: i18n.t('filters:radioGroup.all'),
      value: 'all',
      disabled: false
    },
    {
      label: i18n.t('filters:radioGroup.new'),
      value: 'new',
      disabled: false
    },
    {
      label: i18n.t('filters:radioGroup.discounts'),
      value: 'discounts',
      disabled: false
    }
  ]

  categories.options = [
    {
      label: i18n.t('filters:categories.all'),
      value: 'all'
    },
    {
      label: i18n.t('filters:categories.suitcases'),
      value: 'suitcases'
    },
    {
      label: i18n.t('filters:categories.bags'),
      value: 'bags'
    },
    {
      label: i18n.t('filters:categories.wallets'),
      value: 'wallets'
    }
  ]
}

fillUpValues()

i18n.on('languageChanged', (): void => {
  fillUpValues()
})

export default { gender, availability, radioGroup, categories }
